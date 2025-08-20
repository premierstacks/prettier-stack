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

export class PrettierStack {
  config;

  constructor(config) {
    this.config = config;
  }

  static create(options = {}) {
    return new this({
      ...options,
    });
  }

  clone(config) {
    return new this.constructor(config);
  }

  base(options = {}) {
    return this.clone({
      singleQuote: true,
      plugins: [],
      ...this.config,
      ...options,
    });
  }

  pug(options = {}) {
    return this.clone({
      ...this.config,
      plugins: [...this.config.plugins, '@prettier/plugin-pug'],
      ...options,
    });
  }

  ruby(options = {}) {
    return this.clone({
      ...this.config,
      plugins: [...this.config.plugins, '@prettier/plugin-ruby'],
      ...options,
    });
  }

  xml(options = {}) {
    return this.clone({
      ...this.config,
      plugins: [...this.config.plugins, '@prettier/plugin-xml'],
      xmlQuoteAttributes: 'double',
      xmlWhitespaceSensitivity: 'ignore',
      ...options,
    });
  }

  build() {
    return { ...this.config };
  }
}
