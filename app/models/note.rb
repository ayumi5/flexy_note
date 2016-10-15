require 'elasticsearch/model'

class Note < ActiveRecord::Base
  include Elasticsearch::Model
  include DateHelper
  
  acts_as_taggable
  belongs_to :category
  scope :list, -> { all.order({updated_at: :desc}).limit(20) }
  
  def self.search_by_query(query)
    return Note.list if query.nil?
    category_filter = (query[:category] == 'All' ? { match_all: {} } : { term: { "category.name": query[:category].downcase } })
    
    notes = Note.search(
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
            "and": [
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
      })
    
    notes.records
  end
end
