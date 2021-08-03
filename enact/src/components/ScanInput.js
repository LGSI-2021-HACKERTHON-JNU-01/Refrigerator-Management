import { useState } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ScanInput =()=>{
    const [LastDate, setLastDate]=useState(new Date());
    return(
        <div>
            <label style={{fontSize:20}}>Expiration Date &nbsp;</label>
            <DatePicker 
            selected={LastDate}
            onChange={date => setLastDate(date)}
            /> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="submit" value="Submit" />
        </div>
    );
};

// function ScanInput(){
    // const [date, setDate] = useState('');
    // const handleChange = e =>{
    //     console.log(e.target.value);
    //     // setDate(e.target.value);
    // };
    // const handleSubmit = e =>{
    //     e.preventDefault();
    //     console.log('date : ' + {date});
    //     //db give and ...
    //     // setDate('');
    // };
    // return (
    //     <form onSubmit={handleSubmit} className="searchForm">
    //         <input
    //             type="text"
    //             name="date"
    //             onChange={handleChange}
    //             value={date}
    //             placeholder="expirationDate(2021.08.02)"
    //             autoComplete="off"
    //         />
    //         <input type="submit" value="Submit" />
    //     </form>
    // );



// }
export default ScanInput;