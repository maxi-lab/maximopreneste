import { Card, CardHeader, Typography, CardMedia, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useContext } from "react";
import { languageContext } from "../Context/Language";

export default function CardExpirience({ exp }) {
  const lang = useContext(languageContext);

  return (
    <Grid xs={12} md={4}>
      <Card
        sx={{
          background: "rgb(38, 68, 94)",
          color: "white",
          borderRadius: "10px",
          height: "100%",
          display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          "&:hover": {
            boxShadow: "inset 0 0 10px #1630BE, 0 0 10px #1630BE",
          },
          width:500,
        }}
      >
        <CardHeader
          title={lang.locale === "es-AR" ? exp.title : exp.t}
        />

        <CardMedia
          component="img"
          alt={lang.locale === "es-AR" ? exp.altImg : exp.alternative}
          image={exp.img}
          sx={{
            width: "100%",
            maxWidth: "150px",
            height: "auto",
            margin: "0 auto",
            display: "block",
          }}
        />

        <CardContent>
          <Typography variant="body2"   component="p"
  sx={{ whiteSpace: "pre-line" }}>
            {lang.locale === "es-AR"
              ? exp.description
              : exp.desc}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
