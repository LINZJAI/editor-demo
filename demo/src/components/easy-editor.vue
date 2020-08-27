<template>
  <div>
    <div class="section-title" style="margin-top: 10px">简易编辑器</div>
    <div class="tool-con">
      <el-tooltip
        :content="
          `document.querySelector('.editor-box').contentEditable = ${
            contenteditable ? 'false' : 'true'
          }`
        "
        placement="top"
        effect="light"
      >
        <el-button type="mini" @click="contenteditable = !contenteditable"
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
      <div
        class="editor-box"
        :contenteditable="contenteditable"
        @keypress="onChange"
        @keydown="onChange"
        ref="editor"
      >
        <div v-html="content"></div>
      </div>
      <div class="code-box">
        <div v-highlight>
          <pre><code v-text="code"></code></pre>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.tool-con {
  margin-bottom: 10px;
}

.editor-con {
  display: flex;
}
.editor-box {
  margin-right: 10px;
}
.editor-box,
.code-box {
  flex: 1;
  width: 0px;
  height: 265px;
  border: 1px solid #dcdfe6;
  overflow: auto;
  padding: 20px;
  font-size: 14px;
  ::v-deep {
    a {
      color: blue;
    }
  }
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
      <p>程序人员写程序，</p>
      <p>又拿程序换酒钱。</p>
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
      this.code = this.$refs.editor.innerHTML;
    },
  },
  mounted() {
    this.code = this.$refs.editor.innerHTML;
  },
  components: {},
};
</script>
