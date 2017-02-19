function storiesListController() {
  console.log( this );
}

module.exports = {
  template: require( './stories-list.html' ),
  controller: storiesListController,
  bindings: {
    stories: '='
  }
}
