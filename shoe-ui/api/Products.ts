
const baseUrl = "http://localhost:5000";

export async function getProducts(categoryId? : string)  {
    const res = await fetch(`${baseUrl}/products/${categoryId}`)
    const data = await res.json();
    return data
}

export async function getProductDetail(productId? : string)  {
    const res = await fetch(`${baseUrl}/products/${productId}/productDetail`)
    const data = await res.json();
    return data
} 
