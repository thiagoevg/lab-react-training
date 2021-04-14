import visaLogo from './img/visa.png';
import mastercardLogo from './img/master-card.svg';

function CreditCard(props) {
  let style = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`,
  };
  return (
    <div className="credit-card" style={style}>
      <div className="logo">
        <img
          className="logo-image"
          src={props.type === 'Visa' ? visaLogo : mastercardLogo}
        />
      </div>
      <div className="number">{props.number}</div>
      <div className="info">
        Expires: {props.expirationMonth}/
        {props.expirationYear.toString().slice(2, 4)} {props.bank}
        <br />
        {props.owner}
      </div>
    </div>
  );
}

export default CreditCard;
