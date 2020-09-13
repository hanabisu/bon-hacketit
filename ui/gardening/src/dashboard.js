import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import React, {useState, useEffect} from 'react';
import Plant from './plants';
import AddIcon from '@material-ui/icons/Add';

export function Dashboard() {
  const APP_KEY = "";
  const [plants, setMyPlants] = useState([]);
  useEffect(()=> {
    getMyPlants();
  });
  // create async await call
  const getMyPlants = async () => {
    const response = await fetch(`https://trefle.io/api/v1/species?filter%5Bflower_color%5D=red&token=${APP_KEY}`);
    // once reponse comes back, after await, gonna take json repsone
    // need await if there is a promise/data that is not coming back instantly
    const data = await response.json();
    setMyPlants(data.data);
  }
//     const [plants, setPlants] = useState([{"name":"plant1", "desc":"plant1222222", "nextHarvest": 0, "nextWatering" : 0}, {"name":"plant2", "desc":"plan2", "nextHarvest": 1, "nextWatering" : 1},
//     {"name":"plant3", "desc":"plant1222222", "nextHarvest": 2, "nextWatering" : 1},{"name":"plant4", "desc":"plant1222222", "nextHarvest": 3, "nextWatering" : 1},
//     {"name":"plant5", "desc":"plant1222222", "nextHarvest": 4, "nextWatering" : 1},{"name":"plant6", "desc":"plant1222222", "nextHarvest": 5, "nextWatering" : 1},
//     {"name":"plant7", "desc":"plant1222222", "nextHarvest": -1, "nextWatering" : 1},{"name":"plant8", "desc":"plant1222222", "nextHarvest": 0, "nextWatering" : 1},                         
//     {"name":"plant9", "desc":"plant1222222", "nextHarvest": 0, "nextWatering" : 1},{"name":"plant10", "desc":"plant1222222", "nextHarvest": 0, "nextWatering" : 1},
//     {"name":"plant11", "desc":"plant1222222", "nextHarvest": 0, "nextWatering" : 1},{"name":"plant12", "desc":"plant1222222", "nextHarvest": 0, "nextWatering" : 1},
// ]);

    return (
        <div className = "plantLanding">
            <Grid container justify = "center" spacing = {1}>
                
            {
                plants.map((plant, index) =>(
                    <Grid key = {plant.common_name} item>
                    <Plant
                    key={plant.common_name}
                    plantName = {plant.common_name}
                    plantDate = "04/05/06"
                    shortDescription = {plant.family_common_name}
                    longDescription = "longer info"
                    image = {plant.image_url}
                    nextWatering = {index}
                    nextHarvest = {index}
                    />
                    </Grid>
                ))
            }
            </Grid>

        </div>
    );
}
