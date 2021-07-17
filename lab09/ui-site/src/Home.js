import { useState } from 'react';
import RecipeList from './RecipeList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lemonbars from './images/lemonbars.jpg';
import applepie from './images/applepie.jpg';
import brownies from './images/brownies.jpg';
import fruitcrisp from './images/fruitcrisp.jpg';

const Home = () => {
    
    const [recipes, setRecipes] = useState([
        { title: "Lemon Bars", body: " blah shdkahf", link: "/lemonbar", id: 1, pic:lemonbars},
        { title: "Apple Pie", body: " blah pie", link:"/applepie", id: 2, pic: applepie},
        { title: "Brownies", body: " blah pie", link:"/applepie", id: 3, pic: brownies},
        { title: "Fruit Crisp", body: " blah pie", link:"/applepie", id: 4, pic: fruitcrisp}
    ])
    return(
        <div className="home">
            <h2>Homepage</h2>
            <Container>
            <Row>
                <Col>
                    <RecipeList recipes={recipes}/>
                </Col>
            </Row>
            </Container>
            
            
        </div>
    )
}
export default Home;