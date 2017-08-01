import editPlotDeviceTemplate from 'html-loader!./edit.plot.device.view.html'

export default angular.module( 'campfire' ).directive(
  'editPlotDevice',
  [
    '$rootScope',
    function( $rootScope ) {
      return {
        restrict: 'E',
        template: editPlotDeviceTemplate,
        controller: 'EditPlotDeviceController',
        link: function( scope, element, attrs ) {
          scope.state = attrs.state || 'authoring';
          scope.addingChild = false;

          scope.addChild = function() {
            scope.addingChild = !scope.addingChild
          };

          scope.toggleEdit = function() {
            scope.state === 'editing' ?
              scope.state = 'authoring' :
              scope.state = 'editing';
          };

          $rootScope.$on( 'plotDeviceUpdated', function( event, updatedDevice ) {
            if ( updatedDevice.id === scope.plotDevice.id ) {
              scope.toggleEdit();
            }
          } );
        }
      }
    }
  ]
)
