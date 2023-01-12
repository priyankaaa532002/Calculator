//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.6;

contract calculator{
    int num1;
    int num2;

    function set(int n1,int n2) public{
        num1 = n1;
        num2 = n2;
    }

    function get(string memory s) public view returns(int){
        if(keccak256(abi.encodePacked(s))==keccak256(abi.encodePacked("+"))){
            return num1 + num2;
        }else if(keccak256(abi.encodePacked(s))==keccak256(abi.encodePacked("-"))){
            return num1 - num2;
        }else if(keccak256(abi.encodePacked(s))==keccak256(abi.encodePacked("*"))){
            return num1 * num2;
        }else if(keccak256(abi.encodePacked(s))==keccak256(abi.encodePacked("/"))){
            return num1 / num2;
        }
        return 0;
    }
}