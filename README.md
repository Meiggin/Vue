##1.插值表达式及数据绑定


```
01.01  
el指向的页面的节点元素,data指定的是数据,{{ title }}两个大括号的语法方式叫“插值表达式”;

01.02
简单数据类型、复杂数据类型、函数等都可以在插值表达式中进行显示,并且不需要写this.title,也不需要写data,我们的函数编写在methods内,直接{{ fn() }}调用即可;

01.03
v-model可以绑定data的对象值,v-on可以绑定methods下定义的方法,而v-on的缩写则是@,如@input操作;

01.04
vue中不能在任何html标签的属性值中使用{{ property }}进行设置,需要通过v-bind进行属性值的数据绑定,例如v-bind:href,而v-bind的缩写则是:,如:href操作;

01.05
v-once可以让节点渲染的时候只允许渲染一次,就算是方法里重新设置也不作更新,如果没有用v-once的话,{{ data }}将会被进行二次渲染;

01.06
如果设置的属性是一个html标签类型的内容,那么,直接用表达式方式将会输出“未加工”过的字符串内容,如果想要让其显示其html的内容形式,可以利用v-html的方式进行数据绑定;

```


##2.事件

```
02.01
事件方法编写在methods中,可以利用v-on进行对象的事件绑定,缩写则为@eventName;

02.02
如果是鼠标移动事件的绑定,可以利用v-on:mousemove进行绑定,函数中可带参数event,通过event来获取事件传递的属性;

02.03
函数的参数传递,可以将事件$event作为参数传递到函数中;

02.04
事件可附带修饰符,修饰符除了有stop、prevent、capture、native、self还有键别名enter及键代码13的修饰符;

```

##3.DOM交互

```
03.01
在DOM元素中利用表达式进行三目运算操作;

03.02
利用v-model进行双向数据的绑定;

03.03.01
将三目运算操作放置到methods方法中进行操作;

03.03.02
通过按钮直接改变变量,再调用函数实现;

03.03.03
通过计算属性,区别方法与计算属性之间的差异,操作counter的时候Computed和Methods都执行了,而secondCounter的时候却只执行了Methods函数,没有执行Computed的函数内容,是因为secondCounter操作时并没有改变counter值,所以不发生Computed值的计算操作,而且需要注意的是Computed的输出模式直接输出属性值即可,不需要函数表现方式;

03.04
利用watch可以对对象内容进行监控操作,但需要注意this对象的不同,键名是需要监控的表达式内容,键值是回调的函数;

03.05
可以将事件绑定v-on:缩写成@,可以将数据绑定v-bind:等缩写成:

```

##4.样式处理

```
04.01
可以利用:class实现样式的动态绑定;

04.02
通过computed以及对象属性的设置,可以对DOM设置Object形式的样式内容,通过条件判断到底需要调用哪一种样式内容,而对象的键名即可以是样式类名;

04.03
变量名以及对象形式的样式设置可以同时以数组的形式设置到页面的DOM对象中去;

04.04
单独样式设置可以利用:style进行操作,但是需要注意属性的书写格式将变成驼峰式编写方式,并且-符号将会去除,例如：background-color将书写成backgroundColor;

04.05
同样的,:style可以设置为数组结构形式,其中的内容既可以包含变量,也可以包含驼峰式书写方式的样式内容,并且样式中还可以调用设置的变量或者动态计算的变量值等;

```

##5.条件、循环句语

```
05.01
v-if和v-else能够实现在DOM节点中的判断操作；

05.02
如果是多DOM节点，则可以利用template进行包含，再用v-show对它进行判断是否显示与隐藏；

05.03
v-show操作节点的话，元素节点还是存在的；

05.04
v-for可以实现对象的循环；

05.05
v-for中还可以加入index下标的属性输出；


//未完待续


```
