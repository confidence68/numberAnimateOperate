# 分享2个数字动画操作插件
第一个是滚动插件，scrollData.js 类似我之前博客中写的仿百度文库数字滚动效果,http://www.haorooms.com/post/jquery_gundong
和之前的区别是，这次不用图片，直接用数字滚动，参数如下

      speed : 1000,//动画速度
      num : "", //初始化值
      iniAnimate : true, //是否要初始化动画效果
      symbol : '',//默认的分割符号，千，万，千万
      dot : 0 //保留几位小数点

## 百分比增加插件
就是百分比增加动画，主要参数如下：

				  start: 0,//开始数字
				  end: null,//结束数字
					step: 1,//跳动几个
					delay: 1000,//速度
					txt: ""//单位
