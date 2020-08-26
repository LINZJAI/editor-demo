<template>
  <div id="app">
    <LeftPart></LeftPart>
    <div class="right-part">
      <EasyEditor></EasyEditor>
    </div>
  </div>
</template>

<script>
import LeftPart from "./components/left-part";
import EasyEditor from "./components/easy-editor";
export default {
  name: "App",
  components: { LeftPart, EasyEditor },
};
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
  display: flex;
  align-items: stretch;
  padding: 20px 0;
  box-sizing: border-box;
  .right-part {
    width: 0;
    flex: 1;
    overflow: auto;
    ::v-deep {
      .section-title {
        margin: 55px 0 20px;
        font-weight: 400;
        color: #1f2f3d;
        font-size: 22px;
        &:first-child {
          margin-top: 0;
        }
      }
    }
  }
}
</style>
