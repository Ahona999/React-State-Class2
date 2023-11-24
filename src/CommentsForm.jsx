import { useState } from "react";

export default function CommentsForm() {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    });

    let inputHandleChange = (event) => {
        setFormData((currData) => {
            return {...currData, [event.target.name]: event.target.value };
        });
    };

    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        setFormData({
            username: "",
            remarks: "",
            rating: 5
        });
    };


    return(
        <div>
            <h4>Give A Comment!</h4>
                <form onSubmit={handleSubmit}>

                <label htmlFor="username">Username</label>
                <input 
                placeholder="username" 
                type="text" 
                value={formData.username}
                onChange={inputHandleChange}
                id="username"
                name="username"
                />
                <br/><br/><br/><br/>

                <label htmlFor="remarks">Remarks</label>
                <textarea 
                value={formData.remarks} 
                placeholder="Add few remarks" 
                onChange={inputHandleChange}
                id="remarks"
                name="remarks"></textarea>
                <br/><br/><br/><br/>


                <label htmlFor="rating">Rating</label>
                <input 
                placeholder="rating" 
                type="number" 
                min={1} max={5} 
                value={formData.rating}
                onChange={inputHandleChange}
                id="rating"
                name="rating"
                />
                <br/><br/><br/><br/>

                <button>Add Comment</button>
                </form>
        </div>
    );
}