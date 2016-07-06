require 'rails_helper'

feature 'User searches notes' do
  before do
    Category.create(name: 'testing')
    Note.create(title: 'rspec tips', category_id: Category.first.id, content: 'matchers')
  end

  scenario 'User searches by text input' do
    visit root_path
    fill_in 'text-search', with: 'rspec'
    expect(page).to have_content("rspec tips")
  end
end
