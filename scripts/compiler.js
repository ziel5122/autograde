import chalk from 'chalk';
import { existsSync } from 'fs';
import path from 'path';
import clearConsole from 'react-dev-utils/clearConsole';
import formatWebpackMessages from 'react-dev-utils/formatWebpackMessages';
import webpack from 'webpack';

const webpackConfig = require('../../webpack.config.js');

const useYarn = existsSync(path.resolve(__dirname, '../../yarn.lock'));
const cli = useYarn ? 'yarn' : 'npm';
const host = process.env.HOST || 'localhost';
const isInteractive = process.stdout.isTTY;
const port = process.env.PORT || 3000;
const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';

// "Compiler" is a low-level interface to Webpack.
// It lets us listen to some events and provide our own custom messages.
const compiler = webpack(webpackConfig);

// "invalid" event fires when you have changed a file, and Webpack is
// recompiling a bundle. WebpackDevServer takes care to pause serving the
// bundle, so if you refresh, it'll wait instead of serving the old one.
// "invalid" is short for "bundle invalidated", it doesn't imply any errors.
compiler.plugin('invalid', () => {
  if (isInteractive) clearConsole();
  console.log('Compiling...');
});

let isFirstCompile = true;

// "done" event fires when Webpack has finished recompiling the bundle.
// Whether or not you have warnings or errors, you will get this event.
compiler.plugin('done', (stats) => {
  if (isInteractive) clearConsole();

  // We have switched off the default Webpack output in WebpackDevServer
  // options so we are going to "massage" the warnings and errors and present
  // them in a readable focused way.
  const messages = formatWebpackMessages(stats.toJson({}, true));
  const isSuccessful = !messages.errors.length && !messages.warnings.length;
  const showInstructions = isSuccessful && (isInteractive || isFirstCompile);

  if (isSuccessful) console.log(chalk.green('Compiled successfully'));

  if (showInstructions) {
    console.log();
    console.log('The app is running at:');
    console.log();
    console.log(`  ${chalk.cyan(`${protocol}://${host}:${port}/`)}`);
    console.log();
    console.log('Note that the development build is not optimized');
    console.log(`To create a production build, use ${chalk.cyan(`${cli} run build`)}.`);
    console.log();
    isFirstCompile = false;
  }

  // If errors exist, only show errors.
  if (messages.errors.length) {
    console.log(chalk.red('Failed to compile.'));
    console.log();
    messages.errors.forEach((message) => {
      console.log(message);
      console.log();
    });
    // Teach some ESLint tricks.
    console.log('You may use special comments to disable some warnings.');
    console.log(`Use ${chalk.yellow('// eslint-disable-next-line')} to ignore the next line.`);
    console.log(`Use ${chalk.yellow('/* eslint-disable */')} to ignore all warnings in a file.`);
  }
});

export default compiler;
