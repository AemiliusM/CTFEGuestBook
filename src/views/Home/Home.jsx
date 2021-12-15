import { EntryProvider } from '../../context/EntryContext';
import GuestForm from '../../components/FormComponent/GuestForm';
import EntryList from '../../components/EntryList/EntryList';

const Home = () => {
  return (
    <EntryProvider>
      <GuestForm />
      <EntryList />
    </EntryProvider>
  );
};

export default Home;
