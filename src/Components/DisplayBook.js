import React from "react";
import "../Style/DisplayBook.css"


const DisplayBook=({book})=>{

    return(
        <div>
            
            <div className="displyBook">
                        {   book &&
                            book.map((displayVideo, index)=>(
                                index<3?
                                <div className="infoBooks">
                                    <div>
                                    <img src={displayVideo.volumeInfo.imageLinks.thumbnail} alt={displayVideo.volumeInfo.title}/>
                                    </div>
                                    <div className="booksInfo">
                                       <h3>{displayVideo.volumeInfo.title}</h3> 
                                       <p>{displayVideo.volumeInfo.description}</p>
                                       <button>Now Read</button>
                                    </div>
                                </div>:
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