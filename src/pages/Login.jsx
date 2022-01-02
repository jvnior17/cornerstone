import styled from "styled-components";
import {mobile} from "../responsive";
import React, { Component }  from 'react';
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Path = styled.path`
  text-decoration: none;
  cursor: pointer;
`;
const Logo = styled.h1`
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  justify-content: center;
  margin: 5px 0px;
  position: absolute;
  top: 50px;
  left: 640px;
  ${mobile({ fontSize: "24px" })}
  `;

  const Account = styled.div`
  font-size: 15px;
  text-align: center;
  cursor: pointer;
  justify-content: center;
  margin: 5px 0px;
  ${mobile({ fontSize: "24px" })}
  `;

const Login = () => {
  return (
 <Container> 
   <div class="Path">> 
   <Link to="/">
            <Logo>MUSE.</Logo>
    </Link>
    </div>
      <Wrapper>
      <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Account>DO NOT YOU REMEMBER THE PASSWORD?</Account>
          <Account>CREATE A NEW ACCOUNT</Account>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
