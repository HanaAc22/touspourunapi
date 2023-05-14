import { registerReactControllerComponents } from '@symfony/ux-react';

import './styles/app.css';

// start the Stimulus application
import './bootstrap';
registerReactControllerComponents(require.context('./front/touspourunreact/src/App.js', true, /\.(j|t)sx?$/));
