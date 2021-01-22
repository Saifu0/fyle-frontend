import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBanksOnQuery, fetchBankSuccess } from '../store';
import BankListDumb from '../components/BankList'; 

const BankList = () => {

    const dispatch = useDispatch();
    const { params,  banks } = useSelector((state : any) => state.banks);
    
    useEffect(() => {
        if(params){
            const url = `branches?q=${params}&limit=50`;
            const res = localStorage.getItem(url);
            
            if(res){
                dispatch(fetchBankSuccess(JSON.parse(res)));
            }else{
                console.log("called!");
                dispatch(fetchBanksOnQuery(url));
                localStorage.setItem(url,JSON.stringify(banks));
            }
        }else{
            const url = "branches?limit=50";
            const res = localStorage.getItem(url);
            
            if(res && res.length>0){
                dispatch(fetchBankSuccess(JSON.parse(res)));
            }else{
                console.log("called!");
                dispatch(fetchBanksOnQuery(url));
                localStorage.setItem(url,JSON.stringify(banks));
            }
        }
    },[params,dispatch]);

    console.log(params);

    return (
        <BankListDumb data={banks}/>
    )
}

export default BankList
