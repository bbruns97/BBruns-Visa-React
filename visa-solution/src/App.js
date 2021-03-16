import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import AddContactPage from "./Components/AddContactPage";
import ContactsPage from "./Components/ContactsPage";
import EditContactPage from "./Components/EditContactPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/email/:email" component={EditContactPage} />
        <Route path="/add" component={AddContactPage} />
        <Route exact path="/" component={ContactsPage} />
      </Switch>
    </Router>
  );
}

export default App;
