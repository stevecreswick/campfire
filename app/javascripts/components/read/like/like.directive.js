import likeTemplate from 'html-loader!./like.view.html'

export default angular.module( 'campfire' ).directive(
  'like',
  [
    function() {
      return {
        restrict: 'E',
        template: likeTemplate,
        controller: 'LikeController',
        link: function( scope, element, attrs ) {
          console.log('like directive');
          // var chosenIndex = scope.inputsChosen[ scope.storyIndex - 1 ];
          // var userInputs = scope.plotDeviceDisplayed[ scope.storyIndex ].user_inputs;
          //
          // if ( scope.storyIndex === scope.$index ) {
          //
          // }
        }
      }
    }
  ]
)
