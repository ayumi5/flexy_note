# require 'rails_helper'
# 
# feature 'user edits notes' do
#   before do
#     create_a_note
#   end
#   
#   scenario 'open an existing note' do
#     page.find(:css, '.listing.edit').click
#     expect(page).to have_css('.view-title', :text => 'rspec tips')
#     expect(page).to have_css('.view-category', :text => 'Automated Testing')
#     expect(page).to have_content('use matchers')
#   end
# end
