import React from "react";
import { CircularProgress, Stack } from "@mui/material";
const Spinner = () => {
  return (
    <Stack alignItems="center">
      <CircularProgress xs={{ mt: 2 }} />
    </Stack>
  );
};

export default Spinner;
