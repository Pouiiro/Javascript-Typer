import { createContext, useReducer } from 'react';

interface ContextProps {
  state: any;
  setState: any;
}

interface MyState {
  loading: boolean;
  file: any;
  fileName: string;
  fileDone: boolean;
  conversionDone: boolean;
  jsCode: any;
  astCode: any;
  tsCode: any;
  side: string;
  groupDone: boolean;
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
    fileName: 'tsMigrated',
    fileDone: false,
    conversionDone: false,
    jsCode: null,
    astCode: null,
    tsCode: null,
    side: '',
    groupDone: false,
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
