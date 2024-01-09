import { atom, useAtom } from 'jotai';

const textAtom = atom('hello');
const lengthAtom = atom(get => get(textAtom).length);
const upperCaseAtom = atom(get => get(textAtom).toUpperCase());

const Input = () => {
  const [text, setText] = useAtom(textAtom);
  return <input value={text} onChange={e => setText(e.target.value)} />;
};

const CharCount = () => {
  const [len] = useAtom(lengthAtom);
  return <div>Length: {len}</div>;
};

const UpperCase = () => {
  const [upperCase] = useAtom(upperCaseAtom);
  return <div>Upper Case: {upperCase}</div>;
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
