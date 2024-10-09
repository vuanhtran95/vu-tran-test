import SearchPage from "components/pages/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <SearchPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
