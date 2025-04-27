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

const PromoBadge = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: #D90B31;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.9rem;
  z-index: 2;
`;

const PackBadge = styled.div`
  position: absolute;
  top: 45px;
  left: 15px;
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.9rem;
  z-index: 2;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 240px;
  overflow: hidden;
  background: #f9f9f9;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 20px;
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

function CremesZgougou() {
  const [hoverStates, setHoverStates] = useState({});

  const products = [
    {
      id: 1,
      name: "Zgougou 500 gr (BGH)",
      price: "18,90 €",
      image: require('../Images/zgougou-bgh.webp'),
      isPromo: false
    },
    {
      id: 2,
      name: "Pack Fruits Secs Zgougou 400 gr",
      originalPrice: "24,99 €",
      promoPrice: "19,99 €",
      mainImage: require('../Images/zgougou-pack-main.webp'),
      hoverImage: require('../Images/zgougou-pack-hover.webp'),
      isPromo: true,
      showHover: true
    },
    {
      id: 3,
      name: "Zgougou 500 gr (Capice)",
      price: "17,49 €",
      image: require('../Images/zgougou-capice.webp'),
      isPromo: false
    },
    {
      id: 4,
      name: "Poudre à Crème Pâtissière Goût Vanilliné",
      price: "1,49 €",
      image: require('../Images/creme-patissiere.webp'),
      isPromo: false
    },
    /*
    {
      id: 5,
      name: "Crème dessert vanille 40 gr (La Laitière)",
      price: "0,99 €",
      image: require('../Images/creme-dessert.webp'),
      isPromo: false
    }
      */
  ];

  return (
    <SectionContainer id="cremes-zgougou">
      <SectionTitle>Crèmes & Zgougou</SectionTitle>
      <ProductsGrid>
        {products.map(product => (
          <ProductCard 
            key={product.id}
            onMouseEnter={() => product.showHover && setHoverStates({...hoverStates, [product.id]: true})}
            onMouseLeave={() => product.showHover && setHoverStates({...hoverStates, [product.id]: false})}
          >
            {product.isPromo && (
              <>
                <PromoBadge>PROMO !</PromoBadge>
                <PackBadge>PACK</PackBadge>
              </>
            )}
            
            <ImageContainer>
              {product.showHover ? (
                <>
                  <ProductImage 
                    src={product.mainImage} 
                    alt={product.name}
                    style={{ opacity: hoverStates[product.id] ? 0 : 1 }}
                  />
                  <ProductImage 
                    src={product.hoverImage} 
                    alt={product.name}
                    style={{ opacity: hoverStates[product.id] ? 1 : 0 }}
                  />
                </>
              ) : (
                <ProductImage src={product.image} alt={product.name} />
              )}
              <QuickView>APERÇU RAPIDE</QuickView>
            </ImageContainer>
            
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <PriceContainer>
                {product.promoPrice ? (
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

export default CremesZgougou;