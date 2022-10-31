import React, { useEffect, useState } from "react";
import axios from "axios";
import { TrendingCoins } from "../../data/api";
import { CryptoState } from "../../CryptoContext";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";

const carousel = {
  height: "50%",
  display: "flex",
  alignItems: "center",
};
const carouselItem = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  textTransform: "uppercase",
  color: "white",
};
const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();
  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);
  const items = trending.map((coin) => {
    let greenOrRed = coin.price_change_percentage_24h >= 0;
    return (
      <Link style={carouselItem} to={`/coins/${coin.id}`}>
        <img
          src={coin?.image}
          alt={coin.name}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <span>
          {coin?.symbol}
          &nbsp;
          <span>
            {symbol}&nbsp;
            {coin?.current_price}
          </span>
        </span>
        <span style={greenOrRed ? { color: "green" } : { color: "red" }}>
          {greenOrRed && "+"}
          {coin.price_change_percentage_24h?.toFixed(2)}%
        </span>
      </Link>
    );
  });
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };
  return (
    <div style={carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </div>
  );
};

export default Carousel;
