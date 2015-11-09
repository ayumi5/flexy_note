/** @jsx React.DOM */

var NoteBody = React.createClass({
  handleNoteDelete: function(){
    var noteId = this.props.note.id
    $.ajax({
      data: {id: noteId},
      url: '/notes/' + noteId,
      type: 'DELETE',
      dataType: 'json',
      success: function(data) {
        this.setState( { notes: data }, function(){
        })
      }.bind(this)
    });
  },
  render: function() {
    noteId = this.props.note.id
    return (
      <div className='panel panel-default col-sm-3 listing'>
        <div className='panel-body'>
          <p className='date col-sm-6 col-xs-10'>2015/11/6</p>
          <span className='action-icons'>
            <a href={'/notes/' + noteId}><i className='fa fa-file'></i></a>
            <a href={'/notes/' + noteId + '/edit'}><i className='fa fa-pencil-square-o fa-lg'></i></a>
            <a><i className='fa fa-trash fa-lg'></i></a>
          </span>
          <h4>{this.props.note.title}</h4>
          <p>{this.props.note.category}</p>
        </div>
      </div>
    )
  }
});
