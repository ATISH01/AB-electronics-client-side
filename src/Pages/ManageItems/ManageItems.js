import React from 'react';
import Allitem from '../Allitem/Allitem';
import useAlldata from '../useAllData/useAllData';
import './ManageItems.css'

const ManageItems = () => {
    const [allItems]=useAlldata();
    return (
        <div>
            {
                allItems.map(items=><Allitem items={items}></Allitem>)
            }
        </div>
    );
};

export default ManageItems;