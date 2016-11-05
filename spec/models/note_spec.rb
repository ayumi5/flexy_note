require 'rails_helper'

describe Note do
  
  it "has a valid factory" do
    expect(build(:note)).to be_valid
  end
  
  it "returns a note in json format" do
    note = build(:note)
    result = {
      "title" => "rspec tips", "content" => "use matchers",
      "created_at" => nil, "updated_at" => nil,
      "category"=>{"name"=>"Automated Testing"}}
    expect(note.as_indexed_json).to eq result
  end
  
end
