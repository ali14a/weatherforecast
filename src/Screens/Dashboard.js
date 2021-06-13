import React, {
  useEffect,
  useState
} from 'react'
import { getWeatherData } from '../redux/DashboardComponent/DashboardActions'
import { connect } from 'react-redux';
import Loader from '../components/Loader';
import { View, Text, Image } from 'react-native';
import { CustomButton } from '../common';
import { GEOCODER_API } from '../config/env/ServerConfig';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import { styles } from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const Dashboard = (props) => {
  const {
    getWeatherData,
    pending,
    error,
    errorMsg,
    weatherData
  } = props
  const [locationError, setLocationError] = useState(false)
  const [city, setCity] = useState('')
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
        Geocoder.init(GEOCODER_API, { language: "en" });
        Geocoder.from(position.coords.latitude, position.coords.longitude)
          .then(json => {
            var locality = json.results[0].address_components.
              filter(x => x.types.filter(t => t == 'locality').length > 0)[0].short_name;
            setCity(locality);
          })
          .catch(error => console.warn(error));

      },
      (error) => {
        setLocationError(true)
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  };

  const _renderError = () => (
    <View style={styles.errorContainer}>
      <Text style={styles.errorMsgText}>
        {errorMsg || 'Something went Wrong at our End'}
      </Text>
      <CustomButton
        buttonStyle={styles.retryBtn}
        textStyle={styles.btnText}
        buttonText={"Retry"}
        onButtonPress={getCurrentLocation}
      />
    </View>
  )
  return (
    <>
      <Loader visible={pending} />
      {(error || locationError) ? _renderError()
        :
        <>
          {weatherData?.current ?
            <View style={{ flex: 1 }}>
              <View style={styles.headerContainer}>
                <View style={styles.currentTempContainer}>
                  <Text style={styles.currentTempText}>
                    {parseInt(weatherData?.current?.temp)}
                  </Text>
                  <FontAwesome name={"circle-o"} style={styles.degreeIcon} />
                  <Image source={{ uri: `http://openweathermap.org/img/wn/${weatherData.current.weather?.[0].icon}@2x.png` }}
                    style={styles.currentTempIcon} />
                </View>
                <Text style={styles.cityText}>
                  {city}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                {
                  Array.isArray(weatherData?.daily) &&
                  weatherData.daily.slice(0, 5).map((dailydata, index) => {
                    const date = new Date(dailydata.dt * 1000)
                    const day = date.toLocaleString("en-US", { weekday: "long" })
                    const averageTemp = (dailydata.temp.max + dailydata.temp.min) / 2;
                    return (
                      <View
                        key={index}
                        style={styles.forecastContainer}>
                        <Text style={styles.forecastText}>{day}</Text>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={styles.forecastText}>{parseInt(averageTemp)}</Text>
                          <Image source={{ uri: `http://openweathermap.org/img/wn/${dailydata.weather?.[0].icon}@2x.png` }}
                            style={styles.dailyTempIcon} />
                        </View>
                      </View>
                    )
                  })
                }
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
