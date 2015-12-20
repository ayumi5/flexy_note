var NoteResult = React.createClass({
  getInitialState: function(){
    return {notes: [], categories: [], editModal: false };
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
  
  handleModalEdit: function(value){
    this.setState({editModal: value})
  },
  
  handleModalView: function(){
    this.setState({editModal: false})
  },
  
  generateAlloyEditor: function(textareaId){
    setTimeout(function(){
      var textarea = textareaId;
      var editor = CKEDITOR.instances[textarea];
      if (!editor){
        AlloyEditor.editable(textarea, {
          toolbars: {
            add: {
              buttons: ['image', 'hline']
            },
            styles: {
              selections: [
                {
                  name: 'link',
                  buttons: ['linkEdit'],
                  test: AlloyEditor.SelectionTest.link
                },
                {
                  name: 'text',
                  buttons: ['code', 'bold', 'italic', 'quote', 'removeFormat', 'strike', 'underline'],
                  test: AlloyEditor.SelectionTest.text
                },
                {
                  name: 'image',
                  buttons: ['imageCenter', 'imageLeft', 'imageRight'],
                  test: AlloyEditor.SelectionTest.image
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
          <NoteListing notes={this.state.notes} handleNoteSubmit={this.handleNoteSubmit} editModal={this.state.editModal} handleModalEdit={this.handleModalEdit}　generateAlloyEditor={this.generateAlloyEditor} />
        </div>
        
      </div>
    )
  }
});
