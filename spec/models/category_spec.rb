require 'rails_helper'

describe Category do
  it "is valid with a unique name" do
    category = Category.new(name: "Rspec")
    expect(category).to be_valid
  end
  
  it "is invalid without a name" do
    category = Category.new(name: nil)
    category.valid?
    expect(category.errors[:name]).to include("can't be blank")
  end
  
  it "is invalid with a duplicated name (case sensitive)" do
    category_old = Category.create(name: "Rspec")
    category_new = Category.new(name: "Rspec")
    category_new.valid?
    expect(category_new.errors[:name]).to include("has already been taken")
  end
  
  it "is invalid with a duplicated name (case insensitive)" do
    category_old = Category.create(name: "Rspec")
    category_new = Category.new(name: "rspec")
    category_new.valid?
    expect(category_new.errors[:name]).to include("has already been taken")
  end
  
end
