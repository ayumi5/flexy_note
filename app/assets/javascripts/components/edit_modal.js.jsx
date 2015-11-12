var EditModal = React.createClass({
  onNoteUpdate: function(e){
    e.preventDefault()
    var title = this.refs.title.value.trim();
    var category = this.refs.category.value.trim();
    var content = this.refs.content.value.trim();
    var formData= { note: {title: title, content: content}};
    var action ='/notes/' + this.props.note.id
    this.props.handleNoteSubmit(formData, action, 'PUT');
  },
  
  onMoalView: function(e){
    this.props.handleModalView()
  },
  
  render: function(){
    return (
      <div className='modal-content edit-modal'>
        <div className='modal-header'>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.onMoalView}>
            <span aria-hidden="true">&times;</span>
          </button>
          <form ref='form' onSubmit={this.onNoteUpdate}>
            <div className='form-group'>
              <input ref='title' className='form-control edit-title' defaultValue={this.props.note.title}/>
              <div className='modal-body'>
                <h3>Category</h3>
                <input ref='category' className='form-control' defaultValue={this.props.note.category.name} />
                <h3>Text</h3>
                <textarea ref='content' className='form-control' defaultValue={this.props.note.content} rows='10' />
              </div>
            </div>
            <div className='modal-footer'>
              <button type="submit" className="btn btn-primary">Submit</button>
              <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.onMoalView}>Close</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
});
