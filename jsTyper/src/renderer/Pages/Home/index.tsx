import { useRef, useState } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { element } from 'prop-types';

const Home = () => {
  const [write, setWrite] = useState(false);
  const [filled, setFilled] = useState(false);
  const [newCode, setNewCode] = useState<Array<{ code: string; id: string }>>(
    []
  );
  const [typeV, setType] = useState<Array<{ string: string; number: number }>>([
    { string: 'None', number: 0 },
  ]);

  const btnRef = useRef<HTMLInputElement | null>(null);
  const areaRef = useRef<HTMLTextAreaElement | null>(null);
  const areaRef1 = useRef<HTMLDivElement | null>(null);

  const splitCode = () => {
    let dataInput: string = btnRef.current!.value;
    const regex = /\d+/g;
    let matches = dataInput.match(regex);
    let myMatches: number = 0;
    if (matches) {
      myMatches = +matches![0];
      dataInput = dataInput.split(matches![0], 1).join('');
    }
    setType([{ string: dataInput, number: myMatches }]);
    btnRef.current ? (btnRef.current.value = '') : '';
    setWrite(true);
  };

  const codeCheck = () => {
    let extracted: Array<string> = [];

    const newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.innerHTML = areaRef.current?.value;
    document.getElementById('myDiv').appendChild(newScript);
    const testerArray = newScript.innerHTML.split('\n');

    testerArray.forEach((e, i) => {
      extracted.push(testerArray[i].replace(/['"]+/g, '').split(' '));
    });
    extracted.forEach((element) => {
      if (Number(element[3])) {
        newCode.push({
          code: `${element[0]}${' '}${element[1]}: number${' '}=${' '}${
            element[3]
          };`,
          id: nanoid(),
        });
      } else {
        newCode.push({
          code: `${element[0]}${' '}${element[1]}: string${' '}=${' '}${
            element[3]
          };`,
          id: nanoid(),
        });
      }
      setFilled(true);
      return '';
    });
  };

  return (
    <BigDiv id='myDiv'>
      <h1>Js Typer</h1>
      <input
        type='text'
        name='code'
        id='code'
        placeholder='Write Something'
        ref={btnRef}
      />
      <button onClick={splitCode}>Get type</button>
      <br />
      <Divu>
        {write
          ? typeV.map((data: any) => (
              <>
                <p>Strings:{data.string}</p>
                <p>Ints:{data.number}</p>
              </>
            ))
          : '. . .'}
      </Divu>
      <TextAreaS ref={areaRef} placeholder='Put Js code here' id='textarea' />
      <button onClick={codeCheck}>Run</button>
      <DivArea ref={areaRef1} id='textarea1'>
        {filled
          ? newCode.map((element) => (
              <div key={element.id}>
                <p>{element.code}</p>
              </div>
            ))
          : '. . .'}
      </DivArea>
    </BigDiv>
  );
};

export default Home;

const TextAreaS = styled.textarea`
  width: 90%;
  height: 200px;
  padding: 2%;
`;
const DivArea = styled.div`
  width: 90%;
  height: 200px;
  border: 1px solid;
  padding: 2%;
`;
const Divu = styled.div`
  padding: 5%;
  width: 84%;
  border: 1px solid;
  margin-top: 2%;
  margin-bottom: 2%;
`;
const BigDiv = styled.div`
  button {
    margin: 2%;
    width: 20%;
    padding: 0.17%;
  }
`;
