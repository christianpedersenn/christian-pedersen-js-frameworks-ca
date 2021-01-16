import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import Validate from "./Validate";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(5, "Please enter a minimum of 5 characters"),
  lastName: yup
    .string()
    .required("Last name is required")
    .min(5, "Please enter a minimum of 5 characters"),
  email: yup
    .string()
    .required("Please enter a valid email adress")
    .email("Please enter a valid email adress"),
  message: yup
    .string()
    .required("Please enter a message")
    .min(10, "Please enter a minimum of 10 characters")
});

function ContactForm() {
  const [validated, setValidated] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
});    
  function onSubmit(data, e) {
    console.log("data", data);
    e.preventDefault();
    e.stopPropagation();
    setValidated(true);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>First name</Form.Label> <br />
        <Validate validated={validated} />
        <Form.Control type="text" placeholder="First name" name="firstName" ref={register()}/>
        {errors.firstName && <Form.Text>{errors.firstName.message}</Form.Text>}
      </Form.Group>

      <Form.Group>
        <Form.Label>Last name</Form.Label> <br />
        <Validate validated={validated} />
        <Form.Control type="text" placeholder="Last name" name="lastName" ref={register()}/>
        {errors.lastName && <Form.Text>{errors.lastName.message}</Form.Text>}
      </Form.Group>

      <Form.Group>
        <Form.Label>Email</Form.Label> <br />
        <Validate validated={validated} />
        <Form.Control type="email" placeholder="Email" name="email" ref={register()}/>
        {errors.email && <Form.Text>{errors.email.message}</Form.Text>}
      </Form.Group>

      <Form.Group>
        <Form.Label>Message</Form.Label> <br />
        <Validate validated={validated} />
        <Form.Control as="textarea" type="text" placeholder="Message .." name="message" ref={register()}/>
        {errors.message && <Form.Text>{errors.message.message}</Form.Text>}
      </Form.Group>
      <Button variant="primary" type="submit" role="button" className="submitButton">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
