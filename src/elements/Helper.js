// export const formatAddress = (address) => address.slice8(0,4) + "..." + address.slice(-4); 

const formatAddress = (address) => {
    return address.slice(0, 5) + "...." + address.slice(-4);
  };
  
  const formatBalance = (balance) => {
    return balance.slice(0, 6);
  };
  
  export { formatAddress, formatBalance };