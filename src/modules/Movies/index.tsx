import { Box, FormLabel, Image } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import React , { useState, useEffect} from "react";




const Movies = () => {


const [state, setState] = useState<any>();

   useEffect(() => {
       
        const call = async () => {
            const response = await fetch(
                'https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1',
            );
            const data = await response.json();

            setState(data.results);
        };

        call();
       
    }, []);

  return (
    <Layout>

        <Box>
          <FormLabel>
            ok
          </FormLabel>
        </Box>
        {console.log(state)}
       <ul>
        {state && state.map((item)=>(
           <li key={item.title}>
            <Image src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${item.poster_path}`} w='150' alt="sla"/>
            {item.title}
          </li>

        ))}
       </ul>
     
    </Layout>
  );
}
export default Movies;


