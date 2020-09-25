import { ref, computed, onMounted, pushScopeId, popScopeId, openBlock, createBlock, createVNode, toDisplayString, withScopeId } from 'vue';

var script = {
  name: 'TestComponent',
  setup: function setup() {
    var message = 'hello vue3!!';
    var count = ref(1);
    var doubleCount = computed(function () {
      return count.value * 2;
    });

    var add = function add() {
      count.value++;
    };

    onMounted(function () {
      console.log('onMounted');
    });
    return {
      message: message,
      doubleCount: doubleCount,
      add: add
    };
  }
};

const _withId = /*#__PURE__*/withScopeId("data-v-07bdddea");

pushScopeId("data-v-07bdddea");
const _hoisted_1 = { class: "test" };
popScopeId();

const render = /*#__PURE__*/_withId(function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", _hoisted_1, [
    createVNode("div", null, toDisplayString($setup.message), 1 /* TEXT */),
    createVNode("div", null, toDisplayString($setup.doubleCount), 1 /* TEXT */),
    createVNode("button", {
      onClick: _cache[1] || (_cache[1] = (...args) => ($setup.add(...args)))
    }, "add")
  ]))
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".test[data-v-07bdddea] {\n  color: red;\n}";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-07bdddea";
script.__file = "src/Test.vue";

function index (Vue) {
  Vue.component(script.name, script);
}

export default index;