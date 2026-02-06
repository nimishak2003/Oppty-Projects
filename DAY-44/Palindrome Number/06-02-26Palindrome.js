function checkPalindrome() {
        let num = document.getElementById("num").value;
        let result = document.getElementById("result");

        if (num === "") {
          result.style.color = "red";
          result.innerHTML = "❌ Please enter a number";
          return;
        }

        let original = num;
        let reversed = num.split("").reverse().join("");

        if (original === reversed) {
          result.style.color = "green";
          result.innerHTML = `✅ ${original} is a PALINDROME number`;
        } else {
          result.style.color = "blue";
          result.innerHTML = `🔵 ${original} is NOT a palindrome number`;
        }
      }