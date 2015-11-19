class NotesIndex < Chewy::Index  
  define_type Note.includes(:category) do
    field :title
    field :content
    field :category, value: -> { category.name }
    field :category_id, type: 'integer'
    field :url
    field :updated_at, type: 'date'
  end
end
