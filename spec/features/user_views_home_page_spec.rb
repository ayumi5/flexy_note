require 'rails_helper'

feature 'User views home page' do

  scenario 'User sees a note which encourages users to create a new note' do
    visit root_path
    expect(page).to have_content 'Create A New Note'
  end
end
