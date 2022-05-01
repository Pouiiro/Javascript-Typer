const cancel = (wipeState: any, navigate: any) => {
  navigate('/home');
  setTimeout(() => {
    wipeState.setState({
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
  }, 800);
};
export default cancel;
