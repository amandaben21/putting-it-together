import React,{useState} from 'react';


const PersonCard = (props) => {
    const [age, setAge] = useState(props.age);
    return (
        <div>
            <h1>{props.full_name}</h1>
            <p>Age:{age}</p>
            <p>Hair Color:{props.hair_color}</p>
            <button onClick={(event) => setAge(age + 1)}>Birthday Button for {props.full_name}</button>
        </div>
    )
    
}
export default PersonCard;