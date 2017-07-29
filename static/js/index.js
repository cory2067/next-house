$(document).ready(function(){
	$('#culture').on('mouseenter', function () {
		$("#cultureDrop").addClass('show');
	});
	$('#culture').on('mouseleave', function () {
		$("#cultureDrop").removeClass('show');
	});
});
