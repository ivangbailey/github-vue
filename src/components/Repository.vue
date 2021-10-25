<template>
  <main>
    <template v-if="repo.name">
      <div id="header">
        <h2>{{repo.name}}</h2>
        <em>
          <span class="lighten">
            <a :href="repo.html_url">
              {{repo.full_name}}
            </a>
          </span>
        </em>
      </div>

      <div id="tabs">
        <div id="tab-container">
          <button v-for="(tab, index) in tabs" :key="index" class="tab" @click="setActiveTab(index)">
            <span :class="{strong: isActive(index)}" >
              {{tab.name}}
            </span>
          </button>

        </div>
        <div id="tab-content">
          <h3>
            Description
          </h3>
          <p>
            {{repo.description || 'No description available for this project.'}}
          </p>
          <br />
          <h4>
            Latest update:
          </h4>
            <ul>
               <li>{{localeDate(repo.updated_at)}}</li>
            </ul>
          <h4>
            Languages
          </h4>
          <ul v-if="repo.topics.length > 0">
            <li v-for="topic in repo.topics" :key="topic">
              {{topic}}
            </li>
          </ul>
          <span v-else>
            No language data found
          </span>
        </div>
      </div>

    </template>
    <!-- renders if there is no active repo is selected -->
    <template v-else>
      <p>Select a Repository to Vue it!</p>
    </template>

  </main>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Repository',
  props: {
    repo: Object
  },
  data() {
    return {
      activeTab: 0,
      tabs: [
        {
          name: 'About'
        },
        {
          name: 'Actions'
        },
        {
          name: 'Contributors'
        }
      ]
    }
  },
  methods: {
    isActive(tabId: number) {
      return tabId === this.activeTab;
    },
    setActiveTab(tabId: number) {
      this.activeTab = tabId;
    },
    localeDate(dateString: string) {
      const locale = navigator.language;
      const format = new Intl.DateTimeFormat(locale, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      const date = new Date(dateString);
      return format.format(date);
    }

  }
});

</script>

<style lang="sass">
main
  display: inline-block
  position: absolute
  #header
    width: 100%
    border-bottom: 1px solid #e8e8e8
  h2
    margin-top: .2em
    margin-bottom: .2em
  .lighten
    margin-bottom: .5em
  .strong
    font-weight: bold
  #tabs
    // border: 1px solid #e8e8e8
    max-width: 350px
    border-radius: 4px
  #tab-container
    border-bottom: 1px solid #e8e8e8
    // padding: 0 1em
  #tab-content
    // padding: 0 2em
  .tab
    background-color: inherit
    border: none
    outline: none
    padding: 1em 0
    margin-right: 2em
    &:hover
      cursor: pointer
      // background: #e8e8e8
  ul
    padding-left: 1.5em

span.lighten
  font-size: .9em
  color: #b5b5b5
</style>