import { createApp } from "vue";
import { Dropdown, Button, Table, Menu, Modal, Popover } from "ant-design-vue";

import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import { fas } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */

library.add(fas);

import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

app.use(Dropdown);
app.use(Menu);
app.use(Button);
app.use(Table);
app.use(Modal);
app.use(Popover);

app.use(FontAwesomeIcon);

app.use(router);

// Load store
app.use(store);

app.mount("#app");
