require 'rails_helper'

describe Category do
  it "is valid with a unique name" do
    category = build(:category)
    expect(category).to be_valid
  end
  
  it "is invalid without a name" do
    category = build(:category, name: nil)
    category.valid?
    expect(category.errors[:name]).to include("can't be blank")
  end
  
  it "is invalid with a duplicated name (case sensitive)" do
    create(:category, name: "Rspec")
    category = build(:category, name: "Rspec")
    category.valid?
    expect(category.errors[:name]).to include("has already been taken")
  end
  
  it "is invalid with a duplicated name (case insensitive)" do
    create(:category, name: "Rspec")
    category = build(:category, name: "rspec")
    category.valid?
    expect(category.errors[:name]).to include("has already been taken")
  end
  
end
