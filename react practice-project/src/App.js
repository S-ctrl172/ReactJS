import React,{useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';


function App() {

  const [ usersList, setUsersList ] = useState([]);

  const addUserHandler = (uName , uAge) =>{

    setUsersList( (preList) =>{
         
        return [ 
          // So that Prevoius Input Stores Not Overwrite
          ...preList, 
          {name: uName , age: uAge , id: Math.random().toString()} 
        ];

      }

    );

  };




  return (
    <div>

      {/* when Add Users Button Clicked it Supplies the data */}
      <AddUser onAddUser = { addUserHandler }/>

      {/* users provides the array */}
      <UsersList users={usersList}/>

    </div>
  );
}

export default App;
