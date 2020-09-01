<template>
  <div class="left-part">
    <template v-for="(item, index) in list">
      <div class="nav" v-if="item.type === 'nav'" :key="item.type + index">
        {{ item.text }}
      </div>
      <div
        class="sub-nav"
        v-else-if="item.type === 'sub-nav'"
        :key="item.type + index"
      >
        <a
          :href="item.target"
          @click="selectedSectionId = item.target"
          :class="{ active: selectedSectionId === item.target }"
          >{{ item.text }}</a
        >
      </div>
    </template>
  </div>
</template>
<style lang="scss" scoped>
.left-part {
  width: 300px;
  padding: 20px 0;
  padding-left: 80px;
  box-sizing: border-box;
  overflow: auto;
}
.nav {
  font-size: 16px;
  color: #333;
  line-height: 40px;
  height: 40px;
  margin: 0;
  padding: 0;
  text-decoration: none;
  display: block;
  position: relative;
  transition: 0.15s ease-out;
  font-weight: 700;
}

.sub-nav {
  display: block;
  height: 40px;
  color: #444;
  line-height: 40px;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 400;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #444;
    &.active,
    &:hover {
      color: #409eff;
    }
  }
}
</style>
<script>
export default {
  props: {},
  data() {
    return {
      selectedSectionId: "",
      list: [
        {
          type: "nav",
          text: "例子",
        },
        {
          type: "sub-nav",
          text: "简易编辑器",
          target: "#section-1",
        },
        {
          type: "nav",
          text: "主流编辑器",
        },
        {
          type: "sub-nav",
          text: "ueditor",
          target: "#section-2",
        },
        {
          type: "sub-nav",
          text: "tinymce",
          target: "#section-3",
        },
        {
          type: "sub-nav",
          text: "ckeditor",
          target: "#section-4",
        },
        {
          type: "sub-nav",
          text: "wangeditor",
          target: "#section-5",
        },
        {
          type: "sub-nav",
          text: "quill(bubble主题)",
          target: "#section-6",
        },
        {
          type: "sub-nav",
          text: "quill(snow主题)",
          target: "#section-7",
        },
        {
          type: "nav",
          text: "坑在哪里",
        },
        {
          type: "sub-nav",
          text: "dom",
          target: "#section-8",
        },
        {
          type: "sub-nav",
          text: "Range/Selection",
          target: "#section-9",
        },
        {
          type: "sub-nav",
          text: "撤销重做",
          target: "#section-10",
        },
        {
          type: "nav",
          text: "quill",
        },
        {
          type: "sub-nav",
          text: "自定义模块",
          target: "#section-11",
        },
        {
          type: "sub-nav",
          text: "自定义Blots",
          target: "#section-12",
        },
        {
          type: "sub-nav",
          text: "Delta",
          target: "#section-14",
        },
        {
          type: "sub-nav",
          text: "自定义功能",
          target: "#section-13",
        },
      ],
    };
  },
  methods: {},
  components: {},
};
</script>
