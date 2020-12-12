$( ".slider round" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
      $( "body" ).removeClass( "dark" );
      $( ".slider round" ).text( "OFF" );
    } else {
      $( "body" ).addClass( "dark" );
      $( ".slider round" ).text( "ON" );
    }
});