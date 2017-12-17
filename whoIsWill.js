var i = 0;

function whoIsWill() {
  console.log('This is Will');
  // Will;

  // Korean Born;
  // Lived in Kuwait;
  // Chicago;
  // British School;
  // Art School;
  // Jesus Follower;
  // Invely's;
  // withoutwax.me
}

function Will() {
  whoIsWill();
  i++;
  if (i < 20) {
    Will();
  }
}

Will();
