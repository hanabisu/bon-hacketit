import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import React, {useState} from 'react';
import Plant from './plants';

export function Dashboard() {
    const [plants, setPlants] = useState([{"name":"plant1", "desc":"plant1222222", "nextHarvest": 0}, {"name":"plant2", "desc":"plan2", "nextHarvest": 1},
    {"name":"plant3", "desc":"plant1222222", "nextHarvest": 2},{"name":"plant4", "desc":"plant1222222", "nextHarvest": 3},
    {"name":"plant5", "desc":"plant1222222", "nextHarvest": 4},{"name":"plant6", "desc":"plant1222222", "nextHarvest": 5},
    {"name":"plant7", "desc":"plant1222222", "nextHarvest": -1},{"name":"plant8", "desc":"plant1222222", "nextHarvest": 0},                         
    {"name":"plant9", "desc":"plant1222222", "nextHarvest": 0},{"name":"plant10", "desc":"plant1222222", "nextHarvest": 0},
    {"name":"plant11", "desc":"plant1222222", "nextHarvest": 0},{"name":"plant12", "desc":"plant1222222", "nextHarvest": 0},
]);

    return (
        <div className = "plantLanding">
            <Grid container justify = "center" spacing = {1}>
            {
                plants.map(plant =>(
                    <Grid key = {plant.name} item>
                    <Plant
                    key={plant.name}
                    plantName = {plant.name}
                    plantDate = "04/05/06"
                    shortDescription = {plant.desc}
                    longDescription = "longer info"
                    nextWatering = "4"
                    nextHarvest = {plant.nextHarvest}
                    />
                    </Grid>
                ))
            }
            </Grid>

        </div>
    );
}
