import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MyNavbar from './components/MyNavbar'
import BlogCard from './components/BlogCard'


function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <BlogCard />
  
    </BrowserRouter>

  );
}

export default App;
