/** @jsx React.DOM */

var NoteSearchForm = React.createClass({
  handleSubmit: function(event){
    event.preventDefault();

    var query = this.refs.query.value.trim();
    var formData = {note: {query: query}}
    this.props.onCommentSubmit(formData, this.refs.form.action)
    
    this.refs.query.value='';
  },
  
  render: function() {
    return (
      <form ref='form' className='note-search-form' action='/notes' method='get' onSubmit={this.handleSubmit}>
        <label>Text</label>
        <input type='text' ref='query' /> 
        <button type='submit'>Search</button>
      </form>
    )
  }
});
