const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');
module.exports = {
  content: [join(__dirname, 'src/lib/**/*.{js,ts,jsx,tsx}'), ...createGlobPatternsForDependencies(__dirname)],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require('../../tailwind-workspace-preset')],
};
