import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

import { createRoot } from "react-dom/client";

import Nekos from './Nekos';

window.document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('nekos-container');
  const root = createRoot(container);
  root.render(<Nekos />)
});
