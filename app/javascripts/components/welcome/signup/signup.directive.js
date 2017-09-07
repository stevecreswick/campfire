import signupTemplate from 'html-loader!./signup.view.html'

export default angular.module( 'campfire' ).directive(
  'signup',
  [
    function() {
      return {
        restrict: 'E',
        template: signupTemplate,
        controller: 'SignupController',
        link: function( scope, element, attrs ) {

        }
      }
    }
  ]
)
