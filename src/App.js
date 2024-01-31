import './App.css';
import Course from './components/cards/Course';
import ChartsLiteracy from './components/charts/ChartsLiteracy';
import CoursesCard from './components/coursals/CoursesCard';
import Footer from './components/footer/Footer';
import IndividualRegistration from './components/form/IndividualRegistration';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <CoursesCard/>
      <ChartsLiteracy/>
      <IndividualRegistration/>
      <Course/>
      <Footer/>


   </div>
  );
}

export default App;
