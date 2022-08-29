import React from "react";
import Header from "components/Header";
import ControlsCounts from "components/ControlsCounts";
// import User from "components/User";
// import CreateTask from "components/CreateTask";
// import ListTask from "components/ListTask";

const App = () => {

    return (
         <div>
             <Header/>
             <ControlsCounts />
             <ControlsCounts isAdd={false} />
         </div>
    )
}

export default App;
