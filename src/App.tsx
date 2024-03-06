import './App.css';
import { Greet } from './components/Greet';
import { Status } from './components/Status';
import { Person } from './components/person';
import { NameList } from './components/personList'; 
import { Heading }from './components/Heading';
import { Oscar } from './components/Oscar';
import { PostList } from './components/PostList';

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
      <Greet name="ahmed" isLogged={true} />
      <Person name={personName} />
      <NameList names={namesList} /> {/* Update the component name and pass the prop */}
      <Status status='success' />
      <Oscar>
           <Heading>Ahmad goes to His daughter</Heading>
      </Oscar>
      <PostList />
    </div>
    
  );
}

export default App;