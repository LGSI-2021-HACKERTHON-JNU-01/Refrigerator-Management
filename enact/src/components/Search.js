import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../views/ScanPanel.css"
import result from './Scanner';

//barcode -> product data
function Search(){
    const [prods,setProds] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const ID_KEY = sample;
    const ID_SERVICE = C005
    const DATATYPE = json;
    const START = 1;
    const END = 5;
    const BAR_CD = result;
    // const SECRET_KEY
    // const search = this.state.value;

    params = 'BAR_CD=';
    open_url = 'http://openapi.foodsafetykorea.go.kr/api/'+ID_KEY+'/'+ID_SERVICE+
    '/'+DATATYPE+'/'+START+'/'+END+'/' +params+ BAR_CD;

    useEffect(()=> {
        const getSearchProduct = async()=>{
            try{
                //error, prods init
                setProds(null);
                setError(null);
                //set loading...
                setLoading(true);

                const response = await axios.get(open_url);
                setProds(response.data);
            }catch(e){
                setError(e);//error catch!
            }
            setLoading(false);
        };
        getSearchProduct();
    }, []);
    if(loading) return state = 'loading...';
    if(error) return state = 'Error!!!';
    if(!prods) return state = 'no match data'; //no match data

    return (
        <div className='App'>
            <p>loading</p>
        </div>
        // <div className = 'App'>
        //     <p>{result? result : state}</p>
        //     <p key = {BAR_CD}></p>
        // </div>
    )

}
export default Search;