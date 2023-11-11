import { getEmployees } from "../api/EmployeeClient"

export const employeeLoader = () => {
    // I wanted to use access loader to restrict the access of the pages
    // Also, I can fetch the data before a component is loaded.
    // So, instead of fetching the data in useEffect, I can fetch it here.
    // Then in the component; const myData = useLoaderData() will give me the required data

    const getEmp = getEmployees()
    console.log(JSON.stringify(getEmp))
    
    return new Response(JSON.stringify(getEmp), {
        status: 200,
        headers: {
            "Content-Type": "application/json; utf-8"
        }
    })
}