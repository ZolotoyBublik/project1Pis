var foldBtns = document.getElementsByClassName("fold-btn");


// Неэлегантный вариант:

// for (var i = 0; i<foldBtns.length; i++){
// 	foldBtns[i].addEventListener("click", function(e) {
// 		if (e.target.className == "fold-button folded"){
// 			e.target.innerHTML = "Свернуть";
// 			e.target.className = "fold-button";
// 			var displayState = "block";
// 		}
// 		else{
// 			e.target.innerHTML = "развернуть";
// 			e.target.className = "fold-button folded";
// 			var displayState = "none";
// 		}
// 		event.target
// 		.parentElement
// 		.getElementsByClassName('article-author')[0]
// 		.style.display = displayState;
// 		event.target
// 		.parentElement
// 		.getElementsByClassName('article-created-date')[0]
// 		.style.display = displayState;
// 		event.target
// 		.parentElement
// 		.getElementsByClassName('article-text')[0]
// 		.style.display = displayState;
// 	});
// }

// Задача - элегантный вариант

for (var i = 0; i < foldBtns.length; i++) {
    foldBtns[i].addEventListener('click', function(e) {
        var onePost = e.target.parentElement.parentElement;

        if (onePost.className.indexOf('folded') !== -1) {
            onePost.className = 'one-post';
            e.target.innerHTML = 'Свернуть';
        } else {
            onePost.className = 'one-post folded';
            e.target.innerHTML = 'Развернуть';
        }
    });
}
