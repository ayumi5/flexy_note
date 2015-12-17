var NoteBody = React.createClass({
  formatDate: function(dateStr){
    date = new Date(dateStr)
    //even though the date of the object is already set to local time, javascript thinks it's still UTC time and add +13
    return date.getUTCFullYear() + '/' + (date.getUTCMonth()+1) + '/' + date.getUTCDate()
  },
  
  onNoteDelete: function(e){
    e.preventDefault()
    var action = '/notes/' + this.props.note.id
    this.props.handleNoteSubmit({}, action, 'Delete')
  },
  
  render: function() {
    var noteId = this.props.note.id;
    if (this.props.note.category){
      var categoryName = this.props.note.category.name;
    }
    return (
      <div className='panel panel-default col-sm-3 listing'>
        <div className='panel-body'>
          <p className='date col-sm-6 col-xs-6'>{this.formatDate(this.props.note.updated_at)}</p>
          <span className='action-icons col-sm-6 col-xs-6'>
            <a href='#' data-toggle="modal" data-target={ '#note-modal' + this.props.note.id }><i className='fa fa-pencil-square-o fa-lg'></i></a>
            <a href='#' onClick={this.onNoteDelete}><i className='fa fa-trash fa-lg'></i></a>
          </span>
          <div className='cursor-pointer' data-toggle="modal" data-target={ '#note-modal' + this.props.note.id }>
            <h3>{this.props.note.title}</h3>
            <h4>{ categoryName }</h4>
            <p className='body'>{this.props.note.content}</p>
            <p className='text-fadeout'></p>
          </div>
        </div>
        <NoteModal note={this.props.note} createNote={false} handleNoteSubmit={this.props.handleNoteSubmit} generateAlloyEditor={this.props.generateAlloyEditor} />
      </div>
    )
  }
});
