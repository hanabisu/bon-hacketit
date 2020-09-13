import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import PlantExplore from "./plantsExplore";
import AddIcon from "@material-ui/icons/Add";

export function Explore() {
  const [plants, setPlants] = useState([
    {
      name: "explorePlants",
      desc: "plant1222222",
      nextHarvest: 0,
      nextWatering: 0,
    },
    { name: "plant2", desc: "plan2", nextHarvest: 1, nextWatering: 1 },
    { name: "plant3", desc: "plant1222222", nextHarvest: 2, nextWatering: 1 },
    { name: "plant4", desc: "plant1222222", nextHarvest: 3, nextWatering: 1 },
    { name: "plant5", desc: "plant1222222", nextHarvest: 4, nextWatering: 1 },
    { name: "plant6", desc: "plant1222222", nextHarvest: 5, nextWatering: 1 },
    { name: "plant7", desc: "plant1222222", nextHarvest: -1, nextWatering: 1 },
    { name: "plant8", desc: "plant1222222", nextHarvest: 0, nextWatering: 1 },
    { name: "plant9", desc: "plant1222222", nextHarvest: 0, nextWatering: 1 },
    { name: "plant10", desc: "plant1222222", nextHarvest: 0, nextWatering: 1 },
    { name: "plant11", desc: "plant1222222", nextHarvest: 0, nextWatering: 1 },
    { name: "plant12", desc: "plant1222222", nextHarvest: 0, nextWatering: 1 },
  ]);

  return (
    <div className="plantLanding">
      <Grid container justify="center" spacing={1}>
        {plants.map((plant) => (
          <Grid key={plant.name} item>
            <PlantExplore
              key={plant.name}
              plantName={plant.name}
              shortDescription={plant.desc}
              longDescription="longer info"
              imageURL = "data:image/jpeg;base64,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"
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
