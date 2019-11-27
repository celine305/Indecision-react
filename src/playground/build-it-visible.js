let visible = false;

const showHide = ()=> {
  visible = !visible;
  renderApp();
}

const appRoot = document.getElementById('app');

const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={showHide}>{visible? 'Hide Details': 'Show deatils'}</button>
      {
       visible && <p>Hey. These are some details you can now see!</p>
      }
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp()
