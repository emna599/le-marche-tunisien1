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
  position: relative;
  background: white;
  
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
  font-size: 0.9rem;
  z-index: 2;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 180px;
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
  font-size: 1rem;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: #999;
  font-size: 0.9rem;
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

function Specialites() {
  const products = [
    {
      id: 1,
      name: "Hrouss 200 gr (Jardins de...)",
      originalPrice: "4,99 €",
      promoPrice: "1,59 €",
      image: require('../Images/hrouss.webp'),
      promo: "-20%"
    },
    {
      id: 2,
      name: "Harissa piment de Cayenne 200 gr...",
      originalPrice: "2,49 €",
      promoPrice: "1,99 €",
      image: require('../Images/harissa-cayenne.webp'),
      promo: "-20%"
    },
    {
      id: 3,
      name: "Harissa Berbère 200 gr (Jardins...)",
      originalPrice: "2,99 €",
      promoPrice: "2,39 €",
      image: require('../Images/harissa-berbere.webp'),
      promo: "-20%"
    },
    {
      id: 4,
      name: "Harissade 200 gr (Jardins de...)",
      originalPrice: "4,99 €",
      promoPrice: "1,59 €",
      image: require('../Images/harissade.webp'),
      promo: "-20%"
    },
    {
      id: 5,
      name: "Tomates séchées au soleil 200 gr...",
      originalPrice: "2,90 €",
      promoPrice: "2,32 €",
      image: require('../Images/tomates-sechees.webp'),
      promo: "-20%"
    },
    {
      id: 6,
      name: "Bruschetta de tomates séchées...",
      originalPrice: "1,99 €",
      promoPrice: "1,59 €",
      image: require('../Images/bruschetta.webp'),
      promo: "-20%"
    },
    {
      id: 7,
      name: "Tomatade 200 gr (Jardins de...)",
      originalPrice: "1,99 €",
      promoPrice: "1,59 €",
      image: require('../Images/tomatade.webp'),
      promo: "-20%"
    },
    {
      id: 8,
      name: "Omek houria 200 gr (Jardins de...)",
      originalPrice: "2,49 €",
      promoPrice: "1,99 €",
      image: require('../Images/omek-houria.webp'),
      promo: "-20%"
    }
  ];

  return (
    <SectionContainer id="specialites">
      <SectionTitle>Nos Spécialités Tunisiennes & Tartinables</SectionTitle>
      <ProductsGrid>
        {products.map(product => (
          <ProductCard key={product.id}>
            <PromoBadge>{product.promo}</PromoBadge>
            
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
                <CurrentPrice>{product.promoPrice}</CurrentPrice>
                <OldPrice>{product.originalPrice}</OldPrice>
              </PriceContainer>
              <AddButton>Ajouter au panier</AddButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsGrid>
    </SectionContainer>
  );
}

export default Specialites;