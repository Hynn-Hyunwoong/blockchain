// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Counter{
    uint256 value;
    
 constructor(){}

 function setValue() public{}
 function getValue() public view returns(uint256){
    return value;
 }
}