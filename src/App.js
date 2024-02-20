import React from "react";
import './App.css';
import Header from "./Components/Header";
import AddContact from "./Components/AddContact";
 import ContactList from "./Components/ContactList";
 import ContactCard from "./Components/ContactCard";


function App() {
 const contacts = [
  {
    id: "1",
    name: "Pavan",
     email: "ambu@gmail.com",

  },


  {
    id: "2",
    name: "Pratap",
     email: "papi@gmail.com",

  },

];

  return (
    <div className="ui cointainer">
      <Header />
      <AddContact />
      <ContactList  contacts={contacts} />
    </div>
  
  );
}

export default App;
