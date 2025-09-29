import {useState, useEffect, use} from 'react'
import windahBocil from '../assets/images.jpeg'
import { getAllProducts } from '../services/api';

const navigation = [
    {name: 'HOME', href: "#"},
    {name: 'ABOUT', href: "#"},
    {name: 'FAQ', href: "#"},
]

export default function Home() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        getAllProducts().then(data => {
        console.log("All Products:", data);
        setProducts(data.products); 
    });
    }, [])

    return (
        <div className="bg-gray-900 min-h-screen">
            <header className='bg-blue-800 text-white font-semibold px-4 py-1'>
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Zauro25</span>
                        <h2 classname="text-2xl font-bold text-white">Zauro25</h2>
                        </a>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
                        {item.name}
                    </a>
                    ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
                    <a href="#" className="px-4 py-2 text-sm/6 font-semibold border border-black text-black bg-white px-4 py-2 rounded-md hover:bg-gray-200">
                    Log in 
                    </a>
                    <a href="#" className="px-4 py-2 text-sm/6 font-semibold border border-black text-white bg-gray-900 px-4 py-2 rounded-md hover:bg-gray-200">
                    Sign Up
                    </a>
                    </div>
                </nav>
            </header>
            <div className="px-4 py-3 text-white flex justify-between items-center">
                <div className="mx-30 my-40 flex flex-col items-start">
                    <h1 className="text-6xl font-bold">Welcome to Zauro25</h1>
                    <h2 className="mx-40 text-4xl font-semibold">Bumi itu segitiga</h2>
                </div>
                <img src={windahBocil} className="mx-30 w-[300px] rounded-lg shadow-lg" alt="Vite logo" />
            </div>
            <section className="px-4 py-3 text-white flex justify-between items-center bg-red-300">
                <hr className="border-t-2 border-white my-10" />
                <div className="mx-30 my-40 flex flex-col items-center">
                    <h1 className="my-30 text-7xl font-bold text-center">PRODUCT</h1>
                </div>
                <div className='my-30 flex flex-col items-center'>
                    <h3 className="mx-20 text-5xl font-semibold text-center">{products?.[2]?.title}</h3>
                    <h2 className="my-20 mx-20 text-2xl font-semibold text-center">{products?.[2]?.description}</h2>
                </div>
            </section>
            <footer className="bg-blue-800 text-white font-semibold px-4 py-2 text-center">
                <p>&copy; 2024 Zauro25. All rights reserved.</p>
            </footer>
        </div>
    )
}