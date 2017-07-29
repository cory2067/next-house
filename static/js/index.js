$(document).ready(function(){
	$('#culture').on('mouseenter', function () {
		$("#cultureDrop").addClass('show');
	});
	$('#culture').on('mouseleave', function () {
		$("#cultureDrop").removeClass('show');
	});

	$('#housing').on('mouseenter', function () {
		$("#housingDrop").addClass('show');
	});
	$('#housing').on('mouseleave', function () {
		$("#housingDrop").removeClass('show');
	});
});
