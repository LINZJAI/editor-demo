<template>
  <div>
    <div class="section-title" style="margin-top: 0px">简易编辑器</div>
    <div class="tool-con">
      <el-tooltip
        :content="
          `document.querySelector('#editor').contentEditable = ${
            contenteditable ? 'false' : 'true'
          }`
        "
        placement="top"
        effect="light"
      >
        <el-button type="mini" @click="toggle"
          >{{ contenteditable ? "关闭" : "开启" }}编辑模式</el-button
        >
      </el-tooltip>
      <el-tooltip
        content='document.execCommand("bold", false, true);'
        placement="top"
        effect="light"
      >
        <el-button type="mini" @click="setBold">加粗</el-button>
      </el-tooltip>
      <el-tooltip
        content='document.execCommand("createlink", false, "https://www.baidu.com/");'
        placement="top"
        effect="light"
      >
        <el-button type="mini" @click="setLink">超链接</el-button>
      </el-tooltip>
      <el-tooltip
        content='document.execCommand("createlink", false, "https://www.baidu.com/");'
        placement="top"
        effect="light"
      >
        <el-button type="mini" @click="setH1">格式化为H1标签</el-button>
      </el-tooltip>
    </div>
    <div class="editor-con">
      <div ref="editor" class="editor-box">
        <div id="editor" :contenteditable="contenteditable" @keydown="onChange">
          <div v-html="content"></div>
        </div>
      </div>
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
  padding: 0 !important;
}
#editor {
  width: 100%;
  height: 100%;
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
      contenteditable: false,
      content: `
      <p>写字楼里写字间，</p>
      <p>写字间里程序员；</p>
      `,
      code: "",
    };
  },
  methods: {
    toggle() {
      this.contenteditable = !this.contenteditable;
      this.onChange();
    },
    setBold() {
      document.execCommand("bold", false, true);
      this.onChange();
    },
    setLink() {
      document.execCommand("createlink", false, "https://www.baidu.com/");
      this.onChange();
    },
    setH1() {
      document.execCommand("FormatBlock", false, "<h1>");
      this.onChange();
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
