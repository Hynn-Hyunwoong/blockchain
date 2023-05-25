import useWeb3 from "./hooks/useWeb3";
import Counter from "./pages/Counter";

const App = () => {
  const [account, web3] = useWeb3();
  if (!account) return <div>You must Sign-in MetaMask</div>;
  return (
    <>
      <h1>MetaMask Testing with Goerli</h1>
      <Counter account={account} web3={web3} />
    </>
  );
};

export default App;
