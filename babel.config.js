module.exports = function (api) {
  api.cache(true);
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const tsConfig = require('./tsconfig.json');

  const alias = Object.entries(tsConfig.compilerOptions.paths).reduce((alias, path) => {
    const aliasName = path[0].replace('/*', '');
    const pathFormat = path[1][0].replace('.', '');
    alias[aliasName] = './src' + pathFormat.replace('/*', '');
    return alias;
  }, {});
    
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
            '.svg',
          ],
          alias,
        },
      ],
    ],
  };
};
