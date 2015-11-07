var ListingBody = React.createClass({
  render: function() {
    return (
      <div className='panel panel-default col-sm-3 listing'>
        <div className='panel-body'>
          <p className='date'>2015/11/6</p>
          <h4>{this.props.title}</h4>
          <p>{this.props.category}</p>
        </div>
      </div>
    )
  }
});
