var qoutes = [
  {
    qoute: "“Be yourself; everyone else is already taken.”",
    writer: " Oscar Wilde",
  },
  {
    qoute:
      "“Success is not final, failure is not fatal: it is the courage to continue that counts.”",
    writer: "Winston S. Churchill",
  },
  {
    qoute:
      "“Success is stumbling from failure to failure with no loss of enthusiasm.”",
    writer: "Winston S. Churchill",
  },
  {
    qoute:
      "“All you need in this life is ignorance and confidence; then success is sure. ”",
    writer: "Mark Twain",
  },
  {
    qoute:
      "“It is hard to fail, but it is worse never to have tried to succeed.”",
    writer: "Theodore Roosevelt",
  },
  {
    qoute: "“A friend is someone who knows all about you and still loves you.”",
    writer: " Elbert Hubbard",
  },
  {
    qoute: "“We accept the love we think we deserve.”",
    writer: "Stephen Chbosky",
  },
  {
    qoute:
      "“It is better to be hated for what you are than to be loved for what you are not.”",
    writer: " Andre Gide",
  },
  {
    qoute:
      "“As he read, I fell in love the way you fall asleep: slowly, and then all at once.”",
    writer: "Mahmoud Unhappy",
  },
  {
    qoute:
      "“As he read, I fell in love the way you fall asleep: slowly, and then all at once.”",
    writer: "John Green",
  },
];

var repeated = [];

function randomQoutes() {
  var random = Math.floor(Math.random() * qoutes.length); //5

  if (repeated.length === 0) {
    document.getElementById("qout").innerHTML = qoutes[random].qoute;
    document.getElementById("writer").innerHTML = qoutes[random].writer;
    repeated.push(random);
    console.log(repeated);
  } else {
    if (repeated.includes(random) == true) {
      randomQoutes();
    } else {
      document.getElementById("qout").innerHTML = qoutes[random].qoute;
      document.getElementById("writer").innerHTML = qoutes[random].writer;
      repeated.push(random);
      console.log(repeated);
    }
  }

  if (repeated.length == qoutes.length) {
    repeated = [];
  }
}
