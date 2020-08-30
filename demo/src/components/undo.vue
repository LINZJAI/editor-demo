<template>
  <div>
    <div class="section-title" style="margin-top: 10px">撤销重做</div>
    <div class="tool-con">
      <el-tooltip
        content='document.execCommand("undo")'
        placement="top"
        effect="light"
      >
        <el-button type="mini" @click="undo">撤销</el-button>
      </el-tooltip>
      <el-tooltip
        content='document.execCommand("redo")'
        placement="top"
        effect="light"
      >
        <el-button type="mini" @click="todo">重做</el-button>
      </el-tooltip>
      <el-button type="mini" @click="upload">模拟上传图片</el-button>
    </div>
    <div class="editor-con">
      <div
        ref="editor"
        id="editor"
        class="editor-box"
        :contenteditable="contenteditable"
      >
        <div v-html="content"></div>
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
    img {
      height: 250px;
    }
  }
}
</style>
<script>
import loading from "../assets/images/loading.gif";
import upload from "../assets/images/upload.jpg";
export default {
  props: {},
  data() {
    return {
      contenteditable: true,
      content: `
      `,
      code: "",
    };
  },
  methods: {
    upload() {
      let loading_img = document.createElement("img");
      loading_img.src = loading;
      let upload_img = document.createElement("img");
      upload_img.src = upload;
      this.$refs.editor.appendChild(loading_img);

      setTimeout(() => {
        this.$refs.editor.removeChild(loading_img);
        this.$refs.editor.appendChild(upload_img);
      }, 2000);
    },
    undo() {
      document.execCommand("undo");
    },
    todo() {
      document.execCommand("redo");
    },
  },
  mounted() {},
  components: {},
};
</script>
