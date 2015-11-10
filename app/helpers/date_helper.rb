module DateHelper
  def format_date_str(date_str)
    date_str.gsub!('/', '-') if date_str.present?
  end
end
