<template>
  <div>
    <div class="section-title">quill自定义模块</div>
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
  height: calc(100% - 90px);
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
// 实现并注册模块
class Counter {
  constructor(quill, options) {
    this.quill = quill;
    this.container = quill.addContainer("ql-counter");
    console.log(this, "1");
    this.renderCounter();
    quill.on(Quill.events.TEXT_CHANGE, this.renderCounter.bind(this));
  }
  renderCounter() {
    console.log(this, "2");
    const text = this.quill.getText(); // 获取编辑器中的纯文本内容
    const char = text.replace(/\s/g, ""); // 使用正则表达式将空白字符去掉
    this.container.innerHTML = `当前字数：${char.length}`;
  }
}
Quill.register("modules/counter", Counter);

export default {
  props: {},
  data() {
    return {
      content: "<h2>I am Example</h2>",
      editorOption: {
        // some quill options
        modules: {
          counter: true,
        },
      },
      code: `class Counter {
  constructor(quill, options) {
    this.quill = quill;
    this.container = quill.addContainer("ql-counter");
    this.renderCounter();
    quill.on(Quill.events.TEXT_CHANGE, this.renderCounter.bind(this));
  }
  renderCounter() {
    const text = this.quill.getText(); // 获取编辑器中的纯文本内容
    const char = text.replace(/\s/g, ""); // 使用正则表达式将空白字符去掉
    this.container.innerHTML = \`当前字数：\${char.length}\`;
  };
}
Quill.register("modules/counter", Counter);

var quill = new Quill('#editor', {
    modules: {
      counter: true
    }
});
      `,
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
