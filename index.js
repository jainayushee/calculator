let num1, num2, ans;
let operator;

let ques = '';
let query = '';

let hasComputed = false;

function clearScreen() {
    document.getElementById('query').innerHTML = ''
    document.getElementById('solution').innerHTML = ''
    hasComputed = false;
    ques = '';
    query = '';
}


function getValue(number) {

    if (hasComputed) {
        clearScreen();
    }

    if (number == '+' || number == '-' || number == '/' || number == '*') {
        document.getElementById('query').append(' ')
        document.getElementById('query').append(number)
        document.getElementById('query').append(' ')
        query = query + ',' + number + ',';
        console.log(query);
    }

    else {
        query = query + number;
        console.log(query);
        document.getElementById('query').append(number)
    }
}

function getResult() {
    hasComputed = true;
    query = query.substring(0, query.length)
    console.log(query);
    let arr = query.split(',')
    console.log(arr);
    let result = 0;
    result = parseFloat(arr[0]);


    for (let index = 1; index < arr.length; index += 2) {
        console.log(index);
        const element = arr[index]

        switch (element) {
            case '+':
                result = result + parseFloat(arr[index + 1])
                console.log(result);
                break;
            case '-':
                result = result - parseFloat(arr[index + 1])
                break;
            case '*':
                result = result * parseFloat(arr[index + 1])
                break;
            case '/':
                result = result / parseFloat(arr[index + 1])
                break;
        }
    }

    if (result || result == 0) {
        document.getElementById('solution').append(result)
    }

    else {
        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    }

}

