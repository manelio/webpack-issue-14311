const path = require('path');

module.exports = {
	context: __dirname,
	mode: 'production',
	entry: {
		main: './src/main.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
	},
  devServer: {
    static: [
			{ directory: path.join(__dirname, 'public'), },
			{ directory: path.join(__dirname, 'dist'), },
		]
  },
}
