import './App.css';
import InputGroup from './components/Form/InputGroup';
import Card from './components/Card/Card';

function App() {
    return (
        <>
            <div className="App d-flex flex-column gap-3">
                <h1 className="display-6">SWAPI</h1>
                <InputGroup />
                <Card />
            </div>
        </>
    )
}

export default App;