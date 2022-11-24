import Pages from './pages/Pages';
import Category from './components/Category';
import Search from './components/Search';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      {/* <h1>Tasty</h1> */}
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;

// api_key = 9ecffcada173472c9f97ac07405fadb7
