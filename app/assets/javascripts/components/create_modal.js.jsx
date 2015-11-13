var CreateModal = React.createClass({
  onNoteUpdate: function(e){
    e.preventDefault()
    var title = this.refs.title.value.trim();
    var category = this.refs.category.value.trim();
    var content = this.refs.content.value.trim();
    var formData= { note: {title: title, content: content}};
    this.props.handleNoteSubmit(formData, this.refs.form.action, 'PUT');
  },
  
  onModalView: function(e){
    this.props.handleModalEdit(false)
  },
  
  render: function(){
    return (
      <div className='modal-content edit-modal'>
        <div className='modal-header'>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.onModalView}>
            <span aria-hidden="true">&times;</span>
          </button>
          <form ref='form' role='form' action="notes" method='PUT' onSubmit={this.onNoteUpdate}>
            <div className='form-group'>
              <input ref='title' className='form-control edit-title'/>
              <div className='modal-body'>
                <h3>Category</h3>
                <input ref='category' className='form-control' />
                <h3>Text</h3>
                <textarea ref='content' className='form-control' />
              </div>
            </div>
            <div className='modal-footer'>
              <button type="submit" className="btn btn-primary">Submit</button>
              <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.onModalView}>Close</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
});
