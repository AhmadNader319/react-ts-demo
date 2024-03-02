import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/person';
import { NameList } from './components/personList'; // Update the import statement

function App() {
  const personName = {
    first: 'Ahmad',
    last: 'Nader',
  };

  const namesList = [
    {
      first: 'Hana',
      last: 'Ahmad',
    },
    {
      first: 'Nader',
      last: 'AbdelMoneim',
    },
    {
      first: 'Sayed',
      last: 'Ibrahim',
    },
  ];

  return (
    <div className="App">
      <Greet name="ahmed" messageCount={10} isLogged={false} />
      <Person name={personName} />
      <NameList names={namesList} /> {/* Update the component name and pass the prop */}
    </div>
  );
}

export default App;