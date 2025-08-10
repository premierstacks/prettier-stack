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

export function createPrettierConfig() {
  return {
    singleQuote: true,
    plugins: [],
  };
}

export function withPluginPug(config, options = {}, override = {}) {
  // eslint-disable-next-line no-empty-pattern
  const {} = options;

  return {
    ...config,
    plugins: [...config.plugins, '@prettier/plugin-pug'],
    ...override,
  };
}

export function withPluginRuby(config, options = {}, override = {}) {
  // eslint-disable-next-line no-empty-pattern
  const {} = options;

  return {
    ...config,
    plugins: [...config.plugins, '@prettier/plugin-ruby'],
    ...override,
  };
}

export function withPluginXml(config, options = {}, override = {}) {
  // eslint-disable-next-line no-empty-pattern
  const {} = options;

  return {
    ...config,
    plugins: [...config.plugins, '@prettier/plugin-xml'],
    xmlQuoteAttributes: 'double',
    xmlWhitespaceSensitivity: 'ignore',
    ...override,
  };
}
