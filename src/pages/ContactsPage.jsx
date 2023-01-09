import React from "react";

import { Container, Typography } from "@mui/material";

import {
  useGetContactsQuery,
  useDeleteContactMutation,
  useEditContactMutation,
} from "../services/contactsApi";
import { useNavigate } from "react-router-dom";
import ContactsList from "../components/ContactsList";
import Spinner from "../components/Spinner";

const ContactsPage = () => {
  const navigate = useNavigate();

  const { isLoading, data, error } = useGetContactsQuery();
  const [editContact] = useEditContactMutation();

  const [deleteContact] = useDeleteContactMutation();

  const handleDeleteContact = async (id) => {
    await deleteContact(id);
  };

  const handleEditContact = (id) => {
    navigate(`/edit-contact/${id}`);
  };

  const handleUpdateToFavourite = async (contact) => {
    await editContact({ ...contact, isFavourite: !contact.isFavourite });
  };

  if (isLoading) return <Spinner />;
  return (
    <Container maxWidth="xl">
      <Typography
        variant="h6"
        component="h6"
        sx={{ color: "#1976D2", textTransform: "uppercase" }}
        gutterBottom
      >
        All Contacts
      </Typography>
      {data.length ? (
        <ContactsList
          contacts={data}
          handleEditContact={handleEditContact}
          handleDeleteContact={handleDeleteContact}
          handleUpdateToFavourite={handleUpdateToFavourite}
        />
      ) : (
        <Typography align="center">No Contacts Available</Typography>
      )}
    </Container>
  );
};

export default ContactsPage;
