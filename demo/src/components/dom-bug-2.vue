<template>
  <div>
    <!-- <div class="section-title" style="margin-top: 10px">dom</div> -->

    <div class="editor-con" style="margin-top: 20px">
      <div
        class="editor-box"
        :contenteditable="contenteditable"
        @keydown="onChange"
        ref="editor"
        v-html="content"
      ></div>
      <div class="code-box">
        <div v-highlight="'xml'">
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
  padding: 20px;
}
.editor-box,
.code-box {
  flex: 1;
  width: 0px;
  height: 265px;
  border: 1px solid #dcdfe6;
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
export default {
  props: {},
  data() {
    return {
      contenteditable: true,
      content: `
          <span style="color:red"><p>我是红色的第一行</p></span>
          <p>我是不设置颜色的第二行</p>
      `,
      code: "",
    };
  },
  methods: {
    setBold() {
      document.execCommand("bold", false, true);
    },
    setLink() {
      document.execCommand("createlink", false, "https://www.baidu.com/");
    },
    setH1() {
      document.execCommand("FormatBlock", false, "<h1>");
    },
    onChange() {
      setTimeout(() => {
        this.code = this.HTMLFormat(this.$refs.editor.innerHTML);
      }, 100);
    },
  },
  mounted() {
    this.onChange();
  },
  components: {},
};
</script>
