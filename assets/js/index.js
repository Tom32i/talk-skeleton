import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Gamepad from './gamepad.js';

// Styles
import '../../node_modules/reveal.js/dist/reset.css';
import '../../node_modules/reveal.js/dist/reveal.css';
import '../../node_modules/reveal.js/plugin/highlight/monokai.css';
import '../css/theme.css';
import '../css/style.css';

window.addEventListener('load', () => {
    Reveal.initialize({
        hash: true,
        plugins: [ Markdown, Highlight, Gamepad ]
    });
});
