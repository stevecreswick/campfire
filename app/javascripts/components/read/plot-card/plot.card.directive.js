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

        }
      }
    }
  ]
)
