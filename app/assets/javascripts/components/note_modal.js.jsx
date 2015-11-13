var NoteModal = React.createClass({
  render: function(){
    var ModalContent;
    if (this.props.editModal) {
      if(this.props.createNote){
        ModalContent = <CreateModal handleModalEdit={this.props.handleModalEdit}　handleNoteSubmit={this.props.handleNoteSubmit} />
      } else {
        ModalContent = <EditModal note={this.props.note} handleModalEdit={this.props.handleModalEdit}  handleNoteSubmit={this.props.handleNoteSubmit} />
      }
    } else {
      ModalContent = <ViewModal note={this.props.note} handleModalEdit={this.props.handleModalEdit} />
    }
    var noteId = (this.props.note) ?  this.props.note.id : 0
    
    return (
      <div>
        <div className='note-view modal fade' id={ 'note-modal' + noteId  }>
          <div className='modal-dialog'>
            { ModalContent }
          </div>
        </div>
      </div>
    )
  }
});
