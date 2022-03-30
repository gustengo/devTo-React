import React from 'react';
import {Form, Button, Card} from 'react-bootstrap'


function CajaComentarios(){
    return(
<Card>
  <Card.Header as="h5">Discussion 1</Card.Header>
  <Card.Body>
    <Card.Title>
        
    </Card.Title>
    
    <Form> 
    <span style={{display:'flex', alingItems:'left'}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5yTxBxqX7UPLILheEuZbgOuYver2PQLQxuQ&usqp=CAU" style={{'borderRadius':'50' }}/></span>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    
    <Form.Control as="textarea" rows={3} />
    <br/>
    <Button variant="primary">Submit</Button>
    <Button variant="secundary">Preview</Button>
        <br/>
        <br/>
    
    <Card>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
      <span style={{display:'flex', alingItems:'left'}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5yTxBxqX7UPLILheEuZbgOuYver2PQLQxuQ&usqp=CAU" style={{'borderRadius':'50' }}/></span>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.{' '}
      </p>
      <footer className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
  
  </Form.Group>
  
</Form>
 
    
  </Card.Body>
</Card>

    );
}

export default CajaComentarios;