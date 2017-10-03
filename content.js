


// $( document ).dblclick(function() {
//     alert( "Handler for .dblclick() called." );
//   });

// (function() { 

//         // how many milliseconds is a long press?
//         var longpress = 1000;
//         // holds the start time
//         var start;

//         jQuery( document ).on( 'mousedown', function( e ) {
//             start = new Date().getTime();

//         } );

//         jQuery( document ).on( 'mouseleave', function( e ) {
//             start = 0;
//         } );

//         jQuery( document ).on( 'mouseup', function( e ) {
//             if ( new Date().getTime() >= ( start + longpress )  ) {
//                alert($(event.target).text());  

//             } else {
//                return   
//             }
//         } );

//     }());



$(document).mousedown(function (e) {
    clearTimeout(this.downTimer);
    this.downTimer = setTimeout(function () {
        // do your thing 
        s = window.getSelection();
        var range = s.getRangeAt(0);
        var node = s.anchorNode;
        while (range.toString().indexOf(' ') != 0) {
            range.setStart(node, (range.startOffset - 1));
        }
        range.setStart(node, range.startOffset + 1);
        do {
            range.setEnd(node, range.endOffset + 1);

        } while (range.toString().indexOf(' ') == -1 && range.toString().trim() != '' && range.endOffset < node.length);
        var str = range.toString().trim();
        var urlapi =  "https://wordsapiv1.p.mashape.com/words/"+str;
        // $.ajax({
        //     type: 'GET',
        //     url: "https://wordsapiv1.p.mashape.com/words/"+str,
        //     dataType: 'json',
        //     headers: {'X-Mashape-Key':"5Sg60YBQ3AmshTSmC0BonU3TtaQLp1W3RjNjsnYxrlx8FOlODR"}
           
        //   }).done(function(data) { 
        //     alert(data);
        // });
        
        $.ajax({
            type: "GET",
            url:  urlapi,
            headers: {'X-Mashape-Key':"5Sg60YBQ3AmshTSmC0BonU3TtaQLp1W3RjNjsnYxrlx8FOlODR"},
            success: function (rooms) { 
                alert(rooms);
            }
    });


        
    }, 2000);
}).mouseup(function (e) {
    clearTimeout(this.downTimer);
});

   
    