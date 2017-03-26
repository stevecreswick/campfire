export default angular.module( 'campfire' ).controller(
  'ShowUserInputController',
  [
    '$scope', '$rootScope', 'UserInput', '$routeParams', '$filter',
    function( $scope, $rootScope, UserInput, $routeParams, $filter ) {
      $scope.editingInput = angular.copy( $scope.userInput );

      var getSuccessDevices = function() {
        var filterOptions = {
          arrayToFilter: $scope.editingStory.plot_devices,
          exclude: $scope.plotDevice
        };

        var currentSuccessOptions = {
          arrayToFilter: $scope.editingStory.plot_devices,
          idToFind: $scope.userInput.success_id
        };

        $scope.successDevices = $filter( 'excludeItem' )( filterOptions );

        var currentSuccess          =   $filter( 'findById' )( currentSuccessOptions ),
            currentSuccessPosition  =   $scope.successDevices.indexOf( currentSuccess );

        $scope.successDevice = {
          selected: $scope.successDevices[ currentSuccessPosition ] || {}
        };
      };

      getSuccessDevices();

      $scope.updateUserInput = function() {
        $scope.editingInput[ 'success_id' ] = $scope.successDevice.selected.id;

        UserInput.updateUserInput( $scope.editingInput ).then(
          function( success ) {
            $scope.userInput = success.data

            $rootScope.$broadcast( 'userInputUpdated', success.data );
          },
          function( reason ) {
            console.error( reason );
          }
        );
      };

      $rootScope.$on( 'runSuccessDevices', function( event ) {
        getSuccessDevices();
      } );
    }
  ]
);
