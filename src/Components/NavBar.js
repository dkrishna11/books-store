import React, {useState, useEffect} from "react";
import {FaBookBookmark, FaRegBell}from "react-icons/fa6"
import {IoDiamondOutline}from "react-icons/io5"
import profile from './profile.png'
import '../Style/NavBar.css'
import axios from "axios";

const NavBar=({setBook})=>{
    let [search, setSearch]=useState("");


    useEffect(()=>{
    
    const DataFetch = async ()=>{
    
          try{
            const resultsHerry = await axios.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter");
            const resultsSharelock = await axios.get("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes"); 
            const AllData = resultsHerry.data.items.concat(resultsSharelock.data.items)
            setBook(()=>AllData);
          }
          catch(error){console.log(error,"error Fetching time.....")}
        }
        DataFetch()
      });

    function submitSearch(){
        
        axios.get("https://www.googleapis.com/books/v1/volumes?", {
            params:{
                q:search
            }
        })
        .then(response=> setBook(response.data.items))
        .catch(()=> alert("Book not Found. Try another book"))
        

    }
        return(
            <div className="navBar">
                <div className="logo">
                    <h3>KeazoN<span>BOOKS</span></h3>
                </div>
                <div className="searchBook"> {/*search books*/}
                    <input type="search" placeholder="Search for the book you want and read it now" onChange={(e)=>setSearch(e.target.value)}/>
                    <button onClick={submitSearch}>Search</button>
                </div>
                <div className="icon">
                    <FaBookBookmark className="ic"/>
                    <FaRegBell className="ic"/>
                    <IoDiamondOutline className="ic"/>
                    <img src={profile} alt="pofile"/>
                </div>
            </div>
        );
};

export default NavBar;