import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CryptoState } from '../CryptoContext';
import styled from '@emotion/styled';
import { CircularProgress } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale } from "chart.js";
import { HistoricalChart } from '../config/api';
import { chartDays } from '../config/data';
import SelectButton from './SelectButton';

const PREFIX = 'CoinInfo';
const classes = {
  container: `${PREFIX}-container`,
}
ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const Container = styled('div')(({ theme }) => ({
    width: "75%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    padding: 40,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: 0,
      padding: 20,
      paddingTop: 0,
      },
}));

const CoinInfo = ({ coin }) => {
    const [historicData, setHistoricData] = useState();
    const [days, setDays] = useState(1);
    const { currency } = CryptoState();
    // eslint-disable-next-line
    const [flag,setflag] = useState(false);

    const fetchHistoricData = async () => {
        const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
        setflag(true);
        setHistoricData(data.prices);
    };

    useEffect(() => {
        fetchHistoricData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [days]);

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            mode: "dark",
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
      <Container className={classes.container}>
        {
          !historicData ? (
            <CircularProgress
              style={{ color: "gold" }}
              size={250}
              thickness={1}
            />
          ) : (
            <>
              <div style={{ height: "135%", width: "135%" }}>
                <Line
                  data={{
                    labels: historicData.map((coin) => {
                      let date = new Date(coin[0]);
                      let time =
                        date.getHours() > 12
                          ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                          : `${date.getHours()}:${date.getMinutes()} AM`;
                      return days === 1 ? time : date.toLocaleDateString();
                    }),

                    datasets: [
                      {
                        data: historicData.map((coin) => coin[1]),
                        label: `Price ( Past ${days} Days ) in ${currency}`,
                        borderColor: "#EEBC1D",
                      },
                    ],
                  }}
                  options={{
                    elements: {
                      point: {
                        radius: 1,
                      },
                    },
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: 20,
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                {chartDays.map((day) => (
                  <SelectButton
                    key={day.value}
                    onClick={() => {setDays(day.value);
                      setflag(false);
                    }}
                    selected={day.value === days}
                  >
                    {day.label}
                  </SelectButton>
              ))}
              </div>
            </>
          )
        }
      </Container>
    </ThemeProvider>
    )
}

export default CoinInfo;