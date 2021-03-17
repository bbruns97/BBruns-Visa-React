import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error404 from "./404";
import "./App.css";
import AddContactPage from "./Components/AddContactPage";
import ContactsPage from "./Components/ContactsPage";
import EditContactPage from "./Components/EditContactPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/edit/:email" component={EditContactPage} />
        <Route path="/add" component={AddContactPage} />
        <Route exact path="/" component={ContactsPage} />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
