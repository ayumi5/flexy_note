var NoteListing = React.createClass({
  
  render: function() {
    var Notes = this.props.notes.map(function(note){
      return <NoteBody note={note} key={note.id} handleNoteSubmit={this.props.handleNoteSubmit} editModal={this.props.editModal} handleModalEdit={this.props.handleModalEdit} categories={this.props.categories} onModalLoaded={this.props.onModalLoaded}/>
    }.bind(this));
    
    return (
      <div className='note-listing col-sm-11 col-sm-offset-1'>
        {Notes}
        <NoteCreateBox handleModalEdit={this.props.handleModalEdit} handleNoteSubmit={this.props.handleNoteSubmit} categories={this.props.categories} onModalLoaded={this.props.onModalLoaded}/>
      </div>
    )
  }
});
