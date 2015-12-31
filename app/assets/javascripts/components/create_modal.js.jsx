var CreateModal = React.createClass({
  onNoteCreate: function(e){
    e.preventDefault()
    var textareaId = "create-content-modal";
    var title = this.refs.title.value.trim();
    var category = this.refs.category.value.trim();
    var editor = CKEDITOR.instances[textareaId];
    var content = editor.getData().trim()
    var formData= { note: {title: title, category: category, content: content}};
    this.props.handleNoteSubmit(formData, this.refs.form.action, 'POST');
    this.refs.title.value = "" ;
    this.refs.category.value = "";
    editor.setData('');
  },
  
  onAlloyEditorGenerate: function(e){
    var textareaId = "create-content-modal";
    this.props.generateAlloyEditor(textareaId);
  },
  
  substringMatcher: function(strs){
    return function findMatches(q, cb) {
      var matches, substringRegex;
      matches = [];
      substrRegex = new RegExp(q, 'i');
      
      $.each(strs, function(i, str){
        if (substrRegex.test(str)){
          matches.push(str);
        }
      });
      cb(matches);
    }
  },
  
  typeAhead: function(){
    var categories = this.props.categories;
    var categoriesArray = [];
    $.each(categories, function(i, category){
      categoriesArray.push(category.name)
    });
    var category = this.refs.category;
    $(category).typeahead({
      minLength: 1,
      highlight: true,
      classNames: {
        input: 'typeahead-input',
        hint: 'typeahead-hint',
        selectable: 'typeahead-selectable'
      }
    }, {
      name: 'categories',
      source: this.substringMatcher(categoriesArray)
    })
  },
  
  render: function(){
    this.typeAhead()
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
                <textarea ref='content' className='form-control edit-content' rows="10" id="create-content-modal" onClick={this.onAlloyEditorGenerate}/>
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
