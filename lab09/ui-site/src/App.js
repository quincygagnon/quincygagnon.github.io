import Navy from './Navy';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipesDis from './RecipesDis';
import Lemonbar from './Lemonbar';
import Glossary from './Glossary';

import { I18nProvider, LOCALES } from './i18n';


function App() {
  return (
    <I18nProvider locale={LOCALES.FRENCH}>
      <Router>
        <div className="App">
          <Navy />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/RecipesDis">
                <RecipesDis />
              </Route>
              <Route exact path='/Lemonbar'>
                <Lemonbar />
              </Route>
              <Route path='/Glossary'>
                <Glossary />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </I18nProvider>
  );
}

export default App;