function checkMood(mood, goodCallback, badCallBack) {
  if (mood === "good") {
    goodCallback();
  } else {
    badCallBack();
  }
}

function cry() {
  console.log("ACTION : CRY");
}

function sing() {
  console.log("ACTION : SING");
}

function dance() {
  console.log("ACTION : DANCE");
}

checkMood("sad", sing, cry);