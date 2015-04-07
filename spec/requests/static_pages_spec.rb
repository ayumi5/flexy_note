require 'rails_helper'

RSpec.describe "StaticPages", :type => :request do
  describe "index page" do
    it "should have the content 'Flexible Note'" do
      visit root_path
      expect(page).to have_content('Flexible Note')
    end
  end
end
