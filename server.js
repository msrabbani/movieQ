/* eslint no-console:0 */

require('babel-register');

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router-dom');
const _ = require('lodash');
const fs = require('fs');
const App = require('./js/App').default;

const StatusRouter = ReactRouter.StaticRouter;
const port = 8080;
const baseTemplate = fs.readFileSync('./index.html');
const template = _.template(baseTemplate);

const server = express();

server.use('/public', express.static('./public'));
server.use((req, res) => {
  const context = {};
  const body = ReactDOMServer.renderToString(
    React.createElement(
      StatusRouter,
      {location: req.url, context},
      React.createElement(App),
    ),
  );

  if (context.url) {
    res.redirect(context.url);
  }

  res.write(template({body}));
  res.end();
});

console.log(`Listening on ${port}`);
server.listen(port);
