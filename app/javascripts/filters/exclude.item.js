export default angular.module( 'campfire' ).filter(
  'excludeItem',
  [
    function() {
      return function( options ) {
        var arrayToFilter   =   options.arrayToFilter,
            exclude         =   options.exclude,
            filtered        =   [];

        if ( typeof exclude === 'object' ) {
          angular.forEach( arrayToFilter, function( objectInArray ) {
            if ( objectInArray.id !== exclude.id ) {
              filtered.push( objectInArray );
            }
          } );
        }
        else {
          angular.forEach( arrayToFilter, function( excludedId ) {
            if ( objectInArray.id !== excludedId ) {
              filtered.push( objectInArray );
            }
          } );
        }



        return filtered;
      };
    }
  ]
);
