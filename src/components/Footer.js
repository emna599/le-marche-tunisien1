import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  padding: 3rem 2rem;
  font-family: 'Almarai', sans-serif;
  position: relative;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: left;
  }
`;

const LogoColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 1.5rem;
`;

const ContactInfo = styled.div`
  p {
    margin: 0.3rem 0;
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

const FooterColumn = styled.div``;

const ColumnTitle = styled.h3`
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterItem = styled.li`
  margin-bottom: 0.8rem;
`;

const FooterLink = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  display: inline-flex; /* Pour aligner le trait + texte */
  align-items: center; /* Centre verticalement le trait avec le texte */
  position: relative;

  &:hover {
    color: #D90B31;

    &::before {
      width: 20px; /* Longueur du trait au hover */
    }
  }

  &::before {
    content: '';
    display: inline-block;
    height: 2px; /* Épaisseur du trait */
    width: 0; /* Commence invisible */
    background-color: #D90B31;
    margin-right: 8px; /* Espace entre trait et texte */
    transition: width 0.3s ease;
  }
`;



const Copyright = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
  text-align: center;
  font-size: 0.9rem;
  color: #666;
  padding-top: 1.5rem;
  border-top: 1px solid #e1e1e1;
  position: relative;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const FooterImages = styled.div`
  position: absolute;
  right: 2rem;
  bottom: 1rem;
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    position: static;
    margin-top: 1rem;
    justify-content: flex-start;
  }
`;

const FooterImage = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
  filter: blur(2px);
  transition: all 0.3s ease;
  opacity: 0.7;
  
  &:hover {
    filter: none;
    opacity: 1;
    transform: scale(1.1);
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Colonne Logo et Contact */}
        <LogoColumn>
          <Logo 
            src={require('../Images/logo.webp')} 
            alt="Le Marché Tunisien" 
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/150x50?text=Logo+Non+Disponible';
            }} 
          />
          <ContactInfo>
            <p>14, rue Rémy Cachet</p>
            <p>69120 Vaulx en Velin - Lyon - France</p>
            <p>Appelez-nous : +33 9 80 80 56 50</p>
            <p>Envoyez-nous un e-mail: contact@lemarchetunisien.com</p>
          </ContactInfo>
        </LogoColumn>

        {/* Colonne Nos Produits */}
        <FooterColumn>
          <ColumnTitle>NOS PRODUITS</ColumnTitle>
          <FooterList>
            <FooterItem><FooterLink href="#">Promotions</FooterLink></FooterItem>
            <FooterItem><FooterLink href="#">Nouveaux produits</FooterLink></FooterItem>
            <FooterItem><FooterLink href="#">Meilleures ventes</FooterLink></FooterItem>
          </FooterList>
        </FooterColumn>

        {/* Colonne Informations */}
        <FooterColumn>
          <ColumnTitle>INFORMATIONS</ColumnTitle>
          <FooterList>
            <FooterItem><FooterLink href="#">Qui sommes nous ?</FooterLink></FooterItem>
            <FooterItem><FooterLink href="#">Politique de confidentialités</FooterLink></FooterItem>
            <FooterItem><FooterLink href="#">Conditions générales de vente</FooterLink></FooterItem>
            <FooterItem><FooterLink href="#">Mentions légales</FooterLink></FooterItem>
            <FooterItem><FooterLink href="#">Paiement et livraison</FooterLink></FooterItem>
            <FooterItem><FooterLink href="#">Contactez-nous</FooterLink></FooterItem>
          </FooterList>
        </FooterColumn>

        {/* Colonne Votre Compte */}
        <FooterColumn>
          <ColumnTitle>VOTRE COMPTE</ColumnTitle>
          <FooterList>
            <FooterItem><FooterLink href="#">Informations personnelles</FooterLink></FooterItem>
            <FooterItem><FooterLink href="#">Commandes</FooterLink></FooterItem>
            <FooterItem><FooterLink href="#">Avoirs</FooterLink></FooterItem>
            <FooterItem><FooterLink href="#">Adresses</FooterLink></FooterItem>
            <FooterItem><FooterLink href="#">Bons de réduction</FooterLink></FooterItem>
            <FooterItem><FooterLink href="#">Mes alertes</FooterLink></FooterItem>
          </FooterList>
        </FooterColumn>
      </FooterContent>

      <Copyright>
        <p>Copyright © 2022. Tous les droits sont réservés par lemarchetunisien.com</p>
        
        <FooterImages>
          <FooterImage 
            src={require('../Images/img11.webp')} 
            alt="Image 1"
            onError={(e) => e.target.src = 'https://via.placeholder.com/30'}
          />
          <FooterImage 
            src={require('../Images/img12.webp')} 
            alt="Image 2"
            onError={(e) => e.target.src = 'https://via.placeholder.com/30'}
          />
          <FooterImage 
            src={require('../Images/img13.webp')} 
            alt="Image 3"
            onError={(e) => e.target.src = 'https://via.placeholder.com/30'}
          />
        </FooterImages>
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;