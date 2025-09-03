import React from 'react'
import { useParams } from 'react-router-dom';

const Category = () => {
  const {slug} = useParams();
  return (
    <div className='w-full px-4 py-3'>{slug}</div>
  )
}

export default Category