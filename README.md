Show
========================
一个简单的动画插件，基于Jquery.

使用方法
------------------------
###
      <div class="test">
			  <div class="title1" _left="100px"  _opacity=1 _speed=2000 item="show-3">
				  <h2>文艺小清新</h2>
				  <p>竟在豆瓣小站</p>
			  </div>
        <img class="t1" src="./ipad.png" item="show-1" _opacity=1 next="show-2" _top="70px" _speed=2000/>
        <img class="t2" src="./iphone.png" sub="show-2" _opacity=1 _top="240px" _speed=2000/>            
  			<div class="title2"  _right="100px"  _opacity=1 _speed=2000 item="show-4">
  				<h2>文艺小清新</h2>
  				<p>竟在豆瓣小站</p>
  			</div>
      </div>
### 标签参数
    item    组名(show-id)
    sub     子组名(show-id)
    next    当前动画完成后，进入组动画（show-id）
    _speed  动画速度（毫秒）
    _Attr   属性结束值（top:1,_top:100）->(top将以_speed的速度变化到100)
### 调用函数
    /**
     * 载入动画
     */
    $(".test").showIn();
###
    /**
     * 收回动画
     */
    $(".test").showOut();
