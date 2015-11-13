/** @jsx React.DOM */

var NoteListing = React.createClass({
  
  render: function() {
    var Notes = this.props.notes.map(function(note){
      return <NoteBody note={note} key={note.id} handleNoteSubmit={this.props.handleNoteSubmit} editModal={this.props.editModal} handleModalEdit={this.props.handleModalEdit} />
    }.bind(this));
    
    return (
      <div className='note-listing col-sm-11 col-sm-offset-1'>
        {Notes}
      </div>
    )
  }
});
