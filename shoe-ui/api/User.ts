
const baseUrl = "http://localhost:5000";
type requestDataType = {
    userId: string
    gender?: string,
    phone?: string,
    address?: string,
    birtday?: string,
    fullName?: string
}
export async function getUser(id: string)  {
    const res = await fetch(`${baseUrl}/users/${id}`)
    const data = await res.json();
    return data
} 

export async function updateUser(requestData: requestDataType) {
    const res = await fetch(`${baseUrl}/users/${requestData.userId}/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        //   Authorization: `Bearer ${token}`,
  
        },
        body: JSON.stringify(requestData)
    }

    );
    const data = await res.json();
    return data;
}

