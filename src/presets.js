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

import { PrettierStack } from './builder.js';

export function base(options = {}) {
  const {
    environment = process.env.NODE_ENV ?? 'production',
    ruby = false,
    pug = false,
    xml = true,
  } = options;

  let config = PrettierStack.create({
    environment,
  });

  if (ruby) {
    config = config.ruby();
  }

  if (pug) {
    config = config.pug();
  }

  if (xml) {
    config = config.xml();
  }

  return config;
}

export function full(options = {}) {
  return base({
    ruby: true,
    pug: true,
    xml: true,
    ...options,
  });
}
