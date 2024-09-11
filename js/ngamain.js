/** LXTX  2022-10-25 02 **/
//////////////// configs ////////////////
	
	// def_pagetype: all:查看全部  page:分页评论
	// def_pageorder: asc:顺序查看  desc:倒序查看
	var nga_js_config = {
        'vv_api' : 'https://cache.lib.mk/NGA',
        'nga_host' : 'ngabbs.com',
        'homeurl_name' : 'list.html',
        'detailurl_name' : 'tid.html',
        'def_pagetype' : 'all',
        'def_pageorder' : 'asc',
        'def_homefids' : '-7,472,843,-7955747,706,704',
        'menus': [
	        {type: 'm', num: 'new', name: '最新'},
	        {type: 'm', num: '1', name: 'M1'},
	        {type: 'm', num: '2', name: 'M2'},
	        {type: 'fid', num: '-7', name: '网事杂谈', more:'1'},
	        {type: 'fid', num: '843', name: '国际新闻', more:'1'},
	        {type: 'fid', num: '472', name: 'Cosplay', more:'1'},
	        {type: 'fid', num: '-7955747', name: '晴风村', more:'1'},
	        {type: 'fid', num: '847', name: '历史研究', more:'1'},
	        {type: 'fid', num: '704', name: '大时代', more:'1'},
	        {type: 'fid', num: '436', name: 'IT新闻', more:'1'},
	        {type: 'fid', num: '706', name: '大时代', more:'1'},
	        {type: 'fid', num: '334', name: 'PC硬件', more:'1'},
	        {type: 'fid', num: '321', name: 'DOTA2', more:'1'},
	    ]
    };

    // 首页uri
	function dr_get_homeuri(){
		var href = window.location.href,
			index = href.indexOf(nga_js_config.homeurl_name),
			index2 = href.indexOf(nga_js_config.detailurl_name),
			uri = '';

		if( index!=-1 ){
			uri = href.substring( 0, index );
		}else if( index2!=-1 ){
			uri = href.substring( 0, index2 );
		}else{
			var arr = href.split('?');
			uri = !dr_isEmpty(arr[0])?arr[0]:href;
		}

		return uri;
	}
//////////////// configs - end ////////////////

//////////////// js插件 ////////////////
/*! Lazy Load 1.9.7 - MIT license - Copyright 2010-2015 Mika Tuupola */
// https://github.com/tuupola/jquery_lazyload
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!1,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);
//Lazyload延迟加载
function dr_lazyload_init(){
    $(".box-hide").lazyload({
        placeholder : "https://cdn.jsdelivr.net/gh/xxximg/oss/img/image-pending.gif",
        effect : "fadeIn",
        threshold : 200,
        failure_limit : 10,
        skip_invisible : false
    });
}
//////////////// js插件 - end ////////////////

//////////////// 公共 ////////////////
	// 首页的列表api链接
	function dr_get_cacheapi_list_url(){
		var url = nga_js_config.vv_api,
			href = window.location.href,
			href_arr = href.split('?'),
			query = '';

		if( dr_isEmpty(href_arr) || dr_isEmpty(href_arr[1]) ){
			query = 'n=100';

			var homefids = dr_get_nga_home_fids();
			if( !dr_isEmpty(homefids) ){
				query += '&fid='+homefids;
			}
		}else{
			query = href_arr[1];
			var n = dr_getQueryVariable('n', '', 1);
			if( n===false ){
				query += '&n=100';
			}
		}

		if( query.indexOf('fid=')==-1 ){
			var m = dr_getQueryVariable('m', '', 1);
			if( m==1 || m==2 ){
				var homefids = dr_get_nga_home_fids();
				if( !dr_isEmpty(homefids) ){
					query += '&fid='+homefids;
				}
			}
		}

		url += '?'+query;
		return url;
	}
	// 帖子的内容api链接
	function dr_get_cacheapi_detail_url(id, page_type){
		page_type = page_type||'tid';
		if( dr_isEmpty(id) ){ id = 0; }
		return nga_js_config.vv_api+'?'+page_type+'='+id;
	}
	// 用户信息api链接
	function dr_get_cacheapi_user_url(id){
		if( dr_isEmpty(id) ){ id = -1; }
		return nga_js_config.vv_api+'?uid='+id;
	}

	// 获取首页链接
	function dr_get_homeurl(){
		return dr_get_homeuri()+nga_js_config.homeurl_name;
	}
	// 获取tid链接
	function dr_get_tidurl(){
		return dr_get_homeuri()+nga_js_config.detailurl_name;
	}
		// 获取站点的tid链接
		function dr_get_site_tidurl(id){
			if( dr_isEmpty(id) ){ id = 0; }
			return dr_get_tidurl()+'?tid='+id;;
		}
		// 获取站点的aid链接
		function dr_get_site_aidurl(id){
			if( dr_isEmpty(id) ){ id = -1; }
			return dr_get_tidurl()+'?aid='+id;;
		}
	function dr_get_nga_uri(){
		var nga = localStorage.getItem('dr_nga')?JSON.parse(localStorage.getItem('dr_nga')):{};
		var host = nga.host?nga.host:'';
		if( dr_isEmpty(host) ){
			host = nga_js_config.nga_host;
		}
		return 'https://'+host;
	}
	// 获取nga作者链接
	function dr_get_nga_author_url(id){
		if( dr_isEmpty(id) ){ id = -1; }
		return dr_get_nga_uri()+'/nuke.php?func=ucp&uid='+id;
	}
	// 获取nga帖子链接
	function dr_get_nga_tid_url(id){
		if( dr_isEmpty(id) ){ id = '0'; }
		return dr_get_nga_uri()+'/read.php?tid='+id;
	}
	// 判断页面类型
	function dr_get_page_type(){
		var href = window.location.href;
		if( href.indexOf(nga_js_config.detailurl_name)!=-1 ){
			if( href.indexOf('?aid=')!=-1 || href.indexOf('&aid=')!=-1 ){
				return 'aid';
			}
			return 'tid';
		}
		return 'home';
	}
	// 输出菜单
	function dr_header_echo_menu(){
		var html = '', main = '', more = '', li = '', cla = '', data_more = '0';
		$.each(nga_js_config.menus, function(index, val){
			cla = ( val.type=='m' && val.num=='new' ) ? 'm0':val.type+''+val.num;
			data_more = (!dr_isEmpty(val.more) && val.more=='1') ? '1':'0';
			li = '<li class="menu-item menu-item-'+index+' '+cla+'"><a rel="nofollow" href="#" data-type="'+val.type+'" data-num="'+val.num+'" data-more="'+data_more+'">'+val.name+'</a></li>';

			if ( data_more=='1' ) {
				more += li;
			}else{
				main += li;
			}
		});

		html = main;
		if ( more!='' ) {
			html += '<div class="menu-item menu-item-more has-sub dr-hover2show-wrap" data-hv-action="slideDown2" data-hv-type="menu-sub"><a href="javascript:;" data-type="more">更多</a><div class="menu-item-sub dr-hover2show menu-item-cont box-btn"><div class="">'+more+'</div></div></div>';
		}

		$('#nav').html(html);
	}
	// 菜单加链接
	function dr_header_menu_init(){
		var href = window.location.href,
			homeurl = dr_get_homeurl(),
			page_type = dr_get_page_type();

		var nga = localStorage.getItem('dr_nga')?JSON.parse(localStorage.getItem('dr_nga')):{};
		var cache_home = nga.homeurl?nga.homeurl:'';

		$('#logo a').attr( 'href', homeurl );

    	var has_setactive = 0;
		$("#nav li.menu-item a").each(function(){
	        var _this = $(this),
	            type = _this.attr('data-type'),
	            num = _this.attr('data-num'),
	            more = _this.attr('data-more'),
	            url = '';

	        if( type=='more' ){
	        	return true;
	        }

	        if( dr_isEmpty(type) ){ type = 'm'; }
	        if( dr_isEmpty(num) ){ num = 'new'; }
	        
	        if( type=='m' && num=='new' ){
	        	url = homeurl;
	        }else{
	        	url = homeurl+'?'+type+'='+num;
	        }
	        _this.attr( 'href', url );

	        if( page_type=='home' ){
	        	if( (href+'&').indexOf(type+'='+num+'&')!=-1 ){
	        		has_setactive = 1;
					_this.parent('li').addClass('active');
					
					if( type=='m' && num=='new' ){
			        }else{
			        	$('title').html( $('title').html()+' - '+_this.text() );
			        }
	        	}
	        }else{
	        	if( cache_home && cache_home.indexOf(type+'='+num)!=-1 ){
	        		has_setactive = 1;
					_this.parent('li').addClass('active');
	        	}
	        }
	    });

    	if( !has_setactive ){
    		$("#nav > li.menu-item:first-child").addClass('active');
    	}

    	if( $("#nav .menu-item.active").parent().parent().hasClass('menu-item-sub') ){
    		$("#nav .menu-item.active").parent().parent().parent().addClass('active');
    	}

		if( page_type=='home' ){
			// 标记首页链接
			nga.homeurl = href;
			localStorage.setItem('dr_nga', JSON.stringify(nga));
		}
	}

	// 背景色
	function dr_bgcolor_init(){
		var nga = localStorage.getItem('dr_nga')?JSON.parse(localStorage.getItem('dr_nga')):{};

		var bgr = nga.bgr?nga.bgr:'';
		var $body = $('body');
		
		if( dr_isEmpty(bgr) ){
			if( $body.hasClass('yellow') ){
				bgr = 'yellow';
			}else{
				bgr = 'white';
			}
		}

		$body.removeClass('yellow white green').addClass(bgr);

		$("#set-bgrcolor .bgrcolor").removeClass('active');
		$('#set-bgrcolor .bgrcolor[data-bgr="'+bgr+'"]').addClass('active');
	}
	$("#set-bgrcolor .bgrcolor").click(function(){
		var _this = $(this),
			bgr = _this.attr('data-bgr');
		if( _this.hasClass('disabled') ){ return; }
		_this.addClass('disabled');

		$('body').removeClass('yellow white green').addClass(bgr);

		_this.parent().children().removeClass('active');
		_this.addClass('active');

		var nga = localStorage.getItem('dr_nga')?JSON.parse(localStorage.getItem('dr_nga')):{};
		nga.bgr = bgr;
		localStorage.setItem('dr_nga', JSON.stringify(nga));

		_this.removeClass('disabled');
	});

	// nga域名
	function dr_naghost_init(){
		var nga = localStorage.getItem('dr_nga')?JSON.parse(localStorage.getItem('dr_nga')):{};

		var host = nga.host?nga.host:'';
		
		if( dr_isEmpty(host) ){
			host = nga_js_config.nga_host;
		}

		$("#set-naghost").val(host);
	}
	$("#set-naghost").change(function(){
		var _this = $(this),
			host = _this.val();
		
		if( dr_isEmpty(host) ){
			host = nga_js_config.nga_host;
		}

		host = dr_get_http_host(host);

		var nga = localStorage.getItem('dr_nga')?JSON.parse(localStorage.getItem('dr_nga')):{};
		nga.host = host;
		localStorage.setItem('dr_nga', JSON.stringify(nga));
	});

	// 设定首页“最新”里的FIDS
	function dr_get_nga_home_fids(){
		var nga = localStorage.getItem('dr_nga')?JSON.parse(localStorage.getItem('dr_nga')):{};
		var homefids = nga.homefids?nga.homefids:'';
		if( dr_isEmpty(homefids) ){
			homefids = nga_js_config.def_homefids;
		}
		if( homefids=='0' ){
			homefids = '';
		}
		return homefids;
	}
	function dr_nga_homefids_init(){
		var nga = localStorage.getItem('dr_nga')?JSON.parse(localStorage.getItem('dr_nga')):{};
		var homefids = nga.homefids?nga.homefids:'';
		$("#set-homefids").val(homefids);
	}
	$("#set-homefids").change(function(){
		var _this = $(this),
			data = _this.val(),
			new_data = '';;

		data = data.replace(/，/g, ',');
		data = data.replace(/[^-|^,|^\d]/g, '');

		if( !dr_isEmpty(data) ){
			if( data=='0' ){
				new_data = data;
			}else{
				var data_arr = data.split(',')

				$.each(data_arr, function(index, v){
					v = parseInt(v);
					if( v!=0 && !isNaN(v) ){
						new_data += v+',';
					}
				});

				if ( !dr_isEmpty(new_data) ) {
					new_data = new_data.substring(0, new_data.length-1);
				}
			}
		}

		var nga = localStorage.getItem('dr_nga')?JSON.parse(localStorage.getItem('dr_nga')):{};
		nga.homefids = new_data;
		localStorage.setItem('dr_nga', JSON.stringify(nga));
	});

	// 默认分页类型
	function dr_def_pagetype_init(){
		var nga = localStorage.getItem('dr_nga')?JSON.parse(localStorage.getItem('dr_nga')):{};

		var v = nga.pagination?nga.pagination:'';
		
		if( dr_isEmpty(v) ){
			v = nga_js_config.def_pagetype;

			nga.pagination = v;
			localStorage.setItem('dr_nga', JSON.stringify(nga));
		}

		$("#set-def-pagetype .pagetype").removeClass('active');
		$('#set-def-pagetype .pagetype[data-type="'+v+'"]').addClass('active');
	}
	$("#set-def-pagetype .pagetype").click(function(){
		var _this = $(this),
			type = _this.attr('data-type');
		if( _this.hasClass('disabled') ){ return; }
		_this.addClass('disabled');

		_this.parent().children().removeClass('active');
		_this.addClass('active');

		var nga = localStorage.getItem('dr_nga')?JSON.parse(localStorage.getItem('dr_nga')):{};
		nga.pagination = type;
		localStorage.setItem('dr_nga', JSON.stringify(nga));

		_this.removeClass('disabled');
	});

	// 默认评论顺序
	function dr_def_pageorder_init(){
		var nga = localStorage.getItem('dr_nga')?JSON.parse(localStorage.getItem('dr_nga')):{};

		var v = nga.order?nga.order:'',
			$btn2 = $("#view-sort");
		
		if( dr_isEmpty(v) ){
			v = nga_js_config.def_pageorder;

			nga.order = v;
			localStorage.setItem('dr_nga', JSON.stringify(nga));
		}

		if( $btn2.length>0 ){
			if( v=='desc' ){
				$btn2.text( $btn2.attr('data-text1') );
			}else{
				$btn2.text( $btn2.attr('data-text2') );
			}
		}

		$("#set-def-pageorder .pageorder").removeClass('active');
		$('#set-def-pageorder .pageorder[data-order="'+v+'"]').addClass('active');
	}
	$("#set-def-pageorder .pageorder").click(function(){
		var _this = $(this),
			order = _this.attr('data-order');
		if( _this.hasClass('disabled') ){ return; }
		_this.addClass('disabled');

		_this.parent().children().removeClass('active');
		_this.addClass('active');

		var nga = localStorage.getItem('dr_nga')?JSON.parse(localStorage.getItem('dr_nga')):{};
		nga.order = order;
		localStorage.setItem('dr_nga', JSON.stringify(nga));

		_this.removeClass('disabled');
	});

	// 函数
	// query:链接种的参数，如：tid=32733866&page=5
	function dr_getQueryVariable(variable, url, cutHash){
		cutHash = cutHash||0;

		if( dr_isEmpty(url) ){
			query = window.location.search.substring(1);
		}else{
			query = url.substring( url.indexOf('?') );
			query = query.substring(1);
		}

		var vars = query.split("&");
		var ret = '';
		for (var i=0;i<vars.length;i++) {
			var pair = vars[i].split("=");
			if(pair[0] == variable){
				ret = pair[1];
				// 去掉#
				if( cutHash==1 && !dr_isEmpty(ret) && ret.indexOf('#')!=-1 ){
					ret = ret.substring(0, ret.indexOf('#'));
				}
				return ret;
			}
		}
		return false;
	}
	function dr_isEmpty(obj){
		if(typeof obj === "undefined" || obj === null || obj === ""){
			return true;
		}else{
			return false;
		}
	}
	function dr_get_http_host(url){
	    if( dr_isEmpty(url) ){
	        // window.location.host会包含端口：www.xx.com:88
	        return window.location.hostname; // 不含端口
	    }

	    var hostname = '';
	    if (url.indexOf("//") > -1) {
	        hostname = url.split('/')[2];
	    } else {
	        hostname = url.split('/')[0];
	    }
	    //find & remove port number
	    hostname = hostname.split(':')[0];
	    //find & remove "?"
	    hostname = hostname.split('?')[0];
	    return hostname;
	}
	// 分页导航按钮
	function dr_paginavi( $base_link, $paged, $max_page, $p ) {
		$paged = $paged||1;
		$max_page = $max_page||1;
		$p = $p||2;

		if ( $max_page<=1 ) return '';
		if ( $paged<=0 ) $paged = 1;

		$paged = parseInt($paged);
		$max_page = parseInt($max_page);
		$p = parseInt($p);

		var $echo_paginavi = '<div class="pagination"><ul>';

		if ( $paged > 1){
			$echo_paginavi += '<li><a class="prev page-numbers" href="'+dr_changeURLPar($base_link, 'page', $paged-1)+'">«</a></li>';
		}
		if ( $paged > $p + 1 ){
			$echo_paginavi += '<li><a class="page-numbers" href="'+dr_changeURLPar($base_link, 'page', 1)+
			'">1</a></li>';
		}
		if ( $paged > 2 + $p ){
			$echo_paginavi += '<li><span class="page-numbers dots">…</span></li>';
		}
		for( $i = $paged - $p; $i <= $paged + $p; $i++ ) {
		    if ( $i > 0 && $i < $max_page ){
				if ( $i == $paged ) {
					$echo_paginavi += '<li class="active"><span class="page-numbers">'+$paged+'</span></li>';
				}else{
					$echo_paginavi += '<li><a class="page-numbers" href="'+dr_changeURLPar($base_link, 'page', $i)+'">'+$i+'</a></li>';
				}			
		    }
		}

		if ( $paged + $p +1  < $max_page ){
			$echo_paginavi += '<li><span class="page-numbers dots">…</span></li>';
		}

		if ( $max_page>1 && $paged<$max_page ){
			$echo_paginavi += '<li><a class="page-numbers" href="'+dr_changeURLPar($base_link, 'page', $max_page)+'">'+$max_page+'</a></li>';
		}else if( $paged==$max_page ){
			$echo_paginavi += '<li class="active"><span class="page-numbers">'+$max_page+'</span></li>';
		}

		if ( $paged < $max_page ){
			$echo_paginavi += '<li><a class="prev page-numbers" href="'+dr_changeURLPar($base_link, 'page', $paged+1)+'">»</a></li>';
		}

		$echo_paginavi += '</ul></div>';

		return $echo_paginavi;
	}
	function dr_changeURLPar(uri, key, value) {
	    if( dr_isEmpty(value) ) {
	        return uri;
	    }
	    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
	    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
	    if (uri.match(re)) {
	        return uri.replace(re, '$1' + key + "=" + value + '$2');
	    } else {
	        return uri + separator + key + "=" + value;
	    }
	}
	// dateTimeStamp是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上除以1000，就是十位数的时间戳。13位数的都是时间毫秒。
	// 将日期转为时间戳：new Date('2022/07/19 11:43').getTime();
	// https://blog.csdn.net/weixin_42981560/article/details/99670760
	function dr_timeago(dateTimeStamp, type){
    	var type = type||'1';

		if( dateTimeStamp.indexOf('/')!=-1 || dateTimeStamp.indexOf(':')!=-1 || dateTimeStamp.indexOf('-')!=-1 ){
			dateTimeStamp = new Date(dateTimeStamp).getTime();
		}

	    var now = new Date().getTime();   //获取当前时间毫秒
	    var diffValue = now - dateTimeStamp;//时间差
	    if( diffValue<=0 ){
	        return "刚刚";
	    }

	    //昨天的时间
		var day1 = new Date();
		day1.setDate(day1.getDate() - 1);
		var day1_ts = day1.getTime();
		//前天的时间
		var day2 = new Date();
		day2.setDate(day2.getDate() - 2);
		var day2_ts = day2.getTime();

		var datetime = new Date(dateTimeStamp);

	    if( diffValue>=365*24*3600*1000 ){
	        var Nyear = datetime.getFullYear();
	        var Nmonth = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
	        var Ndate = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
	        result = Nyear + "-" + Nmonth + "-" + Ndate;
	        
	        if( type=='3' ){
	        	var Nhour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
	        	var Nminute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
	        	var Nsecond = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
	        	result += " " + Nhour + ":" + Nminute + ":" + Nsecond;
	        }else if( type=='2' ){
	        	var Nhour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
	        	var Nminute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
	        	// var Nsecond = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
	        	result += " " + Nhour + ":" + Nminute;
	        }
	    }else if( diffValue>=3*24*3600*1000 ){
	        var Nmonth = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
	        var Ndate = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
	        var Nhour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
	        var Nminute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
	        result = Nmonth+'-'+Ndate+' '+ Nhour + ":" + Nminute;
	    }else if( dr_dateFormat('yyyy-mm-dd', datetime)==dr_dateFormat('yyyy-mm-dd', day2_ts) ){ // diffValue>=2*24*3600*1000
	    	var Nhour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
	        var Nminute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
	    	result = "前天 "+Nhour+':'+Nminute;
	    }else if( dr_dateFormat('yyyy-mm-dd', datetime)==dr_dateFormat('yyyy-mm-dd', day1_ts) ){ // diffValue>=24*3600*1000
	    	var Nhour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
	        var Nminute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
	    	result = "昨天 "+Nhour+':'+Nminute;
	    }else if( diffValue>=3600*1000 ){
	        result = parseInt(diffValue/(3600*1000)) + "小时前";
	    }else if( diffValue>=60*1000 ){
	        result = parseInt(diffValue/(60*1000)) + "分钟前";
	    }else{
	        result = parseInt(diffValue/1000)+"秒前";
	    }

	    return result;
	}
	function dr_dateFormat(format, new_date) {
	    if(!new_date){
	        date = new Date();
	    }else{
	        date = new Date(new_date);
	    }

	    var o = {
	        "m+": date.getMonth() + 1, // month
	        "d+": date.getDate(), // day
	        "h+": date.getHours(), // hour
	        "i+": date.getMinutes(), // minute
	        "s+": date.getSeconds(), // second
	        "S": date.getMilliseconds() //毫秒，1 个占位符(是 1-3 位的数字)
	    }

	    if (/(y+)/.test(format)) {
	        format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	    }

	    for (var k in o) {
	        if (new RegExp("(" + k + ")").test(format)) {
	            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
	        }
	    }
	    return format;
	}
	function dr_get_first_letter(name, tid){
		var s = '';
		if( !dr_isEmpty(name) ){
			s = name;
		}else if( !dr_isEmpty(tid) ){
			s = tid;
		}
		if( !dr_isEmpty(s) ){
			// 去除字符串中的特殊字符 (包含空格)
			s = s.replace(/[`~!@#$^\-&*()=“”_丨|{}':;',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？\s]/g, '');
			s = s.substring(0, 1);
		}
		if( !dr_isEmpty(name) ){
			return s;
		}
		return '空';
	}
//////////////// 公共 - END ////////////////

//////////////// 首页 ////////////////
	// 加载帖子列表
	function dr_load_nga_list(url){
		var Ajax = $.ajax({
			type: 'GET',
			url: url,
			dataType: 'json',
			timeout: 10000,
			success: function(res) {
				if( dr_isEmpty(res) || dr_isEmpty(res.subjects) || res.subjects.length<=0 ){
					$('title').html('error: data is empty');
					return false;
				}
				
				var data = res.subjects,
					target = $('#nga-list'),
					author_info = '', authorspan = '', nbadge_span = '', ip_span = '';
				if( data.length>0 ){
					$.each(data, function(i, v){
						// console.log(v);
						
						author_info = dr_get_obj_user_info(v, 'list');
						authorspan = '';
						if( !dr_isEmpty(author_info.authorid) ){
							authorspan = '&nbsp;&nbsp;•&nbsp;&nbsp;<span class="author"><a href="'+dr_get_site_aidurl(author_info.authorid)+'">'+author_info.name+'</a></span>';
						}

						// ip_span = '';
						// if( !dr_isEmpty(author_info.loc) ){
						// 	ip_span = '<span class="ip">&nbsp;&nbsp;•&nbsp;&nbsp;'+author_info.loc+'</span>';
						// }

						target.find('.loading').remove();
						var html = '<li class="list notice" data-num="'+(i+1)+'"><div class="avatar-table" title="'+(i+1)+'">'+author_info.avatar+'</div><div class="notice-body"><div class="no-d-flex"><div><div class="type"><h4><span class="link"><a href="'+dr_get_site_tidurl(v.tid)+'">'+v.subject+'</a></span></h4></div><div class="date clr"><span class="time" title="'+v.time+'">'+dr_timeago(v.time)+'</span>'+authorspan+ip_span+'<span class="f-r"><span class="n-badge jb-vip2">'+v.page+'</span><span class="n-badge jb-vip2 mg-l10"><a class="link" target="_blank" href="'+dr_get_nga_tid_url(v.tid)+'">原帖</a></span><span class="n-badge jb-vip2 mg-l10"><a class="link" href="'+v.cache+'">缓存</a></span></span></div></div></div></div></li>';
						target.append(html);

						var s = dr_getQueryVariable('s', '', 1)
						if( s!==false && !dr_isEmpty(s) ){
							$('title').html('搜索：'+decodeURIComponent(s));
						}
					});

					// Lazyload
					dr_lazyload_init();
				}
			},
			complete: function(XMLHttpRequest, textStatus) {
				if( textStatus != 'success' ){
					$('title').html(XMLHttpRequest.status+' '+XMLHttpRequest.statusText);
				}
				if ( textStatus == 'timeout' ) {
					Ajax.abort();
				}
			}
		});
	}

	// 菜单添加active  dr_header_menu_add_active_init(){
		
//////////////// 首页 - END ////////////////

//////////////// 帖子 ////////////////
	// 加载帖子内容
	function dr_load_nga_tid(tid){
		if( dr_isEmpty(tid) ){ tid = 0; }

		var Ajax = $.ajax({
			type: 'GET',
			url: dr_get_cacheapi_detail_url(tid, 'tid'),
			dataType: 'json',
			timeout: 10000,
			success: function(res) {
				if( dr_isEmpty(res) || dr_isEmpty(res.subject) ){
					$('title').html('error: data is empty');
					return false;
				}

				var len = (!dr_isEmpty(res) && !dr_isEmpty(res.post))?res.post.length:0,
					$tid_title = $('#tid-title'),
					$comments = $('#nga-comments'),
					cmt_num = (len-1)>0?len-1:0,
					rurl = dr_get_back_url();
				
				// 存数据
				nga_tid = res;
				nga_tid.cmt_num = cmt_num;
				nga_tid.dr_page_type = 'tid';

				// 开始输出
				$('title').html(res.subject);

				// 帖子标题
				$tid_title.find('.load-backurl').attr('href', rurl);
				$tid_title.find('.load-title').html(res.subject).attr('href', dr_get_site_tidurl(tid));
				$tid_title.find('.load-time').html( dr_dateFormat('yyyy-mm-dd hh:ii', res.time) ).attr('title', res.time);
				$tid_title.find('.load-author').html(res.authorid).attr('href', dr_get_site_aidurl(res.authorid));
				if( res.authorid=='-1' ){
					$tid_title.find('.load-anonymous').removeClass('hide');
				}
				$tid_title.find('.load-origin').attr('href', dr_get_nga_tid_url(tid)); // res.url
				$tid_title.find('.load-cache').attr('href', res.cache);
				$tid_title.find('.load-page').html(res.page);
				// 评论总数
				$('#comments-num').find('.num').html(cmt_num);
				$('#back-home').attr('href', rurl);
				$tid_title.find('.load-tid').html(tid);

				// 空帖子
				if( len<=0 ){
					$comments.find('.loading').remove();
					$('#tid-content .load-content').html('');
				}

				// 帖子内容
				if( !dr_isEmpty(res) && !dr_isEmpty(res.post) && !dr_isEmpty(res.post[0]) ){
					// 头像
					cmt_author_info = dr_get_obj_user_info(res.post[0]);
					$tid_title.find('.load-avatar').html(cmt_author_info.avatar);
					$tid_title.find('.load-author').html(cmt_author_info.letter_name);
					if( !dr_isEmpty(cmt_author_info.loc) ){
						$tid_title.find('.load-ip').removeClass('hide').find('.loc').html(cmt_author_info.loc);
					}

					var tid_content = !dr_isEmpty(res.post[0].content)?dr_rep_content(res.post[0].content):'';
					$('#tid-content .load-content').html(tid_content);
				}
				// Lazyload
				dr_lazyload_init();

				// 评论列表
				dr_load_nga_tid_comments(nga_tid);

				// 空评论时
				if( $comments.find('.loading').length>=1 ){
					$comments.find('.loading').remove();
				}

				// 显示底线
				$('#footer-line').removeClass('hide');
			},
			complete: function(XMLHttpRequest, textStatus) {
				if( textStatus != 'success' ){
					$('title').html(XMLHttpRequest.status+' '+XMLHttpRequest.statusText);
				}
				if ( textStatus == 'timeout' ) {
					Ajax.abort();
				}
			}
		});
	}
	// 加载作者评论内容
	function dr_load_nga_aid(aid){
		if( dr_isEmpty(aid) ){ aid = -1; }

		var cache_uid_url = dr_get_cacheapi_user_url(aid);
		var cache_aid_url = dr_get_cacheapi_detail_url(aid, 'aid');
		var Ajax0 = $.ajax({
			type: 'GET',
			url: cache_uid_url,
			dataType: 'json',
			timeout: 10000,
			success: function(res) {
				// console.log(res);
				if( dr_isEmpty(res) || dr_isEmpty(res.uid) ){
					$('title').html('error: data is empty');
					return false;
				}

				// 开始输出
				var name = '';
				if( !dr_isEmpty(res.name) ){
					name = res.name;
				}else{
					name = res.uid;
				}
				var subject_title = name+'发布的评论';
				$('title').html(subject_title);

				var $tid_title = $('#tid-title');

				// 帖子标题
				$tid_title.find('.h1-title').remove();

				// 头像
				author_info = dr_get_obj_user_info(res, 'uid');

				$tid_title.find('.load-avatar').html(author_info.avatar);
				$tid_title.find('.load-author').html(name).attr('href', dr_get_site_aidurl(aid)).removeAttr('target');
				if( aid=='-1' ){
					$tid_title.find('.load-anonymous').removeClass('hide');
				}
				if( !dr_isEmpty(author_info.loc) ){
					$tid_title.find('.load-ip').removeClass('hide').find('.loc').html(author_info.loc);
				}

				$tid_title.find('.load-time').html( !dr_isEmpty(res.now)?res.now:dr_dateFormat('yyyy-mm-dd hh:ii:ss') );
				$tid_title.find('.meta-page').remove();
				$tid_title.find('.load-tid-name').html('UID');
				$tid_title.find('.load-tid').html(aid);
				$tid_title.find('.load-origin').attr('href', dr_get_nga_author_url(aid));
				$tid_title.find('.load-cache').attr('href', cache_aid_url);
				$('#tid-content').remove();
				$('#author-only').remove();

				$('#back-home').attr('href', dr_get_back_url());

				// Lazyload
				dr_lazyload_init();

				// 获取用户评论
				var Ajax = $.ajax({
					type: 'GET',
					url: cache_aid_url,
					dataType: 'json',
					timeout: 10000,
					success: function(res) {
						var $comments = $('#nga-comments');

						if( dr_isEmpty(res) || dr_isEmpty(res.posts) || res.posts.length<=0 ){
							$comments.find('.loading').remove();
							$('#tid-content .load-content').html('');
							return false;
						}

						var cmt_num = res.posts.length;
						
						// 存数据
						nga_tid.authorid = aid;
						nga_tid.post = res.posts;
						nga_tid.cmt_num = cmt_num;
						nga_tid.subject = subject_title;
						nga_tid.dr_user = {};
						nga_tid.dr_user.avatar = author_info.avatar;
						nga_tid.dr_user.name = name;
						nga_tid.dr_page_type = 'aid';

						// 评论列表
						dr_load_nga_tid_comments(nga_tid, window.location.href, 'aid');

						// 评论总数
						$('#comments-num').find('.num').html(cmt_num);

						// 显示底线
						$('#footer-line').removeClass('hide');
					},
					complete: function(XMLHttpRequest, textStatus) {
						if( textStatus != 'success' ){
							// $('title').html(XMLHttpRequest.status+' '+XMLHttpRequest.statusText);
						}
						if ( textStatus == 'timeout' ) {
							Ajax.abort();
						}
					}
				});
			},
			complete: function(XMLHttpRequest, textStatus) {
				if( textStatus != 'success' ){
					$('title').html(XMLHttpRequest.status+' '+XMLHttpRequest.statusText);
				}
				if ( textStatus == 'timeout' ) {
					Ajax0.abort();
				}
			}
		});
	}

	// 填充帖子评论
	function dr_load_nga_tid_comments(res, url, page_type){
		page_type = page_type||'tid';
		var $comments = $('#nga-comments');

		if( dr_isEmpty(res) || dr_isEmpty(res.post) ){
			$comments.html('');
			return;
		}
		if( page_type=='aid' ){
			if( dr_isEmpty(res.post[0]) || dr_isEmpty(res.post[0].authorid) ){
				$comments.html('');
				return;
			}
		}else{
			if( dr_isEmpty(res.post[1]) || dr_isEmpty(res.post[1].authorid) ){
				$comments.html('');
				return;
			}
		}

		var number = 20, // 每页显示评论数量
			all = page_type=='aid'?res.post.length:res.post.length-1,
			page_all = Math.ceil(all/number),
			i_start = 1,
			i_end = all,
			comment = '',
			html = '';

		var nga = localStorage.getItem('dr_nga')?JSON.parse(localStorage.getItem('dr_nga')):{};
		var nga_pagination = nga.pagination?nga.pagination:'';

		var def_page1 = nga_pagination!='page'?-1:1;
			page = def_page1;
		if( dr_isEmpty(url) ){
			page = dr_getQueryVariable('page', '', 1);
		}else{
			page = dr_getQueryVariable('page', url, 1);
		}
		if( !page ){
			page = def_page1;
		}

		page = parseInt(page);
		if( isNaN(page) ){
			page = def_page1;
		}

		if( ( page!=-1 && page<=0 ) || ( page!=-1 && page>page_all ) ){
			page = def_page1;
		}

		if( page==-1 ){
			i_end = all;
		}else{
			i_start = number*(page-1) + 1;
			i_end = number*page;
		}

		if(page_type=='aid'){
			i_start--;
			i_end--;
		}

		var true_i = 1;
		var $view_sort = $("#view-sort");
		var view_sort = ( $view_sort.text() != $view_sort.attr('data-text1')?'asc':'desc' );
		
		// 用户评论页面数据结构特殊，应该始终默认asc排序
		if( dr_get_page_type()=='aid' ){
			view_sort = 'asc';
			$view_sort.text( $view_sort.attr('data-text1') );
		}

		if( i_end>all ){
			i_end = all;
		}

		// 输出评论
		for (var i = i_start; i <= i_end; i++) {

			if( view_sort=='asc' ){
				true_i = i;
			}else{
				true_i = all - (i-1); // i_end - (i - i_start)
			}
			// console.log(i+'.'+true_i);

			if( dr_isEmpty(res.post[true_i]) || dr_isEmpty(res.post[true_i].authorid) ){
				break;
			}

			var authorspan = '', authorclass = '', ip_span = '';

			comment = res.post[true_i];

			if(page_type=='aid'){
				authorspan = '';
				authorclass = 'author';

				if( !dr_isEmpty(comment.tid) ){
					ip_span = '<span class="origin-tidurl site n-badge jb-vip2 mg-r10"><a href="'+dr_get_site_tidurl(comment.tid)+'">帖子</a></span>';
					ip_span += '<span class="origin-tidurl origin n-badge jb-vip2 mg-r10"><a href="'+dr_get_nga_tid_url(comment.tid)+'" target="_blank">原帖</a></span>';
				}

				var avatar = nga_tid.dr_user.avatar;
				var letter_name = nga_tid.dr_user.name;
			}else{
				cmt_author_info = dr_get_obj_user_info(comment);
				if( !dr_isEmpty(cmt_author_info.loc) ){
					ip_span = '<span class="ip">'+cmt_author_info.loc+'</span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;';
				}

				// 铭牌
				authorspan = '';
				authorclass = 'guest';
				if( comment.authorid=='-1' ){
					authorspan = '<span class="n-badge jb-vip2 mg-l10 badge-anonymous">匿名</span>';
					authorclass = 'anonymous';
				}else if( res.authorid==comment.authorid ){
					authorspan = '<span class="n-badge jb-vip2 mg-l10 badge-author">作者</span>';
					authorclass = 'author';
				}

				var avatar = cmt_author_info.avatar;
				var letter_name = cmt_author_info.letter_name;
			}

			html += '<li class="notice comment '+authorclass+'" data-num="'+(page_type=='aid'?true_i+1:true_i)+'" data-authorid="'+comment.authorid+'"><div class="avatar-table" title="'+(page_type=='aid'?true_i+1:true_i)+'">'+avatar+'</div><div class="notice-body"><div class="name no-d-flex"><div><div class="meta clr"><span class="author"><a class="link" href="'+dr_get_site_aidurl(comment.authorid)+'">'+letter_name+'</a></span>'+authorspan+'<span class="f-r other">'+ip_span+'<span class="time" title="'+comment.time+'">'+dr_timeago(comment.time, '3')+'</span></span></div></div></div><div class="msg">'+dr_rep_content(comment.content)+'</div></div></li>';
		}
		// 加载评论
		$comments.find('.loading').remove();
		$comments.html(html); // append
		// Lazyload
		dr_lazyload_init();

		// 改变标题
		if(page>1){
			$('title').html( res.subject+' - 第 '+page+' 页' );
		}else{
			$('title').html( res.subject );
		}

		// 输出评论分页按钮
		if( page!=-1 ){
			var paginavi = dr_paginavi(window.location.href, page, page_all, 2);
			if( !dr_isEmpty(paginavi) ){
				$('#nga-pagination').html(paginavi).removeClass('hide');
			}
		}else{
			$('#nga-pagination').addClass('hide');
		}
	}
	// 头像
	function dr_get_obj_user_info(obj, type){
		type = type||'cmt';

		// 头像
		var ret = {
		        'authorid' : '',
		        'name' : '',
		        'letter_name' : '',
		        'avatar' : '',
		        'loc' : ''
		    },
			avatar = '', name = '', letter_name = '', first_letter = '', user;

		if( dr_isEmpty(obj) ){
			return ret;
		}

		if( type=='uid' ){
			if( dr_isEmpty(obj.uid) ){
				return ret;
			}

			user = obj;
			letter_name = obj.uid;
			ret.authorid = obj.uid;
		}else if( type=='list' ){
			if( dr_isEmpty(obj.subject) ){
				return ret;
			}

			user = obj.user;
			letter_name = obj.subject;
		}else{
			if( dr_isEmpty(obj.authorid) ){
				return ret;
			}
			
			user = obj.user;
			letter_name = obj.authorid;
			ret.authorid = obj.authorid;
		}

		if( !dr_isEmpty(user) ){
			if( !dr_isEmpty(user.name) ){
				letter_name = name = user.name;
			}

			if( !dr_isEmpty(user.avatar) ){
				avatar = '<img class="avatar avatar-40 box-hide" data-original="'+user.avatar.replace('http://', 'https://')+'">';
			}

			if( !dr_isEmpty(user.loc) && user.loc.indexOf('记录')==-1 ){
				ret.loc = user.loc;
			}

			if( !dr_isEmpty(user.uid) ){
				if( type=='list' ){
					ret.authorid = user.uid;
				}
			}
		}

		if( avatar=='' ){
			first_letter = ret.authorid=='-1'?'匿':dr_get_first_letter(letter_name, ret.authorid);
			avatar = '<span class="avatarspan avatarsp-40">'+first_letter+'</span>';
		}

		ret.name = name;
		ret.letter_name = letter_name;
		ret.avatar = avatar;

		return ret;
	}

	// 替换内容
	function dr_rep_content(str) {
		var content = str;

		// 替换img图片
		// [quote]内容1Post by内容2[img]图片链接[/img]内容3[/quote]
		content = content.replace(/\[quote\](.*?)\[\/quote\]/ig, function ($1, $2) {
			if( $2.indexOf('[/')!=-1 && $2.indexOf(']')!=-1 && $2.indexOf('Post by')!=-1 ){
				$2 = $2.replace(/\[img\](.*?)\[\/img\]/ig, function ($s1, $s2) {
					return '<span class="n-badge jb-vip2 clk-load-img cursor-pointer mg-r5" data-src="'+dr_convert_jpg2gif($s2)+'">显示图片</span>';
				});
			}
			return '[quote]'+$2+'[/quote]';
		});
		// [img]链接[/img]
		content = content.replace(/\[img\](.*?)\[\/img\]/ig, function ($1, $2) {
			return '<img class="box-hide" data-original="'+dr_convert_jpg2gif($2)+'" />';
		});

		// 替换视频、链接
		// [url=https://www.bilibili.com/video/]链接标题[/url]
		content = content.replace(/\[(url|flash)=([^\s]*)\](.*?)\[\/(url|flash)\]/ig, function ($1, $2, $3, $4) {
			return '<a target="_blank" href="'+$3+'">'+$4+'</a>';
		});
		// [url]链接[/url]
		// [flash]https://www.bilibili.com/video/[/flash]
		content = content.replace(/\[(url|flash)\](.*?)\[\/(url|flash)\]/ig, function ($1, $2, $3) {
			return '<a target="_blank" href="'+$3+'">'+$3+'</a>';
		});
		
		
		// 替换表情
		// [s:ac:茶]
		content = content.replace(/\[s:([^\[]*?)\]/ig, function ($1, $2) { return smilepath($1, $2); });
		
		// 替换quote
		// [quote][pid=123456,1234561,5]Reply[/pid] <b>Post by [uid=-1]引用者[/uid]<span class=\"gray\">(9楼)</span> (2022-07-18 09:42):</b><br/><br/>引用内容[/quote]
		// [quote][pid=123456,1234561,6]Reply[/pid] <b>Post by 引用者<span class=\"gray\">(10楼)</span> (2022-07-18 08:13):</b><br/><br/>引用内容[/quote]
		content = content.replace(/\[quote\].*?Post by (.*?)<span.*?>\(\d+楼\)<\/span> \((.*?)\):(.*?)\[\/quote\]/ig, function ($1, $2, $3, $4) { return dr_rep_quote($1, $2, $3, $4); });
		// [quote][tid=123456]Topic[/tid] <b>Post by [uid=654321]引用者[/uid] (2022-07-18 13:50):</b><br/><br/>引用内容[/quote]评论内容
		content = content.replace(/\[quote\].*?\[uid=(-?\d+)\](.*?)\[\/uid\] \((.*?)\):(.*?)\[\/quote\]/ig, function ($1, $2, $3, $4, $5) { return dr_rep_quote3($1, $2, $3, $4, $5); });

		// 替换Reply
		// <b>Reply to [pid=123456,1234561,1]Reply[/pid] Post by [uid=654321]被回复者[/uid] (2022-07-18 02:24)</b>回复内容
		content = content.replace(/(?:\[b\])?Reply to \[[p|t]id=.*?\[uid=(-?\d+)\](.*?)\[\/uid\] \((.*?)\)/ig, function ($1, $2, $3, $4) { return dr_rep_quote4($1, $2, $3, $4); });
		// <b>Reply to [pid=123456,1234561,6]Reply[/pid] Post by 被回复者<span class=\"gray\">(2楼)</span> (2022-07-18 08:14)</b>回复内容
		content = content.replace(/(?:\[b\])?Reply to \[[p|t]id=.*?\ Post by (.*?)<span.*?\(\d+楼\)<\/span> \((.*?)\)(.*?)/ig, function ($1, $2, $3) { return dr_rep_quote2($1, $2, $3); });

		// 替换quote 3
		// [quote]内容[/quote]
		content = content.replace(/\[quote\](.*?)\[\/quote\]/ig, function ($1, $2) {
			return '<blockquote>'+$2+'</blockquote>';
		});
		
		return content;
	}
	// 还原动图地址
	// https://img.nga.178.com/attachments/mon_202208/02/-7Q7i87-cd6lXlZ5rT3cSdc-7i.gif.medium.jpg
	function dr_convert_jpg2gif(str) {
		str = str.replace(/(.*?)\.gif\.medium\.jpg$/ig, function ($1, $2) {
			return $2+'.gif';
		});
		return str;
	}
	function dr_rep_quote($1, $2, $3, $4) {
		// console.log($2);
		// console.log($3);
		// console.log($4);
		
		$2 = $2.replace(/\[uid=(-?\d+)\](.*?)\[\/uid\]/ig, function ($s1, $s2, $s3) {
			var s_ret = '';
			if( dr_isEmpty($s2) ){
				s_ret = $s3;
			}else if( $s2=='-1' ){
				s_ret = $s3+'<span class="n-badge jb-vip2 mg-l10 badge-anonymous">匿名</span>';
			}else{
				s_ret = '<a href="'+dr_get_site_aidurl($s2)+'">'+$s3+'</a>';
				if( !dr_isEmpty(nga_tid.dr_page_type) && nga_tid.dr_page_type=='tid' && !dr_isEmpty(nga_tid.authorid) && nga_tid.authorid==$s2 ){
					s_ret += '<span class="n-badge jb-vip2 mg-l10 badge-author">作者</span>';
				}
			}
			return s_ret;
		});

		$4 = $4.replace(/^<\/b>(<br\s?\/?>)+/ig,'');
		$4 = $4.replace(/^(<br\s?\/?>)+/ig,'');

		var html = '<blockquote><div class="quote"><div class="quote-tt"><span class="author">'+$2+'</span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;<span class="time" title="'+$3+'">'+dr_timeago($3, '3')+'</span></div><div class="quote-cont mg-t10">'+$4+'</div></div></blockquote>';
		return html;
	}
	function dr_rep_quote3($1, $2, $3, $4, $5) {
		var s_ret = '';
		if( dr_isEmpty($2) ){
			s_ret = $3;
		}else if( $2=='-1' ){
			s_ret = $3+'<span class="n-badge jb-vip2 mg-l10 badge-anonymous">匿名</span>';
		}else{
			s_ret = '<a href="'+dr_get_site_aidurl($2)+'">'+$3+'</a>';
			if( !dr_isEmpty(nga_tid.dr_page_type) && nga_tid.dr_page_type=='tid' && !dr_isEmpty(nga_tid.authorid) && nga_tid.authorid==$2 ){
				s_ret += '<span class="n-badge jb-vip2 mg-l10 badge-author">作者</span>';
			}
		}

		$5 = $5.replace(/^<\/b>(<br\s?\/?>)+/ig,'');
		$5 = $5.replace(/^(<br\s?\/?>)+/ig,'');

		var html = '<blockquote><div class="quote"><div class="quote-tt"><span class="author">'+s_ret+'</span>&nbsp;&nbsp;&bull;&nbsp;&nbsp;<span class="time" title="'+$4+'">'+dr_timeago($4, '3')+'</span></div><div class="quote-cont mg-t10">'+$5+'</div></div></blockquote>';
		return html;
	}
	function dr_rep_quote2($1, $2, $3) {
		var html='';
		html = '<span class="replyto">回复 @'+$2+'（<span title="'+$3+'">'+dr_timeago($3, '3')+'</span>）：</span>';
		return html;
	}
	function dr_rep_quote4($1, $2, $3, $4) {
		var s_ret = '';
		if( dr_isEmpty($2) || $2=='-1' ){
			s_ret = $3;
		}else{
			s_ret = '<a href="'+dr_get_site_aidurl($2)+'">'+$3+'</a>';
			if( !dr_isEmpty(nga_tid.dr_page_type) && nga_tid.dr_page_type=='tid' && !dr_isEmpty(nga_tid.authorid) && nga_tid.authorid==$2 ){
				s_ret += '<span class="n-badge jb-vip2 mg-l10 badge-author">作者</span>';
			}
		}

		var html = '<span class="replyto">回复 <span class="author">@'+s_ret+'</span>（<span title="'+$4+'">'+dr_timeago($4, '3')+'</span>）：</span>';
		return html;
	}
	String.prototype.drReplaceAll = function(search, replace){
		return this.split(search).join(replace);
	}
	function smilepath(all, name) {
		var name_arr = name.split(':'),
			smile_class = name_arr[0],
			smile_name = name_arr[1];
		var smiles = {
			"0": {
				_______name: '默认',
				1: 'smile.gif',
				2: 'mrgreen.gif',
				3: 'question.gif',
				4: 'wink.gif',
				5: 'redface.gif',
				6: 'sad.gif',
				7: 'cool.gif',
				8: 'crazy.gif',
				32: '12.gif',
				33: '13.gif',
				34: '14.gif',
				30: '10.gif',
				29: '09.gif',
				28: '08.gif',
				27: '07.gif',
				26: '06.gif',
				25: '05.gif',
				24: '04.gif',
				35: '15.gif',
				36: '16.gif',
				37: '17.gif',
				38: '18.gif',
				39: '19.gif',
				40: '20.gif',
				41: '21.gif',
				42: '22.gif',
				43: '23.gif'
			},

			"ac": {
				_______name: 'AC娘(v1)',
				//____display:'茶    ac  晕   ac  瞎   ac  大哭  a2  喘   ac  喷   ac  鬼脸  a2  羡慕  ac  闪光  ac  blink   ac  lucky   a2  goodjob ac  惊   ac  吻   ac  不明觉厉    a2  咦   ac  汗   ac  诶嘿  a2  呆   ac  上   ac  冷   ac  偷笑  ac  有何贵干    a2  怒   a2  中枪  ac  哭1  ac  囧   ac  委屈  ac  怒   ac  哭   a2  愁   ac  抓狂  ac  黑枪  ac  反对  ac  那个… a2  哦嗬嗬嗬    a2  恨   a2  哭笑  ac  中枪  a2  囧   a2  doge    a2  自戳双目    a2  偷吃  a2  抠鼻  ac  嘲笑1 ac  冷笑  a2  壁咚  a2',
				"blink": "ac0.png",
				"goodjob": "ac1.png",
				"上": "ac2.png",
				"中枪": "ac3.png",
				"偷笑": "ac4.png",
				"冷": "ac5.png",
				"凌乱": "ac6.png",
				"吓": "ac8.png",
				"吻": "ac9.png",
				"呆": "ac10.png",
				"咦": "ac11.png",
				"哦": "ac12.png",
				"哭": "ac13.png",
				"哭1": "ac14.png",
				"哭笑": "ac15.png",
				"喘": "ac17.png",
				"心": "ac23.png",

				"囧": "ac21.png",
				"晕": "ac33.png",
				"汗": "ac34.png",
				"瞎": "ac35.png",
				"羞": "ac36.png",
				"羡慕": "ac37.png",

				"委屈": "ac22.png",
				"忧伤": "ac24.png",
				"怒": "ac25.png",
				"怕": "ac26.png",
				"惊": "ac27.png",
				"愁": "ac28.png",
				"抓狂": "ac29.png",
				"哼": "ac16.png",
				"喷": "ac18.png",
				"嘲笑": "ac19.png",
				"嘲笑1": "ac20.png",

				"抠鼻": "ac30.png",
				"无语": "ac32.png",
				"衰": "ac40.png",

				"黑枪": "ac44.png",
				"花痴": "ac38.png",
				"闪光": "ac43.png",
				"擦汗": "ac31.png",
				"茶": "ac39.png",
				"计划通": "ac41.png",
				"反对": "ac7.png",
				"赞同": "ac42.png"

			},

			"a2": {
				_______name: 'AC娘(v2)',
				//____display:'哭    ac  哦   ac  干杯  a2  干杯2 a2  冷   a2  羞   ac  惊   a2  花痴  ac  笑   a2  无语  ac  忧伤  ac  擦汗  ac  怕   ac  哼   ac  赞同  ac  心   ac  舔   a2  goodjob a2  衰   ac  计划通 ac  妮可妮可妮   a2  不活了 a2  是在下输了   a2  你为猴这么   a2  异议  a2  认真  a2  你已经死了   a2  你这种人…   a2  抢镜头 a2  yes a2  病娇  a2  你看看你    a2  poi a2  囧2  a2  威吓  a2  嘲笑  ac  jojo立   a2  jojo立2  a2  jojo立3  a2  jojo立4  a2  jojo立5  a2  凌乱  ac  吓   ac  偷笑  a2',
				"goodjob": "a2_02.png",
				"诶嘿": "a2_05.png",
				"偷笑": "a2_03.png",
				"怒": "a2_04.png",
				"笑": "a2_07.png",
				"那个…": "a2_08.png",
				"哦嗬嗬嗬": "a2_09.png",
				"舔": "a2_10.png",
				"鬼脸": "a2_14.png",
				"冷": "a2_16.png",
				"大哭": "a2_15.png",
				"哭": "a2_17.png",
				"恨": "a2_21.png",
				"中枪": "a2_23.png",
				"囧": "a2_24.png",
				"你看看你": "a2_25.png",
				"doge": "a2_27.png",
				"自戳双目": "a2_28.png",
				"偷吃": "a2_30.png",
				"冷笑": "a2_31.png",
				"壁咚": "a2_32.png",
				"不活了": "a2_33.png",
				"不明觉厉": "a2_36.png",
				"是在下输了": "a2_51.png",
				"你为猴这么": "a2_53.png",
				"干杯": "a2_54.png",
				"干杯2": "a2_55.png",
				"异议": "a2_47.png",//"逆转裁判",
				"认真": "a2_48.png",//"埼玉老师",
				"你已经死了": "a2_45.png",//"拳四郞",
				"你这种人…": "a2_49.png",//"北方栖姬",
				"妮可妮可妮": "a2_18.png",//"矢泽妮可",
				"惊": "a2_19.png",//"原田海未",
				"抢镜头": "a2_52.png",//"南小鸟",
				"yes": "a2_26.png",//"佐仓千代",
				"有何贵干": "a2_11.png",//"在下坂本",
				"病娇": "a2_12.png",//"我妻由乃",
				"lucky": "a2_13.png",//"泉此方",
				"poi": "a2_20.png",//"夕立",
				"囧2": "a2_22.png",//"樱桃小丸子",
				"威吓": "a2_42.png",//"时崎狂三",
				"jojo立": "a2_37.png",//"仗助",
				"jojo立2": "a2_38.png",//"承太郎",
				"jojo立3": "a2_39.png",//"乔斯达",
				"jojo立4": "a2_41.png",//"迪奥",
				"jojo立5": "a2_40.png"//"卡兹"

			},

			"pst": {
				_______name: '潘斯特',
				"举手": "pt00.png",
				"亲": "pt01.png",
				"偷笑": "pt02.png",
				"偷笑2": "pt03.png",
				"偷笑3": "pt04.png",
				"傻眼": "pt05.png",
				"傻眼2": "pt06.png",
				"兔子": "pt07.png",
				"发光": "pt08.png",
				"呆": "pt09.png",
				"呆2": "pt10.png",
				"呆3": "pt11.png",
				"呕": "pt12.png",
				"呵欠": "pt13.png",
				"哭": "pt14.png",
				"哭2": "pt15.png",
				"哭3": "pt16.png",
				"嘲笑": "pt17.png",
				"基": "pt18.png",
				"宅": "pt19.png",
				"安慰": "pt20.png",
				"幸福": "pt21.png",
				"开心": "pt22.png",
				"开心2": "pt23.png",
				"开心3": "pt24.png",
				"怀疑": "pt25.png",
				"怒": "pt26.png",
				"怒2": "pt27.png",
				"怨": "pt28.png",
				"惊吓": "pt29.png",
				"惊吓2": "pt30.png",
				"惊呆": "pt31.png",
				"惊呆2": "pt32.png",
				"惊呆3": "pt33.png",
				"惨": "pt34.png",
				"斜眼": "pt35.png",
				"晕": "pt36.png",
				"汗": "pt37.png",
				"泪": "pt38.png",
				"泪2": "pt39.png",
				"泪3": "pt40.png",
				"泪4": "pt41.png",
				"满足": "pt42.png",
				"满足2": "pt43.png",
				"火星": "pt44.png",
				"牙疼": "pt45.png",
				"电击": "pt46.png",
				"看戏": "pt47.png",
				"眼袋": "pt48.png",
				"眼镜": "pt49.png",
				"笑而不语": "pt50.png",
				"紧张": "pt51.png",
				"美味": "pt52.png",
				"背": "pt53.png",
				"脸红": "pt54.png",
				"脸红2": "pt55.png",
				"腐": "pt56.png",
				"星星眼": "pt57.png",
				"谢": "pt58.png",
				"醉": "pt59.png",
				"闷": "pt60.png",
				"闷2": "pt61.png",
				"音乐": "pt62.png",
				"黑脸": "pt63.png",
				"鼻血": "pt64.png"
			},

			"dt": {
				_______name: '外域三人组',
				"ROLL": "dt01.png",
				"上": "dt02.png",
				"傲娇": "dt03.png",
				"叉出去": "dt04.png",
				"发光": "dt05.png",
				"呵欠": "dt06.png",
				"哭": "dt07.png",
				"啃古头": "dt08.png",
				"嘲笑": "dt09.png",
				"心": "dt10.png",
				"怒": "dt11.png",
				"怒2": "dt12.png",
				"怨": "dt13.png",
				"惊": "dt14.png",
				"惊2": "dt15.png",
				"无语": "dt16.png",
				"星星眼": "dt17.png",
				"星星眼2": "dt18.png",
				"晕": "dt19.png",
				"注意": "dt20.png",
				"注意2": "dt21.png",
				"泪": "dt22.png",
				"泪2": "dt23.png",
				"烧": "dt24.png",
				"笑": "dt25.png",
				"笑2": "dt26.png",
				"笑3": "dt27.png",
				"脸红": "dt28.png",
				"药": "dt29.png",
				"衰": "dt30.png",
				"鄙视": "dt31.png",
				"闲": "dt32.png",
				"黑脸": "dt33.png"
			},

			"pg": {
				_______name: '企鹅',
				"战斗力": "pg01.png",
				"哈啤": "pg02.png",
				"满分": "pg03.png",
				"衰": "pg04.png",
				"拒绝": "pg05.png",
				"心": "pg06.png",
				"严肃": "pg07.png",
				"吃瓜": "pg08.png",
				"嘣": "pg09.png",
				"嘣2": "pg10.png",
				"冻": "pg11.png",
				"谢": "pg12.png",
				"哭": "pg13.png",
				"响指": "pg14.png",
				"转身": "pg15.png"
			},
			"ng":{
				"呲牙笑": "ng_1.png",
				"奸笑": "ng_2.png",
				"问号": "ng_3.png",
				"茶": "ng_4.png",
				"笑指": "ng_5.png",
				"燃尽": "ng_6.png",
				"晕": "ng_7.png",
				"扇笑": "ng_8.png",
				"寄": "ng_9.png"
			}
		}
		if( !dr_isEmpty(smile_class) && !dr_isEmpty(smile_name) && !dr_isEmpty(smiles[smile_class]) && !dr_isEmpty(smiles[smile_class][smile_name]) ){
			return '<img class="box-hide" data-original="https://img4.nga.178.com/ngabbs/post/smile/' + smiles[smile_class][smile_name] + '" />';
		}

		return all;
	}

	// 只看作者
	$("#author-only").click(function(){
		var _this = $(this);
		if( _this.hasClass('disabled') ){ return; }
		_this.addClass('disabled');

		var nga = localStorage.getItem('dr_nga')?JSON.parse(localStorage.getItem('dr_nga')):{};
		var load_v = nga.pagination?nga.pagination:'';

		if( _this.text()==_this.attr('data-text1') ){
			_this.text( _this.attr('data-text2') );
			load_v = 'author';
		}else{
			_this.text( _this.attr('data-text1') );
		}

		if( load_v=='page' ){
			dr_load_nga_tid_comments( nga_tid );
		}else{ // load_v=='author' || load_v=='all'
			dr_load_nga_tid_comments( nga_tid, dr_changeURLPar(window.location.href, 'page', '-1') );
		} 

		if( load_v=='author' ){
			$('#nga-comments li').not('.author').hide();
			$('#comments-num .num').html( $('#nga-comments li.author').length );
		}else{
			$('#comments-num .num').html(nga_tid.cmt_num);
		}

		_this.removeClass('disabled');
	});
	// 倒序查看
	$("#view-sort").click(function(){
		var _this = $(this);
		if( _this.hasClass('disabled') ){ return; }
		_this.addClass('disabled');

		if( _this.text()==_this.attr('data-text1') ){
			_this.text( _this.attr('data-text2') );
		}else{
			_this.text( _this.attr('data-text1') );
		}

		var liN = $('#nga-comments li').length;
		for(var i=liN;i>=1;i--){
			var li = $('#nga-comments li').eq(i-1);
			$('#nga-comments').append( ''+$('#nga-comments li').eq(i-1).prop("outerHTML")+'' );
			$('#nga-comments li').eq(i-1).remove();
		}

    	// Lazyload
		dr_lazyload_init();
		
		_this.removeClass('disabled');
	});
	// 显示图片
	// $(".clk-load-img").click(function(){
	$(document).on("click", ".clk-load-img", function() {
		var _this = $(this),
			src = _this.attr('data-src');
		if( _this.hasClass('disabled') || dr_isEmpty(src) ){ return; }
		_this.addClass('disabled');

		_this.after('<img src="'+src+'" />').remove();
	});
	// ajax加载评论分页
	// $(".clk-load-img").click(function(){
	$(document).on("click", "#nga-pagination .page-numbers", function(z) {
    	z.preventDefault();
		var _this = $(this),
			url = ourl = _this.attr('href');

		if( _this.hasClass('disabled') || dr_isEmpty(url) ){ return; }
		_this.addClass('disabled');

		dr_load_nga_tid_comments(nga_tid, url, dr_get_page_type());
		$('html,body').animate({scrollTop:$('#comments-num').offset().top-5}, 500);
		window.history.pushState( '', '', url );
		
		_this.removeClass('disabled');
	});

	// 获取返回首页链接
	function dr_get_back_url(){
		var nga = localStorage.getItem('dr_nga')?JSON.parse(localStorage.getItem('dr_nga')):{};
		var rurl = nga.homeurl?nga.homeurl:'';
		if( dr_isEmpty(rurl) ){
			rurl = dr_get_homeurl();
		}
		return rurl;
	}
//////////////// 帖子 - END ////////////////

$(document).ready(function(){
	// 背景色
	dr_bgcolor_init();
	// nga域名
	dr_naghost_init();
	// 首页-最新的FIDS
	dr_nga_homefids_init();
	// 默认分页类型
	dr_def_pagetype_init();
	// 默认评论顺序
	dr_def_pageorder_init();
	
	// 填充菜单名字
	dr_header_echo_menu();
	// 菜单加链接
	dr_header_menu_init();
	// 搜索
	$('#search-wrap form').attr( 'action', dr_get_homeurl() );

	var link_page_type = dr_get_page_type();
	if( link_page_type=='tid' ){
		// 加载帖子内容
		dr_load_nga_tid( dr_getQueryVariable('tid', '', 1) );
	}else if( link_page_type=='aid' ){
		// 加载作者评论内容
		dr_load_nga_aid( dr_getQueryVariable('aid', '', 1) );
	}else{
		// 菜单添加active
		
		// 加载list
		dr_load_nga_list( dr_get_cacheapi_list_url() );
	}

    // Lazyload
    dr_lazyload_init();



	// 返回顶部
    $('.roll-top').click(function(z){
    	z.preventDefault();
		$("html,body").animate({scrollTop:0},1000);
    });
    // 查看评论
    $('.roll-comment').click(function(z){
    	z.preventDefault();
		$("html,body").animate({scrollTop:$('#comments-num').offset().top-5},500);
    });
    // js-box弹窗
    $('.js-box-btn').click(function(){
    	var _this = $(this),
    		tid = _this.attr('data-tid');
    	if( dr_isEmpty(tid) ){ return; }
    	$(tid).fadeToggle(100);
    });

    // 浮入框
	$('.dr-hover2show-wrap').hover(function(){
	    var _this = $(this),
	        act = _this.attr('data-hv-action'),
	        qrid = _this.attr('data-hv-qrid'),
	        type = _this.attr('data-hv-type');

		// 下拉菜单手机端超出修正
    	if( type=='menu-sub' ){
    		var nav = $('#nav');
    		if( !(nav.hasClass('scrolled')) && nav.get()[0] .scrollWidth - nav.width()>10 ){
    			nav.addClass('scrolled');
    		}

    		// _this.children('.dr-hover2show').css( 'left', parseInt(_this.position().left)-16 );
    	}

	    _this.css('opacity','1');
	    if ( act=='slideDown' ) {
	        _this.children('.dr-hover2show').stop().slideDown();
	    }else{
	        _this.children('.dr-hover2show').stop().fadeIn();
	    }
	},function(){
	    var _this = $(this),
	        act = _this.attr('data-hv-action'),
	        type = _this.attr('data-hv-type');

	    _this.css('opacity','');
	    if ( act=='slideDown' ) {
	        _this.children('.dr-hover2show').stop().slideUp();
	    }else{
	        _this.children('.dr-hover2show').stop().fadeOut();
	    }
	});

});
