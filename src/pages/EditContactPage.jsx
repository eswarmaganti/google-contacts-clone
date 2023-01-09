import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  Typography,
  Stack,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft } from "@mui/icons-material";

import EditContact from "../components/EditContact";
import { useGetContactQuery } from "../services/contactsApi";

const EditContactPage = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useGetContactQuery(id);

  if (isLoading)
    return (
      <Stack alignItems="center">
        <CircularProgress xs={{ mt: 2 }} />
      </Stack>
    );

  return (
    <Box sx={{ my: 2 }}>
      <Link to="/">
        <Button startIcon={<ChevronLeft />}>Back</Button>
      </Link>
      <EditContact contact={data} />
    </Box>
  );
};

export default EditContactPage;
