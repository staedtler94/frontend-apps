import Stack from "@mui/material/Stack";
import EngageEvents from "./Events";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function EngageEventsList() {
  const engageEvents = [
    {
      name: "Stakeholder Meeting",
      id: 1,
      imageUrl: "http://localhost:3001/image1",
    },
    {
      name: "Fun Friday",
      id: 2,
      imageUrl: "http://localhost:3001/image2",
    },
    {
      name: "Team Building",
      id: 3,
      imageUrl: "http://localhost:3001/image1",
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
    <Typography variant="h4" component="div" gutterBottom >
        Events List    
    </Typography>
      <Stack spacing={2}>
        {engageEvents.map((engageEvent) => (
          <Item>
            <EngageEvents eventMeta={engageEvent} />
          </Item>
        ))}
      </Stack>
    </Box>
  );
}

export default EngageEventsList;
