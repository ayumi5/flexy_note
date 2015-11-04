class Note < ActiveRecord::Base
  acts_as_taggable
  update_index 'notes#note', :self
end
