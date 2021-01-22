import { useState, useEffect, useRef } from 'react';
import axios from 'axios';


export const useFetch = (url : string) => {
    const cache = useRef<Record<any,string>>({});
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        if(!url) return;

        const fetchData = async () => {
            setStatus("fetching");
            if(cache.current[url]){
                const data = cache.current[url];
                setData(data);
                setStatus("fetched");
            }else{
                axios.get(url)
                    .then( res => {
                        setStatus("fetched");
                        setData(res.data);
                    })
                    .catch(err => {
                        setStatus("failure");
                        setData(err.message);
                    })
            }
        };

        fetchData();
    },[url]);

    return {status, data}
} 