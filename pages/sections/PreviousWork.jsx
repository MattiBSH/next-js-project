import Link from "next/link";

export default function PreviousWork() {
  return (
    <div className="container">
      <h1 className="title">Previous Work</h1>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/sections/Info">
          <a>Info</a>
        </Link>
        <Link href="/sections/EducationalBackground">
          <a>Educational background</a>
        </Link>
        
        
      </nav>
      <div className="mainContent">
        <p className="description">
          <u>
            <h4><b>Languages and Frameworks.</b></h4>
          </u>{" "}
         
          React and flutter has been the ones that I have used the most in
          frontend development. React has been mostly used for web development
          while flutter has been used for web adminstration panels in
          combination with an app In backend development I have used Node.js,
          Java, and Python. With Java I have used Spring, Hibernate, and Spring
          Boot. With Python I have used Django, Flask. I have also used
          TypeScript, and Vue but mostly in a hobbyist way.
          
          
          <u>
            <h4><b>Tooling</b></h4>
          </u>
          I worked on a decent sized project where we used Firebase and
          firestore as a backend. For every project in my education and work we
          have always used Git and GitHub for version control. During my
          internship I worked with AWS storing the server of the backend and all
          the images.
        </p>
      </div>
      <style jsx>{`
        nav {
          box-shadow: 0 1px 0px white;
        }
        .mainContent {
          width: 30%;
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
          color: #ffffff;  margin-bottom: 0; margin-top: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif; 
        }
        h4 {
          font-size: 2.2rem;
          color: #ffffff; margin:1rem;
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
