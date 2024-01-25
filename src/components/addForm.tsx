import 'bootstrap/dist/css/bootstrap.css'; 
import {Button,Form,Col,Row} from 'react-bootstrap';
import * as formik from 'formik';
import {useContext} from 'react';
import {UserContext} from '../index';
import { useDispatch } from 'react-redux'
// import addData from '../reducer/formReducer'
// import type { AppDispatch } from '../store'
var fs = require('browserify-fs');
// export const useAppDispatch: () => AppDispatch = useDispatch
const AddForm = (props : any) => {
    const { Formik } = formik;
    const location:string = useContext(UserContext);

    // const dispatch = useAppDispatch()

    return(
      <Formik
      onSubmit={(values, actions) => {
         const data:string =JSON.stringify(values, null, 2);
         console.log(data); 
       //  dispatch({form:values})
	//       fs.writeFile('../mock/data.json', 'jhhjghkh', function() {
	// 	fs.readFile('../mock/data.json', 'utf-8', function(err:any, adata:any) {
	// 		console.log(adata);
	// 	});
	// });
      }}
      initialValues={{
        model:props.modelName,
        location:location,
        year:'',
        kms:0,
        fitments:'',
        transmission:'',
        owners:0,
        validDate:'',
        color:''
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form onSubmit={handleSubmit} className="addform">
          <Row>
          <Form.Group  as={Col} controlId="formModel">
            <Form.Label >Model</Form.Label>
            <Form.Control 
            type="text" 
            name="model"
            value={values.model} 
            disabled 
            placeholder="Model" />
          </Form.Group>
          <Form.Group  as={Col} controlId="formLocation">
            <Form.Label >Location</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="place"
            name="location"
            value={values.location} 
            onChange={handleChange} />
          </Form.Group>
          </Row><Row>
        <Form.Group as={Col} controlId="formColor">
            <Form.Label >Color</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="color"
            value={values.color} 
            name="color"
            onChange={handleChange} />
          </Form.Group>
          <Form.Group as={Col} controlId="formOwners">
            <Form.Label >No of Owners</Form.Label>
            <Form.Control 
            type="number"
            name="owners"
            value={values.owners} 
            onChange={handleChange} />
          </Form.Group>  </Row><Row>
          <Form.Group  as={Col} controlId="formyear">
            <Form.Label >Year of manufacture</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Year"
            name="year"
            value={values.year} 
            onChange={handleChange} />
          </Form.Group>
          <Form.Group  as={Col} controlId="formTransmission">
            <Form.Label >Transmission</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="transmission"
            value={values.transmission} 
            name="transmission"
            onChange={handleChange} />
          </Form.Group>  </Row><Row>
          <Form.Group  as={Col} controlId="formDate">
            <Form.Label >Insurance Valid upto</Form.Label>
            <Form.Control 
            type="date" 
            placeholder="Insurance upto"
            value={values.validDate} 
            name="validDate"
            onChange={handleChange} />
          </Form.Group>
          <Form.Group  as={Col} controlId="formFitments">
            <Form.Label >External fitments</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="fitments"
            value={values.fitments} 
            name="fitments"
            onChange={handleChange}
             />
          </Form.Group>  </Row><Row>
          <Form.Group  as={Col} controlId="formkms">
            <Form.Label >Kms</Form.Label>
            <Form.Control 
            type="number" 
            placeholder=""
            value={values.kms} 
            name="kms"
            onChange={handleChange} />
          </Form.Group>
          <Form.Group  as={Col} controlId="formphoto">
            <Form.Label >Photo</Form.Label>
            <Form.Control type="file"
            name="photo" accept='.png,.jpg,.jpeg' />
          </Form.Group>  </Row><Row>
          <Button variant="primary" className='col-sm-3'  type="submit">
            Submit
          </Button>  </Row>
        </Form>
      )}</Formik>
    )
}

export default AddForm