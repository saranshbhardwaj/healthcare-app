import { Employees, ListOfEmployees } from "../Types/Employees";
import { MockEmployeeList } from "./MockEmployeeData";

// Ideally the backend API will provide Delete, Get, Insert and Update end points
// The Backend can have Employee Model and Dependent Model.
// Dependent model will have EmployeeId in it
export const getEmployees = async () => {
    return employeesData
} 

export const getEmployeeDetails = async(id) => {
    // I am assuming that the id is the first name.
    // Ideally it should be a Guid
    const filteredEmployee = employeesData.find(_ => _.firstName == id)

    return filteredEmployee
}

export const updateEmployeeDetails = async(data) => {
    // update the mock data
}

export const deleteEmployee = async(data) => {
}

const employeesData = [
    {
        firstName: "John",
        lastName: "Doe",
        totalPay: 2000,
        deduction: 0,
        finalPay: 0,
        dependends: [
            {
                name: "John dependent"
            }
        ]
    },
    {
        firstName: "Sam",
        lastName: "Doe",
        totalPay: 2000,
        deduction: 0,
        finalPay: 0,
        dependends: [
            {
                name: "Sam dependent1"
            },
            {
                name: "Sam dependent2"
            }
        ]
    },
    {
        firstName: "Aaron",
        lastName: "Doe",
        totalPay: 2000,
        deduction: 0,
        finalPay: 0,
        dependends: [
            {
                name: "Aaron dependent"
            }
        ]
    },
]