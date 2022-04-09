import { createContext, useReducer } from 'react';

interface ContextProps {
  state: any;
  setState: any;
}

interface MyState {
  loading: boolean;
  file: any;
  fileDone: boolean;
  conversionDone: boolean;
  jsCode: any;
  astCode: any;
  process: boolean;
}

export const AppContext = createContext<ContextProps | null>(null);

const ProviderV: React.FC = ({ children }) => {
  // const [jsCode, setJsCode] = useState();
  // const [astCode, setAstCode] = useState();

  const [state, setState] = useReducer<
    React.Reducer<MyState, Partial<MyState>>
  >((state: any, newState: any) => ({ ...state, ...newState }), {
    loading: false,
    file: null,
    fileDone: false,
    conversionDone: false,
    jsCode: null,
    astCode: null,
    process: false,
  });

  // useState({
  //   loading: false,
  //   file: null,
  //   fileDone: false,
  //   conversionDone: false,
  //   jsCode: null,
  //   astCode: null,
  // });
  const providerValue: ContextProps = {
    state,
    setState,
  };
  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};

export default ProviderV;
