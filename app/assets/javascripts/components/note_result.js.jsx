/** @jsx React.DOM */

var NoteResult = React.createClass({
  getInitialState: function(){
    return this.props.notes;
  },
  
  handleNoteSubmit: function(formData, action){
    $.ajax({
      data: formData,
      url: action,
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        this.setState( { notes: data } )
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
          <NoteListing notes={this.state.notes} />
        </div>
      </div>
    )
  }
});
