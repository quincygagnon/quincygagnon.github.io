
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipesDis from './RecipesDis';
import Lemonbar from './Lemonbar';
import Glossary from './Glossary';
import { useState } from 'react';
import { I18nProvider, LOCALES } from './i18n';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import Container from 'react-bootstrap/Container';
import translate from './i18n/translate';


function App() {
  const [locale, setLocale]=useState(LOCALES.ENGLISH);
  console.log(locale)
  return (
    <I18nProvider locale={locale}>
      <Router>
        <div className="App">
        <Navbar expand="lg">
                <Container style={{}}>
                    <Navbar.Brand href="/">Batter & Bloom</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar=nav' />

                    <div className='alignright'>
                        <Nav className="justify-content-right" style={{ width: '100%' }}>
                            <Nav.Link href='/'>{translate("Home")}</Nav.Link>
                            <NavDropdown title={translate('Recipes')} id='basic-nav-dropdown' href='/RecipesDis'>

                                <Dropdown.Header>{translate('Search by meal...')}</Dropdown.Header>
                                <NavDropdown.Item href="/RecipesDis/Breakfast">{translate('Breakfast')}</NavDropdown.Item>
                                <NavDropdown.Item href="/RecipesDis/Lunch">{translate('Lunch')}</NavDropdown.Item>
                                <NavDropdown.Item href="/RecipesDis/Dinner">{translate('Dinner')}</NavDropdown.Item>
                                <NavDropdown.Item href="/RecipesDis/Dessert">{translate('Dessert')}</NavDropdown.Item>

                                <Dropdown.Header>{translate('Search by diet...')}</Dropdown.Header>
                                <NavDropdown.Item href="/RecipesDis/Vegetarian">{translate('Vegetarian')}</NavDropdown.Item>
                                <NavDropdown.Item href="/RecipesDis/Vegan">{translate('Vegan')}</NavDropdown.Item>
                                <NavDropdown.Item href="/RecipesDis/Gluten-Free">{translate('Gluten-Free')}</NavDropdown.Item>
                                <NavDropdown.Item href="/RecipesDis/Keto">{translate('Keto')}</NavDropdown.Item>

                            </NavDropdown>
                            <Nav.Link href='/About'>{translate('About')}</Nav.Link>
                            <Nav.Link href='/Glossary'>{translate('Glossary')}</Nav.Link>
                            <NavDropdown title={translate('Language')} id='basic-nav-dropdown'>
                                <NavDropdown.Item onClick={() => setLocale(LOCALES.ENGLISH)}>EN</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => setLocale(LOCALES.FRENCH)}>FR</NavDropdown.Item>
                            </NavDropdown>
                        </Nav></div>
                </Container>
            </Navbar>
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