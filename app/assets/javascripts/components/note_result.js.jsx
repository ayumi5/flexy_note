/** @jsx React.DOM */

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
  
  handleModalClose: function(){
    this.setState({showModal: false});
  },
  
  handleModalOpen: function(){
    this.setState({showModal: true});
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
  
  render: function() {
    return (
      <div className='note-results'>
        <div className='search-form-wrapper'>
          <NoteSearchForm onNoteSubmit={this.handleNoteSubmit} />
        </div>
        <div className='note-listing-wrapper'>
          <NoteListing notes={this.state.notes} handleNoteDelete={this.handleNoteDelete} handleModalOpen={this.handleModalOpen}/>
        </div>
        
      </div>
    )
  }
});
