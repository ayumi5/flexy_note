var NoteModal = React.createClass({
  
  render: function(){
    var ModalContent;
    if (this.props.editModal) {
      ModalContent = <EditModal note={this.props.note} handleNoteSubmit={this.props.handleNoteSubmit} onModalLoaded={this.props.onModalLoaded}/>
    } else {
      ModalContent = <ViewModal note={this.props.note} handleModalEdit={this.props.handleModalEdit} />
    }
    
    return (
      <div>
        <div className='note-modal modal fade' id={ 'note-modal' + this.props.note.id   } ref='modal'>
          <div className='modal-dialog'>
            { ModalContent }
          </div>
        </div>
      </div>
    )
  }
});
