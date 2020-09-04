<template>
  <div id="app">
    <LeftPart></LeftPart>
    <div class="right-part">
      <EasyEditor id="section-1"></EasyEditor>
      <DomBug id="section-8"></DomBug>
      <DomBug2></DomBug2>
      <SelectionBug id="section-9"></SelectionBug>
      <Undo id="section-10"></Undo>
      <EditorIframe
        id="section-2"
        title="ueditor"
        url="./editor/ueditor/index.html"
        :height="500"
      ></EditorIframe>
      <EditorIframe
        id="section-3"
        title="tinymce"
        url="./editor/tinymce/index.html"
        :height="520"
      ></EditorIframe>
      <EditorIframe
        id="section-4"
        title="ckeditor"
        url="./editor/ckeditor/index.html"
        :height="520"
      ></EditorIframe>
      <EditorIframe
        id="section-5"
        title="wangeditor"
        url="./editor/wangeditor/index.html"
        :height="350"
      ></EditorIframe>
      <EditorIframe
        id="section-6"
        title="quill(bubble主题)"
        url="./editor/quill/bubble.html"
        :height="350"
      ></EditorIframe>
      <EditorIframe
        id="section-7"
        title="quill(snow主题)"
        url="./editor/quill/snow.html"
        :height="520"
      ></EditorIframe>

      <QuilllModule id="section-11"></QuilllModule>
      <QuilllBlots id="section-12"></QuilllBlots>
      <QuilllDelta id="section-14"></QuilllDelta>
      <QuilllLineHeight id="section-13"></QuilllLineHeight>
      <div style="height: 100px"></div>
    </div>
  </div>
</template>

<script>
import LeftPart from "./components/left-part";
import EasyEditor from "./components/easy-editor";
import EditorIframe from "./components/editor-iframe";
import DomBug from "./components/dom-bug";
import DomBug2 from "./components/dom-bug-2";
import SelectionBug from "./components/selection-bug";
import Undo from "./components/undo";
import QuilllModule from "./components/quilll-module";
import QuilllBlots from "./components/quilll-blots";
import QuilllLineHeight from "./components/quilll-lineHeight";
import QuilllDelta from "./components/quilll-delta";
export default {
  name: "App",
  components: {
    LeftPart,
    EasyEditor,
    EditorIframe,
    DomBug,
    DomBug2,
    SelectionBug,
    Undo,
    QuilllModule,
    QuilllBlots,
    QuilllLineHeight,
    QuilllDelta,
  },
};
</script>

<style lang="scss" scoped>
#app {
  height: 100vh;
  display: flex;
  align-items: stretch;
  box-sizing: border-box;
  .right-part {
    padding-right: 50px;
    padding-left: 50px;
    width: 0;
    flex: 1;
    overflow: auto;
    ::v-deep {
      .section-title {
        padding: 30px 0 20px;
        margin-top: 25px;
        font-weight: 400;
        color: #1f2f3d;
        font-size: 22px;
      }
    }
  }
}
</style>
