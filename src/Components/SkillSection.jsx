import { Grid, Typography, Box } from "@mui/material";
import { skills } from "../Data/skills";
import CardSkill from "./CardSkill";

export default function SkillSection() {

  const renderSkills = (title, type) => (
    <Grid item xs={12} md={4}>
      <Box sx={{ textAlign: "center" }}>
        <Typography 
          variant="h4" 
          sx={{ mb: 3, fontWeight: 600 }}
        >
          {title}
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {skills
            .filter(skill => skill.type === type)
            .map((skill, index) => (
              <Grid item key={index}>
                <CardSkill
                  title={skill.title}
                  altImg={skill.alt}
                  img={skill.img}
                />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Grid>
  );

  return (
    <Grid container spacing={4} justifyContent="center">
      {renderSkills("Backend", "backend")}
      {renderSkills("Frontend", "frontend")}
      {renderSkills("Tools", "tools")}
    </Grid>
  );
}
