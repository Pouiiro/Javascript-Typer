import { useRef, useState } from 'react';
import styled from 'styled-components';
import * as pkg from ('typechecker')

const Home = () => {
  const [typeV, setType] = useState<Array<{ string: string; number: number }>>([
    { string: 'None', number: 0 },
  ]);
  const [write, setWrite] = useState(false);
  const [write1, setWrite1] = useState(false)
  const [newCode, setNewCode] = useState('')

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

  // let myValue = 'kizi';
  // console.log(myValue);

  const codeCheck = () => {
    let newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.innerHTML = areaRef.current?.value;
    document.getElementById('myDiv').appendChild(newScript);
    const testerArray = newScript.innerHTML.split("\n")
    console.log(testerArray);
    

    const extracted = testerArray[1].replace(/['"]+/g, '').split(" ")
    console.log(testerArray[2].replace(/['"]+/g, '').split(" "));
    
    if (Number(extracted[3])) {
      setNewCode(`${extracted[0]}${' '}${extracted[1]}: number${' '}=${' '}${extracted[3]}`)
      setWrite1(true) ;
    } else {
      setNewCode(`${extracted[0]}${' '}${extracted[1]}: string${' '}=${' '}${extracted[3]}`)
      setWrite1(true) ;
    }
    


    // const getVariable = () => {
    //   const data: any = newScript.innerHTML
    //   data.includes
    // }
  };
  return (
    <div id='myDiv'>
      <h1>Js Typer</h1>
      <input
        type='text'
        name='code'
        id='code'
        placeholder='code'
        ref={btnRef}
      />
      <button onClick={splitCode}>Get type</button>
      <br />
      {write
        ? typeV.map((data: any) => (
            <>
              <p>Strings:{data.string}</p>
              <p>Ints:{data.number}</p>
            </>
          ))
        : 'Nothing'}
      <TextAreaS
        ref={areaRef}
        // onChange={}
        placeholder='Put a code here'
        id='textarea'
      />
      <button onClick={codeCheck}>Run</button>
      <DivArea
        ref={areaRef1}
        // onChange={}
        id='textarea1'
      >
         {write1
        ? <p>{newCode}</p>
        : 'Nothing'}
        </DivArea>
    </div>
  );
};
export default Home;

const TextAreaS = styled.textarea`
  width: 90%;
  height: 200px;
`;
const DivArea = styled.div`
width: 90%;
height: 200px;
background-color:white;
color:black;
`