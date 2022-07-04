import React from 'react';
import './index.scss';
import axios from 'axios';
import MainProduct from './MainProduct';
import useAsync from '../customHook/useAsync';
import { API_URL } from '../config/constants';
import { Carousel } from 'antd';

async function getProducts(){
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
}
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    position: 'absolute',
    bottom: '50px',
};
const MainPage = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    }
    const [ state ] = useAsync(getProducts,[])
    const { loading, data:product, error } = state;
    if(loading) return <div>로딩중.....</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!product) return <div>로딩중입니다.</div>

    return (
        <div>
            <div id="main">
                <div id="banner">
                <Carousel autoplay afterChange={onChange}>
                    <div>
                        <img src="images/banners/banner1.png" alt=""/>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <img src="images/banners/banner1.png" alt=""/>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <img src="images/banners/banner1.png" alt=""/>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                </Carousel>          
                </div>
                <div id="product-list" className="inner">
                    <h2>그린조명 최신상품</h2>
                    <div id="product-items">
                        {product.map(product=> <MainProduct key={product.id} product={product}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;