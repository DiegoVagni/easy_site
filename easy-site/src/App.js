import './App.css';

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import  NavBarButton from "./Components/NavBarButton.jsx"
import ResponsiveAppBar from "./Components/ResponsiveAppBar.tsx"


import Team from "./Pages/Team.jsx"
import Home from "./Pages/Home.jsx"
import Contacts from "./Pages/Contatti.jsx"
import Projects from "./Pages/Projects.jsx"
import Services from "./Pages/Services.jsx"
import Mission from "./Pages/Mission.jsx"
import WebServices from "./Pages/WebServices.jsx"
import GraphicServices from "./Pages/GraphicServices.jsx"
import Easy from "./Pages/Easy.jsx"
import KeyGenerator from "./KeyGenerator.tsx";

function App() {
const { i18n } = useTranslation();
    const [localLanguage, setlocalLanguage] = useState("en");

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setlocalLanguage(language);
    };

    
    const team = <NavBarButton key={KeyGenerator.GetNextKey()} className="nav-link" to="easy/team" i18nkey="menu.team" >team</NavBarButton>
    const mission = <NavBarButton key={KeyGenerator.GetNextKey()} className="nav-link" to="easy/mission" i18nkey="menu.mission" >mission</NavBarButton>
    const webservices = <NavBarButton key={KeyGenerator.GetNextKey()} className="nav-link" to="services/webservices" i18nkey="menu.webservices" >webservices</NavBarButton>
    const graphicservices = <NavBarButton key={KeyGenerator.GetNextKey()} className="nav-link" to="services/graphicservices" i18nkey="menu.graphicservices" >graphicservices</NavBarButton>
    const services = <NavBarButton key={KeyGenerator.GetNextKey()} subpages={[graphicservices, webservices]} to="/services" i18nkey="menu.services"  >servizi</NavBarButton>
    const projects = <NavBarButton key={KeyGenerator.GetNextKey()} subpages={[]} to="/projects" className="nav-link" i18nkey="menu.projects" >progetti</NavBarButton>
    const easy = <NavBarButton key={KeyGenerator.GetNextKey()} subpages={[mission, team]} to="/easy" className="nav-link" i18nkey="menu.easy" >easy</NavBarButton>
    const contatti = <NavBarButton key={KeyGenerator.GetNextKey()} subpages={[]} className="nav-link" to="/contacts" i18nkey="menu.contacts" >contatti</NavBarButton>


    return (
        <div className="App">
            <BrowserRouter>
                <header>
                    <ResponsiveAppBar localLanguage={localLanguage} changeLanguage={changeLanguage} pages={[services, projects, easy, contatti]} colours={["#4c4c4b", "#f2ab15", "#60b8b2", "#7f5d9d"]}>{<p>test</p>}</ResponsiveAppBar>
                    </header>
                <main className="pageContent" maxWidth={false} maxHeight={false} sx={{height:"100%"} }>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services color="#ffffff"/>}/>
                        <Route path="/services/webservices" element={<WebServices color="#ffffff"/>}/>
                        <Route path="/services/graphicservices" element={<GraphicServices color="#ffffff"/>}/>
                        <Route path="/projects" element={<Projects color="#ffffff"/> }/>
                        <Route path="easy/team" element={<Team color="#ffffff"/>} />
                        <Route path="easy/mission" element={<Mission color="#ffffff"/>} />
                        <Route path="easy" element={<Easy color="#ffffff"/>} />
                        <Route path="/contacts" element={<Contacts color="#ffffff"/> } />
                    </Routes>
            </main>
                </BrowserRouter>
            </div>
  );
}

export default App;
