import './App.css'
import React, {useState} from "react";
import Header from "./components/Header";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";

function App() {
    const [name, setName] = useState('')
    const [page, setPage] = useState(1)
    return (
        <div className="App">
            <Header title='Test' />
            <div className='wrap'>
                <UserList page={page} select={name} getName={setName} />
                <UserDetails id={name} />
            </div>
            <button disabled={page === 1} onClick={() => setPage(1)}>1</button>
            <button disabled={page === 2} onClick={() => setPage(2)}>2</button>
            <button disabled={page === 3} onClick={() => setPage(3)}>3</button>
        </div>
    );
}
export default App;
