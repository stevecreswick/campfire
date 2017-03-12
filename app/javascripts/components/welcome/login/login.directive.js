import loginTemplate from 'html-loader!./login.view.html'

export default angular.module( 'campfire' ).directive(
  'login',
  [
    function() {
      return {
        restrict: 'E',
        template: loginTemplate,
        controller: 'LoginController',
        link: function( scope, element, attrs ) {

        }
      }
    }
  ]
)
