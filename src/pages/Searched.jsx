import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (searchedRecipe) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=20&query=${searchedRecipe}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
    console.log(recipes.results);
  };

  useEffect(() => {
    getSearched(params.searched);
  }, [params.searched]);

  return (
    <Grid>
      {searchedRecipes.map((item) => {
        return (
          <Link to={'/recipe/' + item.id}>
            <Card key={item.id}>
              <img src={item.image} alt='' />
              <h4>{item.title}</h4>
            </Card>
          </Link>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem;
  margin-top: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
    &:hover {
      transform: scale(1.1);
      transition: all 0.2s ease-in;
    }
  }

  a {
    text-decoration: none;
  }
  h4 {
    text-align: left;
  }
`;

export default Searched;
