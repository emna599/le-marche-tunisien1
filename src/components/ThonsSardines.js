import React from 'react';
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
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
`;

const ProductCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  background: white;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 320px;
  overflow: hidden;
  background: #f9f9f9;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 20px;
  transition: transform 0.3s ease;

  ${ProductCard}:hover & {
    transform: scale(1.05);
  }
`;

const QuickView = styled.div`
  position: absolute;
  bottom: -40px;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  padding: 8px;
  transition: bottom 0.3s ease;
  font-size: 0.8rem;

  ${ProductCard}:hover & {
    bottom: 0;
  }
`;

const ProductInfo = styled.div`
  padding: 1rem;
`;

const ProductName = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
  font-weight: 400;
  min-height: 40px;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  margin: 0 0 1rem 0;
  color: #333;
  font-size: 1rem;
`;

const AddButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  background: #D90B31;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #b30928;
    transform: translateY(-2px);
  }
`;

function ThonsSardines() {
  const products = [
    {
      id: 1,
      name: "Thon entier à l'huile d'olive",
      price: "15,90 €",
      image: require('../Images/thon-huile-olive1.webp')
    },
    {
      id: 2,
      name: "Thon entier à l'huile d'olive",
      price: "8,49 €",
      image: require('../Images/thon-huile-olive2.webp')
    },
    {
      id: 3,
      name: "Thon entier à l'huile d'olive",
      price: "3,49 €",
      image: require('../Images/thon-huile-olive3.webp')
    },
    {
      id: 4,
      name: "Thon entier à l'huile d'olive 4x",
      price: "13,49 €",
      image: require('../Images/thon-huile-olive-4x.webp')
    },
    {
      id: 5,
      name: "Thon entier à l'huile végétale",
      price: "11,49 €",
      image: require('../Images/thon-huile-vegetale.webp')
    },
    {
      id: 6,
      name: "Thon à l'harissa 4 x 160 gr (El...)",
      price: "8,90 €",
      image: require('../Images/thon-harissa.webp')
    }
  ];

  return (
    <SectionContainer id="thons-sardines">
      <SectionTitle>Nos Thons & Sardines</SectionTitle>
      <ProductsGrid>
        {products.map(product => (
          <ProductCard key={product.id}>
            <ImageContainer>
              <ProductImage 
                src={product.image} 
                alt={product.name}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x200?text=Image+Non+Disponible';
                }}
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

export default ThonsSardines;