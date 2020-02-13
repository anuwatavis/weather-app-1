import React from "react";

const Weather = props => (
  <div className="weather__info">
    {props.city && props.country && (
      <p className="weather__key">
        Location :
        <span className="weather__value">
          {" "}
          {props.city},{props.country}
        </span>
      </p>
    )}

    {props.temperature && (
      <p className="weather__key">
        temperature: <span className="weather__value">{props.temperature}</span>
      </p>
    )}

    {props.humidity && (
      <p className="weather__key">
        Humidity : <span className="weather__value">{props.humidity}</span>
      </p>
    )}

    {props.description && (
      <p className="weather__key">
        Condition: <span className="weather__value">{props.description}</span>
      </p>
    )}

    {props.error && <p className="weather__error">Error: {props.error}</p>}
  </div>
);

//   render() {
//     return (
//       <div>
//         {this.props.city && this.props.country && (
//           <p>
//             Location : {this.props.city},{this.props.country}
//           </p>
//         )}
//         {this.props.temperature && <p>temperature: {this.props.temperature}</p>}
//         {this.props.humidity && <p>Humidity : {this.props.humidity}</p>}
//         {this.props.description && <p>Condition: {this.props.description}</p>}
//         {this.props.error && <p>Error: {this.props.error}</p>}
//       </div>
//     );
//   }
// }

export default Weather;
