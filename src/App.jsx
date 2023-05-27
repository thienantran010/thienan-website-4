import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/home';
import Projects from './components/projects';
import FunFact from './components/funfact';
import projectList from './projectList';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme} from '@chakra-ui/react';
import resume from "./resume.pdf";
import "./styles/App.css";

const colors = {
  bg: "#FAFBFF"
};

const theme = extendTheme({ colors });

function App() {
  return (
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/projects" element={<Projects projectList={projectList}/>} />
            <Route path="/funfact" element={<FunFact />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </ChakraProvider>
  );
}

export default App;
