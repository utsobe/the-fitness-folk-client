import logo from './logo.svg';
import './App.css';

const number = 55555;
const singer = { name: 'Dr. Mahfuz', job: 'singer' };
const singer2 = { name: 'Eva Rahman', job: 'singer' };

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  return (
    <div className="App">
      <Person name="Rubel" nayika="moushumi"></Person>
      <Person name="Bapparaj" nayika="cheka"></Person>
      <Person name="kuber" nayika="kopila"></Person>
      <h5>New Component. yey...</h5>
      <p id='totocompany'>ROck mama.. React Mama...</p>
      <Friend movie="Singham" phone="0138743"></Friend>
      <Friend phone="0184355"></Friend>
    </div >
  );
}

function Person(props) {
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>Nayika: {props.nayika}</p>
    </div>
  )
}

function Friend(props) {
  console.log(props);
  return (
    <div className='container'>
      <h3>Name: {props.movie}</h3>
      <p>Phone: {props.phone}</p>
    </div>
  )
}

export default App;
