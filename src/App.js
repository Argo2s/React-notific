import React from 'react';
//import logo from './logo.svg';
import './App.css';
import notifier from "simple-react-notifications2";
import "../node_modules/simple-react-notifications2/dist/index.css";
class App extends React.Component {
  id = null;
  render() {
    return (
      <div>
        <button onClick={() => (notifier({
          render: ({ id, onClose }) => (
            <RouteInfo
              key={id}
              onClosePanel={onClose}
              //header={"The shortest way to ride home."}
            />
          ),
        }))}>Notify</button>
        <button onClick={() => notifier.dismiss(this.id)}>Dismiss</button>
        <button onClick={() => notifier.dismiss()}>Dismiss all</button>
        <button onClick={() => notifier.info("Success!")}>Success</button>
        <button onClick={() => notifier.warn("Error")}>Error</button>
        <button onClick={() => (notifier({
          render: ({ id, onClose }) => (
            <SouteInfo
              key={id}
              onClosePanel={onClose}
              //header={"The shortest way to ride home."}
            />
          ),
        }))}>some</button>
      </div>
    );
  }
}
const RouteInfo = ({ header, onClosePanel }) => (
  <div
    className="route-info"
    onClick={onClosePanel}
    style={{
      height: "100px",
      background: "#2e1e75",
      color: "white",
      padding: "8px 16px",
      position: "relative",
      boxShadow: "rgba(0, 0, 0, 1) 0px 0px 14px 2px"
    }}
  >
    <h3 className="subtitle">{header}</h3>
    <p>Reminder: You have a call with Craig in 7 minutes!</p>
    <button
      className="button"
      style={{ position: "absolute", bottom: "16px", right: "16px" }}
      onClick={() => notifier.dismiss()}
    >
      Dissmiss
    </button>
  </div>
);
const SouteInfo = ({ header, onClosePanel }) => (
  <div
    className="sroute-info"
    onClick={onClosePanel}
    style={{
      height: "100px",
      background: "#54cea7",
      color: "white",
      padding: "8px 16px",
      position: "relative",
      boxShadow: "rgba(0, 0, 0, 1) 0px 0px 14px 2px"
    }}
  >
    <h3 className="subtitle">{header}</h3>
    <p>Welcome!</p>
    <button
      className="button"
      style={{ position: "absolute", bottom: "16px", right: "16px" }}
      onClick={() => notifier.dismiss()}
    >
      Thank you
    </button>
  </div>
);
notifier.configure({
  position: "top-center",
  animation:{
    in:"fadeIn",
    out:"fadeOut",
    duration:2000
  }
});
export default App;

