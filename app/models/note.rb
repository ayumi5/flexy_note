require 'elasticsearch/model'

class Note < ActiveRecord::Base
  include Elasticsearch::Model
  include DateHelper
  include Pagination
  
  acts_as_taggable
  belongs_to :category
  scope :list, ->(offset=0) { all.order({updated_at: :desc}).offset(offset) }
  scope :limited, -> { limit(PAGE_LIMIT) }
  
  def self.search_by_query(query, offset)
    return { notes: Note.list(offset).limited, count: Note.list.count } if query.nil?
    category_filter = (query[:category] == 'All' ? { match_all: {} } : { term: { "category.name" => query[:category].downcase } })
    notes = Note.search(
    {
      from: offset,
      size: PAGE_LIMIT,
      sort: { 
        updated_at: { order: "desc" }
      },
      query: {
        filtered: {
          query: {
            query_string: {
              fields: [:title, "category.name", :content],
              query: "*#{query[:query]}*"
            }
          },
          filter: { 
            "and" => [
              category_filter,
              { range: {
                updated_at: { 
                  gte: query[:min_date],
                  lte: query[:max_date]
                }
              }
            }]
          }
        }
      }
    })

    { notes: notes.records, count: notes.results.total}
    
  end
end
