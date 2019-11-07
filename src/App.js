import React from 'react';
import Header from './components/layouts/Header';
import { Provider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/contacts/Contacts';
import AddContacts from './components/contacts/AddContacts';
import About from './components/pages/About';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import EditContacts from './components/contacts/EditContacts';

function App() {
  return (
    <Provider>
      <Router>
        <div className='App'>
          <Header title='Contact Manager' />
          <div className='container'>
            <Switch>
              <Route  exact path='/' component={Contacts} />
              <Route exact path='/about' component={About} />
              <Route exact path='/contact/add' component={AddContacts} />
              <Route exact path='/contact/edit/:id' component={EditContacts} />
              <Route  component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>

  );
}

export default App;
