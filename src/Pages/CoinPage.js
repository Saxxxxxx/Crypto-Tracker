import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import { SingleCoin } from "../data/api";
import CoinInfo from "../components/CoinInfo";
import { Typography } from "@mui/material";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol } = CryptoState();
  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };
  console.log(coin);
  useEffect(() => {
    fetchCoin();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 25,
          borderRight: "2px solid grey",
        }}
      >
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography
          variant="h3"
          style={{
            fontWeight: "bold",
            marginBottom: 20,
            fontFamily: "Montserrat",
          }}
        >
          {coin?.name}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{
            width: "100%",
            fontFamily: "Montserrat",
            padding: 25,
            paddingBottom: 15,
            paddingTop: 0,
            textAlign: "center",
          }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: coin?.description.en.split(". ")[0],
            }}
          />
        </Typography>
        <div style={{ fontFamily: "Montserrat" }}>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
              Rank:
            </Typography>
            &nbsp;
            <Typography variant="h5">{coin?.market_cap_rank}</Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
              Current Price:
            </Typography>
            &nbsp;
            <Typography variant="h5">
              {symbol}&nbsp;
              {coin?.market_data.current_price[currency.toLowerCase()]}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
              Current Price:
            </Typography>
            &nbsp;
            <Typography variant="h5">
              {symbol}&nbsp;
              {coin?.market_data.market_cap[
                currency.toLowerCase()
              ].toLocaleString()}
            </Typography>
          </span>
        </div>
      </div>
      <CoinInfo coin={coin} />
    </div>
  );
};

export default CoinPage;
