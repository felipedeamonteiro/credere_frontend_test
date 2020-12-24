/* eslint-disable react/jsx-one-expression-per-line */
import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
// import { useHistory } from 'react-router-dom';
// import getValidationErrors from '../../utils/getValidationErrors';
// import { useAuth } from '../../hooks/auth';

import { Container, AnimationContainer, Content, Instructions } from './styles';
import LogoColorido from '../../assets/credere.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

interface SignInFormData {
  signin: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  // const { signIn } = useAuth();
  // const history = useHistory();

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        signin: Yup.string().required(
          'Name required! Example: Felipe Monteiro',
        ),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      // signIn({
      //   rawName: data.signin,
      // });

      // history.push('/dashboard');
    } catch (error) {
      // const errors = getValidationErrors(error);
      // formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={LogoColorido} alt="Logo Credere" />
          <h3>Venturus FrontEnd Developer Test</h3>
          <Form ref={formRef} onSubmit={handleSubmit} id="signin-form">
            <Input
              placeholder="Type your first and last names to sign in"
              name="signin"
            />
            <Button type="submit">Sign In</Button>
          </Form>
        </AnimationContainer>
      </Content>

      <Instructions>
        <div>
          <h1>Soccer Squad Manager</h1>
          <h2>About the application</h2>
          <p>
            This is a <b>Soccer squad manager</b> (looks like <b>Cartola FC</b>{' '}
            from Brazil). <br />
            Here you will be able to <b>create</b>, <b>delete</b> and{' '}
            <b>edit</b> teams, adding some description, tags and 10 different
            field formations!
            <br />
            You can choose any player in the world just by informing its
            original team and country.
          </p>
          <p>
            These information are real and acquired from the demo API
            https://www.api-football.com/.
          </p>
          <h2>Watch out!</h2>
          <p>Always you logout the application, all information is lost.</p>
          <h3>Enjoy!</h3>
        </div>
      </Instructions>
    </Container>
  );
};

export default SignIn;
