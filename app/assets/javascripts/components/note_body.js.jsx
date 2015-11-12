/** @jsx React.DOM */

var NoteBody = React.createClass({
  formatDate: function(dateStr){
    date = new Date(dateStr)
    //even though the date of the object is already set to local time, javascript thinks it's still UTC time and add +13
    return date.getUTCFullYear() + '/' + (date.getUTCMonth()+1) + '/' + date.getUTCDate()
  },

  render: function() {
    var noteId = this.props.note.id
    return (
      <div className='panel panel-default col-sm-3 listing'>
        <div className='panel-body'>
          <p className='date col-sm-6 col-xs-6'>{this.formatDate(this.props.note.updated_at)}</p>
          <span className='action-icons col-sm-6 col-xs-6'>
            <a onClick={this.onModalOpen}><i className='fa fa-file fa-lg'></i></a>
            <a href={'/notes/' + noteId + '/edit'}><i className='fa fa-pencil-square-o fa-lg'></i></a>
            <a onClick={this.onNoteDelete}><i className='fa fa-trash fa-lg'></i></a>
          </span>
          <h3>{this.props.note.title}</h3>
          <h4>{this.props.note.category.name}</h4>
          <p className='body'>{this.props.note.content}</p>
          <p className='text-fadeout'></p>
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
