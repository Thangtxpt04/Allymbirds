"use client"

const baseUrl = "http://localhost:5000";

type IOrderProp = {
    orderId: string,
    productId?: string,
    quanlity: number,
    color: string,
    size?: number,
    token: string,
    isOrder: boolean
}

export async function addOrderItem({ productId, quanlity, color, size, token, orderId, isOrder }: IOrderProp) {
  
    const res = await fetch(`${baseUrl}/orderItem/addOrderItem`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,

      },
      body: JSON.stringify({ orderId, productId, quanlity, color, size, isOrder }), // Truyền dưới dạng đối tượng JSON
    });
    const data = await res.json();
    return data;
  }

export async function getOrderItem(orderId: string, token : string) {

    const res = await fetch(`${baseUrl}/orderItem/${orderId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,

      },
    });
    const data = await res.json();
    return data;
  }

  
  export async function updateOrderItem(  orderItemsId  : string []) {
    
    const res = await fetch(`${baseUrl}/orderItem/update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ orderItemsId }), // Truyền dưới dạng đối tượng JSON
    });
    const data = await res.json();
    return data;
  }
  
  export async function deleteOrderItem(orderItemId: string, token : string, orderId: string) {

    const res = await fetch(`${baseUrl}/orderItem/${orderItemId}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,

      },
      body: JSON.stringify({ orderId}), 
    });
    const data = await res.json();
    return data;
  }
  


