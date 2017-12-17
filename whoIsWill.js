var i = 0;

function whoIsWill() {
  console.log('This is Will');
  // Will;
}

function Will() {
  whoIsWill();
  i++;
  if (i < 20) {
    Will();
  }
}

Will();
