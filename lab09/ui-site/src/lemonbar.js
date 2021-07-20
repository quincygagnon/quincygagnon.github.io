import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import chicken from './images/chicken.jpg';
import fruitcrisp from './images/fruitcrisp.jpg';
import applepie from './images/applepie.jpg';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const Lemonbar = () => {
    const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
        alert("Success! Your comment has been submitted to the moderation team for approval.");
    }
    setValidated(true);
  };

    return (
        
        <div className="Lemonbar">
           
            <h1>Lemon bars</h1>
            <Container>
                <Row>
                    <Col lg='6'>
                        <iframe width='100%' height='100%' src="https://www.youtube.com/embed/MCU_iNowIUw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                    <Col lg='3'>
                        <p><b>Cooking time:</b> 35 minutes</p>
                        <p><b>Preperation time:</b> 40 minutes</p>
                        <p><b>Total time:</b> 1h15</p>
                        <p><b>Rating:</b></p>
                        <p><b>Difficulty Level:</b> Beginner</p>
                    </Col>
                    <Col className='suggBox' lg='3'>
                        <div className='outline-box'>
                            <h5>Suggestions</h5>
                            <div sm='4' className="recipe-preview sugg">
                                <a href={'./RecipeDis'}>
                                    <Row>
                                        <Col sm='5'>
                                            <img width='100%' object-fit='cover' src={chicken} alt={'Chicken Cacciatore'}></img>
                                        </Col>
                                        <Col sm='7'>
                                            <p>Chicken Cacciatore</p>
                                        </Col>
                                    </Row>
                                </a>
                            </div>
                            <div sm='4' className="recipe-preview sugg">
                                <a href={'./RecipeDis'}>
                                    <Row>
                                        <Col sm='5'>
                                            <img width='100%' object-fit='cover' src={fruitcrisp} alt={'Fruit Crisp'}></img>
                                        </Col>
                                        <Col sm='7'>
                                            <p>Fruit Crisp</p>
                                        </Col>
                                    </Row>
                                </a>
                            </div>
                            <div sm='4' className="recipe-preview sugg">
                                <a href={'./RecipeDis'}>
                                    <Row>
                                        <Col sm='5'>
                                            <img width='100%' object-fit='cover' src={applepie} alt={'Apple pie'}></img>
                                        </Col>
                                        <Col sm='7'>
                                            <p>Apple Pie</p>
                                        </Col>
                                    </Row>
                                </a>
                            </div></div>
                    </Col>
                </Row>
                <Row>
                    <Col lg='4' className='ingredients'>
                        <ul>
                            <h2>Ingredients:</h2>
                            <h5>For the shortbread crust:</h5>
                            <li>1 cup (230g; 2 sticks) unsalted butter, melted</li>
                            <li>1/2 cup (100g) granulated sugar </li>
                            <li>2 teaspoons pure vanilla extract </li>
                            <li>1/2 teaspoon salt  </li>
                            <li>2 cups + 2 Tablespoons (265g) all-purpose flour (spoon & leveled) </li>
                            </ul>
                            <ul>
                            <h5>For the lemon filling: </h5>
                            <li>2 cups (400g) granulated sugar </li>
                            <li>6 Tablespoons (46g) all-purpose flour </li>
                            <li>6 large eggs </li>
                            <li>1 tbsp lemon <a href='/Glossary'>zest</a></li>
                            <li>1 cup (240ml) lemon juice (about 4 lemons) </li>
                            <li>optional: confectioners’ sugar for dusting </li>
                        </ul>
                    </Col>
                    <Col className='instructions'>
                        <ol>
                            <h2>Instructions:</h2>
                            <li>
                                Preheat the oven to 325°F (163°C). Line the bottom and sides of a 9×13 baking pan* with parchment paper, leaving an overhang on the sides to lift the finished bars out (makes cutting easier!). Set aside.
                            </li>
                            <li>
                                <b>Make the crust:</b> Mix the melted butter, sugar, vanilla extract, and salt together in a medium bowl. Add the flour and stir to completely combine. The dough will be thick. Press firmly into prepared pan, making sure the layer of crust is nice and even. Bake for 20-22 minutes or until the edges are lightly browned. Remove from the oven. Using a fork, poke holes all over the top of the warm crust (not all the way through the crust). A new step I swear by, this helps the filling stick and holds the crust in place. Set aside until step 4.
                            </li>
                            <li>
                                <b>Make the filling:</b> <a href='/Glossary'>Sift</a> the sugar and flour together in a large bowl. Whisk in the eggs, then the lemon juice until completely combined.
                            </li>
                            <li>
                                Pour filling over warm crust. Bake the bars for 22-26 minutes or until the center is relatively set and no longer jiggles. (Give the pan a light tap with an oven mitt to test.) Remove bars from the oven and cool completely at room temperature. I usually cool them for about 2 hours at room temperature, then stick in the refrigerator for 1-2 more hours until pretty chilled. I recommend serving chilled.
                            </li>
                            <li>
                                Once cool, lift the parchment paper out of the pan using the overhang on the sides. <a href='/Glossary'>Dust</a> with confectioners’ sugar and cut into squares before serving. For neat squares, wipe the knife clean between each cut. Cover and store leftover lemon bars in the refrigerator for up to 1 week.
                            </li>
                            <li>
                                <b>Freezing Instructions: </b>Lemon bars can be frozen for up to 3-4 months. Cut the cooled bars (without confectioners’ sugar topping) into squares, then place onto a baking sheet. Freeze for 1 hour. Individually wrap each bar in aluminum foil or plastic wrap and place into a large bag or freezer container to freeze. Thaw in the refrigerator, then dust with confectioners’ sugar before serving.
                            </li>
                        </ol>
                    </Col>
                </Row>
                <Row>
                    <h2>Comments</h2>
                    <p>Be the first to submit a comment!</p>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required type="name" placeholder="Firstname Lastname" />
                            <Form.Control.Feedback type="invalid">Oops! Please enter your name.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email" placeholder="name@example.com" />
                            <Form.Control.Feedback type="invalid">Oops! Please enter your email.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Comment: </Form.Label>
                            <Form.Control required as="textarea" rows={3} />
                            <Form.Control.Feedback type="invalid">Oops! Please enter a comment.</Form.Control.Feedback>
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Row>
            </Container>

        </div>
    );
}

export default Lemonbar;

{/*Recipe and video from https://sallysbakingaddiction.com/lemon-bars-recipe/ */ }