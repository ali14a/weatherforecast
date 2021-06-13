import React, { useEffect, useState } from 'react'
import { getWeatherData } from '../redux/DashboardComponent/DashboardActions'
import { connect } from 'react-redux';
import Loader from '../components/Loader';
import { ScrollView, View, Text, FlatList } from 'react-native';
import { CustomButton } from '../common';
import { hp, wp } from '../util/ResponsiveUI';
import { COLORS, FONTS } from '../constants/styles';
import { GEOCODER_API } from '../config/env/ServerConfig';

import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
const Dashboard = (props) => {
    const { getWeatherData, pending, error, errorMsg, weatherData } = props
    const [locationError, setLocationError] = useState(false)
    const [cordinates, setCordinates] = useState({})
    const [address, setAddress] = useState('')
    useEffect(() => {
        getCurrentLocation()
    }, [])

    const getCurrentLocation = () => {
        Geolocation.PositionError === 1 && setLocationError(true)
        Geolocation.requestAuthorization('whenInUse');
        Geolocation.getCurrentPosition(
            (position) => {
                locationError && setLocationError(false)
                getWeatherData(position.coords.latitude, position.coords.longitude)

                setCordinates({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                })

                console.log('position....', position)
                // Geocoder.init(GEOCODER_API, { language: "en" });
                // Geocoder.from(position.coords.latitude, position.coords.longitude)
                //   .then(json => {
                //     var locality = json.results[0].address_components.
                //       filter(x => x.types.filter(t => t == 'locality').length > 0)[0].short_name;
                //     setAddress({
                //       address: locality + " " + postal_code
                //     });
                //   })
                //   .catch(error => console.warn(error));

            },
            (error) => {
                setLocationError(true)
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
    };




    const _renderError = () => (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                fontSize: hp(50),
                width: wp(300),
                color: COLORS.TEXT,
                marginBottom: hp(160),
                fontFamily: FONTS.GOOGLESANS_REGULAR,
            }}>
                {/* {errorMsg} */}
                {"Something went Wrong at our End"}
            </Text>
            <CustomButton
                buttonStyle={{
                    borderColor: COLORS.TEXT,
                    borderWidth: hp(1)
                }}
                textStyle={{
                    color: COLORS.Text,
                    fontSize: hp(20),
                    fontFamily: FONTS.GOOGLESANS_REGULAR,
                    paddingHorizontal: wp(20),
                    paddingVertical: hp(10)
                }}
                buttonText={"Retry"}
                onButtonPress={getCurrentLocation}
            />
        </View>
    )
    return (
        <>
            {pending && <Loader />}
            {(error || locationError) ? _renderError()
                :
                <>
                    {weatherData ?
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 0.5 }}>
                                <Text>
                                    {weatherData?.current?.temp}
                                </Text>
                                <Text>

                                </Text>
                            </View>
                            <View style={{ flex: 0.5 }}>
                                <ScrollView>

                                </ScrollView>
                            </View>
                        </View>
                        : null
                    }
                </>
            }
        </>
    )
}
const mapStateToProps = store => {
    return {
        getWeatherData: store.dashboard.getWeatherData,
        pending: store.dashboard.pending,
        error: store.dashboard.error,
        errorMsg: store.dashboard.errorMsg,
        weatherData: store.dashboard.weatherData
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getWeatherData: (lat, lon) => dispatch(getWeatherData(lat, lon))
    }
}
const wrappedDashboard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)
export default wrappedDashboard
