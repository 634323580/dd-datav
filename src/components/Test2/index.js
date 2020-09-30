import Test from './Test2.vue'

export default function(Vue) {
  console.log(Test.name)
  Vue.component(Test.name, Test)
}