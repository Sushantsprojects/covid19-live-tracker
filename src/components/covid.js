import React, { useEffect, useState } from "react"
import './covid.css';

const Covid = () => {
    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);
        }

    }
    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <body>
            <section>
                <h1>Live</h1>
                <h2><span>COVID-19</span> CORONAVIRUS TRACKER</h2>

                <div className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span><b>OUR</b></span><b>COUNTRY : INDIA</b></p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span><b>TOTAL</b></span><b>RECOVERED : {data.recovered}</b></p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span><b>TOTAL</b></span><b>CONFIRMED : {data.confirmed}</b></p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span><b>TOTAL</b></span><b>DEATHS : {data.deaths}</b></p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span><b>TOTAL</b></span><b>ACTIVE : {data.active}</b></p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span><b>LAST</b></span><b>UPDATE : {data.lastupdatedtime}</b></p>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <h4>@CoronaVirus Update result in 2021</h4>
            </footer>
        </body>
    )
}

export default Covid