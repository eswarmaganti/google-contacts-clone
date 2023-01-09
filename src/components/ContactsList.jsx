import React from "react";

import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  IconButton,
} from "@mui/material";
import { Star, StarOutline, Edit, Delete } from "@mui/icons-material";

const ContactsList = ({
  contacts,
  handleEditContact,
  handleDeleteContact,
  handleUpdateToFavourite,
}) => {
  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>S.No</TableCell>
          <TableCell>Full Name</TableCell>
          <TableCell>Phone Number</TableCell>
          <TableCell>Email Address</TableCell>
          <TableCell>Job Title & Company</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {contacts.map((contact, ind) => (
          <TableRow key={contact.id}>
            <TableCell>{++ind}</TableCell>
            <TableCell>{`${contact.firstName} ${contact.lastName}`}</TableCell>
            <TableCell>{contact.phoneNumber}</TableCell>
            <TableCell>{contact.email}</TableCell>
            <TableCell>{`${contact.jobTitle} - ${contact.company}`}</TableCell>
            <TableCell>
              <IconButton
                xs={{ mr: 2 }}
                onClick={() => handleUpdateToFavourite(contact)}
              >
                {contact.isFavourite ? (
                  <Star color="warning" />
                ) : (
                  <StarOutline color="warning" />
                )}
              </IconButton>
              <IconButton
                xs={{ mr: 2 }}
                onClick={() => handleEditContact(contact.id)}
              >
                <Edit color="info" />
              </IconButton>
              <IconButton onClick={() => handleDeleteContact(contact.id)}>
                <Delete color="error" />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ContactsList;
