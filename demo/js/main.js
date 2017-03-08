'use strict';
$(function(){
	$('#btn-rule').on('touchstart', function(){
		$('#layer').hide();
		$('#pop').show();
	});
	$('#layer').on('touchstart', '.tips-close', function(){
		$('#pop, #layer').hide();
	});
	
	$('#close').on('touchstart', function(){
		$('#pop, #layer').hide();
	});
	$('#btn-couponget').on('touchstart', function(){
		$('#pop').hide();
		var tel = $.trim($('#tel').val());
		if(!tel){
			$('.tips').html('请输入手机号码领取礼包');
			
			// $('#layer').animate({ opacity: 0 }, 500, 'ease-out');
		}else if(!/^(13[0-9]|1[4578][0-9])\d{8}$/i.test(tel)){
			$('.tips').html('手机号格式错误，请重新输入');
		}else{
			// request
			$.ajax({
				type : 'GET',
				url : 'http://gameapi.feiliu.com/',
				dataType : 'jsonp',
				data : {},
				success : function(data){
					if(data.status === 1){
						$('.tips').html('恭喜您，领取成功<br><div class="btn-go"><a href="http://www.zdsmart.cn">立即使用</a><span class="tips-close">×</span></div>');
					}
				}
			});
			// 如果领过了，也提示他去使用
			$('.tips').html('恭喜您，领取成功<br><div class="btn-go"><a href="http://www.zdsmart.cn">立即使用</a><span class="tips-close">×</span></div>');
			$('#layer').show();
			return false;
		}
		$('#layer').show();
		setTimeout(function(){
			$('#layer').hide();
		}, 1000);
		
	});
});