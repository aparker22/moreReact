import React from 'react';


let Header = ( {updateUserID} ) => {
        return <div>
            <h1>Awesome Blog List</h1>
            Enter User to Search For: <input type="text" onChange={ (event) => updateUserID(event)}></input>
        </div>   
    }


export default Header;

