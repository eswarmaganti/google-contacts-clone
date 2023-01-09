import React from "react";

import { Container, Typography } from "@mui/material";
import {
  useGetContactsQuery,
  useDeleteContactMutation,
  useEditContactMutation,
} from "../services/contactsApi";
import Spinner from "../components/Spinner";
import ContactsList from "../components/ContactsList";
import { useNavigate } from "react-router-dom";

const FavouriteContactsPage = () => {
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
        sx={{ color: "#ED6C02", textTransform: "uppercase" }}
        gutterBottom
      >
        Favourite Contacts
      </Typography>
      {!data.filter((item) => item.isFavourite).length ? (
        <Typography align="center">No Favourite Contacts Availabel</Typography>
      ) : (
        <ContactsList
          contacts={data.filter((item) => item.isFavourite)}
          handleDeleteContact={handleDeleteContact}
          handleEditContact={handleEditContact}
          handleUpdateToFavourite={handleUpdateToFavourite}
        />
      )}
    </Container>
  );
};

export default FavouriteContactsPage;
