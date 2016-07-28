require 'elasticsearch/model'

class Note < ActiveRecord::Base
  include Elasticsearch::Model
  acts_as_taggable
  update_index 'notes#note', :self
  belongs_to :category
end
