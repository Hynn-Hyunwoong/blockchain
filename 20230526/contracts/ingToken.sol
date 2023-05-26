// SPDX - License - Identifier: MIT
pragma solidity ^0.8.0;

contract IngToken{

    mapping(address => uint256) public balances;

    // Token Name(이름), Symbol(단위), Decimals(), TotalSupply()
    string public name = "IngToken";
    string public symbol = "HYNN";
    uint8 public decimals = 18;
    uint256 public totalSupply = 1000 * 10 ** decimals;
    // * 곱셈 ** 제곱

    //0xA = 1000 * 10 ** 18

    constructor(){
        balances[msg.sender] = totalSupply;
    }
    // Getting value of balance
    function balanceOf(address _owner) public view returns(uint256){
        return balances[_owner];
    }
    // Transfering value of balance mean sending value of balance
    // bool is boolean
    function transfer(address _to, uint256 _value) public returns(bool){
        // require like a throw new Error in JS
        require(balances[msg.sender] >= _value, "Not enough balance");
        balances[msg.sender] -= _value;
        balances[_to] += _value;
        return true;
    }
}
