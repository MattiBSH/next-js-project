import React from 'react';
import { useState } from "react";
import Link from "next/link";

const BMI = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBMI] = useState(0);
    return (
        <div>
            <div className='container'>
            <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        
        
        
      </nav>
            <h1>BMI</h1>
            
                <label>Weight</label>
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
                <label>Height</label>
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                <button onClick={() => setBMI(weight/height*height)}>BMI {bmi}</button>
                </div>
                <style jsx global>{`
                input {
                    list-style: none;
                    width: 6%;
                    font-size: 1.5em;
                    border-radius: 15px;
                    text-align: center;
                }
                label {
                    margin-top: 10px;
                    font-size: 1.5em;
                }
                button {
                    margin: 10px;
                    height: 30px;
                    width: 6%;
                    font-size: 1.5em;
                    border-radius: 15px;

                }
      .key{
        position: absolute;
        bottom: max(0px, 90.0%);
        font-size: 0.4em;
        color: #1d94f5;
        left: max(0px, 90.0%);
        opacity: 0.1;
      }
        .secret {
          position: absolute;
  bottom: 0;
  left: 0;
        }
        nav {
          box-shadow: 0 1px 0px white;
        }

        html,
        body {
          background: linear-gradient(-45deg, #99d1ff, #5eb7ff, #1d94f5, #008cff,#99d1ff, #5eb7ff, #1d94f5, #008cff,#f0b429);
          background-size: 400% 400%;
          animation: gradient 35s ease infinite;
          height: 100vh;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        * {
          box-sizing: border-box;
        }
        
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        
        h3 {
          font-size: 2.5rem;
          color: #ffffff;  margin-bottom: 0
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          font-size: 2rem;
          margin: 0.5rem 1rem;
          color: white;
          text-decoration: none;
        }

        .title a {
          color: black;
          box-shadow: 0px 1px 0px 1px #eaeaea;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 0.5;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          } `}</style>
        </div>
    
    );
    
}

export default BMI;
