/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-23 15:54:13
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-23 20:59:56
 */
var table = layui.table;
//转换静态表格
table.init('demo', {
  height: 500 //设置高度
  , limit: 10 //注意：请务必确保 limit 参数（默认：10）是与你服务端限定的数据条数一致
  //支持所有基础参数
  , toolbar: '#toolbarDemo'
});
// 弹出层页面
var addHtml = 
'<form id="form1" class="layui-form" style="width:460px; margin-top: 20px;">\
    <div class="layui-form-item">\
      <label class="layui-form-label">用户名</label>\
      <div class="layui-input-block">\
        <input type="text" name="P_NAME" lay-verify="title" autocomplete="off" placeholder="请输入用户名" class="layui-input">\
      </div>\
    </div>\
    <div class="layui-form-item">\
      <label class="layui-form-label">性别</label>\
      <div class="layui-input-block">\
        <input type="text" name="P_ROLE" lay-verify="title" autocomplete="off" placeholder="请输入性别" class="layui-input">\
      </div>\
    </div>\
    <div class="layui-form-item">\
      <label class="layui-form-label">密码</label>\
      <div class="layui-input-block">\
        <input type="text" name="P_DESC" lay-verify="title" autocomplete="off" placeholder="请输入密码" class="layui-input">\
      </div>\
    </div>\
</form>';
//触发事件
table.on('toolbar(demo)', function (obj) {
  var checkStatus = table.checkStatus(obj.config.id);
  switch (obj.event) {
    case 'add':
      layer.open({
        type: 1,
        title: '新增',
        content: addHtml,
        area: ['500px', '420px'],
        btn: ['提交', '取消'],
        yes: adduser
      });
      break;
    case 'delete':
      layer.msg('删除');
      break;
    case 'update':
      layer.msg('编辑');
      break;
  };
});
// 复选框
// table.on('checkbox(demo)', function (obj) {
//   console.log(obj); //当前行的一些常用操作集合
//   console.log(obj.checked); //当前是否选中状态
//   console.log(obj.data); //选中行的相关数据
//   console.log(obj.type); //如果触发的是全选，则为：all，如果触发的是单选，则为：one
// });

function adduser(layIndex, layero) {
  var oldData = table.cache['demo'];//获得当前页面的原始数据
  // console.log(oldData)
  let inputs = layero.find('input');
  //用户名
  let username = inputs[0].value
  let sex = inputs[1].value
  let password = inputs[0].value
  let newData = { username, sex, password }
  // console.log(newData)
  if (username != '' && sex != '' && password != '') {
    $.post('/admin/add', newData)
    oldData.push(newData)
    table.reload("demo", {
      data: oldData   // 将新数据重新载入表格
    })
    layer.closeAll();
    layer.msg('添加成功');
  } else {
    layer.msg('请填写数据')
  }
}