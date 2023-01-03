import React, { useState } from "react";
import "./styles.css";

const places = {
  hillStations: [
    {
      name: "1. Darjeeling,West Bengal",
      rating: "5/5",
      about:
        "Known as Queen of the Hills, best destination for winter vacations, various sightseeing opportunities and colonial-era architecture."
    },
    {
      name: "2. Manali, Himachal Pradesh",
      rating: "4/5",
      about:
        "It has incredible natural beauty, temples and sacred sities as well as the base for adventure activities."
    },
    {
      name: "3. Ooty, Tamil Nadu",
      rating: "4.9/5",
      about:
        "Famous for its picturesque sites, pristine lake and rolling hills. But the chief attractions of Ooty are the sprawling tea gardens."
    }
  ],
  historicalSites: [
    {
      name: "1. Taj Mahal, Agra",
      rating: "5/5",
      about:
        "It has intricate carvings and is made entirely of white marble, on the southern banks of the Yamuna River. It is also one of the Seven Wonders of the World."
    },
    {
      name: "2. Agra Fort, Uttar Pradesh",
      rating: "4.5/5",
      about:
        "The 16th century Agra Fort was built during Akbar’s reign and has been recognized as a UNESCO World Heritage Site as well."
    },
    {
      name: "3. Red Fort, Delhi",
      rating: "4.9/5",
      about:
        "Constructed using huge red sandstone walls in the Mughal style of architecture, the highlights of the Red Fort include its beautiful geometric gardens."
    }
  ],
  beaches: [
    {
      name: "1. Goa",
      rating: "5/5",
      about:
        "A place where people can be seen sunbathing, swimming, parasailing or relaxing all year round, Goa is first pick."
    },
    {
      name: "2. Gokarna, Karnataka",
      rating: "4.9/5",
      about:
        "Om Beach, Paradise Beach and Half-Moon Beach are the famous ones, which have both fine sand and rocky coasts mostly untouched by commercial activities."
    },
    {
      name: "3. Kovalam, Kerala",
      rating: "4/5",
      about:
        " Basically a fishing village, Kovalam has liighthouse beaches are pristine and clean lined with coconut trees of one side."
    }
  ]
};
var themes = Object.keys(places);
export default function App() {
  const [themeType, setTheme] = useState("historicalSites");
  function themeClickHandler(themeType) {
    setTheme(themeType);
  }
  return (
    <div
      className="App"
      style={{
        backgroundImage:
          "url(https://media.istockphoto.com/id/1315152008/photo/passport-airplane-tickets-yellow-suitcase-sun-hat-and-protective-face-mask-on-yellow.jpg?s=612x612&w=0&k=20&c=3A0FzoCwSxC7rdZBEb-T-88Q9r83BYynPG1yp3HA2i4=)"
      }}
    >
      <header
        style={{
          padding: "1rem",
          margin: "1rem 1rem"
        }}
      >
        <h1
          style={{
            borderRadius: "0.5rem",
            background: "white",
            padding: "0.5rem  1rem"
          }}
        >
          {" "}
          Travel places to visit in India{" "}
        </h1>
        <p
          style={{
            fontSize: "smaller",
            borderRadius: "0.5rem",
            background: "white",
            padding: "0.5rem  1rem"
          }}
        >
          {" "}
          select theme button given below to know famous places for your holiday
          trip..
        </p>
        <div>
          {themes.map((theme) => (
            <button
              onClick={() => themeClickHandler(theme)}
              style={{
                cursor: "pointer",
                borderRadius: "0.5rem",
                background: "black",
                padding: "0.5rem  1rem",
                border: "1px solid white",
                color: "white",
                fontWeight: "bold",
                margin: "1rem 0.5rem"
              }}
            >
              {theme}
            </button>
          ))}
        </div>
      </header>
      <div
        style={{
          textAlign: "left",
          padding: "1rem ",
          margin: "auto"
        }}
      >
        <ul
          style={{
            paddingInlineStart: "0"
          }}
        >
          {places[themeType].map((place) => (
            <li
              key={place.name}
              style={{
                listStyle: "none",
                padding: "0.5rem 1rem",
                border: "1px solid grey",
                width: "auto",
                margin: "1rem 3rem",
                backgroundColor: "lightgoldenrodyellow",
                borderRadius: "1rem"
              }}
            >
              {" "}
              <h2> {place.name} </h2>
              <small style={{ paddingBottom: "2px" }}>
                {" "}
                Rationg: {place.rating}{" "}
              </small>
              <p> {place.about} </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
