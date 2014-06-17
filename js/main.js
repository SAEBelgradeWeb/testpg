$(document).ready(function(){
	$('.kruzic').on('mouseover', function(){
		$(this).parent('li').siblings('li').find('.natpis').removeClass('show');
		$(this).next('div').addClass('show');
	})
});