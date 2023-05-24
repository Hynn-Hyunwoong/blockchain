import Counter from "./pages/Counter";
import useWeb3 from "./hooks/useWeb3";

const App = () => {
  const [account, web3] = useWeb3();
  if (!account) return <>You can connect and usage MetaMask</>;
  return (
    <>
      <h1>Hello Counter</h1>
      <Counter web3={web3} account={account} />
    </>
  );
};

export default App;
