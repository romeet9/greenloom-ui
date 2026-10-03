import { mount } from 'svelte';
import App from './App.svelte';
import './global.css';
// Import CSS variables and utility classes from blade-core
import '@greenloom/loom-core/tokens/theme.css';

const app = mount(App, {
  target: document.getElementById('app')!,
});

export default app;
