module NotesHelper
  def convert_notes_to_json(notes)
    notes.as_json(include: {category: {only: [:name]}})
  end

  def convert_categories_to_json(categories)
    categories.as_json(only: [:id, :name])
  end
end
