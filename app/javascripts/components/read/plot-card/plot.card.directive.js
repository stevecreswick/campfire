import plotCardTemplate from 'html-loader!./plot.card.view.html'

export default angular.module( 'campfire' ).directive(
  'plotCard',
  [
    function() {
      return {
        restrict: 'E',
        template: plotCardTemplate,
        controller: 'PlotCardController',
        link: function( scope, element, attrs ) {
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
