import React, { useState, useEffect } from 'react'
import Banner from './Banner'
import Home from './Home'
import OfferTime from './OfferTime'
import Products from './Products'
import Navbar from './Navbar'


const Main = () => {

    const [product, setProduct] = useState([])
    const [search, setSearch] = useState("")
    const [menu, setMenu] = useState("")

        const getProducts = async () => {
            try {
                await fetch("https://api.escuelajs.co/api/v1/products")
                    .then(res => res.json())
                    .then(json => setProduct(json))

            } catch (err) {
                console.error(err)
            }

        }

        useEffect(() => {
            getProducts()
        }, []);
        console.log(product)

    return (
        <div>
            <Navbar setSearch={setSearch} setMenu={setMenu} />
            <OfferTime />
            <Banner />
            <Home />
            <Products product={product} search={search} menu={menu} />


        </div>
    )
}

export default Main