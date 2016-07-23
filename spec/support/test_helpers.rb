module FlexyNote
  module TestHelpers
    
    def open_up_note
      visit root_path
      first(".panel-body").click
    end
    
    def create_a_note
      create(:note)
      visit root_path
    end
  end
end
