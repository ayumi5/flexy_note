/** @jsx React.DOM */

var NoteResult = React.createClass({
  getInitialState: function(){
    return this.props.notes;
  },
  
  handleCommentSubmit: function(formData, action){
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
        <NoteSearchForm onCommentSubmit={this.handleCommentSubmit} />
        <NoteListing notes={this.state.notes} />
      </div>
    )
  }
});
