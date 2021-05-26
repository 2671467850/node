/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-18 19:39:40
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-25 22:39:33
 */
$(function(){
	$(".cancle").click(function(){
		window.history.go(-1);
		return false;
	});

	var i = 10
	setInterval(function(){
		i -= 1;
		$('#dumiao span').html(`${i}`);
		// console.log($('#dumiao span').html());
	},1000)
	
	var time=setTimeout(function(){
		window.location.href="/admin/login";
	},10000);

})
