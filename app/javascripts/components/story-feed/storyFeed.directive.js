import storyFeedTemplate from 'html-loader!./story-feed.view.html'

export default angular.module( 'campfire' ).directive(
  'storyFeed',
  [
    function() {
      return {
        restrict: 'E',
        template: storyFeedTemplate,
        controller: 'StoryFeedController',
        link: function( scope, element, attrs ) {

        }
      }
    }
  ]
)
