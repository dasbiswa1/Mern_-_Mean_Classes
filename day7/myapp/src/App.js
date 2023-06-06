import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';

function App() {
  const arr = [
    {
      email:"dasbiswaranjan236@gmail.com",
      profile :"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Lion_d%27Afrique.jpg/1879px-Lion_d%27Afrique.jpg",
      name :"Biswaranjan Das",
      id:1
    },
    {
      email:"dasbiswaranjan236@gmail.com",
      profile :"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Lion_d%27Afrique.jpg/1879px-Lion_d%27Afrique.jpg",
      name :"Biswaranjan Das",
      id:1
    },
    {
      email:"dasbiswaranjan236@gmail.com",
      profile :"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Lion_d%27Afrique.jpg/1879px-Lion_d%27Afrique.jpg",
      name :"Biswaranjan Das",
      id:1
    }
  ]

  return (
  <div className="App">
    <Navbar/>
    <div className="cont">
      {arr.map((el) => {
        return (
          <Card username = {el.name} image={el.profile} />
        );
      //   <Card
      // username = "Biswaranjan Das"
      // image = {
      //   "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Lion_d%27Afrique.jpg/1879px-Lion_d%27Afrique.jpg"
      // }/>
      })}
    </div>
  </div>
  );
}

export default App;
