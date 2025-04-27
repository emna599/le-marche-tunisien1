import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Almarai', sans-serif;
`;

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  color: #D90B31;
  font-size: 2rem;
  font-weight: 100;
  position: relative;
  display: inline-block;
  margin: 0;

  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 2px;
    background: #D90B31;
    margin: 10px auto 0;
  }
`;

const BrandSubtitle = styled.span`
  color: #D90B31;
  font-weight: 100;
  font-size: 2rem;
  font-family: 'Almarai', sans-serif;
  margin-left: 8px;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  position: relative;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0,0,0,0.15);
  }
`;

const PromoBadge = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: #D90B31;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.9rem;
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
  padding: 25px;
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
  padding: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProductName = styled.h3`
  margin: 0 0 0.8rem 0;
  font-size: 1.1rem;
  font-weight: 400;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  margin: 0 0 1.2rem 0;
  color: #333;
  font-size: 1.2rem;
`;

const AddButton = styled.button`
  width: 100%;
  padding: 0.7rem;
  background: #D90B31;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.3s ease;
  margin-top: auto;
  
  &:hover {
    background: #b30928;
    transform: translateY(-2px);
  }
`;

function PacksCadeaux() {
  const products = [
    {
      id: 1,
      name: "Coffret apéro time 200 gr",
      price: "4,90 €",
      image: require('../Images/apero-time.webp'),
      isPromo: true
    },
    {
      id: 2,
      name: "Duo piquant 200 gr",
      price: "4,90 €",
      image: require('../Images/duo-piquant.webp'),
      isPromo: true
    },
    {
      id: 3,
      name: "Duo harissa 200 gr",
      price: "4,90 €",
      image: require('../Images/duo-harissa.webp'),
      isPromo: true
    },
    {
      id: 4,
      name: "Duo saveurs 200 gr",
      price: "4,90 €",
      image: require('../Images/duo-saveurs.webp'),
      isPromo: true
    },
    {
      id: 5,
      name: "Spicy Box",
      price: "8,90 €",
      image: require('../Images/spicy-box.webp'),
      isPromo: false
    },
    {
      id: 6,
      name: "Tunisian Box",
      price: "8,90 €",
      image: require('../Images/tunisian-box.webp'),
      isPromo: false
    },
    {
      id: 7,
      name: "Houmous Box",
      price: "8,90 €",
      image: require('../Images/houmous-box.webp'),
      isPromo: false
    },
    {
      id: 8,
      name: "Mediterranean Box",
      price: "8,90 €",
      image: require('../Images/mediterranean-box.webp'),
      isPromo: false
    }
  ];

  return (
    <SectionContainer id="packs-cadeaux">
      <TitleWrapper>
        <SectionTitle>PACKS CADEAUX</SectionTitle>
        <BrandSubtitle>BY "JARDINS DE CARTHAGE"</BrandSubtitle>
      </TitleWrapper>
      
      <ProductsGrid>
        {products.map(product => (
          <ProductCard key={product.id}>
            {product.isPromo && <PromoBadge>PROMO !</PromoBadge>}
            
            <ImageContainer>
              <ProductImage 
                src={product.image} 
                alt={product.name}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300?text=Image+Non+Disponible';
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

export default PacksCadeaux;
