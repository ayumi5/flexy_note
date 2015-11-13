var NoteModal = React.createClass({
  render: function(){
    if (this.props.editModal) {
      var ModalContent = <EditModal note={this.props.note} handleModalEdit={this.props.handleModalEdit}  handleNoteSubmit={this.props.handleNoteSubmit} />
    } else {
      var ModalContent = <ViewModal note={this.props.note} handleModalEdit={this.props.handleModalEdit} />
    }
    return (
      <div>
        <div className='note-view modal fade' id={ 'note-modal' + this.props.note.id }>
          <div className='modal-dialog'>
            { ModalContent }
          </div>
        </div>
      </div>
    )
  }
});
