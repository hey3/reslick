module.exports = {
  addons: [
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-essentials',
      options: {
        controls: false,
      },
    },
    '@storybook/addon-knobs',
  ],
  stories: ['../stories/**/*.stories.mdx'],
}
