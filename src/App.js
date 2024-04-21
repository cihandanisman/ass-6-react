import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MyNavbar from './components/MyNavbar'

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
    </BrowserRouter>

  );
}

export default App;
