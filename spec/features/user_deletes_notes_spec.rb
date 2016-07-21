require 'rails_helper'

feature 'User deletes notes' do
  before do
    create_a_note
  end
  
  scenario 'deletes note' do
    page.find(:css, 'i.fa.fa-trash.fa-lg').click
    wait_for_ajax
    expect(page).not_to have_content("Automated Testing")
    expect(page).not_to have_content("Rspec")
  end
end
