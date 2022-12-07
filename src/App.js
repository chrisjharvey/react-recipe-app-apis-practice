import Pages from './pages/Pages';
import Category from './components/Category';
import Search from './components/Search';
import { BrowserRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';

function App() {
  return (
    <div className='App'>
      {/* <h1>Tasty</h1> */}
      <BrowserRouter>
        <Nav>
          <Logo to={'/'}>
            <GiKnifeFork />
            Tasty
          </Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 600;
  font-family: 'Lobster Two', cursive;
  cursor: pointer;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 0rem;
  svg {
    font-size: 2rem;
  }
`;

export default App;

