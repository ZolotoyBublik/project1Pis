// подсветка поста при наведении
$(".post").hover(
    function() {
        $(this).css("background", "#e0f0ff");
    },
    function() {
        $(this).css("background", "white");
    }
);

// покачивание логотипа при наведении
$("#logo").hover(
	function() {
        $(this).css("transform", "rotate(10deg)");
    },
    function() {
        $(this).css("transform", "scale(1.1,1.1)");
    },
    function() {
        $(this).css("transform", "rotate(0deg)");
    }
);
