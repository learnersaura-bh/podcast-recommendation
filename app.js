import React, { useState } from "react";
import "./styles.css";

var podcasts = {
  Educational: [
    { name: "Maha Bharat with Dhruv Rathi", rating: "4.5" },
    { name: "For History Nerds" },
    { name: "Today I Learned" }
  ],
  News: [{ name: "WION Podcast" }, { name: "Pod Khaas" }, { name: "3 Things" }],
  Stories: [
    { name: "Yaadon ka idiot box with Neelesh Misra" },
    { name: "Indian Noir" },
    { name: "Heirs of The Pandavas" }
  ],
  Sports: [
    { name: "22 Yarns With Gaurav Kapur" },
    { name: "Sandlot Sports" },
    { name: "Hotboxin with Mike Tyson" }
  ],
  Science: [
    { name: "Huberman Lab" },
    { name: " Unexplainable" },
    { name: "Let's Find Out" }
  ]
};

export default function App() {
  var podcastGenre = Object.keys(podcasts);
  var [genreSelected, setGenreSelected] = useState("News");
  // console.log(podcastGenre)
  function genreClickHandler(genres) {
    setGenreSelected(genres);
  }
  return (
    <div className="App">
      <h1>Want to listen Podcasts? </h1>
      <hr />
      {podcastGenre.map((genres) => (
        <button
          style={{ margin: "0.5rem", borderRadius: "0.5rem" }}
          onClick={() => genreClickHandler(genres)}
        >
          {" "}
          {genres}{" "}
        </button>
      ))}
      <hr />

      <ol style={{textAlign: "center"}}>
        {podcasts[genreSelected].map((key) => (
           <div> {key.name} </div>
            <div style={{ fontSize: "small" }}> rating : {key.rating} </div>
            <hr />
        ))}
      </ol>
    </div>
  );
}
