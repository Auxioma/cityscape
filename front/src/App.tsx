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
        <MenuComputer />
      </main>
    </>
  );
}

export default App;
