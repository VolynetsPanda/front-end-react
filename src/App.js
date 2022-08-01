import './App.css';
import Header from "./components/Header";

const users = [
    {
        name: 'Vasya',
        age: 10,
        gender: true
    },
    {
        name: 'Petys',
        age: 20,
        gender: true
    },
    {
        name: 'Anya',
        age: 100,
        gender: false
    }
]

function App() {
    const changeColor = (e, color) => {
        console.log(e.target)
        e.target.style.color = color
    }
  return (
    <div className="App">
        <Header
            click={changeColor}
            title="Vasya Header"
            component={() => <p>test component</p>}
        >
            <p>test title</p>
        </Header>
        <ul>
            {users.map((el, key) =>
                <li onClick={(e) => changeColor(e, 'green')} key={key} className={el.gender ? 'name-boy' : "name-girl"}>{el.name} - {el.age}</li>
            )}
        </ul>
    </div>
  );
}

export default App;
