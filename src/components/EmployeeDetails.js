import React, { useEffect, useState }  from "react"
import { getEmployeeDetails } from "../api/EmployeeClient";
import { useNavigate } from 'react-router-dom';

export const EmployeeDetails = (empId) => {
  const navigate = useNavigate()
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

      const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${employeeDetails.firstName}, Email: ${employeeDetails.lastName}, Pay: ${employeeDetails.totalPay}`);
      }
      const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setEmployeeDetails(values => ({...values, [name]: value}))
      }

    return (
        <div className="w-full max-w-xs">
            <h1>Employee Detail</h1>
            {employeeDetails != null && (
                <form onSubmit={handleSubmit}
                 className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      <p>First name</p>
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       type="text" name="firstName"
                        value={employeeDetails.firstName} onChange={handleChange}/>
                    </label>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      <p>Last name</p>
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       type="text" name="lastName"
                        value={employeeDetails.lastName} onChange={handleChange}/>
                    </label>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      <p>Total pay</p>
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       type="text" name="totalPay"
                       value={employeeDetails.totalPay} onChange={handleChange}/>
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
                  <div className="flex items-center justify-between">
                    <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    type="submit">
                        Submit
                    </button>
                  </div>
                </form>
            )}
        </div>
    )
}