import React from 'react';
import styled from 'styled-components';
import { FaTruck, FaLock, FaHeadset, FaStar } from 'react-icons/fa';

const RedBanner = styled.div`
  background-color: #D90B31;
  color: white;
  padding: 1.5rem 0;
  font-family: 'Almarai', sans-serif;
`;

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  gap: 1rem;
`;

const BannerItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0;
`;

const BannerIcon = styled.div`
  font-size: 1.8rem;
  color: white;
`;

const BannerText = styled.div`
  font-size: 1rem;
  font-weight: 500;
  white-space: nowrap;
`;

function RedBannerSection() {
  return (
    <RedBanner>
      <BannerContainer>
        <BannerItem>
          <BannerIcon><FaTruck /></BannerIcon>
          <BannerText>Livraison en 24/48h</BannerText>
        </BannerItem>
        
        <BannerItem>
          <BannerIcon><FaLock /></BannerIcon>
          <BannerText>Paiement sécurisé</BannerText>
        </BannerItem>
        
        <BannerItem>
          <BannerIcon><FaHeadset /></BannerIcon>
          <BannerText>Service client réactif</BannerText>
        </BannerItem>
        
        <BannerItem>
          <BannerIcon><FaStar /></BannerIcon>
          <BannerText>Avis client 4,8/5</BannerText>
        </BannerItem>
      </BannerContainer>
    </RedBanner>
  );
}

export default RedBannerSection;