var EditModal = React.createClass({
  onNoteSubmit: function(e){
    e.preventDefault()
    var formData = {note: {query: ''}}
    this.props.handleNoteSubmit(formData, '/notes')
  },
  
  onMoalView: function(e){
    this.props.handleModalView()
  },
  
  render: function(){
    return (
      <div className='modal-content edit-modal'>
        <div className='modal-header'>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <form ref='form' onSubmit={this.onNoteSubmit}>
            <div className='form-group'>
              <input className='form-control edit-title' defaultValue={this.props.note.title}/>
            <div className='modal-body'>
              <h3>Category</h3>
              <input className='form-control' defaultValue={this.props.note.category.name} />
              <h3>Text</h3>
              <textarea className='form-control' defaultValue={this.props.note.content} rows='10' />
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
