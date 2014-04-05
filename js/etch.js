$(document).ready(function () {
	addDiv(16);
	$("div").on("mouseenter", ".square", function () {
		$(this).addClass("coloured");
	});
	$("button").on("click", function () {
		var selectNum = prompt("Please enter number for grid size");
		$("div").removeClass("coloured");
		$(".square").remove();
		addDiv(selectNum);
	});
	});


function addDiv(number) {
	var divWidth = (600 - (number * 2)) / number;
	var divNumber = number;
	for (var i = 1; i <= divNumber * divNumber; i++) {
		$(".box").append('<div class="square"></div>')
	}
	$(".square").width(divWidth);
	$(".square").height(divWidth);
}