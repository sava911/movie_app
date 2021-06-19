

function Food({name}){

  return(<h3>я люблю кушать {name}</h3>);
}
function App() {
  return (
    <div className="App">
    <h1> привет!!!!!!!!!</h1>
      <Food name="борщ"/>
      <Food name="суп"/>
      <Food name="лук"/>
      <Food name="перец"/>
      <Food name="куку"/>
    </div>
  );
}

export default App;
