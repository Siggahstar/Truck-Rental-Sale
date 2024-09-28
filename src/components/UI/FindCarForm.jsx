import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Model" required />
        </FormGroup>
        
        <FormGroup className="select__group">
          <select>
            <option value="f150">Ford F-150</option>
            <option value="f250">Ford F-250</option>
            <option value="f350">Ford F-350</option>
            <option value="f450">Ford F-450</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Find Truck</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
