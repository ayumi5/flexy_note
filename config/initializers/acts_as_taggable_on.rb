ActsAsTaggableOn::Tag.class_eval do
  update_index 'notes#note', :note
end

ActsAsTaggableOn::Tagging.class_eval do
  update_index('notes#note') { taggable if taggable_type == 'Note' }
end
