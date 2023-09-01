import axios from "axios";

const baseUrl = "http://localhost:5000";

export async function getCategories()  {
    const res = await fetch(`${baseUrl}/categories`)
    const data = await res.json();
    return data
} 

export async function getCategory(categoryId?: string )  {
    const res = await fetch(`${baseUrl}/categories/${categoryId}`)
    const data = await res.json();
    return data
} 
