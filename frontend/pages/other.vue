<template>
  <section class="container">
    <h1>{{title}}</h1>
    <p>{{message}}</p>
    <hr>
    <button v-on:click="hitpoint -= 50">たたかう</button>
    <p>残り体力: {{hitpoint}}</p>
    <router-link to="/">ホーム画面に戻る</router-link>
  </section>
</template>

<script>
  export default {
    data: function(){
      return {
        title: '戦闘画面',
        message: 'モンスターが現れた！',
                hitpoint: Math.floor(Math.random() * 1001),
      }
    }
  }
</script>
