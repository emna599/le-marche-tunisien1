import React from 'react';
import Header from './components/Header';
import Body from './components/Body'; // <-- OK tu as bien importé
import Patisseries from './components/Patisseries';
import ThesCafesJeux from './components/ThesCafesJeux';
import PoterieTunisie from './components/PoterieTunisie';
import Boissons from './components/Boissons';
import PacksPromo from './components/PacksPromo';
import Epices from './components/Epices';
import Specialites from './components/Specialites';
import PetitDejeunerBiscuits from './components/PetitDejeunerBiscuits';
import CremesZgougou from './components/CremesZgougou';
import PacksCadeaux from './components/PacksCadeaux';
import SpecialitesTunisiennes from './components/SpecialitesTunisiennes';
import HarissaTomates from './components/HarissaTomates';
import ThonsSardines from './components/ThonsSardines';
import BsissaShorghoChamia from './components/BsissaShorghoChamia';
import AromesTunisie from './components/AromesTunisie';
import VousAimerezAussi from './components/VousAimerezAussi';
import BestSellersNewProducts from './components/BestSellersNewProducts';
import RedBannerSection from './components/RedBannerSection';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Body /> {/* <-- ici tu ajoutes ton Body pour qu’il s'affiche */}
      <Patisseries />
      <ThesCafesJeux />
      <PoterieTunisie />
      <Boissons />
      <PacksPromo />
      <Epices />
      <Specialites />
      <PetitDejeunerBiscuits />
      <CremesZgougou />
      <PacksCadeaux />
      <SpecialitesTunisiennes />
      <HarissaTomates />
      <ThonsSardines />
      <BsissaShorghoChamia />
      <AromesTunisie />
      <VousAimerezAussi />
      <BestSellersNewProducts />
      <RedBannerSection />
      <Footer />
      
    </div>
  );
}

export default App;
