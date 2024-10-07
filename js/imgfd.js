// 图片点击放大
$('.showImg').on('click', function(){
	imgShow("#imgDiv", "#bigImg", $(this), "#back-curtain");
});

function imgShow(imgDiv, bigImg, _this, curtain) {
	// 图片路径
	var src = _this.attr("src");
	$(bigImg).attr("src", src);
	// 加载图片,获取当前点击图片的真实大小
	$("<img/>").attr("src", src).load(function(){
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		var realWidth = this.width;
		var realHeight = this.height;
		var imgWidth, imgHeight;
		var scale = 0.8;
		if (realHeight > windowHeight * scale) {
			imgHeight = windowHeight * scale;
			imgWidth = imgHeight / realHeight * realWidth;
			if (imgWidth > windowWidth * scale) {
				imgWidth = windowWidth * scale;
			}
		} else if (realWidth > windowWidth * scale) {
			imgWidth = windowWidth * scale;
			imgHeight = imgWidth / realWidth * realHeight;
		} else {
			imgWidth = realWidth;
			imgHeight = realHeight;
		}
		$(bigImg).css({'width':imgWidth});
		//计算图片与窗口左边距
		var left = (windowWidth - imgWidth) / 2;
		//计算图片与窗口上边距 
		var top = (windowHeight - imgHeight) / 2;
		// 图片位置
		$(imgDiv).css({'top':top, 'left':left});
		// 图片淡入
		$(curtain).fadeIn("fast");
		// 遮罩效果
		$(curtain).css({
	        'position':'fixed',
	        'overflow-y':'auto',
	        'width':'100%',
	        'height':'100%',
	  		'z-index':'998'
        }).show();
	});
	// 点击图片或遮罩，图片淡出
	$(curtain).on('click', function(){
		$(this).fadeOut("fast");
	});
}