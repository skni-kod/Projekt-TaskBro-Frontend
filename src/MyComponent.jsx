import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState();

    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(true);

    const updateName = () => {
        setName("spangebob");
    }

    const incremate = () => {
        setAge(age+1);
    }
    
    const isEmployedfun = () => {
        setIsEmployed(!isEmployed);
    }

    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incremate}>Incremate Age</button>

        <p>IsEmployed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={isEmployedfun}>Is Employed</button>
    </div>);

}
export default MyComponent