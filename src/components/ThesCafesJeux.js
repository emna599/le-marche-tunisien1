import React from 'react';
import styled from 'styled-components';

// Importez vos images (exemple)
import theMenthe from '../Images/the-menthe.webp';
import jeuRami from '../Images/rami.webp';
import jeuChkobba from '../Images/chkobba.webp';

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

function ThesCafesJeux() {
  const products = [
    {
      id: 1,
      name: "Thé Vert Instantané à la Menthe...",
      price: "4,49 €",
      image: theMenthe
    },
    {
      id: 2,
      name: "Jeu de cartes Rami",
      price: "4,29 €",
      image: jeuRami
    },
    {
      id: 3,
      name: "Jeu de cartes Chkobba",
      price: "2,29 €",
      image: jeuChkobba
    }
  ];

  return (
    <SectionContainer id="thes-cafes-jeux">
      <SectionTitle>THÉS, CAFÉS & JEUX DE CARTE</SectionTitle>
      <ProductsGrid>
        {products.map(product => (
          <ProductCard key={product.id}>
            <ImageContainer>
              <ProductImage src={product.image} alt={product.name} />
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

export default ThesCafesJeux;