import React from "react";

class AddContact extends React.Component{
    render() {
        return (
        <div className=" ui main" >
            AddContact
                    <br />
                    <br />
            <form classNmae="ui from">
                <div className="field">
                    <lable>Name</lable>
                    <input type="text" name="name" placeholder="Enter your name" />
                </div>
                <br />
                <div className="field1">
                    <lable>Email</lable>
                    <input type="email" name="text" placeholder="Enter your email" />
                </div> 
                <br />
                
                <button type="submit" className="ui button"> Add</button>
            </form> 
        </div>
 
        );
    }

    
}
 export default AddContact;