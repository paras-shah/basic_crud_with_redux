import React from 'react';
import { Router, Route } from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';
import LanguageContext from '../context/LanguageContext';
import ThemeContext from '../context/ThemeContext';

class App extends React.Component {
  state = { language: 'us', theme: 'blue' };

  onlanguagechange = lang => {
    this.setState({ language: lang });
  };

  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div className="right menu">
            <i
              style={{
                cursor: 'pointer'
              }}
              className="flag us"
              onClick={() => {
                this.onlanguagechange('us');
              }}
            />
            <i
              className="flag fr"
              style={{
                cursor: 'pointer'
              }}
              onClick={() => {
                this.onlanguagechange('fr');
              }}
            />
          </div>
          <ThemeContext.Provider value="retro">
            <LanguageContext.Provider value={this.state.language}>
              <Header />

              <div>
                <Route path="/streams/" exact component={StreamList} />
                <Route path="/streams/edit/:id" exact component={StreamEdit} />
                <Route path="/streams/create" exact component={StreamCreate} />
                <Route
                  path="/streams/delete/:id"
                  exact
                  component={StreamDelete}
                />
                <Route path="/streams/show/:id" exact component={StreamShow} />
              </div>
            </LanguageContext.Provider>
          </ThemeContext.Provider>
        </Router>
      </div>
    );
  }
}

export default App;
