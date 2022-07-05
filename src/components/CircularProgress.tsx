import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
export default function InitialCircularProgress() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", flex : 1, alignSelf:'center' }}>
      Loading... <CircularProgress />
    </Box>
  );
}
