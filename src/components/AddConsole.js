
import { Redirect } from 'react-router-dom';
import React, { useState } from 'react';

import CreateAdd from './CreateAdd';
import Data from './Data';
import Adds from './Adds';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

const AddConsole = ({match: {params:{id}}})=>{

    const [show, setShow] = useState(false);
    const addExample = Adds[0];

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

            <div className='card' style={{cursor:'default', width: '30%'}}>
            <img className='cardImage' src={addExample.imageUrl}/>
            <h1 className='cardTitle'>{addExample.headline}</h1>
            <p className='cardText'>
                {addExample.description}
            </p>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <span className='icons'>
                <FaRegEdit></FaRegEdit>
                </span>
            <span className='icons'>
            <FaRegTrashAlt></FaRegTrashAlt>
            </span>
            </div>

        </div>


        </div>
    )
}

export default AddConsole;