import HeaderRight from './components/Header/headeright';
import Header from './components/Header/Header';
import MenuComputer from './route/computer';

function App() {
  return (
    <>
      {/* 
      <div className="preloader">
        <div className="loader" />
      </div>
      */}
      <main className="body-bg">
        <Header />
        <header className="header">
          <div className="container container-two">
            <nav className="header-inner flx-between">
              <div className="logo">
                <a href="index.html" className="link">
                  <img src="assets/images/logo/logo.png" alt="Logo" />
                </a>
              </div>
              <MenuComputer />
              <HeaderRight />
            </nav> 
          </div>
        </header>
      </main>
    </>
  );
}

export default App;
