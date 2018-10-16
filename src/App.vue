<template>
  <div>
    <h1>{{ msg }}</h1>
    <div v-my-directive>
      Q. 플러그인을 여러개 적용시 같은 프로퍼티 이름을 사용하면 어떻게 될까?
      <p v-if="isAnswerHide">
        <button @click="showAnswer">정답보기</button>
      </p>
      <p v-else>
        (콘솔 로그 확인) <br>
        전체적으로 나중에 적용(use)한 플러그인의 프로퍼티들이 적용된다. <br>
        mixin의 lifecycle훅은 mixin의 속성 처럼 merge됨
      </p>
    </div>
  </div>
</template>

<script>
/*
  * 플러그인 가이드 => https://vuejs.org/v2/guide/plugins.html
  * 한글 => https://kr.vuejs.org/v2/guide/plugins.html
  */
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello vue.js',
      isAnswerHide: true
    }
  },
  /*
  directives : { 
    'my-directive': function (el, binding) {
      console.log('(루트)컴포넌트의 my-directive');
    }
  },
  */
  mounted() {
    // Vue.myGlobalMethod();
    this.mixinMethod();
    this.$myInstanceMethod();
  },
  methods: {
    showAnswer: function(){
      this.isAnswerHide = false;
    }
  }

}
</script>

<!--
<style>
</style>
-->
