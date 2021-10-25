<template>
  <div id="app">
    <Nav />
    <Profile :user="user" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Nav from './components/Nav.vue';
import Profile from './components/Profile.vue';

import user from './sample/user.json'; // TODO: bind data on lifecycle function, make memoize function to prevent using up all github calls

export default Vue.extend({
  name: 'App',
  components: {
    Nav,
    Profile
  },
  data() {
    return {
      user: user
    }
  }
});
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  margin: 0 10%

</style>
