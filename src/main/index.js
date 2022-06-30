import React, { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';

const MainPage = () => {
    const [ products, setProducts ] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/products")
        .then((result)=>{
            const products = result.data.products;
            setProducts(products);
            console.log(products);
            console.log(result);
        }).catch((e)=>{
            console.log(e);
        })
    },[]);
    return (
        <div>
            <div id="main">
                <div id="banner">
                    <img src="images/banners/banner1.png" alt=""/>
                </div>
                <div id="product-list" className="inner">
                    <h2>그린조명 최신상품</h2>
                    <div id="product-items">
                        {products.map(p=>(
                            <div className='product-card' key={p.id}>
                            <div className='product-img'>
                                <img src="images/products/product1.jpg" alt="" />
                            </div>
                            <div className='product-contents'>
                                <span className='product-name'>{p.name}</span>
                                <span className='product-price'>{p.price}</span>
                                <div className='product-seller'>
                                    <img src="images/icons/avatar.png" alt="" />{p.seller}
                                </div>
                            </div>
                        </div>
                        ))}
                        {/* <div className='product-card'>
                            <div className='product-img'>
                                <img src="images/products/product1.jpg" alt="" />
                            </div>
                            <div className='product-contents'>
                                <span className='product-name'>제품명</span>
                                <span className='product-price'>가격</span>
                                <div className='product-seller'>
                                    <img src="images/icons/avatar.png" alt="" />아무나
                                </div>
                            </div>
                        </div>
                        <div className='product-card'>
                            <div className='product-img'>
                                <img src="images/products/product1.jpg" alt="" />
                            </div>
                            <div className='product-contents'>
                                <span className='product-name'>제품명</span>
                                <span className='product-price'>가격</span>
                                <div className='product-seller'>
                                    <img src="images/icons/avatar.png" alt="" />아무나
                                </div>
                            </div>
                        </div>
                        <div className='product-card'>
                            <div className='product-img'>
                                <img src="images/products/product1.jpg" alt="" />
                            </div>
                            <div className='product-contents'>
                                <span className='product-name'>제품명</span>
                                <span className='product-price'>가격</span>
                                <div className='product-seller'>
                                    <img src="images/icons/avatar.png" alt="" />아무나
                                </div>
                            </div>
                        </div>
                        <div className='product-card'>
                            <div className='product-img'>
                                <img src="images/products/product1.jpg" alt="" />
                            </div>
                            <div className='product-contents'>
                                <span className='product-name'>제품명</span>
                                <span className='product-price'>가격</span>
                                <div className='product-seller'>
                                    <img src="images/icons/avatar.png" alt="" />아무나
                                </div>
                            </div>
                        </div>
                        <div className='product-card'>
                            <div className='product-img'>
                                <img src="images/products/product1.jpg" alt="" />
                            </div>
                            <div className='product-contents'>
                                <span className='product-name'>제품명</span>
                                <span className='product-price'>가격</span>
                                <div className='product-seller'>
                                    <img src="images/icons/avatar.png" alt="" />아무나
                                </div>
                            </div>
                        </div>
                        <div className='product-card'>
                            <div className='product-img'>
                                <img src="images/products/product1.jpg" alt="" />
                            </div>
                            <div className='product-contents'>
                                <span className='product-name'>제품명</span>
                                <span className='product-price'>가격</span>
                                <div className='product-seller'>
                                    <img src="images/icons/avatar.png" alt="" />아무나
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;