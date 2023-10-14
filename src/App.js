
import './App.css';
import MyContext from './context';
import HeaderComponent from './header';
import ContentComponent from './content';
import FooterComponent from './footer';
import {useState} from 'react';
function App() {
  const [selectedUser, setSelectedUser] = useState("Sneha");
  return (
    <MyContext.Provider value= {{selectedUser}}>
        <HeaderComponent />
        <ContentComponent />
        <FooterComponent />
    </MyContext.Provider>
  );
}

export default App;
