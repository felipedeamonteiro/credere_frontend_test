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
          <h3>Credere BackEnd Developer Test</h3>
          <Form ref={formRef} onSubmit={handleSubmit} id="signin-form">
            <Input placeholder="Type a name to sign in" name="signin" />
            <Button type="submit">Sign In</Button>
          </Form>
        </AnimationContainer>
      </Content>

      <Instructions>
        <div>
          <h1>Mars Probe Manager</h1>
          <h2>About the application</h2>
          <p>
            This is a <b>Mars Probe Manager</b>. <br />
            Here you will be able to <b>move</b> a mars probe from NASA over a
            test field.
          </p>
          <p>
            Enter the comands{' '}
            <strong>
              GE (Girar Esquerda or Rotate Left), GD (Girar Direita or Rotate
              Right) and M (Mover or Move)
            </strong>{' '}
            to make the probe move along. The information about where you are
            will be shown.
          </p>
          {/* <h2>Watch out!</h2>
          <p>Always you logout the application, all information is lost.</p> */}
          <h3>Enjoy!</h3>
        </div>
      </Instructions>
    </Container>
  );
};

export default SignIn;
