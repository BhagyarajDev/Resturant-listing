import React,{useState,useEffect} from 'react'
import { Row,Col } from 'react-bootstrap'
import RestaurantCard from './RestaurantCard'
import { listRestaurants } from '../actions/restaurantAction'
import { useSelector,useDispatch } from 'react-redux'


function Home() {

    // const[items,setItems]=useState([])

    // const fetchData=async ()=>{

    //     await fetch('/restaurants.json')
    //     .then((res)=>res.json())
    //     .then((data)=>setItems(data.restaurants))

    // }

    const dispatch=useDispatch()

    const result= useSelector(state => state.restaurantReducer)

    const {restaurant} = result

    useEffect(() => {
    
        dispatch(listRestaurants())
      
    }, [])

    

  return (
    <Row>
        {restaurant.map((item)=>(
            <Col sm={12} md={6} lg={6} xl={3}>
               <RestaurantCard data={item}/>
            </Col>
        ))}
    </Row>
  )
}

export default Home