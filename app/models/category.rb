require 'elasticsearch/model'

class Category < ActiveRecord::Base
  include Elasticsearch::Model
  has_many :notes
  validates :name, presence: true, uniqueness: { case_sensitive: false }
  
  mapping do
    indexes :name
  end
end
