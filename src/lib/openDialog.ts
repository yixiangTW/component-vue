import { createApp } from "vue";
import Dialog from "./DialogComponent.vue";
export const openDialog = (options) => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  const app = createApp(Dialog, {
    visible: true, //如何传插槽？
    "onUpdate:visible": (newVisible) => {
      if (!newVisible) {
        app.unmount();
        div.remove();
      }
    },
  });
  app.mount(div);
};
