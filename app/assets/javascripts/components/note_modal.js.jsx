var NoteModal = React.createClass({
  
  render: function(){
    var ModalContent;
    if (this.props.editModal) {
      if(this.props.createNote){
        ModalContent = <CreateModal handleNoteSubmit={this.props.handleNoteSubmit} categories={this.props.categories} onModalLoaded={this.props.onModalLoaded}/>
      } else {
        ModalContent = <EditModal note={this.props.note} handleNoteSubmit={this.props.handleNoteSubmit} categories={this.props.categories} onModalLoaded={this.props.onModalLoaded}/>
      }
    } else {
      ModalContent = <ViewModal note={this.props.note} handleModalEdit={this.props.handleModalEdit} />
    }
    var noteId = (this.props.note) ?  this.props.note.id : 0
    
    return (
      <div>
        <div className='note-modal modal fade' id={ 'note-modal' + noteId  } ref='modal'>
          <div className='modal-dialog'>
            { ModalContent }
          </div>
        </div>
      </div>
    )
  }
});
