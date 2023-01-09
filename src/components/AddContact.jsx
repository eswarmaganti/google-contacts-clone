import React, { useState } from "react";
import {
  TextField,
  Container,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import { Save } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useAddContactMutation } from "../services/contactsApi";
import { useNavigate } from "react-router-dom";
const AddContact = () => {
  const contactSchema = Yup.object({
    firstName: Yup.string().min(3).required(),
    lastName: Yup.string().min(3).required(),
    jobTitle: Yup.string().min(3).required(),
    company: Yup.string().min(3).required(),
    email: Yup.string().min(6).email().required(),
    phoneNumber: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone Number is not valid"
      )
      .length(10)
      .required(),
  });

  const initialState = {
    firstName: "",
    lastName: "",
    jobTitle: "",
    company: "",
    email: "",
    phoneNumber: "",
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: initialState,
  });

  const [addContact, { isLoading }] = useAddContactMutation();

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    await addContact({ id: Math.random(), isFavourite: false, ...data });
    reset(initialState);

    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <Container maxWidth="sm">
      <Typography
        color="primary"
        variant="h6"
        sx={{ py: 1, textAlign: "center" }}
      >
        Add New Contact
      </Typography>
      <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit)}>
        <TextField
          variant="standard"
          label="First Name"
          id="firstName"
          name="firstName"
          fullWidth
          margin="dense"
          {...register("firstName")}
          helperText={errors.firstName?.message}
          error={errors.firstName?.message}
        />
        <TextField
          variant="standard"
          label="Last Name"
          id="lastName"
          name="lastName"
          fullWidth
          margin="dense"
          {...register("lastName")}
          helperText={errors.lastName?.message}
          error={errors.lastName?.message}
        />
        <TextField
          variant="standard"
          label="Phone Number"
          id="phoneNumber"
          name="phoneNumber"
          fullWidth
          margin="dense"
          {...register("phoneNumber")}
          helperText={errors.phoneNumber?.message}
          error={errors.phoneNumber?.message}
        />
        <TextField
          variant="standard"
          label="Email Address"
          id="email"
          name="email"
          fullWidth
          margin="dense"
          {...register("email")}
          helperText={errors.email?.message}
          error={errors.email?.message}
        />
        <TextField
          variant="standard"
          label="Company"
          id="company"
          name="company"
          fullWidth
          margin="dense"
          {...register("company")}
          helperText={errors.company?.message}
          error={errors.company?.message}
        />

        <TextField
          variant="standard"
          label="Job Title"
          id="jobTitle"
          name="jobTitle"
          fullWidth
          margin="dense"
          {...register("jobTitle")}
          helperText={errors.jobTitle?.message}
          error={errors.jobTitle?.message}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 2 }}
          startIcon={
            isLoading ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              <Save />
            )
          }
        >
          Save Contact
        </Button>
      </form>
    </Container>
  );
};

export default AddContact;
