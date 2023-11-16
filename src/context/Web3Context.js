import { ethers } from 'ethers';
import React, { createContext, useEffect, useState } from 'react'
import fth from "../contract/fth.json"





const Web3Data = createContext(null)

function Web3Context({children}) {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [fthBalance, setFthBalance] = useState("");
  const [fthContract, setFthContract] = useState(null);

  useEffect(() => {
    const eth = window?.ethereum || null;
    const _provider = eth
      ? new ethers.BrowserProvider(eth, "any")
      : null;

      setProvider(_provider);

      if (_provider) {
        (async () => {
          const _signer = await _provider.getSigner();
          setSigner(_signer);
          // console.log("_signer", _signer);
          const _address = (await _signer.getAddress()) || null;
          // console.log("_address", _address);
  
          if (_address) {
            const _balance = await _provider.getBalance(_address);
            // console.log("_balance", _balance, ethers.utils.formatEther(_balance));
            setBalance(ethers.formatEther(_balance));
            setAddress(_address);
          }
  
          const fthContract = new ethers.Contract(
            "0x443b74e6D3f90ee39c2fDEF08A9F75cb20f4Ce7c",
            fth.abi,
            _signer
          );
          
  
          setFthContract(fthContract);
          if (_address) {
            const fthBalance = await fthContract.balanceOf(_address);
            // console.log("usdtBalance:", ethers.utils.formatEther(usdtBalance));
            setFthBalance(ethers.formatEther(fthBalance));
          }

          if (window.ethereum) {
     
            window.ethereum.on("accountsChanged", async() => {
              const _signer = _provider.getSigner();
          setSigner(_signer);
          // console.log("_signer", _signer);
          const _address = (await _signer.getAddress()) || null;
          // console.log("_address", _address);
  
          if (_address) {
            const _balance = await _provider.getBalance(_address);
            // console.log("_balance", _balance, ethers.utils.formatEther(_balance));
            setBalance(ethers.formatEther(_balance));
            setAddress(_address);
          }
  
          const fthContract = new ethers.Contract(
            "0x443b74e6D3f90ee39c2fDEF08A9F75cb20f4Ce7c",
            fth.abi,
            _signer
          );
          // console.log("usdtContract:",  usdtContract);
  
          setFthContract(fthContract);
          if (_address) {
            const fthBalance = await fthContract.balanceOf(_address);
            // console.log("usdtBalance:", ethers.utils.formatEther(usdtBalance));
            setFthBalance(ethers.formatEther(fthBalance));
          };
            });
          }
  
        })();
      }

  }, [])

  const getFthBalance = async () => {
    const fthBalance = await fthContract.balanceOf(address);
    setFthBalance(ethers.formatEther(fthBalance));
  };
  
  const onConnectClick = async () => {
    try {
      await provider.send("eth_requestAccounts", []);
      const _signer = provider.getSigner();
      setSigner(_signer);
      const _address = await _signer.getAddress();
      // console.log("_address", _address);
      setAddress(_address);
      const _balance = await provider.getBalance(_address);
      setBalance(ethers.formatEther(_balance));
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Web3Data.Provider 
    value = {{provider,
      signer,
      address,
      balance,
      fthBalance,
      fthContract,
      setFthBalance,
      onConnectClick,
      getFthBalance,}}
    >
        {children}
    </Web3Data.Provider>
  )
}
export {Web3Data, Web3Context}

// contract address 0x9cB5FeC62a2C3cef61c045F88Ffc8BB182bf6115
// contract address 0xB1d274a2100FfCd119474c1aD1a90D25E371cB9D
// contract address fatihtoken 0x443b74e6D3f90ee39c2fDEF08A9F75cb20f4Ce7c