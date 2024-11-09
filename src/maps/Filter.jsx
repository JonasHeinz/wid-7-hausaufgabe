import {
  Stack,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

function Filter({ timespan, setTimespan, minMag, setMinMag }) {
  return (
    <Stack direction="row" spacing={2} id="top-menu" style={{ margin: "10px" }}>
      <Stack>
        <Typography variant="caption" id="magnitude">
          <b>Select Magnitude</b>
        </Typography>
        <ToggleButtonGroup
          aria-labelledby="magnitude"
          value={minMag}
          onChange={(e) => setMinMag(e.target.value)}
          exclusive
        >
          <ToggleButton value="all">ALL</ToggleButton>
          <ToggleButton value="1.0">M1.0+</ToggleButton>
          <ToggleButton value="2.5">M2.5+</ToggleButton>
          <ToggleButton value="4.5">M4.5+</ToggleButton>
          <ToggleButton value="significant">SIGNIFICANT</ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Stack>
        <Typography variant="caption" id="timePeriod">
          <b>Select Time Period</b>
        </Typography>
        <ToggleButtonGroup
          aria-labelledby="timePeriod"
          value={timespan}
          onChange={(e) => setTimespan(e.target.value)}
          exclusive
        >
          <ToggleButton value="hour">LAST HOUR</ToggleButton>
          <ToggleButton value="day">LAST DAY</ToggleButton>
          <ToggleButton value="week">LAST 7 DAYS</ToggleButton>
          <ToggleButton
            value="month"
            disabled={["all", "1.0"].includes(minMag)}
          >
            LAST 30 DAYS
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}
export default Filter;
