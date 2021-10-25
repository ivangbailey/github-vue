<template>
  <div id="repos">
    <span>
      Repositories
    </span>
    <ul>
      <li v-for="(repo, index) in repos" :key="repo.id" @click="$emit('setActiveRepo', index)">
        {{repo.name}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Repositories',
  props: {
    repos: {
      type: Array,
      required: true
    }
  }
});

</script>

<style lang="sass">
#repos
  ul
    block-size: fit-content
    width: fit-content
    list-style: none
    padding: 0
    margin-left: 0
    outline: 1px solid grey
    border-radius: 3px
  li
    margin: .5em 0
    padding: .5em 1em
  li:hover
    cursor: pointer
    background-color: #e8e8e8

  // padding-left: 0
</style>