<template>
  <div class="iframe-wrapper">
    <div class="section-title">{{ title }}</div>
    <iframe
      :src="url"
      frameborder="0"
      class="iframe-con"
      :style="{ height: height + 'px' }"
    ></iframe>
  </div>
</template>
<style lang="scss" scoped>
.iframe-wrapper {
  /* padding-right: 100px; */
}
.iframe-con {
  min-height: 300px;
  width: 100%;
}
</style>
<script>
export default {
  props: ["url", "title", "height"],
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>
