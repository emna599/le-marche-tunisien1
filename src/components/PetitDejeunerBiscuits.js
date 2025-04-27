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
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  position: relative;
  background: white;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
`;

const BrandHeader = styled.div`
  background: #f5f5f5;
  padding: 0.8rem 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const BrandName = styled.span`
  font-weight: bold;
  color: #333;
`;

const ProductType = styled.span`
  font-size: 0.9rem;
  color: #666;
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
  padding: 10px;
  transition: bottom 0.3s ease;
  font-size: 0.9rem;

  ${ProductCard}:hover & {
    bottom: 0;
  }
`;

const ProductInfo = styled.div`
  padding: 1.2rem;
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
  font-size: 1.1rem;
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
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #b30928;
    transform: translateY(-2px);
  }
`;

function PetitDejeunerBiscuits() {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: 1,
      brand: "Nestlé",
      productLine: "GRAIN d'OR",
      type: "Miel",
      name: "Grain d'or miel 600 gr (Nestle)",
      price: "5,99 €",
      image: require('../Images/grain-dor-miel.webp')
    },
    {
      id: 2,
      brand: "Nestlé",
      productLine: "GRAIN d'OR",
      type: "Cacao",
      name: "Grain d'or cacao 600 gr (Nestle)",
      price: "5,99 €",
      image: require('../Images/grain-dor-cacao.webp')
    },
    {
      id: 3,
      brand: "Nestlé",
      productLine: "GRAIN d'OR",
      type: "Nature",
      name: "Grain d'or naturel 600 gr (Nestle)",
      price: "5,49 €",
      image: require('../Images/grain-dor-nature.webp')
    },
    {
      id: 4,
      brand: "Nestlé",
      productLine: "GRAIN d'OR",
      type: "Biscuit",
      name: "Grain d'or biscuit 600 gr (Nestle)",
      price: "5,49 €",
      image: require('../Images/grain-dor-biscuit.webp')
    },
    {
      id: 5,
      brand: "Kif",
      productLine: "",
      type: "Fourré Chocolat",
      name: "Biscuits fourrés (Kif)",
      price: "2,29 €",
      image: require('../Images/kif-fourre.webp')
    },
    {
      id: 6,
      brand: "Kif",
      productLine: "Smile",
      type: "Lait",
      name: "Smile lait 190gr (Kif)",
      price: "1,99 €",
      image: require('../Images/kif-smile.webp')
    },
    {
      id: 7,
      brand: "Kif",
      productLine: "Tigato",
      type: "Chocolat",
      name: "Tigato chocolat 125gr (kif)",
      price: "1,99 €",
      image: require('../Images/kif-tigato.webp')
    },
    {
      id: 8,
      brand: "Kif",
      productLine: "Croustina",
      type: "Cacao/Vanille",
      name: "Croustina cacao / vanille 100 gr...",
      price: "1,49 €",
      image: require('../Images/kif-croustina.webp')
    }
  ];

  return (
    <SectionContainer id="petit-dejeuner">
      <SectionTitle>Petit déjeuner & Biscuits</SectionTitle>
      <ProductsGrid>
        {products.map(product => (
          <ProductCard 
            key={product.id}
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <BrandHeader>
              {product.brand && <BrandName>{product.brand}</BrandName>}
              {product.productLine && <BrandName>{product.productLine}</BrandName>}
              {product.type && <ProductType>{product.type}</ProductType>}
            </BrandHeader>
            
            <ImageContainer>
              <ProductImage 
                src={product.image} 
                alt={product.name}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300?text=Image+Non+Disponible';
                }}
              />
              <QuickView style={{ 
                bottom: hoveredProduct === product.id ? 0 : -40 
              }}>
                APERÇU RAPIDE
              </QuickView>
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

export default PetitDejeunerBiscuits;