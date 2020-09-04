<template>
  <div>
    <div class="section-title">自定义行高</div>
    <div class="editor-con">
      <div class="editor-box">
        <div id="toolbar">
          <select class="ql-lineHeight">
            <option
              v-for="(lineHeight, index) in lineHeightList"
              :key="lineHeight"
              :value="lineHeight"
              :selected="index === 3"
              >{{ lineHeight }}</option
            >
          </select>
        </div>
        <quill-editor
          class="quill-con"
          v-model="content"
          ref="myQuillEditor"
          :options="editorOption"
        >
        </quill-editor>
      </div>
      <div class="code-box">
        <div v-highlight="'xml'">
          <pre><code v-text="html"></code></pre>
        </div>
      </div>
    </div>

    <div class="editor-con" style="margin-top: 10px">
      <div class="code-box" style="margin-right: 10px">
        <div v-highlight="'javascript'">
          <pre><code v-text="code"></code></pre>
        </div>
      </div>
      <div class="code-box">
        <div v-highlight="'css'">
          <pre><code v-text="css"></code></pre>
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
  height: 400px;
  /* border: 1px solid #dcdfe6; */
  overflow: auto;
  font-size: 14px;
  ::v-deep {
    a {
      color: blue;
    }
    // 下拉框的样式
    .ql-picker-options {
      height: 135px;
      overflow-y: scroll;
    }
    /** 设置行高 */

    .ql-toolbar {
      text-align: left;
    }

    .ql-lineHeight {
      margin-left: 45px;
    }
    .ql-lineHeight::before {
      content: "行高：";
      position: relative;
      top: -2px;
      left: 8px;
    }
    .ql-lineHeight .ql-picker-label {
      left: 50px;
      top: -25px;
    }
    .ql-lineHeight .ql-picker-options {
      left: 50px;
    }

    .ql-lineHeight-0-5 {
      line-height: 0.5;
    }

    .ql-lineHeight-0-75 {
      line-height: 0.75;
    }
    .ql-lineHeight-1 {
      line-height: 1;
    }

    .ql-lineHeight-1-5 {
      line-height: 2;
    }
    .ql-lineHeight-1-75 {
      line-height: 3;
    }

    .ql-lineHeight-2 {
      line-height: 4;
    }

    .ql-picker.ql-lineHeight .ql-picker-label[data-value="1-5"]::before,
    .ql-picker.ql-lineHeight .ql-picker-item[data-value="1-5"]::before {
      content: "1.5";
    }
    .ql-picker.ql-lineHeight .ql-picker-label[data-value="1-75"]::before,
    .ql-picker.ql-lineHeight .ql-picker-item[data-value="1-75"]::before {
      content: "1.75";
    }
    .ql-picker.ql-lineHeight .ql-picker-label[data-value="0-5"]::before,
    .ql-picker.ql-lineHeight .ql-picker-item[data-value="0-5"]::before {
      content: "0.5";
    }
    .ql-picker.ql-lineHeight .ql-picker-label[data-value="2"]::before,
    .ql-picker.ql-lineHeight .ql-picker-item[data-value="2"]::before {
      content: "2";
    }
    .ql-picker.ql-lineHeight .ql-picker-label[data-value="1"]::before,
    .ql-picker.ql-lineHeight .ql-picker-item[data-value="1"]::before {
      content: "1";
    }
    .ql-picker.ql-lineHeight .ql-picker-label[data-value="0-75"]::before,
    .ql-picker.ql-lineHeight .ql-picker-item[data-value="0-75"]::before {
      content: "0.75";
    }
  }
}
.code-box {
  background: #1d1f21;
}
</style>
<script>
import Quill from "quill";
const Parchment = Quill.import("parchment");
class lineHeightAttributor extends Parchment.Attributor.Class {}
const lineHeightStyle = new lineHeightAttributor(
  "lineHeight",
  "ql-lineHeight",
  {
    scope: Parchment.Scope.BLOCK,
    whitelist: ["0-5", "0-75", "1", "1-5", "1-75", "22"],
  }
);
Quill.register({ "formats/lineHeight": lineHeightStyle }, true);
export default {
  props: {},
  data() {
    return {
      content: "<h1>我是例子</h1>",
      editorOption: {
        modules: {
          toolbar: "#toolbar",
        },
      },
      code: `
        const Parchment = Quill.import("parchment");
        class lineHeightAttributor extends Parchment.Attributor.Class {}
        const lineHeightStyle = new lineHeightAttributor(
        "lineHeight",
        "ql-lineHeight",
        {
          scope: Parchment.Scope.BLOCK,
          whitelist: ["0-5", "0-75", "1", "1-5", "1-75", "2"],
        }
      );
      Quill.register({ "formats/lineHeight": lineHeightStyle }, true);

      var quill = new Quill('#editor', {
        modules: {
          toolbar: "#toolbar",
        }
      });
      `,
      lineHeightList: ["0-5", "0-75", "1", "1-5", "1-75", "2"],
      html: `
       <div id="editor"></div>
       <div id="toolbar">
          <select class="ql-lineHeight">
            <option
              v-for="(lineHeight, index) in ['0-5', '0-75', '1', '1-5', '1-75', '2']"
              :key="lineHeight"
              :value="lineHeight"
              :selected="index === 3">
              {{ lineHeight }}
            </option>
          </select>
        </div>
      `,
      css: `
    .ql-lineHeight-0-5 {
      line-height: 0.5;
    }

    .ql-lineHeight-0-75 {
      line-height: 0.75;
    }
    .ql-lineHeight-1 {
      line-height: 1;
    }

    .ql-lineHeight-1-5 {
      line-height: 2;
    }
    .ql-lineHeight-1-75 {
      line-height: 3;
    }

    .ql-lineHeight-2 {
      line-height: 4;
    }
      `,
    };
  },
  methods: {},
  mounted() {},
  components: {},
};
</script>
