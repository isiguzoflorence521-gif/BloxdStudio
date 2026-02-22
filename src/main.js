import { initEngine } from './core/engine.js';
import { setupUI } from './ui/sidebar.js';

window.addEventListener('DOMContentLoaded', () => {
    initEngine();
    setupUI();
});
