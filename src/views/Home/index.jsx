import {React , Component} from 'react';
//import Header from '../../components/Header';

import { Cards, Chart, CountryPicker } from '../../components';
import { fetchData } from '../../api';

import  '../../App.css';
import coronaImage from '../../images/image.png';

class Home extends Component {
    state = {
        data: {},
        country: '',
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data: fetchedData})
    }

    handleCountryChange = async(country)=>{
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country});
    }
    render(){
        const { data, country } = this.state;
        return(
            <div className="body_container">
                <img className="image" src={coronaImage} alt="COVID-19"/>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        );
    }
}
export default Home;