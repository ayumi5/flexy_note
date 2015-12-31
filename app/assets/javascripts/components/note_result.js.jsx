var NoteResult = React.createClass({
  getInitialState: function(){
    return {notes: [], categories: [], editModal: false };
  },
  
  //fetch the initial notes from notes_controller
  componentDidMount: function(){
    this.getInitialNotes()
    var element = $(ReactDOM.findDOMNode(this))
    element.on('hidden.bs.modal', this.onModalHidden);
  },
  
  onModalHidden: function(){
    this.setState({ editModal: false })
  },
  
  componentWillUnmount: function(){
    $(ReactDOM.findDOMNode(this)).off('hidden.bs.modal', this.onModalHidden);
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
  
  generateAlloyEditor: function(textareaId){
    setTimeout(function(){
      var textarea = textareaId;
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
    }, 0)
    
  },
  
  render: function() {
    return (
      <div className='note-results'>
        <div className='search-form-wrapper'>
          <NoteSearchForm handleNoteSubmit={this.handleNoteSubmit} categories={this.state.categories} />
        </div>
        <div className='note-listing-wrapper'>
          <NoteListing notes={this.state.notes} handleNoteSubmit={this.handleNoteSubmit} editModal={this.state.editModal} handleModalEdit={this.handleModalEdit}　generateAlloyEditor={this.generateAlloyEditor} categories={this.state.categories}/>
        </div>
        
      </div>
    )
  }
});
