import React from "react";
import Units from "cryptocurrency-unit-convert";

const CryptoConverter = () => {
  // Convert 1.5 btc to satoshi
  const convertedBTC = Units.convertBTC("1", "btc", "bit"); // '150000000'

  // Convert 1 satoshi to bch
  const convertedBCH = Units.convertBCH("1", "satoshi", "bch"); // '0.00000001'

  // Convert 1.5 eth to wei
  const convertedETH = Units.convertETH("1.5", "eth", "wei"); // '1500000000000000000'

  // Convert 1 drop to xrp
  const convertedXRP = Units.convertXRP("1", "drop", "xrp"); // '0.000001'

  // Convert 1 photon to ltc
  const convertedLTC = Units.convertLTC("1", "photon", "ltc"); // '0.00000001'

  // Convert 1 duff to dash
  const convertedDASH = Units.convertDASH("1", "duff", "dash"); // '0.00000001'

  // Convert 1 zatoshi to zec
  const convertedZEC = Units.convertZEC("1", "zatoshi", "zec"); // '0.00000001'

  return <div>{convertedBTC}</div>;
};;

export default CryptoConverter;
