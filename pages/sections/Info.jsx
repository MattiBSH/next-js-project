import Link from "next/link";
import { useState } from "react";

export default function Info() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <h1 className="title">Info</h1>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/sections/EducationalBackground">
          <a>Educational background</a>
        </Link>
        <Link href="/sections/PreviousWork">
          <a>Previous work</a>
        </Link>
      </nav>
      <div className="mainContent">
        <p className="description">
          Hey there! I'm Matti Hansen, a software developer from Copenhagen,
          Denmark. I love to create things that people can use to better their
          lives and I'm always looking for new ways to make things better. I
          develop for both backend and frontend in my current position and enjoy
          the complexity of doing both. I am educated as a datamatiker and
          currently working on my software development top up.
        </p>
      </div>

      {isOpen == true ? (
        <div className="contact">
          <h2>Contact info </h2>
          <h2>Phone: 60651098</h2>
          <h2>Email: mattibenhansen@gmail.com</h2>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)}>How to get in touch</button>
      )}
      <style jsx>{`
        .contact {
          align-items: center;
          align-self: center;
          text-align: center;
        }
        nav {
          box-shadow: 0 1px white;
        }
        button {
          background-color: #50adfa;
          color: white;
          padding: 10px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1.2em;
        }
        .mainContent {
          width: 50%;
          color: black;
        }
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #50adfa;
          height: 100vh;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        p  {
          font-size: 1.3rem;
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
            sans-serif; margin: 0
        }

        h2 {
          font-size: 2rem;
          margin: 0.05rem;
          color: white;
          text-shadow: 1px 1px black;
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
          margin: 1;
          line-height: 0.5;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.3rem; 
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
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
