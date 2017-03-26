export default angular.module( 'campfire' ).controller(
  'NewUserInputController',
  [
    '$scope', '$rootScope', 'UserInput', '$routeParams', '$filter',
    function( $scope, $rootScope, UserInput, $routeParams, $filter ) {
      $scope.newUserInput = {};

      var filterOptions = {
        arrayToFilter: $scope.editingStory.plot_devices,
        exclude: $scope.plotDevice
      };

      // When a new plot device is created, it is not added to success Devices
      var getSuccessDevices = function() {
        $scope.successDevices = $filter( 'excludeItem' )( filterOptions );

        $scope.successDevice = {
          selected: $scope.successDevices[ 0 ] || {}
        };
      };

      getSuccessDevices();

      $scope.requireStatRoll = false;

      $scope.createNewUserInput = function() {
        if ( !$scope.requireStatRoll ) {
          $scope.newUserInput.passValue = 0;
          $scope.newUserInput[ 'plot_device_id' ] = $scope.plotDevice.id;
          $scope.newUserInput[ 'success_id' ] = $scope.successDevice.selected.id;

          UserInput.createInput( $scope.newUserInput ).then(
            function( success ) {
              $rootScope.$broadcast( 'newUserInputCreated', success.data );
              $scope.newUserInput = {};
            },
            function( error ) {
              console.log('error ', error);
            }
          );
        }
      };

      $rootScope.$on( 'runSuccessDevices', function( event ) {
        getSuccessDevices();
      } );
    }
  ]
);
