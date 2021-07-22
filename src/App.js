import Home from "./components/Home"
import BookList from "./components/BookList"
import BookForm from "./components/BookForm"
import NavBar from "./components/NavBar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/books">
            <BookList></BookList>
          </Route>
          <Route exact path="/book/new">
            <BookForm></BookForm>
          </Route>
          <Route exact path="/books/:id">
            <BookList></BookList>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
