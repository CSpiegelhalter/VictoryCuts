import React, { Component, useEffect } from 'react'
import {withRouter} from 'next/router'
import * as emailjs from 'emailjs-com'
import classes from './contact-form.module.css'
import { WithRouterProps } from 'next/dist/client/with-router'

import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    message: '',
  }

  handleSubmit(e) {
    e.preventDefault()
    const { name, email, phone, message } = this.state
    let templateParams = {
      from_name: email,
      name: name,
      to_name: 'curt',
      phone: phone,
      message: message,
    }
    emailjs.send('service_nsgmlqh', 'template_3qguufu',
      templateParams,

      'user_lXEJ3tVjlgD8uNOO5FOLn'
    )


    this.resetForm()
  }
  resetForm() {
    
    this.setState({
      name: '',
      email: '',
      phone: '',
      message: '',
    })
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }

  componentDidMount() {

    

    const isNumericInput = (event) => {
      const key = event.keyCode;
      return ((key >= 48 && key <= 57) || // Allow number line
        (key >= 96 && key <= 105) // Allow number pad
      );
    };

    const isModifierKey = (event) => {
      const key = event.keyCode;
      return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
        (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
        (key > 36 && key < 41) || // Allow left, up, right, down
        (
          // Allow Ctrl/Command + A,C,V,X,Z
          (event.ctrlKey === true || event.metaKey === true) &&
          (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
        )
    };

    const enforceFormat = (event) => {
      // Input must be of a valid number format or a modifier key, and not longer than ten digits
      if (!isNumericInput(event) && !isModifierKey(event)) {
        event.preventDefault();
      }
    };

    const formatToPhone = (event) => {
      if (isModifierKey(event)) { return; }

      // I am lazy and don't like to type things more than once
      const target = event.target;
      const input = event.target.value.replace(/\D/g, '').substring(0, 10); // First ten digits of input only
      const zip = input.substring(0, 3);
      const middle = input.substring(3, 6);
      const last = input.substring(6, 10);

      if (input.length > 6) { target.value = `(${zip}) ${middle} - ${last}`; }
      else if (input.length > 3) { target.value = `(${zip}) ${middle}`; }
      else if (input.length > 0) { target.value = `(${zip}`; }
    };

    const inputElement = document.getElementById('phoneNumber');
    inputElement.addEventListener('keydown', enforceFormat);
    inputElement.addEventListener('keyup', formatToPhone);

  }

  

  render() {

    const { router } = this.props
    return (
      <>
        <div id="contact" className={classes.contactForm}>
          <h1 className={classes.heading1}>Call us: (111)111-1111</h1>
          <h1 className={classes.heading}>OR</h1>
          <h1 className={classes.heading1}>Send us a message.</h1>
          <Form className={classes.form} onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup className={classes.formgroup}>
              
              <Input
                type="email"
                name="email"
                required
                value={this.state.email}
                className={classes.input}
                onChange={this.handleChange.bind(this, 'email')}
              />
              <Label className={classes.label}>Email address*</Label>
            </FormGroup>
            <FormGroup className={classes.formgroup}>
              <Input
                type="tel"
                id="phoneNumber"
                name="phone"
                maxlength="16"
                required
                value={this.state.phone}
                className={classes.input}
                onChange={this.handleChange.bind(this, 'phone')}
              />
              <Label className={classes.label}>Phone number*</Label>
            </FormGroup>
            <FormGroup className={classes.formgroup}>
              
              <Input
                type="text"
                name="name"
                value={this.state.name}
                required
                className={classes.input}
                onChange={this.handleChange.bind(this, 'name')}
              />
              <Label className={classes.label}>Name*</Label>
            </FormGroup>
            <FormGroup className={classes.formgroup}>
              
              <Input
                type="textarea"
                name="message"
                required
                className={classes.input}
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
              <Label className={classes.label}>Message*</Label>
            </FormGroup>
            <Button className={classes.button} variant="primary" type="submit" onClick={() => router.push('/thanks')}>
              Submit
            </Button>
          </Form>
        </div>
      </>
    )
  }
}
export default withRouter(ContactForm)