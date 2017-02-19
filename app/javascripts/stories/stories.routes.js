routes.$inject = [ '$stateProvider' ];

export default function routes( $stateProvider ) {
  $stateProvider
  .state( 'stories', {
    url: '/',
    template: require( './stories.html' ),
    resolve: {
      stories: [ 'StoriesService', ( StoriesService ) => {
        return StoriesService.getStories()
      } ]
    }
  } );
}
