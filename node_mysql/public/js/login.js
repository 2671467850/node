/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-22 10:35:23
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-23 17:45:45
 */
$('header .login').onclick = function (e) {
  e.stopPropagation()
}
$("#loginForm").validate({
  rules: {
    username: {
      required: true,
      minlength: 3
    },
    password: "required",
  }
})
$('#loginBtn').click(function () {
  // console.log("aaa")
  let flag = $("#loginForm").valid();
  if (!flag) {
    return;
  }
  let username = $('#username').val()
  let password = $('#password').val()
  $.post('/admin/login',{username,password}).then(data=>{
    if(data.code==0){
      location.href = '/admin/index'
    }else{
      alert(data.msg)
      // layer.msg(data.msg)
      location.href = '/admin/login?type='+data.code;
    }
  })
})






















// document.addEventListener('click', function(){
//   $('.flip-modal').style.display = 'none'
// })



// $('.modal-login form').addEventListener('submit', function(e){
//   e.preventDefault()
//   if(!/^\w{3,8}$/.test($('.modal-login input[name=username]').value)){
//     $('.modal-login .errormsg').innerText = '用户名需输入3-8个字符，包括字母数字下划线'
//     return false
//   }
//   if(!/^\w{6,10}$/.test($('.modal-login input[name=password]').value)){
//     $('.modal-login .errormsg').innerText = '密码需输入6-10个字符，包括字母数字下划线'
//     return false
//   }
//   this.submit()
// })

// $('.modal-register form').addEventListener('submit', function(e){
//   e.preventDefault()
//   if(!/^\w{3,8}$/.test($('.modal-register input[name=username]').value)){
//     $('.modal-register .errormsg').innerText = '用户名需输入3-8个字符，包括字母数字下划线'
//     return false
//   }
//   if(/^hunger$|^ruoyu$/.test($('.modal-register input[name=username]').value)){
//     $('.modal-register .errormsg').innerText = '用户名已存在'
//     return false
//   }
//   if(!/^\w{6,10}$/.test($('.modal-register input[name=password]').value)){
//     $('.modal-register .errormsg').innerText = '密码需输入6-10个字符，包括字母数字下划线'
//     return false
//   }
//   if($('.modal-register input[name=password]').value !== $('.modal-register input[name=password2]').value){
//     $('.modal-register .errormsg').innerText = '两次输入的密码不一致'
//     return false
//   }
//   this.submit()
// })
