/**
 * @file
 * @author Tomáš Chochola <chocholatom1997@gmail.com>
 * @copyright © 2025 Tomáš Chochola <chocholatom1997@gmail.com>
 *
 * @license CC-BY-ND-4.0
 *
 * @see {@link https://creativecommons.org/licenses/by-nd/4.0/} License
 * @see {@link https://github.com/tomchochola} GitHub Personal
 * @see {@link https://github.com/premierstacks} GitHub Organization
 * @see {@link https://github.com/sponsors/tomchochola} GitHub Sponsors
 */

import { createPrettierConfig, withPluginPug, withPluginRuby, withPluginXml } from './base.js';
import * as presets from './presets.js';

export class PrettierStack {
  #config;
  #options;

  constructor(config, options = {}) {
    this.#config = config;
    this.#options = options;
  }

  static create(options = {}) {
    const merged = {
      ...options,
      environment: options.environment ?? process.env.NODE_ENV ?? 'production',
    };

    return new PrettierStack(createPrettierConfig(merged), merged);
  }

  pug(options = {}, override = {}) {
    return new PrettierStack(withPluginPug(this.#config, {
      ...this.#options,
      ...options,
    }, override), this.#options);
  }

  ruby(options = {}, override = {}) {
    return new PrettierStack(withPluginRuby(this.#config, {
      ...this.#options,
      ...options,
    }, override), this.#options);
  }

  xml(options = {}, override = {}) {
    return new PrettierStack(withPluginXml(this.#config, {
      ...this.#options,
      ...options,
    }, override), this.#options);
  }

  build() {
    return { ...this.#config };
  }

  options(options) {
    return new PrettierStack(this.#config, {
      ...this.#options,
      ...options,
    });
  }

  static get Presets() {
    return presets;
  }
}
