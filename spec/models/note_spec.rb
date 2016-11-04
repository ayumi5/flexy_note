require 'rails_helper'

describe Note do
  
  it "returns a note in json format" do
    note = Note.new(title: "how to use heroku", content: "This is how to use")
    result = {"title" => "how to use heroku", "content" =>  "This is how to use", "created_at" => nil, "updated_at" => nil}
    expect(note.as_indexed_json).to eq result
  end
  
end
