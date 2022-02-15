import "./App.css";
import Menu from "./Component/Menu/Menu";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
function App() {
  return (
    <div className="App">
      <div className=".content-wrap">
        <Header />
        <Menu />
      </div>
      <Footer />
    </div>
  );
}

export default App;
