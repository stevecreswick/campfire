import newStoryTemplate from 'html-loader!./new.story.view.html'

export default angular.module( 'campfire' ).directive(
  'newStory',
  [
    function() {
      return {
        restrict: 'E',
        template: newStoryTemplate,
        controller: 'NewStoryController',
        link: function( scope, element, attrs ) {


        }
      }
    }
  ]
)
