import "./App.css";
import Header from "./components/Header/Header";
import MainArea from "./components/MainArea/MainArea";
import BackToTop from "./components/BackToTop/BackToTop";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <MainArea />
        <BackToTop />
        <Chat />
      </div>
    </>
  );
}

export default App;
