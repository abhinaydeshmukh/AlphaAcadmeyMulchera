import './App.css';
import CoursesCard from './components/coursals/CoursesCard';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <CoursesCard/>
      <Footer/>
   </div>
  );
}

export default App;
