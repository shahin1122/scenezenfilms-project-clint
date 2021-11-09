import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import './AddService.css'

const AddService = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageUrl , setImageUrl] = useState(null)

    const onSubmit = data => {
        const eventData = {
            type : data.example ,
            detail : data.exampleRequired,
            price : data.exampleRequired2,
            imageUrl: imageUrl,
        };
        
        const url = `https://guarded-springs-77725.herokuapp.com/addService`;
        fetch(url , {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res =>console.log(res))

    };

    const handleImageUpload =(event)=>{
            console.log(event.target.files[0]);

            const imageData = new FormData();
            imageData.set('key' ,'43ec7f78c4f15adba9e1ba8665dfa2fb');
            imageData.append('image' , event.target.files[0])

            axios.post('https://api.imgbb.com/1/upload', imageData)
              .then(function (response) {
                setImageUrl(response.data.data.display_url);
              })
              .catch(function (error) {
                console.log(error);
              });
        }

    return (
      <div>
            <Navbar></Navbar>
            <form className="serviceArea" onSubmit={handleSubmit(onSubmit)}>
                <h1>Admin Panel</h1>
                        <label htmlFor="">Work Type</label><br/>
                        <input defaultValue=" " {...register("example")} /> <br/>
                        <label htmlFor="">Work Detail</label> <br/>
                        <textarea  {...register("exampleRequired", { required: true })} /> <br/>
                        <label htmlFor="">Set Budget</label> <br/>
                        <input type='number' {...register("exampleRequired2", { required: true })} /> <br/><br/><br/>
                        <input onChange={handleImageUpload} type='file' name="exampleRequired3" /> <br/><br/>

                    <input type="submit" /><br/><br/>
                    <button className="btn btn-light rounded"><a href="/">Home</a></button>
            </form>
            <Footer></Footer>
        </div>
    );
};

export default AddService;