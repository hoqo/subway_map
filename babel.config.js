export default () => {
  const presets = [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: false, // No need for babel to resolve modules
        targets: {
          esmodules: true, // ! Very important. Target es6+
        },
      },
    ],
    '@babel/preset-typescript',
  ];

  const plugins = [];

  return {
    comments: true,
    ignore: [/[\/\\]core-js/, /@babel[\/\\]runtime/],
    presets,
    plugins,
  };
};
