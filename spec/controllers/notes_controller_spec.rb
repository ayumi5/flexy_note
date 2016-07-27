require 'rails_helper'

describe NotesController, :elasticsearch do
  describe "GET #index" do
    let(:note) {create(:note)}
    
    context "when the keyword matches the note's title" do
      let(:notes) { NotesSearch.new(query: 'rspec') }
      it 'should return a note with the matching keyword' do
        get :index
        p notes.search.only(:id).load
      end
    end
  end
end
