const firstSentence =
  "Ion castiga 5000 lei/luna din salariu , 10000 lei/an bonus si 1500 lei/luna din freelancing.";
const secondSentence =
  "Andrei are un salariu de 1000 euro/luna , un bonus de 9000 lei/an si mai castiga suplimentar aproximativ 500 usd/luna din freelancing";
const euroRate = 4.95;
const usdRate = 4.7;
function calculateIncome(text) {
  const words = text.split(" ");
  const name = words[0];
  let currencyPeriod;
  let totalIncome = 0;
  for (let i = 0; i < words.length; i++) {
    const number = parseInt(words[i]);
    if (!isNaN(number)) {
      currencyPeriod = words[i + 1].split("/");

      const currency = currencyPeriod[0];
      const period = currencyPeriod[1];
      console.log(currency);
      if (currency === "lei") {
        if (period === "luna") {
          totalIncome += number * 12;
        } else if (period === "an") {
          totalIncome += number;
        }
      } else if (currency === "euro") {
        if (period === "luna") {
          totalIncome += number * euroRate * 12;
        } else if (period === "an") {
          totalIncome += number * euroRate;
        }
      } else if (currency === "usd") {
        if (period === "luna") {
          totalIncome += number * usdRate * 12;
        } else if (period === "an") {
          totalIncome += number * usdRate;
        }
      }
    }
  }

  return `Venitul total anual al lui ${name} este de ${totalIncome} lei `;
}
console.log(calculateIncome(firstSentence));
console.log(calculateIncome(secondSentence));
