export default angular.module( 'campfire' ).filter(
  'findById',
  [
    function() {
      return function( options ) {
        var arrayToFilter   =   options.arrayToFilter,
            idToFind        =   options.idToFind,
            returned        =   null;

        angular.forEach( arrayToFilter, function( objectInArray ) {
          if ( objectInArray.id === idToFind ) {
            returned = objectInArray;
          }
        } );

        if ( returned ) {
          return returned;
        }
        else {
          console.log( 'Object with ID ', idToFind, ' not found.');
        }
      };
    }
  ]
);
