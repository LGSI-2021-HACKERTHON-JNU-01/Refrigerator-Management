import React from 'react';
import Calendar from '@ericz1803/react-google-calendar';
import { css, withTheme } from "@emotion/react";
//import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';
//import { AngularFireAuth } from '@angular/fire/auth';
//import { auth } from 'firebase/app';

const API_KEY = "AIzaSyCpC0bTrytCsEVyVZDKrHK1_1h5RloRYWc";

let calendars = [
  { calendarId: "hkhh972123@gmail.com" }
];

let styles = {
  calendar: {
    borderWidth: "3px",
    width: "80%",
    paddingTop: "40px",
    paddingBottom: "50px",
    margin: "auto",
    maxWidth: "900px"
  },

  today: css`
    color: red;
    border: 3px solid red;
  `
};

export default function App() {
  return (
    <div className="calendar">
      <body>
        <div>
          <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
        </div>
      </body>
    </div>
  );
}
