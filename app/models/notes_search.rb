class NotesSearch
  include ActiveModel::Model
  include DateHelper
  attr_accessor :query, :min_date, :max_date
  
  def index
    NotesIndex
  end
  
  def search
    [query_string, date_filter].compact.reduce(:merge)
  end
  
  def query_string
    index.query(query_string: {fields:[:title, :category, :content, :url],
                query: query + '*', default_operator: 'and' }) if query?
  end
  
  def date_filter
    body = {}.tap do |body|
      body.merge!(gte: min_date) if min_date?
      body.merge!(lte: max_date) if max_date?
    end

    index.filter(range: {update: body}) if body.present?
  end
  
  private
  
  def min_date
    format_date_str(@min_date)
  end
  
  def max_date
    format_date_str(@max_date)
  end
  
  def query?
    query.present?
  end
  
  def min_date?
    min_date.present?
  end
  
  def max_date?
    max_date.present?
  end
  
end
