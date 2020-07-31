module.exports = {
  presets: [
    [
      '@babel/env',
      {
        exclude: ['transform-async-to-generator', 'transform-regenerator'],
        modules: false,
      },
    ],
    [
        '@babel/preset-env',
        {
            targets: {
                node: 'current',
            },
        },
        'babel-jest'
      ],
  ],
  plugins: [],
};
