import React from 'react';
import Navbar from './components/navbar/Navbar';
import FilterSideBar from './components/filters/FilterSidebar';

const App: React.FC = () => {
    return (
        <div>
            <Navbar showFilter={true}/>
            <div className="flex mt-16">
                <FilterSideBar/>
                <div className="w-full h-screen bg-black h-screen my-5 mx-5">

                </div>
            </div>
        </div>
    );
};

export default App;