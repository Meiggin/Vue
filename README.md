1.插值表达式及数据绑定


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


2.事件

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