import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import * as routes from "./constants/routes";
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import PhotographyGalleryPage from './pages/PhotographyGalleryPage';
import PhotographyPage from './pages/PhotographyPage';
import RealEstateGalleryPage from './pages/RealEstateGalleryPage';
import RealEstatePage from './pages/RealEstatePage';
import PageWrapper from './pages/components/PageWrapper';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PageWrapper exact path={routes.ABOUT} page={AboutPage} />
          <PageWrapper exact path={routes.CONTACT} page={ContactPage} />
          <PageWrapper exact path={routes.PHOTOGRAPHY} page={PhotographyGalleryPage} />
          <PageWrapper path={routes.PHOTOGRAPHY + "/:id"} page={PhotographyPage} />
          <PageWrapper exact path={routes.REALESTATE} page={RealEstateGalleryPage} />
          <PageWrapper path={routes.REALESTATE + "/:id"} page={RealEstatePage} />
          <PageWrapper exact path="/" page={AboutPage} />
          <PageWrapper page={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
