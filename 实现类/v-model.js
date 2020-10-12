<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <input id="input" type="text"/>
  <div id="text"></div>

  <script>
    /*
      v-model是v-bind和v-on的语法糖。
      v-bind即model=>view，当model数据发生变化，在setter中，去触发对应组件重新生成Vnode，对比新旧虚拟树，更新差异。
      v-on即view=>model,view操作后，触发事件，调用回调函数，在回调函数中更新model
    */
   /*
    Model 改变 View的过程： 依赖于ES5的object.defindeProperty，通过 defineProperty 实现的数据劫持，
    getter 收集依赖，setter 调用更新回调（不同于观察者模式，是发布订阅 + 中介）
    View 改变 Model的过程： 依赖于 v-model ,该语法糖实现是在单向数据绑定的基础上，增加事件监听并赋值给对应的Model
   */
    let input = document.getElementById("input");
    let text = document.getElementById("text");
    let data = { value: "" };
    // let changeName = new Proxy(data, {
    //   set(obj, name, value){
    //     console.log(obj, name, value)
    //     obj[name] = value;
    //     render()
    // })
    Object.defineProperty(data, "value", {
      set: function (val) {
        render()
      },
      get: function () {
        return input.value;
      }
    });
    input.onkeyup = function (e) {
      data.value = e.target.value;
      // changeName[name] = data.value
    };
    function render () {
      text.innerHTML = val;
      input.value = val;
    }
  </script>

</body>

</html>
