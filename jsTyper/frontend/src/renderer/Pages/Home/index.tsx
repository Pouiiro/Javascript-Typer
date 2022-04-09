import { useContext } from 'react';
import Migrator from 'renderer/Components/Migrator/migrateInitial';
import MigratorNd from 'renderer/Components/Migrator/migrateSecond';
import UploadComponent from 'renderer/Components/Migrator/fileupload';
import DataProcess from 'renderer/Components/Migrator/dataprocess';
import { AppContext } from 'renderer/Provider';
const Home = () => {
  let myContext = useContext(AppContext);
  return myContext?.state.process ? <DataProcess /> : <UploadComponent />;
};

export default Home;
