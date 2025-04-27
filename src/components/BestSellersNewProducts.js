import React from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

const MainContainer = styled.section`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Almarai', sans-serif;
  position: relative;
`;

const SectionTitle = styled.h2`
  color: #D90B31;
  font-size: 2rem;
  font-weight: 100;
  position: relative;
  padding-bottom: 10px;
  margin-top: 3rem;

  &:first-child {
    margin-top: 0;
  }

  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 2px;
    background: #D90B31;
    margin-top: 10px;
  }
`;

const ScrollTopButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #A60035;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    transform: translateY(-5px);
    background-color: #8C002D;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
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
  font-size: 1.1rem;
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

function BestSellersNewProducts() {
  const bestSellers = [
    {
      id: 1,
      name: "Fell 2 500 gr (Warda)",
      price: "1,39 €",
      image: require('../Images/fell-warda.webp')
    },
    {
      id: 2,
      name: "Boga cidre Canette 24 cl",
      price: "1,19 €",
      image: require('../Images/boga-cidre.webp')
    },
    {
      id: 3,
      name: "Zgougou 500 gr (BGH)",
      price: "18,90 €",
      image: require('../Images/zgougou-bgh.webp')
    },
    {
      id: 4,
      name: "Double concentré de tomate 800g",
      currentPrice: "3,49 €",
      oldPrice: "3,99 €",
      promo: "PROMO",
      image: require('../Images/tomate-concentre.webp')
    }
  ];

  const newProducts = [
    {
      id: 5,
      name: "Nouasser 500 gr (Marda)",
      price: "2,90 €",
      image: require('../Images/nouasser-marda.webp')
    },
    {
      id: 6,
      name: "Fell 3 500 gr (Marda)",
      price: "1,39 €",
      image: require('../Images/fell-marda.webp')
    },
    {
      id: 7,
      name: "Thon entier à l'huile d'olive",
      price: "8,49 €",
      image: require('../Images/thon-huile-olive.webp')
    },
    {
      id: 8,
      name: "Fell 2 500 gr (Randa)",
      price: "1,19 €",
      image: require('../Images/fell-randa.webp')
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <MainContainer>
      <ScrollTopButton onClick={scrollToTop}>
        <FaArrowUp size={20} />
      </ScrollTopButton>

      {/* Section Meilleures ventes */}
      <SectionTitle>Les meilleures ventes</SectionTitle>
      <ProductsGrid>
        {bestSellers.map(product => (
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
                  <CurrentPrice>{product.price}</CurrentPrice>
                )}
              </PriceContainer>
              <AddButton>Ajouter au panier</AddButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsGrid>

      {/* Section Nouveaux produits */}
      <SectionTitle>Nouveaux produits</SectionTitle>
      <ProductsGrid>
        {newProducts.map(product => (
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
              <PriceContainer>
                <CurrentPrice>{product.price}</CurrentPrice>
              </PriceContainer>
              <AddButton>Ajouter au panier</AddButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsGrid>
    </MainContainer>
  );
}

export default BestSellersNewProducts;