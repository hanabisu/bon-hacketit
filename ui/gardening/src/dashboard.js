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
    const [plants, setPlants] = useState([{"name":"plant1", "desc":"plant1222222"}, {"name":"plant2", "desc":"plan2"},
    {"name":"plant1", "desc":"plant1222222"},{"name":"plant1", "desc":"plant1222222"},
    {"name":"plant1", "desc":"plant1222222"},{"name":"plant1", "desc":"plant1222222"},
    {"name":"plant1", "desc":"plant1222222"},{"name":"plant1", "desc":"plant1222222"},
    {"name":"plant1", "desc":"plant1222222"},{"name":"plant1", "desc":"plant1222222"},
    {"name":"plant1", "desc":"plant1222222"},{"name":"plant1", "desc":"plant1222222"},
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
                    nextHarvest = "3"
                    />
                    </Grid>
                ))
            }
            </Grid>
        </div>
    );
}
