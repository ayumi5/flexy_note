FactoryGirl.define do
  factory :note do
    title 'rspec tips'
    category_id 'testing'
    content 'use matchers'
    url 'www.example.com'
  end
end
