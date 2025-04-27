import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaShoppingBag, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../Images/logo.webp';

const HeaderContainer = styled.header`
  font-family: 'Ela Sans Semi Light Caps', Arial, sans-serif;
  position: sticky;
  top: 0;
  z-index: 1000;
  background: white;
  box-shadow: ${({ isScrolled }) => 
    isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'};
  transition: all 0.3s ease;
`;

const TopBar = styled.div`
  background: #cc092f;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  font-size: 14px;
  transition: all 0.3s ease;
  height: ${({ isScrolled }) => isScrolled ? '0' : 'auto'};
  overflow: hidden;
  padding: ${({ isScrolled }) => isScrolled ? '0' : '8px 20px'};
  opacity: ${({ isScrolled }) => isScrolled ? '0' : '1'};
  position: relative;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px 10px;
    text-align: center;
  }
`;

const LoginText = styled.span`
  position: absolute;
  right: 20px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MiddleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  transition: all 0.3s ease;

  ${HeaderContainer}.scrolled & {
    padding: 10px 40px;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const Logo = styled.img`
  height: 50px;
  transition: height 0.3s ease;

  ${HeaderContainer}.scrolled & {
    height: 40px;
  }

  @media (max-width: 768px) {
    height: 40px;
    margin-left: 10px;
  }
`;

const SearchBar = styled.div`
  width: 300px;
  position: relative;
  margin: 0 auto;
  transition: all 0.3s ease;
  opacity: ${({ isScrolled }) => isScrolled ? '0' : '1'};
  height: ${({ isScrolled }) => isScrolled ? '0' : 'auto'};
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 40px 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  font-family: 'Ela Sans Semi Light Caps', Arial, sans-serif;
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
`;

const Cart = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    color: #2ecc71;
  }

  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #eee;
  padding: ${({ isScrolled }) => isScrolled ? '5px 0' : '15px 0'};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #333;
  padding: 5px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNav = styled.div`
  display: none;
  width: 100%;
  background: white;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  }
`;

const MobileNavItem = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  color: black;
  text-transform: uppercase;
  font-weight: normal;
  cursor: pointer;

  &:hover {
    color: #cc092f;
  }
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CategoriesRow = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
  padding: 0;
  margin: 0;
  justify-content: center;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

const NavItem = styled.li`
  font-weight: normal;
  cursor: pointer;
  color: black;
  text-transform: uppercase;
  position: relative;
  padding: 0 5px;
  
  &:hover {
    &::before {
      content: '[';
      position: absolute;
      left: -8px;
    }
    &::after {
      content: ']';
      position: absolute;
      right: -8px;
    }
  }

  @media (max-width: 768px) {
    padding: 12px 0;
    border-bottom: 1px solid #eee;
    width: 100%;
    text-align: center;

    &:hover::before, &:hover::after {
      content: none;
    }
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  z-index: 100;
  min-width: 200px;
  display: none;
  padding: 10px 0;
  font-family: 'Ela Sans Semi Light Caps', Arial, sans-serif;
  
  ${NavItem}:hover & {
    display: block;
  }

  @media (max-width: 768px) {
    position: static;
    transform: none;
    box-shadow: none;
    display: none;
    padding: 0;
    width: 100%;

    ${({ isOpen }) => isOpen && `
      display: block;
    `}
  }
`;

const DropdownItem = styled.div`
  padding: 8px 20px;
  color: black;
  text-transform: uppercase;
  font-weight: normal;
  white-space: nowrap;
  text-align: center;
  
  &:hover {
    background: #f5f5f5;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    text-align: left;
    white-space: normal;
    border-bottom: none;
  }
`;

const dropdownContent = {
  'EPICERIE SUCRÉE': [
    'CONFITURES & MIELS',
    'DATTES & PATE DE DATTES',
    'BSISSA, SHORGHO & CHAMIA',
    'CRÈMES & ZGOUGOU',
    'PETIT DÉJEUNER',
    'BISCUITS'
  ],
  'EPICERIE SALÉE': [
    'THONS, BOUTARGUES & SARDINES',
    'FEUILLES DE BRICK & FARINES',
    'SALADES MÉCHOUIA',
    'HARISSA & TOMATES',
    'PATES & COUSCOUS',
    'SPÉCIALITÉES TUNISIENNES & TARTINABLES',
    'EPICES',
    'HUILES & VINAIGRES',
    'LÉGUMES & FRUITS SECS',
    'OLIVES & VARIANTES'
  ],
  'PATISSERIES TUNISIENNES': [],
  'BOISSONS': [
    'BOISSONS GAZEUSES',
    'JUS',
    'EAUX FLORALES',
    'THÉS, CAFÉS & TISANES'
  ],
  'ARTISANAT TUNISIENNE': [
    'Arômes de Tunisie',
    'Poteries',
    'Bois d\'olivier',
    'Jeux et loisirs'
  ]
};

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (item) => {
    if (openDropdown === item) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(item);
    }
  };

  return (
    <HeaderContainer isScrolled={isScrolled} className={isScrolled ? 'scrolled' : ''}>
      <TopBar isScrolled={isScrolled}>
        <span>LIVRAISON GRATUITE EN FRANCE METROPOLITAINE À PARTIR DE 59,99 €</span>
        <LoginText>Connexion</LoginText>
      </TopBar>

      <MiddleSection>
        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
        <Logo src={logo} alt="Le Marché Tunisien" />
        <SearchBar isScrolled={isScrolled}>
          <SearchInput placeholder="Rechercher" />
          <SearchIcon />
        </SearchBar>
        <Cart>
          <FaShoppingBag />
          <span>Votre Panier (0)</span>
        </Cart>
      </MiddleSection>

      <Nav isScrolled={isScrolled}>
        <CategoriesContainer>
          <CategoriesRow>
            {Object.keys(dropdownContent).map((item) => (
              <NavItem key={item}>
                {item}
                <Dropdown>
                  {dropdownContent[item].map((subItem) => (
                    <DropdownItem key={subItem}>{subItem}</DropdownItem>
                  ))}
                </Dropdown>
              </NavItem>
            ))}
            <NavItem>BONS PLANS</NavItem>
          </CategoriesRow>
        </CategoriesContainer>
      </Nav>

      <MobileNav isOpen={isMobileMenuOpen}>
        <CategoriesRow>
          {Object.keys(dropdownContent).map((item) => (
            <div key={item}>
              <NavItem onClick={() => toggleDropdown(item)}>
                {item}
                {dropdownContent[item].length > 0 && (
                  <span style={{ float: 'right' }}>
                    {openDropdown === item ? '−' : '+'}
                  </span>
                )}
              </NavItem>
              <Dropdown isOpen={openDropdown === item}>
                {dropdownContent[item].map((subItem) => (
                  <DropdownItem key={subItem}>{subItem}</DropdownItem>
                ))}
              </Dropdown>
            </div>
          ))}
          <NavItem>BONS PLANS</NavItem>
        </CategoriesRow>
      </MobileNav>
    </HeaderContainer>
  );
}

export default Header;