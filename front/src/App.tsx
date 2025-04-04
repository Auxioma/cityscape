
import Mobile from './components/Navbar/mobile';
import Offcanevas from './components/Header/Offcanvas';
import Header from './components/Header/Header';

import './assets/main.scss';

function App() {

  return (
    <>
      {/* 
      <div className="preloader">
        <div className="loader"></div>
      </div>
      */}
      <div className="overlay"></div>

      <div className="side-overlay"></div>

      <div className="progress-wrap">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      <Mobile />
      <Offcanevas />

      <main className="body-bg">
        <Header />
      </main>
    </>
  )
}

export default App
