import { Route, Routes, BrowserRouter as Router} from "react-router-dom";
import './App.css';
import SplashPage from './pages/SplashPage/SplashPage';
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import LoginElectionPage from "./pages/LoginElectionPage/LoginElectionPage";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AdoptarPage from "./pages/AdoptarPage/AdoptarPage";
import MasPage from "./pages/MasPage/MasPage";
import Gallery from "./components/Gallery/Gallery";
import ResultadosFiltroPage from "./pages/ResultadosFiltroPage/ResultadosFiltroPage";
import FiltersPage from "./pages/FiltersPage/FiltersPage";
import PerfilAnimalPage from "./pages/PerfilAnimalPage/PerfilAnimalPage";
import DonationPage from "./pages/DonationPage/DonationPage";
import ApadrinarPage from "./pages/ApadrinarPage/ApadrinarPage";
import EstadoAdopcionPage from "./pages/EstadoAdopcionPage/EstadoAdopcionPage";
import FormConfirm from "./components/FormConfirm/FormConfirm";
import OnboardingPage from "./pages/OnboardingPage/OnboardingPage";
import NotificationPage from "./pages/NotificationPage/NotificationPage";
import Warning from "./components/Warning/Warning"
import AdoptStateFilter from "./components/AdoptStateFilter/AdoptStateFilter";
import AuthComponent from "./components/Auth/Authcomponent";
import MapPage from "./pages/MapPage/MapPage";
import ProtectorasPage from "./pages/ProtectorasPage/ProtectorasPage";
import MiPerfilPage from "./pages/MiPerfilPage/MiPerfilPage";
import Form from "./components/Forms/Form";
import PerfilAnimal from "./pages/PerfilAnimal/PerfilAnimal";





function App() {
  
  return (
    <div>
    <Router>
        <main>
          <Routes>
            <Route path="/form" element={<Form/>}/>
            <Route path="/" element={<SplashPage></SplashPage>}/>
            <Route path="/home" element={<HomePage></HomePage>}/>
            <Route path="/adopt" element={<AuthComponent component={<AdoptarPage/>}/>}/>
            <Route path="/register" element={<RegisterPage></RegisterPage>}/>
            <Route path="/login" element={<LoginPage></LoginPage>}/>
            <Route path="/loginElection" element={<LoginElectionPage/>}/>         
            <Route path="/profile" element={<AuthComponent component={<ProfilePage/>}/>}/>            
            <Route path="/more" element={<AuthComponent component={<MasPage/>}/>}/>            
            <Route path="/gallery" element={<Gallery/>}/> 
            <Route path="/filtersResult" element={<AuthComponent component={<ResultadosFiltroPage/>}/>}/> 
            <Route path="/filters" element={<FiltersPage/>}/> 
            <Route path="/perfilanimal" element={<PerfilAnimalPage></PerfilAnimalPage>}/> 
            <Route path="/donation" element={<AuthComponent component={<DonationPage/>}/>}/>  
            <Route path="/apadrinar" element={<AuthComponent component={<ApadrinarPage/>}/>}/>  
            <Route path="/sent" element={<FormConfirm></FormConfirm>}/>
            <Route path="/status" element={<AuthComponent component={<EstadoAdopcionPage/>}/>}/>  
            <Route path="/map" element={<MapPage></MapPage>}/>  
            <Route path="/onboarding" element={<OnboardingPage></OnboardingPage>}/>
            <Route path="/notification" element={<NotificationPage></NotificationPage>}/>
            <Route path="/warning" element={<Warning></Warning>}/>
            <Route path="/AdoptFilter" element={<AuthComponent component={<AdoptStateFilter/>}/>}/>
            <Route path="/protectoras" element={<ProtectorasPage></ProtectorasPage>}/>
            <Route path="/userprofile" element={<MiPerfilPage></MiPerfilPage>}/>
            <Route path="/perfil" element={<AuthComponent component={<PerfilAnimal/>}/>}/>
          </Routes>
        </main>
      </Router>

    </div>
  );
}

export default App;
