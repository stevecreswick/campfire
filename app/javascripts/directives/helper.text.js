export default angular.module( 'campfire' ).directive(
  'helperText',
  [
    function() {
      return {
        restrict: 'EA',
        template: storyTemplate,
        controller: 'StoryController',
        link: function( scope, element, attrs ) {

        }
      }
    }
  ]
)
