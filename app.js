'use strict';
$('.buy').click(function (e) { 
    e.preventDefault();

    alert('Thank You!')
    
});

$('#right1').click(function (e) { 
    e.preventDefault();

    $('#cardhid1').hide(1000);
});

$('#right2').click(function (e) { 
    e.preventDefault();

    $('#cardhid2').hide(1000);
});



