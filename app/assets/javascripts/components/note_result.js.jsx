var NoteResult = React.createClass({
  getInitialState: function(){
    return {notes: [], categories: []};
  },
  //fetch the initial notes from notes_controller
  componentDidMount: function(){
    this.getInitialNotes()
  },
  
  getInitialNotes: function(){
    $.ajax({
      url: 'notes.json',
      type: 'GET',
      dataType: 'json',
      success: function(data){
        if(this.isMounted()){
          this.setState(data)
        }
      }.bind(this)
    })
  },
  
  handleNoteSubmit: function(formData, action, type){
    $.ajax({
      data: formData,
      url: action,
      type: type,
      dataType: 'json',
      success: function(data) {
        this.setState( data )
      }.bind(this)
    });
  },
  
  generateAlloyEditor: function(textareaId){
    setTimeout(function(){
      var textarea = textareaId;
      var editor = CKEDITOR.instances[textarea];
      if (editor){
        CKEDITOR.remove(editor);
      } else {
        AlloyEditor.editable(textarea, {
          toolbars: {
            add: {
              buttons: ['camera']
            },
            styles: {
              selections: [
                {
                  name: 'text',
                  buttons: ['code', 'bold', 'italic'],
                  test: AlloyEditor.SelectionTest.text
                },
                {
                  name: 'link',
                  buttons: ['linkEdit'],
                  test: AlloyEditor.SelectionTest.link
                }
              ]
            }
          }
        });
      }
    }, 0)
    
  },
  
  render: function() {
    return (
      <div className='note-results'>
        <div className='search-form-wrapper'>
          <NoteSearchForm handleNoteSubmit={this.handleNoteSubmit} categories={this.state.categories} />
        </div>
        <div className='note-listing-wrapper'>
          <NoteListing notes={this.state.notes} handleNoteSubmit={this.handleNoteSubmit}　generateAlloyEditor={this.generateAlloyEditor} />
        </div>
        
      </div>
    )
  }
});
