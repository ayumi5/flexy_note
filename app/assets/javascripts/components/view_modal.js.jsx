var ViewModal = React.createClass({
  onModalEdit: function(){
    this.props.handleModalEdit(true)
  },
  render: function(){
    if (this.props.note.category){
      var categoryName = this.props.note.category.name;
    }
    return (
      <div className='modal-content view-modal'>
        <div className='modal-header'>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h2 className='view-title'>{this.props.note.title}</h2>
          <div className='modal-body'>
            <h3>Category</h3>
            <h4 className='view-category'> {categoryName} </h4>
            <h3>Text</h3>
            <h4 className='view-content'>{this.props.note.content}</h4>
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
