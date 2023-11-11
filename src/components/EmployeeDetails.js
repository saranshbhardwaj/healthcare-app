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
                setEmployeeDetails(item)
            }
          })
        return () => mounted = false;
      }, [empId])

    return (
        <div className="w-full max-w-xs">
            <h1>Employee Detail</h1>
            {employeeDetails != null && (
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      <p>First name</p>
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       type="text" value={employeeDetails.firstName}/>
                    </label>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      <p>Last name</p>
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       type="text" value={employeeDetails.lastName}/>
                    </label>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      <p>Total pay</p>
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       type="text" value={employeeDetails.totalPay}/>
                    </label>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      <p>Deduction</p>
                      <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >{employeeDetails.deduction}</p>
                    </label>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      <p>Final pay</p>
                      <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       >{employeeDetails.finalPay}</p>
                    </label>
                  </div>
                <br />
                <br />
                  <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Submit Not working
                    </button>
                </div>
              </form>
            )}
        </div>
    )
}