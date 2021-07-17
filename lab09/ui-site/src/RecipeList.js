import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const RecipeList = (props) => {
    const recipes=props.recipes;
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