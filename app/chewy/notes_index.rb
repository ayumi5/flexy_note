class NotesIndex < Chewy::Index
  settings analysis: {
    analyzer: {
      title: {
        tokenizer: 'standard',
        filter: ['lowercase']
      }
    }
  }
  
  define_type Note do
    field :title
    field :content
    field :category, value: -> { category }
    field :url
    field :updated, type: 'date', include_in_all: false, value: -> { updated_at }
  end
end
