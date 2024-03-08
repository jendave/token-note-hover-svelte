import PositionBasicOverlayApp from '../src/view/PositionBasicOverlayApp.js';

const MODULE_NAME = "token-note-hover-svelte";
const ELEMENT_ID = "token-note-hover-svelte";

Hooks.on("init", () => 
{
  registerSettings();
});

Hooks.once('ready', () => new PositionBasicOverlayApp().render(true, { focus: true }));

Hooks.on("renderHeadsUpDisplay", (_app, html) => 
{
  // html.append(`<template id="${ELEMENT_ID}"></template>`);
  canvas.hud.tokenNoteHover = new PositionBasicOverlayApp.render(true, { focus: true }); // TokenNoteHover();
});

Hooks.on("hoverToken", (token, hovered) => 
{
    console.log('token-note_hover-svelte: 1');
  if (game.settings.get(MODULE_NAME, "enabled")) 
{
    if (!hovered) 
{
      return canvas.hud.tokenNoteHover.clear();
    }

    // If the note is hovered by the mouse cursor (not via alt/option)
    if (hovered) 
{
      canvas.hud.tokenNoteHover.bind(token);
    }
    else 
{
      canvas.hud.tokenNoteHover.clear();
    }
  }
});

/**
 *
 */
function registerSettings() 
{
  console.log(`${MODULE_NAME} | Initializing token-note-hover`);
  game.settings.register(MODULE_NAME, "enabled", {
    name: game.i18n.localize("token-note-hover.Settings.Enabled.Name"),
    hint: game.i18n.localize("token-note-hover.Settings.Enabled.Hint"),
    scope: "client",
    type: Boolean,
    default: true,
    config: true,
  });

  game.settings.register(MODULE_NAME, "darkMode", {
    name: game.i18n.localize("token-note-hover.Settings.DarkMode.Name"),
    hint: game.i18n.localize("token-note-hover.Settings.DarkMode.Hint"),
    scope: "client",
    type: Boolean,
    default: true,
    config: true,
  });

  game.settings.register(MODULE_NAME, "fontSize", {
    name: game.i18n.localize("token-note-hover.Settings.FontSize.Name"),
    hint: game.i18n.localize("token-note-hover.Settings.FontSize.Hint"),
    scope: "client",
    type: String,
    default: "",
    config: true,
  });

  game.settings.register(MODULE_NAME, "maxWidth", {
    name: game.i18n.localize("token-note-hover.Settings.MaxWidth.Name"),
    hint: game.i18n.localize("token-note-hover.Settings.MaxWidth.Hint"),
    scope: "client",
    type: Number,
    default: 800,
    config: true,
  });
}