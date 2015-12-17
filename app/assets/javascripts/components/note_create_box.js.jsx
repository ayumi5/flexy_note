var NoteCreateBox = React.createClass({
  render: function(){
    return (
      <div className='note-create-box' > 
        <div className='panel panel-default col-sm-3 listing'>
          <div className='panel-body cursor-pointer' data-toggle="modal" data-target='#note-modal0'>
            <div className='create-content'>
              <h3 className='create-title'>Create New Note</h3>
              <i className='fa fa-sticky-note-o fa-4x'></i>
            </div>
          </div>
        </div>
        <NoteModal createNote={true} editModal={true} handleModalEdit={this.props.handleModalEdit} handleNoteSubmit={this.props.handleNoteSubmit} generateAlloyEditor={this.props.generateAlloyEditor} />
      </div>
  )
  }
});
