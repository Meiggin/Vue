<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>动画</h1>
        <hr>
        <select v-model="alertAnimation" class="form-control">
            <option value="fade">Fade</option>
            <option value="slide">Slide</option>
        </select>
        <br/>
        <button class="btn btn-primary" @click="show = !show">Show Alert</button>
        <br/><br/>
        <!-- 需要将动画内容放置到transition中，但是transition只允许有一个元素内容，如果里面存有多个元素，则将会报错 -->
        <transition :name="alertAnimation">
          <!-- v-if和v-show之间的区别应该是十分明显的，一个是元素存在，一个是不存在了 -->
          <div class="alert alert-info" v-show="show">This is some info</div>
          <!--
            <div class="alert alert-info" v-if="show">This is some info</div>
          -->
        </transition>
        <!--
        在我们将data中的show属性设置为true的时候，如果transition动画中没有appear属性，那么将直接显示出元素最后结果
        我们要设置默认动画显示，则可以利用appear进行直接启动
        -->
        <transition name="fade" appear>
          <div class="alert alert-info" v-show="show">This is some info</div>
        </transition>
        <!--
        注意:slide是利用transition和animation结合的动画效果

        在一些场景中，你需要给同一个元素同时设置两种过渡动效，比如 animation 很快的被触发并完成了，而 transition 效果还没结束。在这种情况中，你就需要使用 type 特性并设置 animation 或 transition 来明确声明你需要 Vue 监听的类型。

        在我们的示例中，可以设置type进行查看，如果不设type或者设置为transition的，都会出现卡顿效果，而在设置为animation以后，就会变得顺畅
        -->
        <transition name="slide" type="animation">
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>

        <transition
          appear
          enter-class=""
          enter-active-class="animated bounce"
          leave-class=""
          leave-active-class="animated shake">
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>

        <!--
        元素之间动画切换操作

        mode:
        in-out: 新元素先进行过渡，完成之后当前元素过渡离开。
        out-in: 当前元素先进行过渡，完成之后新元素过渡进入。

        key:
        当有相同标签名的元素切换时，需要通过 key 特性设置唯一的值来标记以让 Vue 区分它们，否则 Vue为了效率只会替换相同标签内部的内容。即使在技术上没有必要，给在 <transition> 组件中的多个元素设置 key 是一个更好的实践。
        -->
        <transition :name="alertAnimation" mode="out-in">
          <div class="alert alert-info" v-if="show" key="info">This is some info</div>
          <div class="alert alert-warning" v-else key="warning">This is some warning</div>
        </transition>

        <hr>
        <!-- js hooks -->
        <button class="btn btn-primary" @click="load =!load">
        Load / Remove Element
        </button>
        <br/><br/>
        <!--
        推荐对于仅使用 JavaScript 过渡的元素添加 v-bind:css="false"，
        Vue 会跳过 CSS 的检测。这也可以避免过渡过程中 CSS 的影响。
        -->
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"

          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false"
        >
            <div style="width:100px; height:100px; background-color:green;" 
            v-if="load"></div>
        </transition>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      show:true,
      load:true,
      alertAnimation:'fade'
    }
  },
  methods:{
    beforeEnter(el){
      console.log('beforeEnter');
    },
    enter(el,done){
       console.log('enter');
       /* 
       参考mocha中的done
       当只用 JavaScript 过渡的时候， 
       在 enter 和 leave 中，回调函数 done 是必须的。 
       否则，它们会被同步调用，过渡会立即完成。
       done();
       */
    },
    afterEnter(el){
       console.log('afterEnter');
    },
    enterCancelled(el){
       console.log('enterCancelled');
    },
    beforeLeave(el){
       console.log('beforeLeave');
    },
    leave(el,done){
       console.log('leave');
       done()
    },
    afterLeave(el){
       console.log('afterLeave');
    },
    leaveCancelled(el){
       console.log('leaveCancelled');
    }
  }
}
</script>

<style>
  /*
  通过样式来控制动画效果，动画的产生主要包含进入出移出的样式控制
  在设置完样式以后设置transition的name值，设置为样式名称前缀即可
  */
  .fade-enter{
    opacity: 0;
  }

  .fade-enter-active{
    transition:opacity 1s;
  }

  .fade-leave{
    opacity: 1;
  }

  .fade-leave-active{
    transition:opacity 1s;
    opacity: 0;
  }

  /*
    我们不但可以直接使用animation，还可以将transition和animation一起结合使用
  */
  .slide-enter{
    opacity: 0;
    /*transform:translateY(20px);*/
  }

  /* 也可以利用animation直接实现多帧动画操作 */
  .slide-enter-active{
    animation:slide-in 1s forwards;
    transition:opacity .5s;
  }

  .slide-leave{

  }

  .slide-leave-active{
    animation:slide-out 1s ease-out forwards;
    transition:opacity 3s;
    opacity: 0;
  }

  @keyframes slide-in{
    from{
      transform:translateY(20px);
    }
    to{
      transform:translateY(0);
    }
  }

  @keyframes slide-out{
    from{
      transform:translateY(0);
    }
    to{
      transform:translateY(20px);
    }
  }


</style>

