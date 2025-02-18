import React from "react";
import { createRoot } from "react-dom/client";

const Popup = () => (
    <div>
        <h1>Hello, Chrome Extension!</h1>
    </div>
);

const rootElement = document.getElementById("root");

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<Popup />);
}
