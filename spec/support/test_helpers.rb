module FlexyNote
  module TestHelpers
    
    def open_up_note
      visit root_path
      first(".panel-body").click
    end
    
    def create_a_note
      open_up_note
      fill_in 'create-title-modal', with: 'Automated Testing'
      fill_in 'create-category-modal', with: 'Rspec'
      page.find('.cke_textarea_inline').set('I love testing.')
      click_on 'Submit'
      page.find('.close').click
    end
  end
end
