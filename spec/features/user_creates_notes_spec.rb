# require 'rails_helper'
# 
# feature 'User creates notes' do
#   before do
#     open_up_note
#   end
#   
#   scenario 'open up a modal' do
#     expect(page).to have_css("div#note-modal-create")
#   end
#   
#   scenario 'fills in all the search fields' do
#     fill_in 'create-title-modal', with: 'Automated Testing'
#     fill_in 'create-category-modal', with: 'Rspec'
#     page.find('.cke_textarea_inline').set('I love testing.')
#     click_on 'Submit'
#     expect(page).to have_content("Automated Testing")
#     expect(page).to have_content("Rspec")
#   end
#   
#   scenario 'fills in the search fields without specifying title' do
#     fill_in 'create-category-modal', with: 'Rspec'
#     page.find('.cke_textarea_inline').set('I love testing.')
#     click_on 'Submit'
#     expect(page).to have_content("Rspec")
#   end
#   
#   scenario 'fills in the search fields without specifying category' do
#     fill_in 'create-title-modal', with: 'Automated Testing'
#     page.find('.cke_textarea_inline').set('I love testing.')
#     click_on 'Submit'
#     expect(page).not_to have_content("Automated Testing")
#   end
#   
#   scenario 'fills in the search fields without specifying content' do
#     fill_in 'create-title-modal', with: 'Automated Testing'
#     fill_in 'create-category-modal', with: 'Rspec'
#     click_on 'Submit'
#     expect(page).to have_content("Automated Testing")
#     expect(page).to have_content("Rspec")
#   end
# end
