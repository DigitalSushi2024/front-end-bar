<template>
    <div class="tab-menu">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: activeTab === tab }"
        @click="$emit('change-tab', tab)"
      >
        {{ tab }}
      </button>
    </div>
  </template>
  
  <script>
  import "@/styles/TabMenu.css";
  
  export default {
    props: {
      activeTab: String
    },
    data() {
      return {
        tabs: ["Open", "Done", "History"]
      };
    }
  };
  </script>
  