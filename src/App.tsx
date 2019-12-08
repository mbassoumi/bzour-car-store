import React from 'react';
import Navbar from './components/navbar/Navbar';

const App: React.FC = () => {
  return (
     <div>
         <Navbar showFilter={true}/>
     </div>
  );
};

export default App;