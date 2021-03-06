var NoteCreateBox = React.createClass({
  render: function(){
    return (
      <div className='note-create-box' > 
        <div className='panel panel-default col-sm-3 listing'>
          <div className='panel-body cursor-pointer' data-toggle="modal" data-target='#note-modal-create'>
            <div className='create-content'>
              <h3 className='create-title'>Create A New Note</h3>
              <i className='fa fa-sticky-note-o fa-4x'></i>
            </div>
          </div>
        </div>
        <div>
          <CreateModal handleNoteSubmit={this.props.handleNoteSubmit} onModalLoaded={this.props.onModalLoaded}/>
        </div>  
    </div>
  )
  }
});
