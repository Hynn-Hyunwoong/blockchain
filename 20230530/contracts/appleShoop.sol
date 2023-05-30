// SPDX-License-Identifier: MIT 
pragma solidity  ^0.8.0;

contract AppleShop {
    mapping(address => uint256) myApple;

    // Setter
    function buy() public{
        myApple[msg.sender] += 1;
        myApple[msg.sender] -= 1;
    }
    // Getter
}