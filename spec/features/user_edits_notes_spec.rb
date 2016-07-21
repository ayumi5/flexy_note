require 'rails_helper'

feature 'user edits notes' do
  before do
    create_a_note
  end
  
  scenario 'open an existing note' do
    page.find(:css, '.listing.edit').click
    expect(page).to have_content('Automated Testing')
    expect(page).to have_content('Category')
    expect(page).to have_content('Rspec')
    expect(page).to have_content('Text')
    expect(page).to have_content('I love testing.')
  end
end
