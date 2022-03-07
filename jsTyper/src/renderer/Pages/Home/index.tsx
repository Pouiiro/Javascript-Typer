import { useRef, useState } from 'react';

const Home = () => {
  const btnRef = useRef<HTMLInputElement | null>(null);

  const splitCode = (e: any) => {
    e.preventDefault();
    let awo = btnRef.current?.value;
    var regex = /\d+/g;
    var matches = awo?.match(regex);

    awo = awo?.split(matches).join('');

    setType({ string: awo, number: matches });
    btnRef.current.value = '';
  };
  const [typeV, setType] = useState({ string: '', number: null });

  return (
    <div>
      <h1>Js Typer</h1>
      <input
        type='text'
        name='code'
        id='code'
        placeholder='code'
        ref={btnRef}
      />
      <button onClick={splitCode}>Type-It</button>
      <p>{`Strings detected: ${typeV.string}`}</p>
      <p>{`Numbers detected: ${typeV.number}`}</p>
    </div>
  );
};
export default Home;
