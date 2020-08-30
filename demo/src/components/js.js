function init() {
  const Parchment = Quill.import("parchment");
  class lineHeightAttributor extends Parchment.Attributor.Class {}
  const lineHeightStyle = new lineHeightAttributor(
    "lineHeight",
    "ql-lineHeight",
    {
      scope: Parchment.Scope.INLINE,
      whitelist: ["0-5", "0-75", "1", "1-5", "1-75", "2"],
    }
  );
  Quill.register({ "formats/lineHeight": lineHeightStyle }, true);
}

new Vue({
  el: "#app",
  data() {
    return {};
  },
  mounted() {
    init();
  },
  methods: {},
});
