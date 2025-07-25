let acc_tag = 2025000
let accounts = {}

function signup() {
    sPin1 = document.getElementById("signupPin1").value;
    sPin2 = document.getElementById("signupPin2").value;
    accAge = document.getElementById("signupAge").value;
    accName = document.getElementById("signupName").value;
    if (sPin1 == sPin2) {
        if (accAge >= 18) {
            accounts[++acc_tag] = {
                name: accName,
                age: accAge,
                pin: sPin1,
                balance: 0
            };
            alert(`Welcome ${accName}! \nYour unique Account Number is ${acc_tag}`)
            const cardHtml = `
                <div class="card shadow-sm mb-3">
                <div class="card-body">
                    <p class="card-text mb-1"><strong>Name:</strong> ${accName}</p>
                    <p class="card-text"><strong>Account Number:</strong> ${acc_tag}</p>
                </div>
                </div>`;
            document.getElementById("output").innerHTML += cardHtml;
        }
        else {
            alert(`You must be 18 or above to Register.`);
        }
    }
    else {
        alert("Pin does not match!");
    }

}


let validation = 0;
let active_acc = 0;
let found = 0;
function checkBalance() {
    accNum = document.getElementById('accountNumber').value;
    if ((active_acc != accNum) || (validation == 0)) {
        validation = 0;
        found=0
        for (i in accounts) {
            if (i === accNum) {
                found=1;
                valPin = prompt("Enter Your Pin");
                if (valPin == accounts[i].pin) {
                    validation = 1;
                    active_acc = i;
                    alert(`Welcome ${accounts[i].name}`);
                    document.getElementById('accountName').value = accounts[active_acc].name;
                    document.getElementById('accountNum').value = i;
                    document.getElementById('balance').value = accounts[active_acc].balance;
                }
                else {
                    alert("Incorrect Pin");
                }
                break
            }
        }
        if(found==0){
            alert("Account Not Found");
        }
    }
    else{
        document.getElementById('accountName').value = accounts[active_acc].name;
        document.getElementById('accountNum').value = i;
        document.getElementById('balance').value = accounts[active_acc].balance;
    }
}




function tnsn(x) {
    if ((validation == 1)&&(x==0)) {
        amt = parseInt(document.getElementById('amount').value)
        accounts[active_acc].balance += amt;
        document.getElementById('accountName').value = accounts[active_acc].name;
        document.getElementById('accountNum').value = i;
        document.getElementById('balance').value = accounts[active_acc].balance;
        alert('Credited');
        const HcardHtml = `
                <div class="card shadow-sm mb-3">
                <div class="card-body">
                    <p class="card-text mb-1"><strong>Acc Number:</strong> ${active_acc}</p>
                    <p class="card-text"><strong>Credited:</strong> ${amt}</p>
                </div>
                </div>`;
        document.getElementById("history").innerHTML += HcardHtml;
    }
    else if ((validation == 1)&&(x==1)) {
        amt = parseInt(document.getElementById('amount').value)
        accounts[active_acc].balance -= amt;
        document.getElementById('accountName').value = accounts[active_acc].name;
        document.getElementById('accountNum').value = i;
        document.getElementById('balance').value = accounts[active_acc].balance;
        alert('Debited');
        const HcardHtml = `
                <div class="card shadow-sm mb-3">
                <div class="card-body">
                    <p class="card-text mb-1"><strong>Acc Number:</strong> ${active_acc}</p>
                    <p class="card-text"><strong>Debited:</strong> ${amt}</p>
                </div>
                </div>`;
        document.getElementById("history").innerHTML += HcardHtml;
    }
    else {
        alert("Access Denied")
    }
}




