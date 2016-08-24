require 'elasticsearch/model'

class Note < ActiveRecord::Base
  include Elasticsearch::Model
  acts_as_taggable
  belongs_to :category
  
  mapping _parent: { type: 'category', required: true } do
   indexes :title
   indexes :content
   indexes :created_at
   indexes :updated_at
  end
  
  def as_indexed_json(options={})
    self.as_json(
      only: [:title, :content, :created_at, :updated_at], 
      include: {
        category: { only: :name }
      }
    )
  end
end
