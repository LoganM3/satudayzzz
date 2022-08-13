import React from "react";
import { useState } from "react";

const Pages = () => {
    const [data, setData] = useState([])
    
    const getPages = () => {
        fetch('https://api.sampleapis.com/coffee/hot')
            .then( res  =>  res.json())
            .then( json  =>  setData(json) )
            .catch(err =>  console.error(err) )
        
    }


    getPages()


return(
    <>
    <header>
        <h1>Saturdayzzz</h1>
    </header>
    <main>
        { data.map((each) => {
            return( 
                <div>
                    <h2>{each.title} </h2>
                    <img src ={each.image} alt =" "/>
                    <p>{each.description}</p>
                </div>
            )
        })}
    </main>

    </>
)

}


export default Pages