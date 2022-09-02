import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useAuth } from 'src/client/contexts/AuthContext';

import googleIcon from '../../assets/images/google-icon.svg';
import { useForm } from '../../hooks/useForm';

import {
  FormContainer,
  FormHeader,
  FormMain,
  Form,
  FormSeparator,
  FormFooter,
  Input,
  Label,
  ActionButton,
  ErrorMessage,
  ValidationErrorMessage,
  LoginMethodSeparator,
  LoginMethodsContainer,
  GoogleButton,
  GoogleIcon,
  InputContainer,
  IconContainer,
  FormGroup,
} from './formStyles';
import { PageContainer, Section, Main, LogoText } from './styles';

interface SignUpInfo {
  name: string;
  email: string;
  password: string;
}

export default function SignUpPage() {
  const navigate = useNavigate();
  const { signUp, googleSignIn, currentUser } = useAuth();
  const [signUpError, setSignUpError] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  useEffect(() => {
    if (currentUser) {
      navigate('/', { replace: true });
    }
  }, [currentUser]);

  const {
    handleSubmit,
    handleChange,
    data: user,
    errors,
  } = useForm<SignUpInfo>({
    validations: {
      name: {
        pattern: {
          value: '^[A-Za-z ]*$',
          message: "You're not allowed to use special characters or numbers in your name.",
        },
      },
      email: {
        required: {
          value: true,
          message: 'Email is required',
        },
        pattern: {
          value: '^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6})*$',
          message: 'This is not a valid email format.',
        },
      },
      password: {
        custom: {
          isValid: (value) => value.length > 6,
          message: 'The password needs to be at least 6 characters long.',
        },
      },
    },
    onSubmit: (details) =>
      onSignUp(details['name'] || '', details['email'] || '', details['password'] || ''),
  });

  useEffect(() => {
    if (signUpError.length > 1) {
      if (Object.keys(errors).length > 0) {
        setSignUpError('');
      }
      if (user.email || user.password || user.name) {
        if (user.email.length > 0 || user.password.length > 0 || user.name.length > 0) {
          setSignUpError('');
        }
      }
    }
  }, [errors, user.name, user.email, user.password]);

  async function onSignUp(name: string, email: string, password: string) {
    await signUp(name, email, password).catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        setSignUpError('Email is already in use');
      } else {
        setSignUpError(error.message);
      }
    });
  }

  async function onGoogleSignUp() {
    await googleSignIn();
  }

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  return (
    <PageContainer>
      <LogoText>taskchum</LogoText>
      <Section>
        <Main>
          <FormContainer>
            {signUpError !== '' && Object.keys(errors).length === 0 && (
              <ErrorMessage>{signUpError}</ErrorMessage>
            )}
            <FormHeader>Sign up</FormHeader>
            <FormMain>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>Name</Label>
                  <InputContainer>
                    <Input placeholder="" value={user.name || ''} onChange={handleChange('name')} />
                  </InputContainer>
                  {errors.name && <ValidationErrorMessage>{errors.name}</ValidationErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <Label>Email</Label>
                  <InputContainer>
                    <Input
                      placeholder="example@mail.com"
                      value={user.email || ''}
                      onChange={handleChange('email')}
                    ></Input>
                  </InputContainer>
                  {errors.email && <ValidationErrorMessage>{errors.email}</ValidationErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <Label>Password</Label>
                  <InputContainer>
                    <Input
                      placeholder=""
                      type={showPassword ? 'text' : 'password'}
                      value={user.password || ''}
                      onChange={handleChange('password')}
                    ></Input>
                    <IconContainer onClick={togglePassword}>
                      {showPassword ? <BsEye color="#a8a9ad" /> : <BsEyeSlash color="#a8a9ad" />}
                    </IconContainer>
                  </InputContainer>
                  {errors.password && (
                    <ValidationErrorMessage>{errors.password}</ValidationErrorMessage>
                  )}
                </FormGroup>

                <ActionButton type="submit">Sign up</ActionButton>
              </Form>
              <LoginMethodsContainer>
                <LoginMethodSeparator>or</LoginMethodSeparator>
                <GoogleButton onClick={onGoogleSignUp}>
                  <GoogleIcon alt="googleIcon" src={googleIcon} />
                  Continue with Google
                </GoogleButton>
              </LoginMethodsContainer>
            </FormMain>
            <FormSeparator />
            <FormFooter>
              Already have an account? <Link to="/login">Login</Link>
            </FormFooter>
          </FormContainer>
        </Main>
      </Section>
    </PageContainer>
  );
}
