function BoxColor(props) {
  const style = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
  };

  return (
    <div className="box box-color" style={style}>
      rgb({props.r},{props.g},{props.b})
    </div>
  );
}

export default BoxColor;
