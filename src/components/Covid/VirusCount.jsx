import React, { useEffect, useState } from "react";
import axios from 'axios';
import './virus.styles.css';
import MiniSpinner from '../Spinners/MiniSpinner'

const VirusCount = () => {
    const [count, setCount] = useState(undefined);
    const [countFetchFail, setCountFetchFail] = useState(false)
    const [country, setCountry] = useState("south-africa");
    const [loading, setLoading] = useState(false);
    const [countryOptions, setCountryOptions] = useState([{
        slug: "",
        Country: "Loading"
    }]);

    useEffect(() => {
        setLoading(true); //Will be false when effect ends 
        axios.get(`https://api.covid19api.com/dayone/country/${country}/status/confirmed`)
            .then(res => {
                const number = res.data
                const currentCount = number[number.length - 1]
                setCount(currentCount.Cases)
                setLoading(false)
                setCountFetchFail(false)
            }).catch(err => {
                console.log("ERROR", err)
                setCountFetchFail(true)
                setLoading(false)
            });

        axios.get(`https://api.covid19api.com/countries`)
            .then(res => setCountryOptions(res.data))
    }, [country]);

    const selectCountry = countryOptions.map((countryOption, index) => (
        <option className="virus-count-option" key={index} value={countryOption.slug}>{countryOption.Country}</option>
    ))

    return (
        <div className="virus-count-container">
            <h2 className="virus-count-title">Cases</h2>
            <datalist></datalist>
            <select className="virus-count-select" onChange={(e) => setCountry(e.target.value)}>
                {selectCountry}
            </select>
            <div className="virus-count-number">
                {
                    loading ?
                        (<MiniSpinner />)
                        : countFetchFail
                            ? (<p><em>Unable to find number of cases</em></p>)
                            : (<span className="virus-count"> {count} </span>)

                }
            </div>
        </div>
    );
};

export default VirusCount;