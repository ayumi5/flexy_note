FactoryGirl.define do
  factory :note do
    category
    sequence(:title) { |i| "Note Title#{i}" }
    sequence(:content) { |i| "Note Content#{i}" }
    sequence(:url) { |i| "Note Url#{i}" }
  end
end
