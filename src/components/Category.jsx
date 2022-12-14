import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Category() {
  return (
    <List>
      <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={'/cuisine/Chinese'}>
        <GiChopsticks />
        <h4>Chinese</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 30px;
  margin-right: 1.5rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 8rem;
  height: 3rem;
  cursor: pointer;
  /* transform: scale(0.8); */
  @media (max-width: 768px) {
    flex-direction: column;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    justify-content: center;
  }
  @media (max-width: 600px) {
    flex-direction: row;
    border-radius: 30px;
    width: 100%;
    height: 3rem;
    margin: 0.8rem 0;
    justify-content: center;
  }
  h4 {
    color: white;
    font-size: 0.8rem;
    margin: 4px;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  :hover {
    background: linear-gradient(to right, #f27121, #e94057);
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

export default Category;
