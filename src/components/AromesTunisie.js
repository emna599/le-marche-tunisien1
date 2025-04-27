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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const ProductCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  background: white;
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
  padding: 3px 8px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.8rem;
  z-index: 2;
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
  padding: 15px;
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
  font-size: 0.95rem;
  font-weight: 400;
  min-height: 40px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 1rem;
`;

const CurrentPrice = styled.span`
  font-weight: bold;
  color: #D90B31;
  font-size: 1.1rem;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: #999;
  font-size: 0.9rem;
`;

const SimplePrice = styled.span`
  font-weight: bold;
  color: #333;
  font-size: 1.1rem;
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

function AromesTunisie() {
  const products = [
    {
      id: 1,
      name: "Mélange d'encens bkhour (Jardins...)",
      price: "4,99 €",
      image: require('../Images/encens-bkhour.webp')
    },
    {
      id: 2,
      name: "Henna Naturel 100gr (Jardins de...)",
      price: "3,49 €",
      image: require('../Images/henna-naturel.webp')
    },
    {
      id: 3,
      name: "Ecorce de noyer Swek 10gr",
      currentPrice: "1,59 €",
      oldPrice: "4,99 €",
      promo: "-20%",
      image: require('../Images/ecorce-noyer.webp')
    },
    {
      id: 4,
      name: "Savon à l'huile d'olive - amande...",
      price: "2,89 €",
      image: require('../Images/savon-olive-amande.webp')
    },
    {
      id: 5,
      name: "Savon à l'huile d'olive - ...",
      price: "2,89 €",
      image: require('../Images/savon-olive.webp')
    },
    {
      id: 6,
      name: "Savon corporel naturel amande...",
      price: "5,49 €",
      image: require('../Images/savon-amande.webp')
    },
    {
      id: 7,
      name: "Savon corporel naturel rose et...",
      price: "5,49 €",
      image: require('../Images/savon-rose.webp')
    }
  ];

  return (
    <SectionContainer id="aromes-tunisie">
      <SectionTitle>Arômes de Tunisie</SectionTitle>
      <ProductsGrid>
        {products.map(product => (
          <ProductCard key={product.id}>
            {product.promo && <PromoBadge>{product.promo}</PromoBadge>}
            
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
              <PriceContainer>
                {product.oldPrice ? (
                  <>
                    <CurrentPrice>{product.currentPrice}</CurrentPrice>
                    <OldPrice>{product.oldPrice}</OldPrice>
                  </>
                ) : (
                  <SimplePrice>{product.price}</SimplePrice>
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

export default AromesTunisie;