import previewStoryTemplate from 'html-loader!./preview.story.view.html'

export default angular.module( 'campfire' ).directive(
  'previewStory',
  [
    function() {
      return {
        restrict: 'E',
        template: previewStoryTemplate,
        controller: 'PreviewStoryController',
        link: function( scope, element, attrs ) {

          // scope.previewing = false;
          //
          // if ( !previewing ) {
          //
          // }
        }
      }
    }
  ]
)
