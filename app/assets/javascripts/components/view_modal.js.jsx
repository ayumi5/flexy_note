var ViewModal = React.createClass({
  onModalEdit: function(){
    console.log('onModalEdit')
    this.props.handleModalEdit()
  },
  render: function(){
    return (
      <div className='modal-content view-modal'>
        <div className='modal-header'>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h2>{this.props.note.title}</h2>
          <div className='modal-body'>
            <h3>Category</h3>
            <h4>{this.props.note.category.name}</h4>
            <h3>Text</h3>
            <h4>{this.props.note.content}</h4>
          </div>
          <div className='modal-footer'>
            <button type="button" className="btn btn-primary note-edit" onClick={this.onModalEdit}>Edit</button>
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    )
  }
});
