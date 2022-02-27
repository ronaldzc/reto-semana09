
// import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Sidenav from './components/Sidenav';

function App() {
  return (

    <>
      <Header />
      <div className="App">
        <Sidenav />
        <Main />
        <Sidenav />
      </div>
      <Footer />

    </>





  );
}

export default App;
