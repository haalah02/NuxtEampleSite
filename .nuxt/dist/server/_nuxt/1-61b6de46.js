import { _ as _sfc_main$2 } from "./Simple-938fe15b.js";
import { useSSRContext, mergeProps, ref, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { b as _export_sfc, d as useRoute } from "../server.mjs";
import "destr";
import { decode } from "js-base64";
import "./Icon-852aaaf9.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "ufo";
import "h3";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "vue-router";
import "defu";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "animate-spin",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, _attrs))}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Base/Loading.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const decodeData = (base64) => JSON.parse(decode(base64));
const _sfc_main = {
  __name: "1",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const acc = route.query.data;
    const decodedData = ref({});
    decodedData.value = decodeData(acc);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_templates_simple = _sfc_main$2;
      const _component_base_loading = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(decodedData)) {
        _push(ssrRenderComponent(_component_templates_simple, { acc: unref(decodedData) }, null, _parent));
      } else {
        _push(`<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">`);
        _push(ssrRenderComponent(_component_base_loading, { class: "h-5 w-5" }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=1-61b6de46.js.map
