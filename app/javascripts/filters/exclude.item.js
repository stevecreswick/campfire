export default angular.module( 'campfire' ).filter(
  'excludeItem',
  [
    function() {
      return function( options ) {
        var arrayToFilter   =   options.arrayToFilter,
            exclude         =   options.exclude,
            filtered        =   [];

        angular.forEach( arrayToFilter, function( objectInArray ) {
          if ( objectInArray.id !== exclude.id ) {
            filtered.push( objectInArray );
          }
        } );

        return filtered;
      };
    }
  ]
);
