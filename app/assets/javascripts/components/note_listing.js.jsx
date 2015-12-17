var NoteListing = React.createClass({
  
  render: function() {
    var Notes = this.props.notes.map(function(note){
      return <NoteBody note={note} key={note.id} handleNoteSubmit={this.props.handleNoteSubmit} generateAlloyEditor={this.props.generateAlloyEditor} />
    }.bind(this));
    
    return (
      <div className='note-listing col-sm-11 col-sm-offset-1'>
        {Notes}
        <NoteCreateBox handleNoteSubmit={this.props.handleNoteSubmit} generateAlloyEditor={this.props.generateAlloyEditor} />
      </div>
    )
  }
});
