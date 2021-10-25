<template>
  <nav>
    <a href='/'>
      <img id="logo" alt="Vue logo" src="https://cdn-icons-png.flaticon.com/512/25/25231.png">
    </a>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Nav',

});

</script>

<style lang="sass">
#logo
  max-width: 2em
nav
  margin-bottom: 2em
  border-bottom: 1px solid #fff
</style>