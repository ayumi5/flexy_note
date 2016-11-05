FactoryGirl.define do
  factory :note do
    title 'rspec tips'
    content 'use matchers'
    url 'www.example.com'
    association :category
  end
end
