import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

function App() {
    const [value, setValue] = useState('Some text')

    return (
        <div className="App">
            <Counter/>
            <ClassCounter/>
        </div>
    );
}

export default App;
