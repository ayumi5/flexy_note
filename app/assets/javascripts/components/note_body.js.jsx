/** @jsx React.DOM */

var NoteBody = React.createClass({
  formatDate: function(dateStr){
    date = new Date(dateStr)
    return date.getFullYear() + '/' + (date.getMonth()+1) + '/' + date.getDate()
  },

  render: function() {
    var noteId = this.props.note.id
    return (
      <div className='panel panel-default col-sm-3 listing'>
        <div className='panel-body'>
          <p className='date col-sm-6 col-xs-10'>{this.formatDate(this.props.note.updated_at)}</p>
          <span className='action-icons'>
            <a onClick={this.onModalOpen}><i className='fa fa-file'></i></a>
            <a href={'/notes/' + noteId + '/edit'}><i className='fa fa-pencil-square-o fa-lg'></i></a>
            <a onClick={this.onNoteDelete}><i className='fa fa-trash fa-lg'></i></a>
          </span>
          <h4>{this.props.note.title}</h4>
          <h4>{this.props.note.category.name}</h4>
        </div>
      </div>
    )
  },
  
  onNoteDelete: function (e) {
    this.props.handleNoteDelete(this.props.note.id)
  },
  
  onModalOpen: function(e){
    this.props.handleModalOpen
  }
});
