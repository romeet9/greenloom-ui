import { mount } from 'svelte';
import App from './App.svelte';
import '@greenloom/loom-core/tokens/theme.css';
import '@greenloom/loom-core/styles.css';

const app = mount(App, {
  target: document.getElementById('app'),
});

export default app;
