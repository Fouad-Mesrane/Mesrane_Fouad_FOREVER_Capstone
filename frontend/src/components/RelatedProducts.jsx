import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const RelatedProducts = ({category, subCategory}) => {

    const {products} = useContext(ShopContext);
    const [related, setRelated] = useState([])

    useEffect(() => {
       if (products.length > 0) {
        const relatedProducts = products.filter((item) => item.category === category && item.subCategory === subCategory);
        setRelated(relatedProducts.slice(0, 5));
       }
    }, [products])
  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title text1={"RELATED"} text2={"PRODUCTS"} />
        </div>

        <div className=''></div>
    </div>
  )
}

export default RelatedProducts