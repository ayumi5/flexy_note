module NotesHelper
  def convert_notes_to_json(notes)
    white_list_sanitizer(notes, 'content')
    notes.as_json(include: {category: {only: [:name]}})
  end

  def convert_categories_to_json(categories)
    categories.as_json(only: [:id, :name])
  end
  
  def white_list_sanitizer(notes, attr)
    white_list_sanitizer = Rails::Html::WhiteListSanitizer.new
    notes.map { |note|
      note.content = white_list_sanitizer.sanitize(note[attr])
    }  
  end
end
