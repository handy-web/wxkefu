$('.select').on('click', '.placeholder', function(e) {
	var parent = $(this).closest('.select');
	//alert(parent)
	if (!parent.hasClass('is-open')) {
		parent.addClass('is-open');
		$('.select.is-open').not(parent).removeClass('is-open');
	} else {
		parent.removeClass('is-open');
	}
	e.stopPropagation();
}).on('click', 'ul>li', function() {
	var parent = $(this).closest('.select');
	parent.removeClass('is-open').find('.placeholder').text($(this).text());
});

//監控裡面的下拉框（）
$('.motor-select').on('click', '.motor-pla', function(e) {
	var parent = $(this).closest('.motor-select');
	//alert(parent)
	if (!parent.hasClass('is-open')) {
		parent.addClass('is-open');
		$('.select.is-open').not(parent).removeClass('is-open');
	} else {
		parent.removeClass('is-open');
	}
	e.stopPropagation();
}).on('click', 'ul>li', function() {
	var parent = $(this).closest('.motor-select');
	parent.removeClass('is-open').find('.motor-pla').text($(this).text());
//	$(this).addClass('act').siblings().removeClass('act');
});

$('body').on('click', function() {
	$('.select.is-open').removeClass('is-open');
});



//公用模块
$('.sub-line').on('click', '.sub-row', function(e) {
	var parent = $(this).closest('.sub-line');
	if (!parent.hasClass('is-sub')) {
		parent.addClass('is-sub');
		$('.sub-line.is-sub').not(parent).removeClass('is-sub');
	} else {
		parent.removeClass('is-sub');
	}
	e.stopPropagation();
}).on('click', 'ul>li', function() {
	var parent = $(this).closest('.sub-line');
	parent.removeClass('is-sub').find('.sub-row').text($(this).text());
});
$('body').on('click', function() {
	$('.sub-line.is-sub').removeClass('is-sub');
});




