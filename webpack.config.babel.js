import {
  devtool,
  module,
  optimization,
  plugins,
  resolve,
  target
} from './webpack/configuration';

console.log(devtool, module, optimization, plugins, resolve, target);

export default {
  devtool,
  module,
  optimization,
  plugins,
  resolve,
  target
};
