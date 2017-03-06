import plotDeviceTemplate from 'html-loader!./plot.device.view.html'

export default angular.module( 'campfire' ).directive(
  'plotDevice',
  [
    function() {
      return {
        restrict: 'E',
        template: plotDeviceTemplate,
        controller: 'PlotDeviceController',
        // scope: {
        //   title: '@',
        //   message: '@',
        //   state: '@'
        // },
        link: function( scope, element, attrs ) {
          scope.state = attrs.state;

          scope.addingChild = false;

          scope.addChild = function() {
            console.log('adding');
            scope.addingChild = !scope.addingChild
          };

          scope.toggleEdit = function() {
            attrs.state === 'editing' ?
              scope.state = 'authoring' :
              scope.state = 'editing';
          };
        }
      }
    }
  ]
)
