var NoteListings = React.createClass({
  render: function() {
    var listingNodes = this.props.listings.map(function(listing){
      return <ListingBody title={listing.title} category={listing.category} key={listing.id} />
    });
    
    return (
      <div className='note-listing col-sm-11 col-sm-offset-1'>
        {listingNodes}
      </div>
    )
  }
});
