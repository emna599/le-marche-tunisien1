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

const PromoBadge = styled.div`
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  background-color: black;
  color: white;
  padding: 5px 15px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.9rem;
  z-index: 2;
  text-align: center;
  min-width: 80px;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 220px;
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

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;
`;

const CurrentPrice = styled.span`
  font-weight: bold;
  color:rgb(0, 0, 0);
  font-size: 1.1rem;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: #999;
  font-size: 0.95rem;
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

function HarissaTomates() {
  const products = [
    {
      id: 1,
      name: "Double concentré de tomate 800g",
      originalPrice: "9,99 €",
      promoPrice: "3,49 €",
      promo: "PROMO1",
      image: require('../Images/tomate-concentre1.webp')
    },
    {
      id: 2,
      name: "Double concentré de tomate 400g",
      originalPrice: "2,49 €",
      promoPrice: "1,99 €",
      promo: "PROMO2",
      image: require('../Images/tomate-concentre2.webp')
    },
    {
      id: 3,
      name: "Tomate fraîche concassée nature",
      price: "2,99 €",
      image: require('../Images/tomate-fraiche.webp')
    },
    {
      id: 4,
      name: "Tomate fraîche concassée à l'ail",
      price: "2,99 €",
      image: require('../Images/tomate-ail.webp')
    },
    {
      id: 5,
      name: "Harissa 380 gr (Jouda)",
      price: "2,49 €",
      image: require('../Images/harissa-jouda1.webp')
    },
    {
      id: 6,
      name: "Harissa 135gr + 30gr Gratuit (Jouda)",
      price: "1,49 €",
      image: require('../Images/harissa-jouda2.webp')
    },
    {
      id: 7,
      name: "Harissa tube 70 gr (Tucal)",
      price: "0,89 €",
      image: require('../Images/harissa-jouda3.webp')
    },
    {
      id: 8,
      name: "Harissa tube 140 gr (Tucal)",
      price: "1,59 €",
      image: require('../Images/harissa-jouda4.webp')
    }
  ];

 return (
    <SectionContainer id="harissa-tomates">
      <SectionTitle>Nos Harissa & Tomates</SectionTitle>
      <ProductsGrid>
        {products.map(product => (
          <ProductCard key={product.id}>
            {product.isPromo && <PromoBadge>PROMO</PromoBadge>}
            
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

export default HarissaTomates;