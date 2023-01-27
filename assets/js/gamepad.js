import { GamepadListener } from 'gamepad.js';

class GamepadPlugin
{
  static id = 'gamepad';

  static init(deck) {
    return new this(deck);
  }

  constructor(deck) {
    this.deck = deck;
    this.listener = new GamepadListener({
      analog: false,
      deadZone: 0.1
    });

    this.onAxis = this.onAxis.bind(this);
    this.onButton = this.onButton.bind(this);

    this.listener.on('gamepad:axis', this.onAxis);
    this.listener.on('gamepad:button', this.onButton);

    this.listener.start();
  }

  onAxis(event) {
    const { axis, value } = event.detail;

    if (value === 0) {
      return;
    }

    switch (axis.toString().concat(value)) {
      case '01': // →
        return this.deck.right();
      case '0-1': // ←
        return this.deck.left();
      case '11': // →
        return this.deck.down();
      case '1-1': // ←
        return this.deck.up();
    }
  }

  onButton(event) {
    const { pressed, button } = event.detail;

    if (!pressed) {
      return;
    }

    switch (button) {
      case 1: // A
      case 5: // R
        return this.deck.next();
      case 0: // B
      case 4: // L
        return this.deck.prev();
      case 9: // Start
      case 8: // Select
        return this.toggleFullscreen();
    }
  }

  toggleFullscreen() {
    if (!document.fullscreenEnabled || typeof document.exitFullscreen !== 'function') {
      console.info('Fullscreen not supported');
    }

    if (document.fullscreenElement === null) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
}

export default () => GamepadPlugin;
