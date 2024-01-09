const Input = () => {
  return <input defaultValue={'hello'} onChange={e => console.log(e.target.value)} />;
};

const CharCount = () => {
  return <div>Length: 5</div>;
};

const UpperCase = () => {
  return <div>Upper Case: HELLO</div>;
};

const App = () => {
  return (
    <>
      <Input />
      <CharCount />
      <UpperCase />
    </>
  );
};

export default App;
