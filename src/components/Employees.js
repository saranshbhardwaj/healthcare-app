import React, { useEffect, useState }  from "react"
import { getEmployees } from "../api/EmployeeClient";
import { EmployeeDetails } from "./EmployeeDetails";


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
            <h1>Employee page (Paycheck per month)</h1>
            <table>
                <thead>
                    <tr>
                        <th>
                            Edit
                        </th>
                        <th>
                            Employee Name
                        </th>
                        <th>
                            Total play
                        </th>
                        <th>
                            Deduction
                        </th>
                        <th>
                            Final pay
                        </th>
                        <th>
                            Dependents
                        </th>
                    </tr>
                </thead>
                <tbody>
                {list.length === 0 ? (
            <tr>
              <td>
                No matching records found
              </td>
            </tr>
          ) : (
            list.map((item, index) => (
              <tr key={index}>
                <td>
                    <input type="button" value="Edit" onClick={(e) => editEmployee(item.firstName)}></input>
                </td>
                <td>{item.firstName} {item.lastName}</td>
                <td>{item.totalPay}</td>
                <td>{item.deduction}</td>
                <td>{item.finalPay}</td>
                    {item.dependends.map((dep, indexDep) => (
                        <td key={indexDep}> {dep.name}, </td>
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