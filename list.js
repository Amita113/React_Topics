import React from "react";

function Cars(props){
return ( <h1> This is a {props.brand} car</h1>)

}

function Garage(){
const cars = [
    {id:1,brand:"BMW"},
    {id:2,brand:"Ford"}
]

return(
    <>
    <ul>
    {cars.map((car) => <Cars brand={car.brand} />)}
    </ul> 
    </>
)

}
export default Garage