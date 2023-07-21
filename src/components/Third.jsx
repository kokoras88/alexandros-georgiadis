const Third = () => {
  return (



    <div className="third">
      <h1 id="title" style={{maxWidth:350, padding:2}}> Want to know about me?</h1>

    <div className="terminal">
      <div className="t-head">
        <div className="dots">
          <span className="dot1"></span>
          <span className="dot2"></span>
          <span className="dot3"></span>
        </div>
      </div>

      <div className="t-body">
        <div className="intext">
          <div className="line">
            <p id="text"> > Alexandros.currentLocation </p>
            <p style={{ color: 'yellow'}}>   "Bordeaux, France"</p>
          </div>

          <div className="line">
            <p> > Alexandros.contactInfo</p>
            <p> [
            <a href="#">"kokoras19888@gmail.com" , </a>
            <a href="#">"Linkedin" ,</a>
            <a href="#">"Github"</a>
          ]
          </p>
          </div>

          <div className="line">
              <p> > Alexandros.resume</p>
              <a href="#">"alex.pdf</a>
          </div>

          <div className="line">
            <p> > Alexandros.interests</p>
            <p style={{ color: 'yellow'}}> > [ "coding", "videogames", "music", "tennis" ]</p>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
}

export default Third;
