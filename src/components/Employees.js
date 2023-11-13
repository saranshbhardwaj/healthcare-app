import React, { useEffect, useState }  from "react"
import { getEmployees } from "../api/EmployeeClient";
import { EmployeeDetails } from "./EmployeeDetails";


// No need for Redux pattern
// The app is not big enough to intruduce redux
export const Employees = () => {
    // Get the employee list at the page load
    // The page will be visible to admins. As, it will have information of all the employees
    // An Admin can edit employee information if required.
    // This page should be guarded, as an employee cannot access this page
    const [list, setList] = useState([]);
    const [showEmployeeDetail, setShowEmployeeDetail] = useState(false); // to show child component to edit employee
    const [selectedEmployee, setSelectedEmployee] = useState(""); // Employee to edit
    
    useEffect(() => {
        let mounted = true;
        getEmployees()
          .then(items => {
            if(mounted) {
                // calculate the deduction.
                // Ideally this should be done in the backend, and the job of the 
                // component is just to show the data
                // Don't change the data coming from the API.
                // Whenever data mutation is required, always create a new variable
                // Less data mutation means less chances of introducing bugs
                let calculatedData = items
                calculatedData.forEach(data => {
                   data.deduction = ((1000/26) + (data.dependends.length * 500/26)).toFixed(2)
                   if(data.firstName.toLocaleLowerCase().charAt(0) == 'a'){
                    data.deduction = (data.deduction * 9/10).toFixed(2); // 10% off
                   }
                   data.finalPay = (data.totalPay - data.deduction).toFixed(2)
                })
              setList(calculatedData)
            }
          })
        return () => mounted = false;
      }, [])

      // using first name as id for demonstration. 
      // Ideally it will be a Guid
      const editEmployee = (id) => {
        // Fetch employee details
        setSelectedEmployee(id);
        setShowEmployeeDetail(true);
      }

    return (
        <div>
            <div className="text-3xl font-bold underline relative overflow-x-auto">Employee page (Paycheck per month)</div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Edit
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Employee Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total play
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Deduction
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Final pay
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Dependents
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                {list.length === 0 ? (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4">
                      No matching records found
                    </td>
                  </tr>
                ) : (
                  list.map((item, index) => (
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="px-6 py-4">
                          <input type="button" value="Edit" onClick={(e) => editEmployee(item.firstName)}></input>
                      </td>
                      <td className="px-6 py-4">{item.firstName} {item.lastName}</td>
                      <td className="px-6 py-4">{item.totalPay}</td>
                      <td className="px-6 py-4">{item.deduction}</td>
                      <td className="px-6 py-4">{item.finalPay}</td>
                          {item.dependends.map((dep, indexDep) => (
                              <td className="px-6 py-4" key={indexDep}> {dep.name}, </td>
                          ))}
                    </tr>
                  ))
                )}
                </tbody>
        </table>
     {showEmployeeDetail && (
        <EmployeeDetails id={selectedEmployee} />
     )}
    </div>
    )
}