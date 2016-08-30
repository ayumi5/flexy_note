class NotesSearch
  include ActiveModel::Model
  
  attr_accessor :query, :category, :min_date, :max_date
  
  def index
    NotesIndex
  end
  
  def search
    [query_string, category_filter, date_filter, sorting].compact.reduce(:merge)
  end
  
  def query_string
    index.query(query_string: {fields:[:title, :category, :content, :url],
                query: '*' + query + '*', default_operator: 'or' }) if query?
  end
  
  def date_filter
    format_min_date = format_date_str(min_date)
    format_max_date = format_date_str(max_date)
    body = {}.tap do |body|
      body.merge!(gte: format_min_date) if min_date?
      body.merge!(lte: format_max_date) if max_date?
    end
    index.filter(range: {updated_at: body}) if body.present?
  end
  
  def category_filter
    index.filter(term: {category: category.downcase}) if category?
  end
  
  def sorting
    index.order({updated_at: :asc})
  end
  
  private
  
  def query?
    query.present?
  end
  
  def min_date?
    min_date.present?
  end
  
  def max_date?
    max_date.present?
  end
  
  def category?
    category.present?
  end
  
end
