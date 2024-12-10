import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ProductChart({ selectedCategory, show }) {

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Product Stock',
        data: [],
        backgroundColor: []
      },
    ],
  });

  const setChart = (response) =>{
    let productNames = [];
          let productStocks = [];
          let backgroundColors = [];
          productNames = response.data.map(product => product.productName);
          productStocks = response.data.map(product => product.stockLevel);
          backgroundColors = productStocks.map(() =>
          `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1.5)`
          );

        setChartData({
          labels: productNames,
          datasets: [
          {
            label: 'Product Stock',
            data: productStocks,
            backgroundColor: backgroundColors,
          },
        ],
          });
  }
  

  useEffect(() => {
    const getAllRiskProduct = async () => {
        try {
            const response = await axios.get('http://localhost:7000/riskproduct');
            if(response){
                setChart(response);
              }
        } catch (error) {
            console.log(error);
        }
    }

    const getCategoryData = async ()=>{
        try {
          const response = await axios.get(`http://localhost:7000/getspecificriskproduct/${selectedCategory}`);
          if(response){
            setChart(response);
          }
        } catch (error) {
          console.log(error);
        }
      }

    if(selectedCategory === '' || show === true){
        getAllRiskProduct();
    }else{
        getCategoryData();
    }
  }, [selectedCategory]);

  return (
    <div style={{ maxWidth: '650px', margin: '0 auto' }}>
      <Bar
        data={chartData}
        height={300}
        width={400}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              ticks: {
                beginAtZero: true,
              },
            },
          },
        }}
      />
    </div>
  );
}

export default ProductChart;
