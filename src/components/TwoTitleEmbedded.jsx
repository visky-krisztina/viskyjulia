const TwoTitleEmbedded = (props) => {
  const {
    firstTitleClass,
    secondTitleClass,
    spanLineClass,
    firstTitle,
    secondTitle,
  } = props;
  return (
    <>
      <p className={`${firstTitleClass}`}>{firstTitle}</p>
      <p className={`${secondTitleClass}`}>
        {secondTitle}
        <span className={`${spanLineClass}`}></span>
      </p>
    </>
  );
};

export default TwoTitleEmbedded;
