'use strict';

var visible = false;

var showHide = function showHide() {
  visible = !visible;
  renderApp();
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: showHide },
      visible ? 'Hide Details' : 'Show deatils'
    ),
    visible && React.createElement(
      'p',
      null,
      'Hey. These are some details you can now see!'
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
