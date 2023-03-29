import './style.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Breadcrumb = () => {
    const { pathname } = useLocation();
    const [links, setLinks] = useState('');

    useEffect(() => {
        
    })

    return(
        <div>{
            pathname.includes('beer-list')
        }</div>
    )
};

export default Breadcrumb;