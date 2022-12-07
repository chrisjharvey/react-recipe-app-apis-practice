import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=10&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
    console.log(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((item) => {
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

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 1rem;
  margin-top: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 1rem;
    object-fit: cover;

    &:hover {
      background: black;
    }
  }

  a {
    text-decoration: none;
  }
  h4 {
    text-align: left;
    padding: 0rem;
  }
`;

export default Cuisine;
