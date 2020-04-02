import React from 'react';
import { FaTimes ,FaPen, FaRegCircle } from 'react-icons/fa'

const Icon = ({name}) => {

    switch(name){
        case "circle":
            return (
                <h1><FaRegCircle className="icon"/> </h1>
            )
        case "cross":
            return (
                <h1> <FaTimes className="icon"/> </h1>
            )
        default:
            return (
                <h1>  <FaPen className="icon"/> </h1>
            )
    }
    
}

export default Icon;