var Modal = ReactBootstrap.Modal;
var NoteViewModal = React.createClass({
  render: function(){
    return (
      <div className='note-view-modal'>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            One fine body...
          </Modal.Body>

          <Modal.Footer>
            something
          </Modal.Footer>

        </Modal.Dialog>
      </div>
    )
  }
  });
