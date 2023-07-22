import React, {useState} from "react";
import "../Style/DisplayBook.css"


const DisplayBook=({book})=>{

    return(
        <div>
            

            <div className="displyBook">
                        {   book &&
                            book.map((displayVideo)=>(
                                <div>
                                <img src={displayVideo.volumeInfo.imageLinks.thumbnail} alt={displayVideo.volumeInfo.title}/>
                                </div>
                            ))
                            }
            </div>
        </div>
    );
};

export default DisplayBook;