var CreateModal = React.createClass({
  onNoteCreate: function(e){
    e.preventDefault()
    var title = this.refs.title.value.trim();
    var category = this.refs.category.value.trim();
    var content = this.refs.content.value.trim();
    var formData= { note: {title: title, category: category, content: content}};
    this.props.handleNoteSubmit(formData, this.refs.form.action, 'POST');
    this.refs.title.value = "" ;
    this.refs.category.value = "";
    this.refs.content.value = "";
  },
  
  onAlloyEditorGenerate: function(e){
    this.props.generateAlloyEditor("create-content")
  },
  
  render: function(){
    this.onAlloyEditorGenerate()
    return (
      <div className='modal-content edit-modal'>
        <div className='modal-header'>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <form ref='form' role='form' action="notes" method='POST' onSubmit={this.onNoteCreate}>
            <div className='form-group'>
              <input ref='title' className='form-control edit-title' placeholder="Type in title here"/>
              <div className='modal-body'>
                <h3>Category</h3>
                <input ref='category' className='form-control edit-category' />
                <h3>Text</h3>
                <textarea ref='content' className='form-control edit-content' rows="10" id="create-content" />
              </div>
            </div>
            <div className='modal-footer'>
              <button type="submit" className="btn btn-primary">Submit</button>
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
});
