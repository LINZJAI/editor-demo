<template>
  <div id="app">
    <LeftPart></LeftPart>
    <div class="right-part">
      <EasyEditor></EasyEditor>
      <EditorIframe
        title="ueditor"
        url="/editor/ueditor/"
        :height="500"
      ></EditorIframe>
      <EditorIframe
        title="tinymce"
        url="/editor/tinymce/"
        :height="520"
      ></EditorIframe>
      <EditorIframe
        title="ckeditor"
        url="/editor/ckeditor/"
        :height="520"
      ></EditorIframe>
      <EditorIframe
        title="wangeditor"
        url="/editor/wangeditor/"
        :height="350"
      ></EditorIframe>
      <EditorIframe
        title="quill(bubble主题)"
        url="/editor/quill/bubble.html"
        :height="350"
      ></EditorIframe>
      <EditorIframe
        title="quill(snow主题)"
        url="/editor/quill/snow.html"
        :height="520"
      ></EditorIframe>
    </div>
  </div>
</template>

<script>
import LeftPart from "./components/left-part";
import EasyEditor from "./components/easy-editor";
import EditorIframe from "./components/editor-iframe";
export default {
  name: "App",
  components: { LeftPart, EasyEditor, EditorIframe },
};
</script>

<style lang="scss" scoped>
#app {
  height: 100vh;
  display: flex;
  align-items: stretch;
  box-sizing: border-box;
  .right-part {
    padding: 20px 0;
    padding-right: 100px;
    width: 0;
    flex: 1;
    overflow: auto;
    ::v-deep {
      .section-title {
        margin: 55px 0 20px;
        font-weight: 400;
        color: #1f2f3d;
        font-size: 22px;
      }
    }
  }
}
</style>
