import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lemonbars from './images/lemonbars.jpg';
import applepie from './images/applepie.jpg';
import brownies from './images/brownies.jpg';
import fruitcrisp from './images/fruitcrisp.jpg';
import chicken from './images/chicken.jpg';
import pork from './images/pork.jpg';
import { I18nProvider, LOCALES } from './i18n';
import translate from './i18n/translate';


const RecipeList = (props) => {
    const tagfilter=props.tagfilter;
    var [recipes, setRecipes] = useState([
        { title: translate("Lemon Bars"), body: " blah shdkahf", link: "/lemonbar", id: 1, pic:lemonbars, tags:['Dessert', 'Vegetarian', 'All']},
        { title: translate("Chicken Cacciatore"), body: " blah pie", link:"/chickencacciatore", id: 5, pic: chicken, tags:['Dinner', 'Gluten-Free', 'All']},
        { title: translate("Apple Pie"), body: " blah pie", link:"/applepie", id: 2, pic: applepie, tags:['Dessert', 'Vegetarian', 'All']},
        { title: translate("Brownies"), body: " blah pie", link:"/applepie", id: 3, pic: brownies, tags:['Dessert', 'Vegetarian', 'Gluten-Free', 'All']},
        { title: translate("Fruit Crisp"), body: " blah pie", link:"/applepie", id: 4, pic: fruitcrisp, tags:['Dessert', 'Vegetarian', 'Keto', 'All']},
        { title: translate("Moroccan Pork Stew"), body: " blah pie", link:"/porkstew", id: 6, pic: pork, tags:['Dinner', 'Gluten-Free', 'Keto', 'All']}
    ])
    recipes = recipes.filter(recipe => recipe.tags.includes(tagfilter));
    return (
            <Container className="recipe-list">
            <Row>
            {recipes.map((recipe) => (
                <Col sm='4' className="recipe-preview" key={recipe.id}>
                    <a href={recipe.link}>                   
                    <h2>{recipe.title}</h2>
                    <img className="img-preview" src={recipe.pic} alt={recipe.title}></img> 
                    </a>
                </Col>
            ))}
            </Row>
        </Container>
        
      );
}
 
export default RecipeList;