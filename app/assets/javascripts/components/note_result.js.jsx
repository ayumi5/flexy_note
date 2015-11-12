/** @jsx React.DOM */

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
  
  handleNoteSubmit: function(formData, action){
    $.ajax({
      data: formData,
      url: action,
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        this.setState( data )
      }.bind(this)
    });
  },
  
  handleNoteDelete: function(noteId){
    $.ajax({
      data: {id: noteId},
      url: '/notes/' + noteId,
      type: 'DELETE',
      dataType: 'json',
      success: function(data) {
        this.setState( data, function(){
        })
      }.bind(this)
    });
  },
  
  handleModalEdit: function(){
    this.setState({editModal: true})
  },
  
  handleModalView: function(){
    this.setState({editModal: false})
  },
  
  
  render: function() {
    return (
      <div className='note-results'>
        <div className='search-form-wrapper'>
          <NoteSearchForm onNoteSubmit={this.handleNoteSubmit} categories={this.state.categories} />
        </div>
        <div className='note-listing-wrapper'>
          <NoteListing notes={this.state.notes} handleNoteSubmit={this.handleNoteSubmit} handleNoteDelete={this.handleNoteDelete}  editModal={this.state.editModal} handleModalEdit={this.handleModalEdit} handleModalView={this.handleModalView}  />
        </div>
        
      </div>
    )
  }
});
