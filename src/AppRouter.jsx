import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddContactPage from "./pages/AddContactPage";
import ContactsPage from "./pages/ContactsPage";
import FavouriteContactsPage from "./pages/FavouriteContactsPage";
import EditContactPage from "./pages/EditContactPage";

import Layout from "./components/Layout";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<ContactsPage />} />
          <Route path="/add-contact" element={<AddContactPage />} />
          <Route path="/edit-contact/:id" element={<EditContactPage />} />
          <Route path="/favourites" element={<FavouriteContactsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
