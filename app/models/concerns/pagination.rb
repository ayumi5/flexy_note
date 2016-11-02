module Pagination
  extend ActiveSupport::Concern
  
  #limit the number of notes displayed per page
  PAGE_LIMIT = 8
  
  def page_offset(active_page)
    return 0 if active_page.nil?
    
    (active_page.to_i - 1) * PAGE_LIMIT
  end
  
  def page_number(note_count)
    return 0 if note_count.nil?
    div = note_count / PAGE_LIMIT
    div % PAGE_LIMIT > 0 ? div + 1 : div
  end
end
