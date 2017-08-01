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

          scope.toggleInput = function() {
            scope.writing = !scope.writing;
          };

          scope.previewDevice = function() {
            scope.previewing = !scope.previewing;
          };

          $rootScope.$on( 'newUserInputCreated', function( event, newUserInput ) {
            if ( scope.plotDevice.id === newUserInput.plot_device_id ) {
              scope.toggleInput();
            }
          } );
        }
      }
    }
  ]
)
