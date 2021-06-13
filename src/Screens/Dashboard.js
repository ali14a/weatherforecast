import React, {useEffect} from 'react'
import { getWeatherData } from '../redux/DashboardComponent/DashboardActions'
import { connect } from 'react-redux';

const Dashboard = (props) => {
    console.log(props)
    useEffect(()=>{
// props.getWeatherData()
    },[])
    return (
        <>

        </>
    )
}
const mapStateToProps = store=>{
    return{
        store:store
    }
}
const mapDispatchToProps =dispatch=>{
    return{
    getWeatherData:(lat,lon)=>dispatch(getWeatherData(lat,lon))
    }
}
const wrappedDashboard=connect(
    mapStateToProps,
    mapDispatchToProps
    )(Dashboard)
export default wrappedDashboard
