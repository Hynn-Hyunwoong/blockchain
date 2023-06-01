// SPDX-License-Identifier: MIT 
pragma solidity  ^0.8.0;

contract Test {
    address public app;
    
    constructor() {
        app = msg.sender;
    }

    function getValue() public pure returns (uint256 value) {
        return 5;
    }
}
