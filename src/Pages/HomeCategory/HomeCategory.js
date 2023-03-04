import React, { useState } from 'react';

function CategoryData() {
    const [category, setCategory] = useState('all');
    const [data, setData] = useState([
        { name: 'item 1', category: 'all' },
        { name: 'item 2', category: 'all' },
        { name: 'item 3', category: 'category A' },
        { name: 'item 4', category: 'category A' },
        { name: 'item 5', category: 'category B' },
        { name: 'item 6', category: 'category B' },
    ]);

    // function to filter data by category
    const filterData = () => {
        setCategory(category);
        const filteredData = data.filter(item => category === 'all' || item.category === category);
        setData(filteredData);
    }

    return (
        <div>
            <button onClick={() => filterData('all')}>All</button>
            <button onClick={() => filterData('category A')}>Category A</button>
            <button onClick={() => filterData('category B')}>Category B</button>
            <ul>
                {data.map(item => (
                    <li key={item.name}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default CategoryData;
