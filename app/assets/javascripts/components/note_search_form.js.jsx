var NoteSearchForm = React.createClass({
  handleChange: function(event) {
    var query = this.refs.query.value.trim();
    var category = this.refs.category.value.trim();
    var minDate = this.refs.min_date.value.trim();
    var maxDate = this.refs.max_date.value.trim();
    var formData = {note: {query: query, category: category, min_date: minDate, max_date: maxDate}};
    this.props.handleNoteSubmit(formData, this.refs.form.action, this.refs.form.method)
  },
  render: function() {
    var CategoryOptions = this.props.categories.map(function(category){
      return <option key={category.id}>{category.name}</option>
    });
    return (
      <form ref='form' className='note-search-form' role='form' action='/notes' method='get' id='search-form'>
        <div className='row'>
          <div className='col-sm-6 form-group'>
            <div className='query'>
              <input type='text' ref='query' className='col-sm-6 form-control' onChange={this.handleChange} /> 
            </div>
            <div className='category'>
             <select className='form-control' ref='category' onChange={this.handleChange}>
               <option>All</option>
               {CategoryOptions}
             </select>
           </div>
            <div className='note-date form-inline'>
              <div className='input-group col-sm-4'>
                <input type='text' className='form-control min-date datepicker' ref='min_date' onSelect={this.handleChange} />
                <span className='input-group-addon'><i className='fa fa-calendar'></i></span>
              </div>
              <span>—</span>
              <div className='input-group col-sm-4'>
                <input type='text' className='form-control max-date datepicker' ref='max_date' onSelect={this.handleChange} />
                <span className='input-group-addon'><i className='fa fa-calendar'></i></span>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }
});
