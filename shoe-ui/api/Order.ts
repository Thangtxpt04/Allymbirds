import axios from "axios";

const baseUrl = "http://localhost:5000";

type IOrderProp = {
    userId: string,
    token: string,
    orderId: string
}

export async function createOrder({ userId, token }: IOrderProp) {
    
    const res = await fetch(`${baseUrl}/order/createOrder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userId }), // Truyền dưới dạng đối tượng JSON
    });
    const data = await res.json();
    return data;
  }

  export async function updateOrder({ userId, token, orderId }: IOrderProp) {
    
    const res = await fetch(`${baseUrl}/order/${orderId}/update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userId }), // Truyền dưới dạng đối tượng JSON
    });
    const data = await res.json();
    return data;
  }
  


