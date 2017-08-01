import showUserInputTemplate from 'html-loader!./show.user.input.html'

export default angular.module( 'campfire' ).directive(
  'showUserInput',
  [
    '$rootScope',
    function( $rootScope ) {
      return {
        restrict: 'E',
        template: showUserInputTemplate,
        controller: 'ShowUserInputController',
        link: function( scope, element, attrs ) {
          scope.writing = false;
          scope.previewing = false;

          scope.previewDevice = function() {
            scope.previewing = !scope.previewing;
          };

          scope.editUserInput = function() {
            scope.writing = !scope.writing;
          };

          // Use once Edit is Implemented
          $rootScope.$on( 'userInputUpdated', function( event, editedInput ) {
            if ( scope.userInput.id === editedInput.id ) {
              scope.editUserInput();
            }
          } );
        }
      }
    }
  ]
)
