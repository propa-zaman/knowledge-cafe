
import './App.css';
import Blog from './Components/Blog/Blog';
import Blogs from './Components/Blogs/Blogs';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Blogs></Blogs>
      <Blog></Blog>
     
    </div>
  );
}

export default App;
