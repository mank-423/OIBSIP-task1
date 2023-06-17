var ip = document.getElementById("txt");
    var x = "";
    var number = [];
    var operators = [];

    document.getElementById("b+").onclick = function () {
      x += "+";
      ip.value = x;
      console.log(x);
    };
    document.getElementById("b-").onclick = function () {
      x += "-";
      ip.value = x;
      console.log(x);
    };
    document.getElementById("b/").onclick = function () {
      x += "/";
      ip.value = x;
      console.log(x);
    };
    document.getElementById("bx").onclick = function () {
      x += "*";
      ip.value = x;
      console.log(x);
    };

    document.getElementById("b8").onclick = function () {
      x += "8";
      ip.value = x;
      console.log(x);
    };

    document.getElementById("b9").onclick = function () {
      x += "9";
      ip.value = x;
      console.log(x);
    };

    document.getElementById("b7").onclick = function () {
      x += "7";
      ip.value = x;
      console.log(x);
    };

    document.getElementById("b6").onclick = function () {
      x += "6";
      ip.value = x;
      console.log(x);
    };

    document.getElementById("b5").onclick = function () {
      x += "5";
      ip.value = x;
      console.log(x);
    };

    document.getElementById("b4").onclick = function () {
      x += "4";
      ip.value = x;
      console.log(x);
    };

    document.getElementById("b3").onclick = function () {
      x += "3";
      ip.value = x;
      console.log(x);
    };

    document.getElementById("b2").onclick = function () {
      x += "2";
      ip.value = x;
      console.log(x);
    };

    document.getElementById("b1").onclick = function () {
      x += "1";
      ip.value = x;
      console.log(x);
    };

    document.getElementById("bC").onclick = function () {
      x = "";
      ip.value = x;
      number = [];
      console.log(x);
    };

    document.getElementById("b0").onclick = function () {
      x += "0";
      ip.value = x;
      console.log(x);
    };

    document.getElementById("b=").onclick = function () {
      let temp = "";

      //Making two arrays of of numbers and operators
      for (let i = 0; i <= x.length; i++) {
        if (
          x[i] == "+" ||
          x[i] == "*" ||
          x[i] == "/" ||
          x[i] == "-" ||
          i == x.length
        ) {
          number.push(parseInt(temp));
          temp = "";

          if (x[i] == "+" || x[i] == "*" || x[i] == "/" || x[i] == "-") {
            operators.push(x[i]);
          }
          if (i != x.length) {
            i++;
          }
        }
        temp += x[i];
      }

      //Consoling the expression arrays
      console.log(number);
      console.log(operators);

      //Getting the result from the two arrays
      let res = evaluateExpression(number, operators);

      
      x = ""; //Making the result string as empty
      x += res; //Update the result string
      //Making the two arrays empty to work again
      number = []; 
      operators = [];

      //Channging the value in input
      ip.value = res;
    };

    function evaluateExpression(numAr, opAr) {
      let result = numAr[0];

      for (let i = 0; i < opAr.length; i++) {
        const operator = opAr[i];
        const number = numAr[i + 1];

        switch (operator) {
          case "+":
            result += number;
            break;
          case "-":
            result -= number;
            break;
          case "*":
            result *= number;
            break;
          case "/":
            result /= number;
            break;
          // Add more cases for other operators if needed
          default:
            throw new Error(`Invalid operator: ${operator}`);
        }
      }

      return result;
    }