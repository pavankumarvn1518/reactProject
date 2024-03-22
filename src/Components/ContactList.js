import React from "react";
import CardContact from "./ContactCard";


const contactList = (props) => {
    console.log(props); 
    const renderContactList = props.contacts.map((contact) => {
        return(
           <contactCard ></contactCard>
        );


    
    });
    return ( 
        <div className="ui celled list">
            {renderContactList}
        </div>

    );

}
export default contactList;
