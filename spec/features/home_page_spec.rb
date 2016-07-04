require 'rails_helper'

feature 'User visits home page' do

  scenario 'see a note which encourages users to create a new note' do
    visit root_path
    page.has_content?('Create New Note')
  end
end
