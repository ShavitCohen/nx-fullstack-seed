const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');
module.exports = {
  content: [join(__dirname, '**/*.{js,ts,jsx,tsx}'), ...createGlobPatternsForDependencies(__dirname)],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  presets: [require('../../tailwind-workspace-preset')],
};
