
import { Redirect } from 'react-router-dom';
import React, { useState } from 'react';

import CreateAdd from './CreateAdd';
import Data from './Data';

const AddConsole = ({match: {params:{id}}})=>{

    const [show, setShow] = useState(false);

    let match = Data.find(obj => {
        return obj.productName === id
      })

    if(match===undefined){
        return <Redirect to={{pathname: '/404'}}/>
    }

    if(show){
        var createPage = <CreateAdd product={match}></CreateAdd>;
    }

    return(
        <div className='cardContainer'>
            <button className='btn' onClick={() => setShow(!show)}>Create Add</button>
            {createPage}
        </div>
    )
}

export default AddConsole;