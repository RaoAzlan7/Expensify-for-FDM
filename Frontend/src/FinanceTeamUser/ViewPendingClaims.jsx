import React from 'react';
<<<<<<< HEAD
import { useState, useContext,useEffect} from 'react';
=======
import { useState, useContext, useEffect} from 'react';
>>>>>>> b5038198c0f9f228222266539c81018bf5606f0a
import { UserContext } from "../App.jsx";
import axios from "axios";
import './ViewPendingClaims.css';
import Claim from './Claim.jsx'; 
import expenses from './mock-data.json';
import ClaimResponse from './ClaimResponse.jsx';
import "react-toggle/style.css"


export default function ViewPendingClaims() {
  const user=useContext(UserContext)
  const [page, setPage] = useState();
  const[claim, setclaims] = useState();
  const [submit, setsubmit] = useState(false);

<<<<<<< HEAD
  const [AllClaims,setAllClaims] = useState();
  const [ChosenClaim,setChosenClaim] = useState();


  async function GetAllClaims(){
    try {
      const result = await axios.get(`http://localhost:3000/api/financeteamuser/getclaims/${user.token}`);
      setAllClaims(result.data);
      
    } catch (error) {
      console.error('Error fetching all users:', error);
      // Deal with error
      // Make alert to display error
      // Logout and redirect to login
    }
  }


  useEffect(()=>{
    GetAllClaims();
  },[])


  const handleBlackBoxClick = () => {
    setPage()
  };


 
=======
  let claimarr =[]
  useEffect(() => {
    async function fetchData() {
      try {

        const response = await axios.get(`http://localhost:3000/api/financeteamuser/getclaims/${user.token}`);         
        console.log(response.data)
      
        for (const item of response.data) {
          if (item.ClaimState == 'Approved by Manager'){
          claimarr.push(
          <button onClick={() =>handleClaimClick(item._id, item.Description)}>       
          <Claim 
          key={item._id} 
          date={item.createdAt.substring(0, item.createdAt.indexOf('T'))} 
          Amount={item.Amount} 
          Currency={item.Currency} 
          Description={item.Description} 
          ClaimState={item.ClaimState} 
          ImageURL={item.ImagePath}
        />
         </button>)}
        console.log(claimarr)
        setclaims(claimarr)
        }
      } catch (error) { 
        console.error('Error:', error);
      }
    }
    fetchData();
  }, [submit]);

  
  
  const handleBlackBoxClick = () => {
    setPage()
    setsubmit(true)
>>>>>>> b5038198c0f9f228222266539c81018bf5606f0a

  }; 

  const handleClaimClick = (claimid, claimname) => {
    setPage(<div>
      
      <ClaimResponse claimid={claimid} claimname={claimname} onBlackBoxClick={handleBlackBoxClick} >
      </ClaimResponse>
      </div>);
  };

<<<<<<< HEAD


  for (let i = 0; i < expenses.expenses.length; i++) {
    if (expenses.expenses[i].status === 'Unapproved') {
      claimarr.push(
        <button onClick={() => handleClaimClick(expenses.expenses[i].code, expenses.expenses[i].name )}>       
          <Claim key={i}
            id={expenses.expenses[i].code}
            name={expenses.expenses[i].name}
            date={expenses.expenses[i].date_sent}
            cost={expenses.expenses[i].amount}
            status={expenses.expenses[i].status}
            small={true}
          >
          </Claim>
        </button>
      );
    }
  }

=======
>>>>>>> b5038198c0f9f228222266539c81018bf5606f0a
  return (
<>
{
  (GetAllClaims.length !==0)&&(
    


  )
}
  <div>
      {page}
    <div className='Form-Parent'>
      <h1>Claimants Awaiting Processing</h1>
      <div className='Pending-Claim-Parent'>{claim}</div>
    </div>
    </div>
</>
  );
}
