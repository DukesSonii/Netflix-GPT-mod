import Body from "./components/Body";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Provider store={appStore}>
      <Router>
        <Header />
        <Body />
      </Router>
    </Provider>
  );
}

export default App;
