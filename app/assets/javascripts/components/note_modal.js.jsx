var NoteModal = React.createClass({
  render: function(){
    var ModalContent;
    if (this.props.editModal) {
      if(this.props.createNote){
        ModalContent = <CreateModal handleModalEdit={this.props.handleModalEdit}　handleNoteSubmit={this.props.handleNoteSubmit} generateAlloyEditor={this.props.generateAlloyEditor} />
      } else {
        ModalContent = <EditModal note={this.props.note} handleModalEdit={this.props.handleModalEdit}  handleNoteSubmit={this.props.handleNoteSubmit} generateAlloyEditor={this.props.generateAlloyEditor}/>
      }
    } else {
      ModalContent = <ViewModal note={this.props.note} handleModalEdit={this.props.handleModalEdit} generateAlloyEditor={this.props.generateAlloyEditor} />
    }
    var noteId = (this.props.note) ?  this.props.note.id : 0
    
    return (
      <div>
        <div className='note-modal modal fade' id={ 'note-modal' + noteId  }>
          <div className='modal-dialog'>
            { ModalContent }
          </div>
        </div>
      </div>
    )
  }
});
