<template>
  <div class="left-part">
    <div class="nav">例子</div>
    <div class="sub-nav">简易编辑器</div>
    <div class="nav">主流编辑器</div>
    <div class="sub-nav">ueditor</div>
    <div class="sub-nav">tinymce</div>
    <div class="sub-nav">ckeditor</div>
    <div class="sub-nav">wangeditor</div>
    <div class="sub-nav">quill(bubble主题)</div>
    <div class="sub-nav">quill(snow主题)</div>
  </div>
</template>
<style lang="scss" scoped>
.left-part {
  width: 300px;
  padding: 20px 0;
  padding-left: 80px;
  box-sizing: border-box;
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
  &:hover {
    color: #409eff;
  }
}
</style>
<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>
