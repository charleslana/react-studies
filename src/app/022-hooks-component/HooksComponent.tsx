import React, {ChangeEvent, useCallback, useEffect, useState} from "react";

const HooksComponent = () => {

    const [name, setName] = useState('Test');

    const changeName = (value: string) => {
        setName(value);
    }

    const reset = () => {
        setName('Test');
    }

    useEffect(() => {
        console.log('mount');
        return(() => {
            console.log('Updated watching for name');
        });
    }, [name]);

    const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    },[setName]);

    return(
        <div>
            <h1>Name: {name}</h1>
            <button onClick={() => changeName('Test 2')}>Change</button>
            <br/>
            <button onClick={() => reset()}>Reset</button>
            <hr/>
            <input type="text" value={name} onChange={handleInputChange} />
        </div>
    )
}

export default HooksComponent;