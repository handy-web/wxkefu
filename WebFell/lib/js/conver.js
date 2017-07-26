$(function() {
	$("#datepicker1,#datepicker2,#datepicker_visit,#solidata1,#solidata2").datepicker({
		dateFormat: "yy-mm-dd"
	});
	$('.wall').jaliswall({
		item: '.article'
	});
	$(".line-text").each(function() {
		//火狐兼容
		if(isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
			str = $(".line-text,.line-pt").text().substr(0, 26) + " ...";
			$(".line-text,.line-pt").text(str);
		}
		$(this).css('width', '100%');
		$('.line-pt').css('width', '100%');
	});
	$('.item-btn-sc').click(function() {
		$('.bow-row').css('left', ($(window).width() - $('.bow-row').outerWidth()) / 2 + 'px');
		$('.bow-row').css('top', ($(window).height() - $('.bow-row').outerHeight()) / 2 + 'px');
		$('.bow').addClass('bow-act');
		$('.cnt-close-mt').click(function() {
			$('.bow').removeClass('bow-act');
		});
	});
	$('.item-btn-lok').click(function() {
		$('.bow-img').css('height', $(window).height() - $('.main-header').outerHeight() - $('.bow-titel').outerHeight() - 5 + 'px');
		$('.bow-all').css('max-height', $(window).height() - $('.main-header').outerHeight() - $('.bow-titel').outerHeight() + 'px');

		$('.bow-cen').css('height', $(window).height() - $('.main-header').outerHeight() + 'px');
		$('.bow-cen').css('margin-top', $('.main-header').outerHeight() / 2 + 'px');
		//$('.bow-cen').css('max-width',($('.cnt-wit-img').outerWidth()) * 3 + 28 + 'px');
		$('.bow-cen').css('width', ($(window).height() - $('.main-header').outerHeight() - $('.bow-titel').outerHeight() - 5) * 0.619257485 * 3 + 28 + 'px');
		$('.cnt-post').css('width', ($(window).height() - $('.main-header').outerHeight() - $('.bow-titel').outerHeight() - 5) * 0.619257485 + 'px');
		$('.bow-box').addClass('bow-actbox');
		$('.bow-close').click(function() {
			$('.bow-box').removeClass('bow-actbox');
		});
		//当图片的数量为2张以下时，图片居中
		if($('.bow-img').size() < 2 || $('.bow-img').size() == 2) {
			$('.bow-all').addClass('customer-page-item');
		} else {
			$('.bow-img').css('display', 'inline-block');
		}
	});
	//临床诊断选择
	$('.cnt-actm').click(function() {
		$('.cnt-czd').addClass('cnt-actzd');
		$('.cnt-czd').css('top', ($(window).height() - $('.cnt-czd').outerHeight()) / 2 + 'px');
		$('.cnt-zd-lose').click(function() {
			$('.cnt-czd').removeClass('cnt-actzd');
		});
	});
	//点击添加
	$('.cnt-add').click(function() {
		$('.cnt-cus').addClass('cnt-actcus');
		$('.cnt-cus').css('top', ($(window).height() - $('.cnt-cus').outerHeight()) / 2 + 'px');
		$('.cnt-butt-lose').click(function() {
			$('.cnt-cus').removeClass('cnt-actcus');
		});
	});
	//接入
	$('.main-sent').click(function() {
		$('.sent-sub').addClass('active');
		$('.mask').show();
		$('.cent-box',window.parent.document).css('z-index','3');
		$('.sent-sub').css('top',($(window).height() - $('.sent-sub').outerHeight()) / 2 + 'px');
		$('.wx-btn a,.bord-close').click(function(){
			$('.sent-sub').removeClass('active');
			$('.mask').hide();
			$('.cent-box',window.parent.document).css('z-index','0');
		});
	});
});