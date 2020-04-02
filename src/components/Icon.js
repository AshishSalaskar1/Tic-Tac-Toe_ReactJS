import React from 'react';
import { FaTimes ,FaPen, FaRegCircle } from 'react-icons/fa'

const Icon = ({name}) => {
    return (
        <h1>  <FaTimes className="icon"/> <FaPen className="icon"/> <FaRegCircle className="icon"/> </h1>
    )
}

export default Icon;