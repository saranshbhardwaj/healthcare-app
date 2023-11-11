import React, { useEffect, useState }  from "react"
import { getEmployeeDetails } from "../api/EmployeeClient";

export const EmployeeDetails = (empId) => {
    // Employee detail page will fetch the data for a particular employee
    // And it will let the user to edit the details and save them
    const [employeeDetails, setEmployeeDetails] = useState();
    
    useEffect(() => {
        let mounted = true;
        getEmployeeDetails(empId.id)
          .then(item => {
            if(mounted) {
                console.log(item)
                setEmployeeDetails(item)
            }
          })
        return () => mounted = false;
      }, [empId])

    return (
        <div>
            <h1>Employee Detail</h1>
            {employeeDetails != null && (
                <form>
                <label>
                  <p>First name</p>
                  <input type="text" value={employeeDetails.firstName}/>
                </label>
                <label>
                  <p>Last name</p>
                  <input type="text" value={employeeDetails.lastName}/>
                </label>
                <label>
                  <p>Total pay</p>
                  <input type="text" value={employeeDetails.totalPay}/>
                </label>

                <label>
                  <p>Deduction</p>
                  <input type="text" value={employeeDetails.deduction}/>
                </label>
                <label>
                  <p>Final pay</p>
                  <input type="text" value={employeeDetails.finalPay}/>
                </label>
                <br />
                <br />
                <button>Submit</button>
              </form>
            )}
        </div>
    )
}