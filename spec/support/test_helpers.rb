module FlexyNote
  module TestHelpers
    
    def open_up_note
      visit root_path
      first(".panel-body").click
    end
  end
end
