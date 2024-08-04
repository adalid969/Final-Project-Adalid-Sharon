//click button event to trigger an alert

$(document).ready(function() {
    $("#BUY").on("click", function() {
        alert("ADDED!! THANK YOU FOR YOUR PURCHASE!");
    });
});

//click button event to trigger an alert

$(document).ready(function() {
    $("#submit").on("click", function() {
        alert("JOINED!! THANK YOU!");
    });
});


// mouse enter & mouse leave for the Shop link page
$(document).ready(function() {
    $("#shop").hover(
        function() {
            $(this).css("background-color", "#FFFF00");
            $(this).css("cursor", "pointer");
        },
        function() {
            $(this).css("background-color", "#0e0e0e");
            $(this).css("cursor","#auto");
        }
    );
});

// mouse enter & mouse leave for the Game boy Grey link page
$(document).ready(function() {
    $("#p1").hover(
        function() {
            $(this).css("background-color", "#FFFF00");
            $(this).css("cursor", "pointer");
        },
        function() {
            $(this).css("background-color", "#0e0e0e");
            $(this).css("cursor","#auto");
        }
    );
});

// mouse enter & mouse leave for the Game boy Yellow link page
$(document).ready(function() {
    $("#p2").hover(
        function() {
            $(this).css("background-color", "#FFFF00");
            $(this).css("cursor", "pointer");
        },
        function() {
            $(this).css("background-color", "#0e0e0e");
            $(this).css("cursor","#auto");
        }
    );
});

// mouse enter & mouse leave for the Game boy black link page
$(document).ready(function() {
    $("#p3").hover(
        function() {
            $(this).css("background-color", "#FFFF00");
            $(this).css("cursor", "pointer");
        },
        function() {
            $(this).css("background-color", "#0e0e0e");
            $(this).css("cursor","#auto");
        }
    );
});



$(document).ready(function() {
    $("#home").hover(
        function() {
            $(this).css("background-color", "#FFFF00");
            $(this).css("cursor", "pointer");
        },
        function() {
            $(this).css("background-color", "#0e0e0e");
            $(this).css("cursor","#auto");
        }
    );
});

$(document).ready(function() {
    $("#contact").hover(
        function() {
            $(this).css("background-color", "#FFFF00");
            $(this).css("cursor", "pointer");
        },
        function() {
            $(this).css("background-color", "#0e0e0e");
            $(this).css("cursor","#auto");
        }
    );
});

$(document).ready(function() {
    $("#about").hover(
        function() {
            $(this).css("background-color", "#FFFF00");
            $(this).css("cursor", "pointer");
        },
        function() {
            $(this).css("background-color", "#0e0e0e");
            $(this).css("cursor","#auto");
        }
    );
});



