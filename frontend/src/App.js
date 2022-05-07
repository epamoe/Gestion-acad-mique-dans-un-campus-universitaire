import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.min.css";

import Accueil from "./screen/Accueil";
import AdminInscriptionScreen from "./screen/inscriptionScreens/AdminConnexionScreen.js";
import ConseilScientifiqueInscriptionScreen from "./screen/inscriptionScreens/ConseilScientifiqueConnexionScreen.js";
import CoordonateurInscriptionScreen from "./screen/inscriptionScreens/CoordonateurConnexionScreen.js";
import EtudiantInscriptionScreen from "./screen/inscriptionScreens/etudiantInscriptionScreen.js";
import ExpertInscriptionScreen from "./screen/inscriptionScreens/ExpertConnexionScreen.js";
import JuryInscriptionScreen from "./screen/inscriptionScreens/JuryConnexionScreen.js";
import RectoratInscriptionScreen from "./screen/inscriptionScreens/RectoratConnexionScreen.js";
import EtudiantConnexionScreen from "./screen/inscriptionScreens/EtudiantConnexionScreen.js";
import DepartementConnexionScreen from "./screen/inscriptionScreens/DepartementConnexionScreen";
import Etudiant from "./screen/Etudiant";
import DepotDossierMaster from "./components/page etudiant/DepotDossierMaster";
import EvolutionDossier from "./components/page etudiant/EvolutionDossier";
import ProfilEtudiant from "./components/page etudiant/ProfilEtudiant";
import Soutenance from "./screen/Soutenance";
import CandidatureScreen from "./screen/InfotmationScreens/CandidatureScreen.js";
import DocumentImportantScreen from "./screen/InfotmationScreens/DocumentImportantScreen.js";

const App = () => {
  const isLogin = true;

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Accueil isLogin={isLogin} />} />
          <Route
            path="/soutenance"
            element={<Soutenance isLogin={isLogin} />}
          />
          <Route path="/account" element={<Etudiant />}>
            <Route path="/account/depot" element={<DepotDossierMaster />} />
            <Route path="/account/profil" element={<ProfilEtudiant />} />
            <Route path="/account/evolution" element={<EvolutionDossier />} />
          </Route>
          <Route
            path="/*"
            element={
              <div className="d-flex flex-column align-items-center text-align-center">
                <h1 style={{ color: "red" }}>ERROR !</h1>
                <h2 style={{ fontWeight: "none" }}>
                  Fonctionnalité pas encore developée
                </h2>
              </div>
            }
          />
          <Route
            path="/connexion/admin"
            element={<AdminInscriptionScreen />}
          ></Route>
          <Route
            path="/connexion/expert"
            element={<ExpertInscriptionScreen />}
          ></Route>
          <Route
            path="/inscription/etudiant"
            element={<EtudiantInscriptionScreen />}
          ></Route>
          <Route
            path="/connexion/etudiant"
            element={<EtudiantConnexionScreen />}
          ></Route>
          <Route
            path="/connexion/rectorat"
            element={<RectoratInscriptionScreen />}
          ></Route>
          <Route
            path="/connexion/jury"
            element={<JuryInscriptionScreen />}
          ></Route>
          <Route
            path="/connexion/coordonateur"
            element={<CoordonateurInscriptionScreen />}
          ></Route>
          <Route
            path="/connexion/conseil-scientifique"
            element={<ConseilScientifiqueInscriptionScreen />}
          ></Route>
          <Route
            path="/connexion/departement"
            element={<DepartementConnexionScreen />}
          ></Route>

          {/* Routes qui concernent les information sur tous ce quil y'a a savoir sur les these et autres */}
          <Route path="/canditature" element={<CandidatureScreen />}></Route>
          <Route
            path="/conseil"
            element={<ConseilScientifiqueInscriptionScreen />}
          ></Route>
          <Route path="/document" element={<DocumentImportantScreen />}></Route>
          {/* <Route path="/equipe" element={<EquipeScreen />}></Route>
        <Route path="/formation" element={<FormationEnTheseScreen />}></Route>
        <Route path="/Inscription" element={<InscriptionScreen />}></Route>
        <Route path="/presentation" element={<Presentation />}></Route>
        <Route
          path="/Procedure"
          element={<ProceduredeSoutenanceScreen />}
        ></Route>
        <Route path="/Suivie" element={<SuivieDeFormation />}></Route>
        <Route
          path="/these-cotutelle"
          element={<TheseEnCotutelleScreen />}
        ></Route>
        <Route path="/these-cours" element={<TheseEnCoursScreen />}></Route>
        <Route
          path="/unites-recherche"
          element={<UnitesRechercheScreen />}
        ></Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
