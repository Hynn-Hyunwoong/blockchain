import AppleShop from "./pages/appleShop";
import useWeb3 from "./hooks/useWeb3";

const App = () => {
  const [account, web3] = useWeb3();

  if (!account || !web3) return <>Please connect after MetaMask</>;

  return (
    <>
      <h2>Apple's House</h2>
      <AppleShop />
    </>
  );
};

export default App;
