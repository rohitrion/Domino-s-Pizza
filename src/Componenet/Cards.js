import React, { createContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { ADD } from '../Redux/actions/action';
import Cardsdata from './Cardsdata';
import Cheakout from './Cheakout';
import Footer from './Footer';

import "./style.css";

const Cards = () => {




    const [data, setdata] = useState(Cardsdata)


    const dispatch = useDispatch()

    const send = (element) => {
        dispatch(ADD(element));
    }

    const filteritem = (item) => {
        const update = Cardsdata.filter((curr) => curr.category === item);
        setdata(update);
    }

    return (
        <div className='contianer mt-3'>
            <hr />
            <div className='menu-tabs container'>
                <div className='menu-tab d-flex justify-content-around  s '>
                    <button className='btn btn-warning' onClick={() => setdata(Cardsdata)}  >All</button>
                 
                    <button className='btn btn-success' onClick={() => filteritem('veg')} >VEG</button>
                    <button className='btn btn-danger' onClick={() => filteritem('non-veg')}  >Non-VEG</button>
                
                    </div>
            </div>


            {/* <h2 className='text-center'> The Shopify App</h2> */}
            <div className='row d-flex justify-content-center align-items-center'>
                {
                    data.map((element, id) => {
                        return (

                            <Card style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                                <Card.Img variant="top" src={element.imgdata} style={{ height: "16rem" }} className="mt-3" />
                                <Card.Body>
                                    <Card.Title>{element.rname}</Card.Title>
                                    <h6 style={{color:'#7a7a7aDE'}}>{element.description}</h6>
                                    <Card.Text>
                                        Price : ₹ {element.price}
                                    </Card.Text>
                                    <div className='button_div d-flex justify-content-center'>
                                        <Button
                                            onClick={() => send(element)}
                                            className='col-lg-12' variant="primary">Add to Cart</Button>
                                    </div>
                                </Card.Body>
                            </Card>

                        )
                    })
                }

            </div>

 

        </div>
        
    )
}

export default Cards;
