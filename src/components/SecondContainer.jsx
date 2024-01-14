const SecondContainer = (props) => {
  return (
    <div className="second-container">
      {props.style === "quote" ? (
        <div className="center italic">
          <p className="bigger-p">{props.p1}</p>
          <p className="quoteAuthor bigger-p highlighted-text">{props.p2}</p>
          <p>Innen masoltam: https://www.thejourneyhungary.com/thejourney/</p>
        </div>
      ) : props.style === "img-right" ? (
        <>
          <div className="left">
            <p>{props.p1}</p>
            <p>{props.p2}</p>
            <p>{props.p3}</p>
            <p>{props.p4}</p>
          </div>
          <div className="right">
            <img src={props.img} alt={props.imageAlt} />
          </div>
        </>
      ) : props.style === "img-left" ? (
        <>
          <div className="left">
            <img src={props.img} alt={props.imageAlt} />
          </div>
          <div className="right">
            <p>{props.p1}</p>
            <p>{props.p2}</p>
            <p>{props.p3}</p>
            <p>{props.p4}</p>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default SecondContainer;
