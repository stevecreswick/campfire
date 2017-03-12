import newPlotDeviceTemplate from 'html-loader!./new.plot.device.html'

export default angular.module( 'campfire' ).directive(
  'newPlotDevice',
  [
    '$rootScope',
    function( $rootScope ) {
      return {
        restrict: 'E',
        template: newPlotDeviceTemplate,
        controller: 'NewPlotDeviceController',
        link: function( scope, element, attrs ) {
          $rootScope.$on( 'newPlotDeviceCreated', function( event, data ) {
            scope.$destroy();
          } );

          scope.$on( '$destroy', function() {
            element.remove();
          } );
        }
      }
    }
  ]
)
