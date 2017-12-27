//Check off specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});


//Click on X to delete todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
	if(event.which === 13){
		//grab text to add
		var todoText = $(this).val();
		//add new todo to ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
		$(this).val("");
	}
});

$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle();
});