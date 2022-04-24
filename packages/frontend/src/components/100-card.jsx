import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard(props) {
  const { id, name, price, description, imageFileName } =
    props.data;
  const navigate = useNavigate();
  return (
    <Card sx={{ display: "flex" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          height: 350,
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 270, padding: "0.5rem", height: "auto" }}
          image={`/img/${imageFileName}`}
        />

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography variant="body1">{name}</Typography>

            <CardActions>
              <Typography variant="h6">{`${price}€`}</Typography>
              <Button
                onClick={() => {
                  navigate(`/smartphone/${id}`);
                }}
              >
                Details
              </Button>
            </CardActions>
            <Typography
              variant="body2"
              sx={{ overflow: "auto", maxHeight: "200px" }}
            >
              {description}
            </Typography>
          </CardContent>
        </Box>
      </Box>
    </Card>
  );
}
