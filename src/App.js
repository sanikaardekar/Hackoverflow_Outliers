import './App.css';
import React from 'react';
import Navbar from './components/UI/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Maths from './pages/Maths/Maths';
import Login from './pages/Login';
import Signup from './pages/Signup';

import Cards from './components/FlashCards/Cards';
import FlashCard from './components/FlashCards/FlashCard';
import Calendar from './pages/Calender';
import VideoChat from './pages/VideoChat';
import Interview from './components/Interview/Interview';
import Main from './components/Interview/Main';

import Visualize from "./pages/Coding/Visualize"
import Seive from "./components/Visualize/VizAlgorithms/primeComponents/seive";
import Queen from "./components/Visualize/VizAlgorithms/queenComponents/queen";
import BinarySearch from "./components/Visualize/VizAlgorithms/binarySearchComponent/binarySearch";
import Pathfinder from "./components/Visualize/VizAlgorithms/pathfinderComponents/pathfinder";
import Sort from "./components/Visualize/VizAlgorithms/sortComponents/sort";
import ConvexHull from "./components/Visualize/VizAlgorithms/convexHullComponents/convexHull";
import RecursiveSort from "./components/Visualize/VizAlgorithms/recursiveSortComponents/recursiveSort";
import TuringMachine from "./components/Visualize/VizAlgorithms/Turing Machine/turingMachine";
import Puzzle from "./components/Visualize/VizAlgorithms/15puzzleComponents/puzzle";
import Graph from "./components/Visualize/VizAlgorithms/Graph/graph";
import Build from './pages/Coding/Build';

import Mythology from './pages/Mythology/Mythology';
import Crossword from './pages/Mythology/MythoCrossword';
import Home from './pages/Home';
import Footer from './components/UI/Footer';
import New from './pages/New';
import Coding from './pages/Coding/Coding';
import Contests from './pages/Coding/Contests';
import GeoGebra from './pages/Maths/GeoGebra';
import MythoDisplay from './pages/Mythology/MythoDisplay';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/maths" element={<Maths />} />
          <Route path="/geogebra" element={<GeoGebra />} />

          <Route path="/videochat" element={<><Navbar /><VideoChat /></>} />
          <Route path="/math/flashcard" element={<><Navbar /><FlashCard /></>} />
          <Route path="/math/flashcard/deck1" element={<><Navbar /><Cards /></>} />
          <Route path="/interview" element={<><Navbar /><Interview /></>} />
          <Route path="/interview/main" element={<><Navbar /><Main /></>} />
          <Route path="/calendar" element={<Calendar />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/" exact element={<Signup />} /> */}

          <Route path="/coding" exact element={<><Navbar /><Coding /></>} />
          <Route path="/coding/visualize" element={<><Navbar /><Visualize /></>} />
          <Route path="/coding/visualize/prime" element={<><Navbar/><Seive /></>} />
          <Route path="/coding/visualize/nqueens" element={<><Navbar/><Queen /></>} />
          <Route path="/coding/visualize/pathfinder" element={<><Navbar/><Pathfinder /></>} />
          <Route path="/coding/visualize/sort" element={<><Navbar/><Sort /></>} />
          <Route path="/coding/visualize/convexhull" element={<><Navbar/><ConvexHull /></>} />
          <Route path="/coding/visualize/binarysearch" element={<><Navbar/><BinarySearch /></>} />
          <Route path="/coding/visualize/recursivesort" element={<><Navbar/><RecursiveSort /></>} />
          <Route path="/coding/visualize/turing" element={<><Navbar/><TuringMachine /></>} />
          <Route path="/coding/visualize/puzzle" element={<><Navbar/><Puzzle /></>} />
          <Route path="/coding/visualize/graph" element={<><Navbar/><Graph /></>} />
          <Route path="/build" element={<><Navbar/><Build /></>} />
          <Route path="/contests" element={<><Navbar/><Contests /></>} />

          <Route path="/mythology" element={<><Navbar/><Mythology /></>} />
          <Route path="/mythology/crossword" element={<><Crossword /></>} />
          <Route path="/mythology/display" element={<><MythoDisplay /></>} />

          <Route path="/" element={<><Navbar/>< Home/><Footer/></>} />
          <Route path="/new" element={<><New/></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
