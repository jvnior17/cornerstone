import { popularProducts } from "../data";
import styled from "styled-components";
import React, { Component }  from 'react';


const Container = styled.div`
  width: 100vw;
  min-height: 100vh
  padding: 5rem calc((100vw-130px)/2);
  background-color: #150f0f;
  color: #fff;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500
`;

const ProductCard = styled.div`
  width: 0 2rem;
  line-height: 2;
  width: 300px;
`;

const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  `;

const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem
`;
const ProductDesc = styled.p`
  margin-bottom: 5rem;
`;
const ProductPrice = styled.p`
  margin-bottom: 5rem;
  font-size: 2rem;
`;
const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: #ffc300;
    transitition: 0.2s ease-out;
    cursor: pointer;
    color:#000;
  }
`;
const Product = ({ item }) => {
  return (
    <Container>
      <ProductsHeading></ProductsHeading>
      <ProductWrapper> 
        {data.map((product, id)=> { 
          return (
            <ProductCard key={id}>
            <ProductImg src={item.img} alt={item.alt} />
            <ProductInfo>
            <ProductTitle>{item.name}</ProductTitle>
            <ProductDesc>{item.desc}</ProductDesc>
            <ProductPrice>{item.price}</ProductPrice>
            <ProductButton>{item.button}</ProductButton>
            </ProductInfo>
            </ProductCard>
          )
      })}
</ProductWrapper>
</Container>
  )
    }


export default Product;
