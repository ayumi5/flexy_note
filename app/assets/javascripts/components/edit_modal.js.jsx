var EditModal = React.createClass({
  onNoteUpdate: function(e){
    e.preventDefault()
    var title = this.refs.title.value.trim();
    var category = this.refs.category.value.trim();
    var content = this.refs.content.value.trim();
    var formData= { note: {title: title, category: category, content: content}};
    this.props.handleNoteSubmit(formData, this.refs.form.action, 'PUT');
  },
  
  onAlloyEditorGenerate: function(e){
    var textareaId = "content-" + this.props.note.id
    this.props.generateAlloyEditor(textareaId)
  },
  
  render: function(){
    if (this.props.note.category){
      var categoryName = this.props.note.category.name;
    }
    this.onAlloyEditorGenerate()
    return (
      <div className='modal-content edit-modal'>
        <div className='modal-header'>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <form ref='form' role='form' action={('notes/' + this.props.note.id) || 'notes'} method='PUT' onSubmit={this.onNoteUpdate}>
            <div className='form-group'>
              <input ref='title' className='form-control edit-title' defaultValue={this.props.note.title}/>
              <div className='modal-body'>
                <h3>Category</h3>
                <input ref='category' className='form-control edit-category' defaultValue={categoryName} />
                <h3>Text</h3>
                <textarea ref='content' className='form-control edit-content' defaultValue={this.props.note.content} rows='10' id={"content-" + this.props.note.id} />
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
