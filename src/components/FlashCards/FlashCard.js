import React from "react";
import Cards from "./Cards";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import trigo from '../../static/trigo.jpg'
import { Link } from "react-router-dom";
export default function FlashCard() {
    return (
        <Card sx={{ maxWidth: 345, margin: "100px" }}>
            <CardMedia
                sx={{ height: 140 }}
                image={trigo}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Trigonometry Deck
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Memorise trigonometry formulas and be happy
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained"><Link style={{ textDecoration: 'none', color: 'white' }} to="/math/flashcard/deck1">Lessgo</Link></Button>
            </CardActions>
        </Card>
    )
}