// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EthSwap {
    ERC20 public token;
    uint256 public rate = 100;
    address public owner = msg.sender;

    constructor(ERC20 _token) {
        token = _token;
    }

    function getToken()public view returns(address){
        return address(token);
    }

    function getSwapBalance() public view returns (uint256){
        return token.balanceOf(msg.sender);
    }

    function getThisAddress() public view returns (address){
        return address(this);
    }

    function getTokenOwner() public view returns (address){
        return token.owner2();
    }

    function buyToken() public payable {
        uint256 tokenAmount = msg.value * rate;
        require(token.balanceOf(token.owner2()) >= tokenAmount);
        token.transferFrom(token.owner2(), msg.sender, tokenAmount);
    }
}

