import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { createRoot } from "react-dom/client";

const div = document.getElementById("root");
if (!div) throw new Error("Root not Found");

const root = createRoot(div);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
