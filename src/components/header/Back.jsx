import React from 'react';
import { useNavigate } from "react-router-dom";

const BackCart = () => {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(-1)} className="header-menu">
            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.9997 9.00013H3.05046L10.6894 1.72422C11.0894 1.34323 11.1049 0.710235 10.7239 0.31024C10.3434 -0.0892551 9.71038 -0.105255 9.30989 0.27574L0.585993 8.58564C0.208497 8.96363 0 9.46563 0 10.0001C0 10.5341 0.208497 11.0366 0.603492 11.4311L9.31039 19.724C9.50388 19.9085 9.75188 20 9.99988 20C10.2639 20 10.5279 19.896 10.7244 19.6895C11.1054 19.2895 11.0899 18.657 10.6899 18.276L3.01896 11.0001H22.9997C23.5517 11.0001 23.9997 10.5521 23.9997 10.0001C23.9997 9.44813 23.5517 9.00013 22.9997 9.00013Z" fill="black"/>
            </svg>
        </button>
    )
}

export default BackCart;