require 'rails_helper'

feature 'User deletes notes' do
  before do
    create_a_note
  end
  
  scenario 'deletes note' do
    page.find(:css, 'i.fa.fa-trash.fa-lg').click
    wait_for_ajax
    expect(page).not_to have_css('.listing.edit')
    expect(page).not_to have_css('.note-header > h3', :text => 'rspec tips')
    expect(page).not_to have_css('.note-header > h4', :text => 'Automated Testing')
  end
end
