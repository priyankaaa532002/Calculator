console.log("Meow Meow");
let abi = [
    {
      "inputs": [
        {
          "internalType": "int256",
          "name": "n1",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "n2",
          "type": "int256"
        }
      ],
      "name": "set",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "s",
          "type": "string"
        }
      ],
      "name": "get",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ];

let contractAddress = "0xdfB67c4A1FAB1F3B1Cdda67bA91d67228C1737b9";
const accounts = ethereum.request({
    method: 'eth_requestAccounts',
  });
const web3 = new Web3(window.ethereum);
var contract = new web3.eth.Contract(abi, contractAddress);

function onSet(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    contract.methods.set(num1,num2)
    .send({
        from: "0x8122F221aa5Ae3e9A0eCfaC53Bcc31fCFD2dA0D7",
    })
    .then((result)=>{
        console.log(result);
    })
    console.log("Saved nums");
}

function getAdd(){
    contract.methods.get("+")
    .call()
    .then((result) =>{
        document.getElementById("res").innerHTML = result;
        console.log(result);
    })
    console.log("Add Working");
}

function getSub(){
    contract.methods.get("-")
    .call()
    .then((result) =>{
        document.getElementById("res").innerHTML = result;
        console.log(result);
    })
    console.log("Sub Working");
}

function getMul(){
    contract.methods.get("*")
    .call()
    .then((result) =>{
        document.getElementById("res").innerHTML = result;
        console.log(result);
    })
    console.log("Mul Working");
}

function getDiv(){
    contract.methods.get("/")
    .call()
    .then((result) =>{
        document.getElementById("res").innerHTML = result;
        console.log(result);
    })
    console.log("Div Working");
}