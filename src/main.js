import { createApp } from "vue";
import App from "./App.vue";
import { Amplify } from "aws-amplify";
import aws_exports from "./aws-exports";

// @aws-amplify/ui-components 使用の場合
// import {
//   applyPolyfills,
//   defineCustomElements,
// } from "@aws-amplify/ui-components/loader";
// applyPolyfills().then(() => {
//   defineCustomElements(window);
// });

Amplify.configure(aws_exports);
createApp(App).mount("#app");
