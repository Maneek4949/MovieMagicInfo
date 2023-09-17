import Header from './components/Header/header';
import Movies from './components/Movies/movies';
import "./App.css"


let api_key="921d51a23e184eccd560292ce58c13f9"
let base="https://api.themoviedb.org/3"
function App() {
  return (
    <div className="App">
      <Header/>
      <Movies/>
    </div>
  );
}

export default App;
