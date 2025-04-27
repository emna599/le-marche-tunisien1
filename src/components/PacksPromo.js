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
  background-color: #333;
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

const SpecialOffer = styled.div`
  color: #D90B31;
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
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

function PacksPromo() {
  const [hoverStates, setHoverStates] = useState({});

  const products = [
    {
      id: 1,
      name: "Pack Fruits Secs Zgougou 400 gr",
      originalPrice: "24,99 €",
      promoPrice: "19,99 €",
      mainImage: require('../Images/zgougou-main.webp'),
      hoverImage: require('../Images/zgougou-hover.webp'),
      showHover: true,
      specialOffer: null
    },
    {
      id: 2,
      name: "Bonbons de Décoration 150gr",
      originalPrice: "4,99 €",
      promoPrice: "3,59 €",
      image: require('../Images/bonbons.webp'),
      showHover: false,
      specialOffer: null
    },
    {
      id: 3,
      name: "PACK VINAIGRE 100% NATUREL (Vahnia)",
      price: "13,96 €",
      image: require('../Images/vinaigre.webp'),
      showHover: false,
      specialOffer: null
    },
    {
      id: 4,
      name: "PACK TARTINABLE (JARDINS DE...)",
      originalPrice: "7,96 €",
      promoPrice: "6,37 €",
      image: require('../Images/tartinable.webp'),
      showHover: false,
      specialOffer: null
    },
    {
      id: 5,
      name: "3+1 GRATUIT Double concentré de...",
      originalPrice: "9,99 €",
      promoPrice: "5,99 €",
      image: require('../Images/vicks.webp'),
      showHover: false,
      specialOffer: "3+1 GRATUIT"
    },
    {
      id: 6,
      name: "2 Nouasser + 2 Halelm (Warda)",
      price: "8,90 €",
      image: require('../Images/warda.webp'),
      showHover: false,
      specialOffer: null
    },
    {
      id: 7,
      name: "3 x 10 feuilles de brick 170 gr",
      originalPrice: "2,99 €",
      promoPrice: "1,50 €",
      mainImage: require('../Images/brick-main.webp'),
      hoverImage: require('../Images/brick-hover.webp'),
      showHover: true,
      specialOffer: "-50%"
    },
    {
      id: 8,
      name: "3+1 Gratuit Bsissa Blé 500 gr (BGH)",
      originalPrice: "12,16 €",
      promoPrice: "9,87 €",
      image: require('../Images/bsissa.webp'),
      showHover: false,
      specialOffer: "3+1 GRATUIT"
    }
  ];

  return (
    <SectionContainer id="packs-promo">
      <SectionTitle>Packs Promotionnels</SectionTitle>
      <ProductsGrid>
        {products.map(product => (
          <ProductCard 
            key={product.id}
            onMouseEnter={() => product.showHover && setHoverStates({...hoverStates, [product.id]: true})}
            onMouseLeave={() => product.showHover && setHoverStates({...hoverStates, [product.id]: false})}
          >
            <PromoBadge>PROMO</PromoBadge>
            <PackBadge>PACK</PackBadge>
            
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
              {product.specialOffer && (
                <SpecialOffer>{product.specialOffer}</SpecialOffer>
              )}
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

export default PacksPromo;