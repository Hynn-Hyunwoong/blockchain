// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract IngToken is ERC20{
    address public owner;
    constructor() ERC20("IngToken", "HYNN" ){
        owner = msg.sender;
        _mint(msg.sender, 1000 * (10 ** 18));
    }
}

// Swap Contract 
// 1 ETH <--> 100 HYNN (Token)
