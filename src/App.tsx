const App = () => {
  return (
    <>
      <input defaultValue={'hello'} onChange={e => console.log(e.target.value)} />
      <div>Length: 5</div>
      <div>Upper Case: HELLO</div>
    </>
  );
};

export default App;
