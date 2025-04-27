import React, { useState } from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Almarai', sans-serif;
`;

const SectionTitle = styled.h2`
  color: #D90B31;
  text-align: center;
  font-size: 2rem;
  font-weight: 100;
  position: relative;
  margin-bottom: 2rem;

  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 2px;
    background: #D90B31;
    margin: 10px auto 0;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
`;

const PromoBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #D90B31;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.8rem;
  z-index: 2;
`;

const PackBadge = styled.div`
  position: absolute;
  top: 40px;
  left: 10px;
  background-color: #D90B31;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.8rem;
  z-index: 2;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const QuickView = styled.div`
  position: absolute;
  bottom: -40px;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  padding: 10px;
  transition: bottom 0.3s ease;
  font-size: 0.9rem;

  ${ProductCard}:hover & {
    bottom: 0;
  }
`;

const ProductInfo = styled.div`
  padding: 1.2rem;
  background: white;
`;

const ProductName = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 400;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;
`;

const CurrentPrice = styled.span`
  font-weight: bold;
  color: #D90B31;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: #999;
  font-size: 0.9rem;
`;

const AddButton = styled.button`
  width: 100%;
  padding: 0.6rem;
  background: #D90B31;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease;
  
  &:hover {
    background: #b30928;
  }
`;

function Boissons() {
  const products = [
    {
      id: 1,
      name: "Boga cidre Canette 24 cl pack de 6",
      originalPrice: "7,14 €",
      promoPrice: "5,95 €",
      image: require('../Images/boga-pack.webp'),
      isPromo: true
    },
    {
      id: 2,
      name: "Apla 24 cl pack de 6 canettes",
      originalPrice: "7,14 €",
      promoPrice: "5,95 €",
      image: require('../Images/apla-pack.webp'),
      isPromo: true
    },
    {
      id: 3,
      name: "Boga cidre Canette 24 cl",
      price: "1,19 €",
      image: require('../Images/boga-single.webp'),
      isPromo: false
    },
    {
      id: 4,
      name: "Apla 24 cl",
      price: "1,19 €",
      image: require('../Images/apla-single.webp'),
      isPromo: false
    }
  ];

  return (
    <SectionContainer id="nos-boissons">
      <SectionTitle>Nos Boissons</SectionTitle>
      <ProductsGrid>
        {products.map(product => (
          <ProductCard key={product.id}>
            {product.isPromo && (
              <>
                <PromoBadge>PROMO !</PromoBadge>
                <PackBadge>PACK</PackBadge>
              </>
            )}
            <ImageContainer>
              <ProductImage src={product.image} alt={product.name} />
              <QuickView>APERÇU RAPIDE</QuickView>
            </ImageContainer>
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <PriceContainer>
                {product.isPromo ? (
                  <>
                    <CurrentPrice>{product.promoPrice}</CurrentPrice>
                    <OldPrice>{product.originalPrice}</OldPrice>
                  </>
                ) : (
                  <CurrentPrice>{product.price}</CurrentPrice>
                )}
              </PriceContainer>
              <AddButton>Ajouter au panier</AddButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsGrid>
    </SectionContainer>
  );
}

export default Boissons;