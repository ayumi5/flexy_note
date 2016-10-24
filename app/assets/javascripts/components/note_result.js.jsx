var Pagination = ReactBootstrap.Pagination;
var NoteResult = React.createClass({
  getInitialState: function(){
    return {notes: [], categories: [], editModal: false, activePage: 1, pageNum: 0 };
  },
  
  //fetch the initial notes from notes_controller
  componentDidMount: function(){
    this.getInitialNotes()
    $(ReactDOM.findDOMNode(this)).on('hidden.bs.modal', this.onModalHidden);
  },
    
  componentWillUnmount: function(){
    $(ReactDOM.findDOMNode(this)).off('hidden.bs.modal', this.onModalHidden);
  },
  
  onModalHidden: function(){
    this.setState({ editModal: false })
  },
  
  handleModalEdit: function(value){
    this.setState({editModal: value})
  },
  
  handleSelect(event, selectedEvent) {  
    var query = $("#text-search").val()
    var category = $(".category").find("select").val()
    var minDate = $(".min-date").val()
    var maxDate = $(".max-date").val()
    formData = { query: query, category: category, min_date: minDate, max_date: maxDate }
    
    eventKey = selectedEvent.eventKey
    this.setState({
      activePage: eventKey
    });
    
    $.ajax({
      url: '/notes',
      data: { page: eventKey, note: formData },
      type: 'GET',
      dataType: 'json',
      success: function(data){
        this.setState(data)
      }.bind(this)
    })
  },
  
  getInitialNotes: function(){
    $.ajax({
      url: 'notes.json',
      type: 'GET',
      dataType: 'json',
      success: function(data){
        if(this.isMounted()){
          this.setState(data)
        }
      }.bind(this)
    })
  },
  
  handleNoteSubmit: function(formData, action, type){
    $.ajax({
      data: formData,
      url: action,
      type: type,
      dataType: 'json',
      success: function(data) {
        this.setState( data )
      }.bind(this)
    });
  },
  
  onModalLoaded: function(content, category, loaded){
    var contentElement = $(ReactDOM.findDOMNode(content));
    var textareaId = contentElement.attr('id');
    if (loaded){
      this.generateAlloyEditor(textareaId);
      this.typeAhead(category);
    } else {
      CKEDITOR.instances[textareaId].destroy();
    }
  },
  
  generateAlloyEditor: function(textareaId){
    AlloyEditor.editable(textareaId, {
      toolbars: {
        styles: {
          selections: [
            {
              name: 'link',
              buttons: ['linkEdit'],
              test: AlloyEditor.SelectionTest.link
            },
            {
              name: 'text',
              buttons: ['code', 'bold', 'italic', 'quote', 'removeFormat', 'strike', 'underline', 'ul', 'ol',
                {  name: 'styles',
                   cfg: {
                     styles: [ { name: 'Head 1', style: {element: 'h1'}},
                                {name: 'Head 2', style: {element: 'h2'}},
                                {name: 'Head 3', style: {element: 'h3'}},
                                {name: 'Head 4', style: {element: 'h4'}},
                                {name: 'Head 5', style: {element: 'h5'}}
                              ]
                   }
                }
              ],
              test: AlloyEditor.SelectionTest.text
            }
          ]
        }
      }
    });
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
  
  typeAhead: function(categoryElem){
    var categories = this.props.categories;
    var categoriesArray = [];
    $.each(categories, function(i, category){
      categoriesArray.push(category.name)
    });
    
    $(categoryElem).typeahead({
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
  
  render: function() {
    return (
      <div className='note-results'>
        <div className='search-form-wrapper'>
          <NoteSearchForm handleNoteSubmit={this.handleNoteSubmit} categories={this.state.categories} />
        </div>
        <div className='note-listing-wrapper'>
          <NoteListing notes={this.state.notes} handleNoteSubmit={this.handleNoteSubmit} editModal={this.state.editModal} handleModalEdit={this.handleModalEdit} onModalLoaded={this.onModalLoaded}/>
        </div>  
        <Pagination
          bsSize="small"
          items={this.state.pageNum}
          activePage={this.state.activePage}
          onSelect={this.handleSelect} />
      </div>
    )
  }
});
