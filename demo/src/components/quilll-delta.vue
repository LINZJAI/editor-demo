<template>
  <div>
    <div class="section-title">Delta</div>
    <div class="editor-con">
      <div class="editor-box">
        <quill-editor
          class="quill-con"
          v-model="content"
          ref="myQuillEditor"
          :options="editorOption"
        >
        </quill-editor>
      </div>
      <div class="code-box">
        <div v-highlight="'javascript'">
          <pre><code v-text="code"></code></pre>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.tool-con {
  margin-bottom: 10px;
}

.editor-con {
  display: flex;
}
.editor-box {
  margin-right: 10px;
  padding: 0 !important;
}
.quill-con {
  width: 100%;
  height: calc(100% - 42px);
}
.editor-box,
.code-box {
  flex: 1;
  width: 0px;
  height: 300px;
  /* border: 1px solid #dcdfe6; */
  overflow: auto;
  font-size: 14px;
  ::v-deep {
    a {
      color: blue;
    }
  }
}
.code-box {
  background: #1d1f21;
}
</style>
<script>
import Quill from "quill";

export default {
  props: {},
  data() {
    return {
      content: "<h2>I am Example</h2>",
      editorOption: {
        // some quill options
        modules: {},
      },
      code: `
      `,
    };
  },
  methods: {},
  mounted() {
    this.$refs.myQuillEditor.quill.on("text-change", (delta) => {
      this.code = JSON.stringify(delta) + "\n" + this.code;
    });
  },
  components: {},
};
</script>
