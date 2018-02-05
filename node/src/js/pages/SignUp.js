import React, { Component } from 'react';
import { Button, Container, Form, FormGroup, Label, Input } from 'reactstrap';

class SignUp extends Component {
  render() {
    return (
      <Container>
        <div className="login-container">
          <h1>{'Create your new account'}</h1>

          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </FormGroup>
            <Button color="primary" block>
              Sign In
            </Button>

            <small className="login-signup text-muted">
              {"Don't have an account? "} <a href="/signup">Create one here</a>
            </small>
          </Form>
        </div>
      </Container>
    );
  }
}

export default SignUp;
