import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import App from './App.js';
import { Button, ButtonGroup, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Checkboxes() {

    // const onChangeHandler = (event) =>{
    //     setFormData(()=>({
    //       ...formData,
    //       [event.target.name]: event.target.value 
    //     }))
    //   }
    
    return (
    //     <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
    //         <input type="radio" className="btn-check" name="btn-radio" id="btn-radio1" autocomplete="off" checked/>
    //         <label className="btn btn-outline-primary" for="btn-radio1">Yes</label>

    //         <input type="radio" className="btn-check" name="btn-radio" id="btn-radio2" autocomplete="off"/>
    //         <label className="btn btn-outline-primary" for="btnradio2">No</label>
    //     </div>
    // )
    
        // <ButtonGroup className="btn-group" role="group" aria-label="Basic radio toggle button group" name='photoPermission'>
        //     <Button 
        //             type="radio" 
        //             size="sm"
        //             className="btn btn-secondary" 
        //             id='btn-radio1'
        //             autoComplete='off'
        //             checked
        //             >Yes
        //     </Button>
        //     <Button
        //             type="radio" 
        //             size="sm"
        //             className="btn btn-secondary" 
        //             id='btn-radio2'
        //             autoComplete='off'
        //             >No
        //     </Button>
        //         </ButtonGroup>

    //     <Form>
    //     {['checkbox', 'checkbox'].map((type) => (
    //         <div key={type} className="mb-3">
    //         <Form.Check type={type} id={`check-api-${type}`}>
    //             <Form.Check.Input type={type} isValid />
    //             <Form.Check.Label>{`Custom api ${type}`}</Form.Check.Label>
    //         </Form.Check>
    //         </div>
    //     ))}
    // </Form>

        <ButtonGroup>
            <Button
                type='radio'
                name='photoPermission'
                value='yes'
                // onChange={onChangeHandler}
                htmlFor='yes'>Yes
                </Button>
        </ButtonGroup>
    )
};
    // export default Checkboxes;
