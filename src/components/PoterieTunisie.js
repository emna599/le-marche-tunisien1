import React, { useState } from 'react';
import styled from 'styled-components';

// Styles réutilisables
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
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
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
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.5s ease;
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

const ProductPrice = styled.p`
  font-weight: bold;
  margin: 0 0 1rem 0;
  color: #333;
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

function PoterieTunisie() {
  const [hoverStates, setHoverStates] = useState({});

  // Données des produits - à remplacer par vos images
  const products = [
    {
      id: 1,
      name: "SERVICE A TABLE COMPLET 29 PCS...",
      price: "189,90 €",
      images: {
        main: require('../Images/poterie1-main.webp'),
        hover: require('../Images/poterie1-hover.webp')
      }
    },
    {
      id: 2,
      name: "SERVICE A SOUPE 8 PCS POUR 6 PRS...",
      price: "79,90 €",
      images: {
        main: require('../Images/poterie2-main.webp'),
        hover: require('../Images/poterie2-hover.webp')
      }
    },
    {
      id: 3,
      name: "SERVICE LBEN 7 PCS POUR 6 PRS...",
      price: "69,90 €",
      images: {
        main: require('../Images/poterie3-main.webp'),
        hover: require('../Images/poterie3-hover.webp')
      }
    },
    {
      id: 4,
      name: "SERVICE APERITIF KHOMSA...",
      price: "49,90 €",
      images: {
        main: require('../Images/poterie4-main.webp'),
        hover: require('../Images/poterie4-hover.webp')
      }
    },
    {
      id: 5,
      name: "CENDRIER N°19/7",
      price: "24,90 €",
      images: {
        main: require('../Images/poterie5-main.webp'),
        hover: require('../Images/poterie5-hover.webp')
      }
    },
    {
      id: 6,
      name: "SERVICE APERITIF SOLEIL BNIKHIAR",
      price: "49,90 €",
      images: {
        main: require('../Images/poterie6-main.webp'),
        hover: require('../Images/poterie6-hover.webp')
      }
    },
    {
      id: 7,
      name: "CENDRIER NOIR MAT",
      price: "24,90 €",
      images: {
        main: require('../Images/poterie7-main.webp'),
        hover: require('../Images/poterie7-hover.webp')
      }
    }
  ];

  return (
    <SectionContainer id="poterie-tunisie">
      <SectionTitle>Poterie de Tunisie</SectionTitle>
      <ProductsGrid>
        {products.map(product => (
          <ProductCard 
            key={product.id}
            onMouseEnter={() => setHoverStates({...hoverStates, [product.id]: true})}
            onMouseLeave={() => setHoverStates({...hoverStates, [product.id]: false})}
          >
            <ImageContainer>
              <ProductImage 
                src={product.images.main} 
                alt={product.name}
                style={{ opacity: hoverStates[product.id] ? 0 : 1 }}
              />
              <ProductImage 
                src={product.images.hover} 
                alt={product.name}
                style={{ opacity: hoverStates[product.id] ? 1 : 0 }}
              />
              <QuickView>APERÇU RAPIDE</QuickView>
            </ImageContainer>
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{product.price}</ProductPrice>
              <AddButton>Ajouter au panier</AddButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsGrid>
    </SectionContainer>
  );
}

export default PoterieTunisie;