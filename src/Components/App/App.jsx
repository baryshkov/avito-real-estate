import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AllApartments from '../AllApartments/AllApartments';
import ApartmentPage from '../ApartmentPage/ApartmentPage';
import 'normalize.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <h1 className="App-header__title">Объявления</h1>
          </Link>
        </header>
        <Route path="/" component={AllApartments} exact />
        <Route
          path="/apartments/:id"
          render={({ match }) => {
            return <ApartmentPage id={match.params.id} />;
          }}
        />
      </div>
    </Router>
  );
};

export default App;
