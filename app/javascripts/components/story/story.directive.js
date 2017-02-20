import storyTemplate from 'html-loader!./story.view.html'

export default angular.module( 'campfire' ).directive(
  'story',
  [
    function() {
      return {
        restrict: 'E',
        template: storyTemplate,
        controller: 'StoryController',
        link: function( scope, element, attrs ) {

        }
      }
    }
  ]
)
