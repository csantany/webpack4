import HtmlWebPackPlugin from 'html-webpack-plugin';

const plugins = [
  new HtmlWebPackPlugin({
    title: 'Codejobs',
    initialState: JSON.stringify({
      device: {
        isMobile: false
      }
    }),
    template: './src/index.html',
    filename: './index.html'
  })
];

export default plugins;
