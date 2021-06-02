import React from 'react'

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from '@ui/Card'
import { makeStyles } from '@ui/styles'
import { Button } from '@ui/Button'
import { Typography } from '@ui/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

export function RecipeCard() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://via.placeholder.com/345x140"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Recipe heading
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A recipe is a set of instructions that describes how to prepare or
            make something, especially a dish of prepared food.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}
