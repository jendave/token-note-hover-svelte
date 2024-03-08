import PositionBasicOverlayApp from './view/PositionBasicOverlayApp.js';

Hooks.once('ready', () => new PositionBasicOverlayApp().render(true, { focus: true }));