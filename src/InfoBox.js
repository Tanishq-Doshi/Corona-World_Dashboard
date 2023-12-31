import React from 'react';
import "./InfoBox.css";
import {Card,CardContent,Typography} from "@material-ui/core"
function InfoBox({title,cases,total,...props}) { // props for onClick
  return (
    <Card 
      onClick={props.onClick}
      className="infoBox">
        <CardContent>
            <Typography className="infoBox__title" color="textSecondary">
                {title}
            </Typography>
            <h2 className="infoBox__cases">{cases}</h2>
            <Typography className="infoBox__total" color="textSecondary">
                {total} Total
            </Typography>
        </CardContent>
    </Card>
  )
}

export default InfoBox