import storySnippetTemplate from 'html-loader!./story.snippet.view.html'

export default angular.module( 'campfire' ).directive(
  'storySnippet',
  [
    function() {
      return {
        restrict: 'E',
        template: storySnippetTemplate,
        controller: 'StorySnippetController',
        scope: {
          title: '@',
          message: '@',
          state: '@'
        },
        link: function( scope, element, attrs ) {
          scope.toggleEdit = function() {

            scope.state === 'editing' ?
              scope.state = 'authoring' :
              scope.state = 'editing';
          };
        }
      }
    }
  ]
)
