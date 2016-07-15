require 'rails_helper'

feature 'User creates notes' do
  scenario 'User can open up a note modal' do
    page.visit root_path
    page.first(".panel-body").click
    expect(page).to have_css("div#note-modal-create")
  end
end
