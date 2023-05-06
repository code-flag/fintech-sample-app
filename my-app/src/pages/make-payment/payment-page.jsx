/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './make-payment.css';

const MakePayment = () => {
  const [banks, setBanks] = useState([]);
  const [bankCode, setBankCode] = useState('');
  const [payments, setPayments] = useState({});

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await axios.get('https://api.paystack.co/bank', {
          headers: {
            Authorization: 'Bearer sk_test_0880c1a9a5273248688de6d7bec39a89996d2254',
          },
        });
        setBanks(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBanks();
  }, []);

  const fetchPayments = async (account) => {
    try {
      const response = await axios.get(`https://api.paystack.co/bank/resolve?account_number=${account}&bank_code=${bankCode}`, {
        headers: {
          Authorization: 'Bearer sk_test_0880c1a9a5273248688de6d7bec39a89996d2254',
        },
      });
      console.log("account details", response.data.data);
      setPayments(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };



  const getBankCode = (bankCode)=> {
      console.log("bank code", bankCode);
      setBankCode(bankCode);
  }


  const resolveAccount = (account)=> {
    if (account.length === 10) {
      console.log("account", account);
      fetchPayments(account);
    }
}


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("payment", payments);
  };

  return (
    <div className="App">     
      
        <form onSubmit={handleSubmit}>
        <h3>Send Money</h3>
          <label htmlFor="bank">Select Bank</label>
          <select id="bank" onChange={(event) => getBankCode(event.target.value)}>
            <option value="">Select a bank</option>
            {banks.map((bank) => (
              <option key={bank.code} value={bank.code}>
                {bank.name}
              </option>
            ))}
          </select>
          
          <label htmlFor="account">Account Number</label>
          <input type="text" id="account" onChange={(event) => resolveAccount(event.target.value)} placeholder='Ex. 3105467845' />
          
          <label htmlFor="account">Account Name</label>
          <input type="text" id="account" value={payments.account_name ?? "Account Name"} readOnly placeholder='Account Name' />
          
          <button type="submit">Submit</button>
        </form>
    </div>
  );
}
export default MakePayment;
