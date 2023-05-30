// SPDX-License-Identifier: MIT 
pragma solidity  ^0.8.0;

contract AppleShop {
    mapping(address => uint256) myApple;

    // Setter
    function buy() public payable{
        myApple[msg.sender] += 1;
    }   
    // Getter
    function get() public view returns (uint256) {
        return myApple[msg.sender];
    }

    function sell() public payable{
        uint256 refund = myApple[msg.sender] * 10 ** 18;
        myApple[msg.sender] = 0;
        payable(msg.sender).transfer(refund);
    }
}

