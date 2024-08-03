import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

function InputGroup() {
    const [swApi, setSwApi] = useState('');

    const handleGetInfo = () => {
        swApi && console.log(swApi);
        setSwApi('');
    }

    return (
        <form className="input-group">
            <span className="input-group-text" form="inputSwapi">https://swapi.dev/api/</span>
            <Input className="form-control" type="text" placeholder="people/1/" value={swApi} onChange={e => setSwApi(e.target.value)} />
            <Button className="btn btn-outline-secondary" type="button" text="Get info" onClick={handleGetInfo} />
        </form>
    );
}

export default InputGroup;