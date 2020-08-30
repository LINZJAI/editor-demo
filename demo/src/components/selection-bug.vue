<template>
  <div>
    <div class="section-title">Range/Selection</div>
    <div class="tool-con">
      <el-button type="mini" @click="keepLastIndex($refs.editor)"
        >光标定位到最后一个字符</el-button
      >
      <el-button type="mini" @click="addCode('h1')"
        >选中区域包裹其他标签(h1)
      </el-button>
    </div>
    <div class="editor-con">
      <div class="editor-box">
        <div ref="editor" id="editor" :contenteditable="contenteditable">
          <div v-html="content"></div>
        </div>
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
#editor {
  width: 100%;
  height: 100%;
  padding: 20px;
}
.editor-box,
.code-box {
  flex: 1;
  width: 0px;
  height: 300px;
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
      setTimeout(() => {
        this.code = this.HTMLFormat(this.$refs.editor.innerHTML);
      }, 100);
    },
    keepLastIndex(element) {
      if (element && element.focus) {
        element.focus();
      } else {
        return;
      }
      let range = document.createRange();
      range.selectNodeContents(element);
      range.collapse(false);
      let sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);

      this.code = `function keepLastIndex(element) {
        if (element && element.focus) {
          element.focus();
        } else {
          return;
        }
        let range = document.createRange();
        range.selectNodeContents(element);
        range.collapse(false);
        let sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }
      `;
    },
    addCode(code) {
      let selection = window.getSelection();
      // 暂时处理第一个选区
      let range = selection.getRangeAt(0);
      // 拷贝一份原始选中数据
      let cloneNodes = range.cloneContents();
      // 移除选区
      range.deleteContents();
      // 创建内容容器
      let codeContainer = document.createElement(code);
      codeContainer.appendChild(cloneNodes);
      // 往选区内添加文本
      range.insertNode(codeContainer);

      this.code = `function addCode(code) {
      let selection = window.getSelection();
      // 暂时处理第一个选区
      let range = selection.getRangeAt(0);
      // 拷贝一份原始选中数据
      let cloneNodes = range.cloneContents();
      // 移除选区
      range.deleteContents();
      // 创建内容容器
      let codeContainer = document.createElement(code);
      codeContainer.appendChild(cloneNodes);
      // 往选区内添加文本
      range.insertNode(codeContainer);
    }`;
    },
  },
  mounted() {},
  components: {},
};
</script>
