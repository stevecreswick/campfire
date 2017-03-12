import newUserInputTemplate from 'html-loader!./new.user.input.html'

export default angular.module( 'campfire' ).directive(
  'newUserInput',
  [
    '$rootScope',
    function( $rootScope ) {
      return {
        restrict: 'E',
        template: newUserInputTemplate,
        controller: 'NewUserInputController',
        link: function( scope, element, attrs ) {
          scope.writing = false;
          scope.previewing = false;

          scope.showInput = function() {
            scope.writing = !scope.writing;
          };

          scope.previewDevice = function() {
            scope.previewing = !scope.previewing;
          };

          // $rootScope.$on( 'newPlotDeviceCreated', function( event, data ) {
          //   scope.$destroy();
          // } );
          //
          // scope.$on( '$destroy', function() {
          //   element.remove();
          // } );
        }
      }
    }
  ]
)
