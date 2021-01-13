import React from 'react';
import './App.css';
import Header from './Header';
import LeftComponent from './LeftComponent';
import Login from './Login';
import Feed from './Feed';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user },dispatch]=useStateValue();
  return (
    <div className="app">
        { !user ?(<Login />):(
            <>
                     {/* header */}
                 <Header />
                {/* left component and right size post */}
              <div className="app__body">
                 {/* sidebar */}
                    <LeftComponent />
                 {/* Feed>stories , uploadImages and all posts */}
                 <Feed />
               </div>
            </>)}
          
      
    </div>
  );
}

export default App;
