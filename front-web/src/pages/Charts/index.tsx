import React, { useState, useEffect } from 'react';
import Filters from '../../components/Filters';
import Chart from 'react-apexcharts';
import { barOptions, pieOptions } from './chart-options';
import axios from 'axios';
import './styles.css';
import { buildBarSeries, getPlatformChartData, getGenderChartData } from './helpers';

type PieChartData = {
    labels: string[];
    series: number[];
}

type BarChartData = {
    x: string;
    y: number;
}

const initialPieData= {
    labels: [],
    series: []
}

const BASE_URL = "https://sds1-diegomazega.herokuapp.com"

const Charts = () => {

    const [barChartData, setbarChartData] = useState<BarChartData[]>([]);
    const [platformData, setPlatformData] = useState<PieChartData>(initialPieData);
    const [genderData, setGenderData] = useState<PieChartData>(initialPieData);

    useEffect(() =>{
        async function getData(){
            const recordsReponse = await axios.get(`${BASE_URL}/records`);
            const gamesReponse = await axios.get(`${BASE_URL}/games`);

            const barData = buildBarSeries(gamesReponse.data, recordsReponse.data.content);
            setbarChartData(barData);

            const platformChartData = getPlatformChartData(recordsReponse.data.content);
            setPlatformData(platformChartData);

            const genderChartData = getGenderChartData(recordsReponse.data.content);
            setGenderData(genderChartData);
        }
        getData();
    }, [])

    return (
        <div className="page-container">
            <Filters link="/records" linkText="VER TABELA" />
            <div className="chart-container">
                <div className="top-related">
                    <h1 className="top-related-title">
                        Jogo Mais Votados
                    </h1>
                    <div className="games-container">
                        <Chart options={barOptions}
                            type="bar"
                            width="900"
                            height="650"
                            series={[{ data: barChartData }]}
                        >
                        </Chart>
                    </div>
                </div>
                <div className="charts">
                    <div className="platform-chart">
                        <h2 className="chart-title">Plataformas</h2>
                        <Chart 
                            options={{ ...pieOptions, labels: platformData?.labels }}
                            type="donut"
                            series={platformData?.series}
                            width="350"
                        >
                        </Chart>
                    </div>
                    <div className="gender-chart">
                        <h2 className="chart-title">Gêneros</h2>
                        <Chart 
                            options={{ ...pieOptions, labels: genderData?.labels }}
                            type="donut"
                            series={genderData?.series}
                            width="350"
                        >

                        </Chart>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Charts;