import { useState } from "react";
import { useEffect } from "react";
import "./history.css";

const userData = JSON.parse(sessionStorage.getItem("userData"));
const getTxnHistory = () => {
    console.log(userData);
}
const History = () => {
    const [history, setHistory] = useState([]);
    getTxnHistory();

    return (
        <>
            <div className="history-page">
                <h2>Transaction History</h2>
               {
                 history.length > 0 ? history.map((element) => {
                    <div key={element._id} id={element._id} className="h-item" > 
                        <div className="time">{element.timeCreated}</div>
                        <div className="amount">{element.amount}</div>
                        <div className="name">{element.recipientName}</div>
                        <div className="account">{element.recipientAccount}</div>
                        <div className="bank">{element.recipientBank}</div>

                    </div>
                 }) : 
                 <div className="h-item">No History</div>
               }
            </div>
        </>
    )
}

export default History;