function App() {
  const runMe = (name) => {
    alert("hello " + name);
  };

  return (
    <div>
      <div onClick={() => runMe}>Hello World</div>
    </div>
  );
}

export default App;
