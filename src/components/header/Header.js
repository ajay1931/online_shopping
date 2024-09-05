import React, { useState, useEffect } from 'react';
import './Header.css';
import { IoSearch, IoFilter } from 'react-icons/io5';
import { FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa';
import MyAccount from '../myaccount/MyAccount';
import Filter from '../filter/Filter';
import Cart from '../cart/Cart';
import WishList from '../wishlist/WishList';
import { useDispatch, useSelector } from 'react-redux';
import supabase from '../../supabase';
import { removeUser } from '../slices/userSlice';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFilter, setIsFilter] = useState(false);
    const [isCart, setIsCart] = useState(false);
    const [isWishList, setIsWishList] = useState(false);

    const dispatch = useDispatch();
    const user = useSelector((state) => state.userData.user);

    useEffect(() => {
        if (user) {
            setIsOpen(false);
        }
    }, [user]);

    const signOut = async () => {
        const confirmSignOut = window.confirm("Are you sure you want to sign out?");
        if (confirmSignOut) {
            const { error } = await supabase.auth.signOut();
            if (!error) {
                dispatch(removeUser());
            }
        }
    }

    return (
        <div>
            <div className='header'>
                <div className='header_left'>
                    <h1>Online Shopping</h1>
                </div>
                <div className='header_center'>
                    <input
                        placeholder='Search for products'
                    />
                    <button ><IoSearch /></button>
                </div>
                <div className='header_right'>
                    <button className='cartbtn' onClick={() => setIsCart(true)}>
                        <span className='cart_count'></span><FaShoppingCart /> Cart
                    </button>
                    <button className='filterbtn' onClick={() => setIsFilter(true)}><IoFilter /> Filter</button>
                    <button onClick={()=>setIsWishList(true)}><FaHeart /> Wish List</button>
                    {user ? (
                        <button className='signOutbtn' onClick={signOut}>
                            <FaUser />
                            @{user?.email.slice(0, 10)}
                        </button>
                    ) : (
                        <button className='userbtn' onClick={() => setIsOpen(true)}><FaUser /> Login</button>
                    )}
                </div>
                <div>
                    <MyAccount isOpen={isOpen} setIsOpen={setIsOpen} />
                    <Filter isFilter={isFilter} setIsFilter={setIsFilter} />
                    <Cart isCart={isCart} setIsCart={setIsCart} />
                    <WishList isWishList={isWishList} setIsWishList={setIsWishList} />
                </div>
            </div>
        </div>
    );
};

export default Header;
