import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBanksOnQuery, fetchBankSuccess } from '../store';
import BankListDumb from '../components/BankList'; 

const BankList = () => {

    const cache = require("localstorage-ttl");
    const dispatch = useDispatch();
    const { params, isLoading, banks } = useSelector((state : any) => state.banks);
    
    useEffect(() => {
        if(params){
            const url = `branches?q=${params}&limit=50`;
            const res = cache.get(url);

            console.log('[RES-QUERY]',res);

            if(res){
                dispatch(fetchBankSuccess(res));
            }else{
                console.log("called!");
                dispatch(fetchBanksOnQuery(url));
                cache.set(url,banks,[50000]);
            }
        }else{
            const url = "branches?limit=50";
            const res = cache.get(url);

            console.log('[RES]',res);

            if(res){
                dispatch(fetchBankSuccess(res));
            }else{
                dispatch(fetchBanksOnQuery(url));
                console.log("called!");
                cache.set(url,banks,[50000]);
            }
        }
    },[params,dispatch]);

    // console.log('[data]',banks);
    console.log(params);
    console.log('LOADING',isLoading);

    return (
        <BankListDumb data={banks}/>
    )
}

export default BankList
