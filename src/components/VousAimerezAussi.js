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
  bottom: -40px;  /* Commence caché sous la carte */
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  padding: 8px;
  transition: bottom 0.3s ease;
  font-size: 0.8rem;

  ${ProductCard}:hover & {
    bottom: 0;  /* Remonte à la position 0 au survol */
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

function VousAimerezAussi() {
  const products = [
    {
      id: 1,
      name: "Chamia - halva amandes 350 gr",
      currentPrice: "2,92 €",
      oldPrice: "4,49 €",
      promo: "-35%",
      image: require('../Images/chamia-amandes.webp'),
      quickViewLink: "https://www.lemarchetunisien.com/halva-amandes"
    },
    {
      id: 2,
      name: "Chamia - halva nature extra 185 gr",
      currentPrice: "1,62 €",
      oldPrice: "2,49 €",
      promo: "-20%",
      image: require('../Images/chamia-nature-extra.webp'),
      quickViewLink: "https://www.lemarchetunisien.com/halva-nature-extra"
    },
    {
      id: 3,
      name: "Pesto 200 gr (Jardins de...)",
      currentPrice: "3,59 €",
      oldPrice: "4,49 €",
      promo: "-20%",
      image: require('../Images/pesto.webp')
    },
    {
      id: 4,
      name: "Houmous basilic 200 gr (Jardins de...)",
      currentPrice: "1,59 €",
      oldPrice: "1,99 €",
      promo: "-20%",
      image: require('../Images/houmous-basilic.webp')
    },
    {
      id: 5,
      name: "Tomatade 200 gr (Jardins de...)",
      currentPrice: "1,59 €",
      oldPrice: "4,99 €",
      promo: "-20%",
      image: require('../Images/tomatade.webp')
    },
    {
      id: 6,
      name: "Harissade 200 gr (Jardins de...)",
      currentPrice: "1,59 €",
      oldPrice: "4,99 €",
      promo: "-20%",
      image: require('../Images/harissade.webp')
    },
    {
      id: 7,
      name: "Corete Mloukhia Tunisienne 200gr",
      price: "3,99 €",
      image: require('../Images/mloukhia.webp')
    },
    {
      id: 8,
      name: "Crème dessert vanille 40 gr (La...)",
      price: "0,99 €",
      image: require('../Images/creme-vanille.webp')
    }
  ];

  return (
    <SectionContainer id="vous-aimerez-aussi">
      <SectionTitle>Vous aimerez aussi</SectionTitle>
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
              {product.quickViewLink && (
                <a href={product.quickViewLink} target="_blank" rel="noopener noreferrer">
                  <QuickView>APERÇU RAPIDE</QuickView>
                </a>
              )}
              {!product.quickViewLink && (
                <QuickView>APERÇU RAPIDE</QuickView>
              )}
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

export default VousAimerezAussi;