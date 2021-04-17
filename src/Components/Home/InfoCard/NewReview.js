import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const NewReview = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit1 = data => {
        console.log(data);

        const eventData = {
            name: data.example,
            disc: data.exampleRequired,
            
        }

        const url = `https://guarded-springs-77725.herokuapp.com/addReview`;
        fetch(url , {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body : JSON.stringify(eventData)
        })
        .then(res=>{
            console.log('Server side response ' , res);
        })
        
    };


    return (
        <div>

             {/* this in for input form */}
             <h1 className="text-secondary">Review Our Service!</h1>

            <form onSubmit={handleSubmit(onSubmit1)}>
                <label htmlFor="">Enter Your Name</label>
                <input name="name" className="w-100 py-2 rounded bg-primary text-light" placeholder="Enter Your Name" defaultValue="" {...register("example")} /> <br/> <br/>
                <label htmlFor="">Your Comments</label>
                <textarea className="w-100 p-3 bg-info text-light rounded" {...register("exampleRequired", { required: true })} /> <br/>

                <br/>
                
               

                {/* {errors.exampleRequired && <span>This field is required</span>} */}
                
                <input className="btn btn-outline-success" type="submit" /><br/><br/>

                <button className="btn btn-warning text-dark px-3"><Link to="/">Home</Link></button>
            </form>
            
        </div>
    );
};

export default NewReview;