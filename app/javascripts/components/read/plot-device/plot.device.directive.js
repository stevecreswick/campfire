import plotDeviceTemplate from 'html-loader!./plot.device.view.html'

export default angular.module( 'campfire' ).directive(
  'plotDevice',
  [
    function() {
      return {
        restrict: 'E',
        template: plotDeviceTemplate,
        controller: 'PlotDeviceController',
        link: function( scope, element, attrs ) {
          scope.state = attrs.state;

        }
      }
    }
  ]
)
