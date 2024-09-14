import {create} from 'zustand';

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({products}),
    createProduct: async(newProducts) => {
        if (!newProducts.name || !newProducts.price || !newProducts.image){
            return {success: false, message: "Please fill in all detail"}
        }
        const res = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProducts)

        })
        const data = await res.json()
        set((state) => ({products:[...state.products, data.data]}))
        return {success: true, message: "Product created successfully"}

    },
    fetchProducts: async() => {
        const res = await fetch("/api/products")
        const data = await res.json()
        set({products: data.data})
    },
    deleteProduct: async(pid) => {
        const res = await fetch(`/api/products/${pid}`, {
            method: "DELETE",
        })
        const data = await res.json();
        if (!data.success){
            return {success: false, message: data.message}
        }
        //To immediately update in UI without clicking refresh
        set((state) =>({products: state.products.filter(product => product._id !== pid) }) )
        return {success: true, message: data.message}
    }


}))