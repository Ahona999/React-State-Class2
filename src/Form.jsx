import { useState } from "react";

export default function Form() {
    // Controlled by React - Single Source//
    let [formData, setFormData] = useState({
        fullName : "",
        username : "",
        password: "",
    });
 

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };//name must be given as stated below to detect//
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            fullName: "",
            username: "",
            password: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Enter Full Name: </label>
            <input
                placeholder="Enter full name"
                type="text"
                value={formData.fullName}
                id="fullName"
                name="fullName"
                onChange={handleInputChange}
            />

            <hr/>
            <br/><br/><br/>

            <label htmlFor="username">Enter user Name : </label>
            <input 
            placeholder = "Enter user name" 
            type="text" 
            value = {formData.username} 
            id="username"
            name="username"
            onChange={handleInputChange}
            />


            <hr/>
            <br/><br/><br/>

            <label htmlFor="password">Enter Password : </label>
            <input 
            placeholder = "Enter Password" 
            type="password" 
            value = {formData.password} 
            id="password"
            name="password"
            onChange={handleInputChange}
            />
            <button>Submit</button>
        </form>
    );
}