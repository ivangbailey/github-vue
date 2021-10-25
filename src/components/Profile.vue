<template>
  <div>
    <aside>
      <img id="avatar" :src="user.avatar_url" />
      <h3>
        {{user.login || 'Unable to find user'}}
      </h3>
      <Repositories :repos="repos" @setActiveRepo="setActiveRepo"/>
    </aside>

    <Repository :repo="getActiveRepo()"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Repositories from './Repositories.vue';
import Repository from './Repository.vue';

import repos from '../sample/user-repos.json';

export default Vue.extend({
  name: 'Profile',
  components: {
    Repositories,
    Repository
  },
  data() {
    return {
      repos,
      activeRepo: -1
    }
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    getActiveRepo() {
      if (this.activeRepo >= 0 && this.activeRepo < this.repos.length) {
        return this.repos[this.activeRepo];
      }
      return {};
    },
    setActiveRepo(index: number) {
      this.activeRepo = index;
      console.log('repo:', this.getActiveRepo());
    }
  }
});
</script>

<style lang="sass">
aside
  display: inline-block
  position: relative
  margin-right: 2em

#avatar
  width: 4em
  height: 4em
  border-radius: 50%

</style>