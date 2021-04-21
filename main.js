$(document).ready(function(){
    $( '.top' ).click( function() {
        $( 'html, body' ).animate( { scrollTop : 0 }, 600 );
        return false;
    } );
}
 );


function tick(){
$('#ticker li:first').slideUp( function () { $(this).appendTo($('#ticker')).slideDown(); });
}
setInterval(function(){ tick () }, 1500);