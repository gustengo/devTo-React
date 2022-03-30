import React from 'react';
import {FloatingLabel, Form} from 'react-bootstrap';
import Editor from '../components/editor/index' 

function NewArticule() {
    return(
      <div>
      
        <FloatingLabel controlId="floatingTextarea2" label="Comments">
        
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '300px' }}
        />
         
      </FloatingLabel>
      <Editor/>
      </div>
    );
}

export default NewArticule;