function init () {
  const missionAbort = document.getElementById("abortMission");
  const button = document.getElementById("liftoffButton");
  const paragraph = document.getElementById("statusReport");

  // Put your code for the exercises here.

  button.addEventListener('click', function() {
    paragraph.innerHTML = 'Houston, we have liftoff!';
    console.log('Houston, we have liftoff!');
  });

  missionAbort.addEventListener('mouseover', function() {
    missionAbort.style.backgroundColor = "red";
    console.log('Abort!?');
  });

  missionAbort.addEventListener('mouseout', function() {
    missionAbort.style.backgroundColor = "";
    console.log('Nope...');
  });

  missionAbort.addEventListener('click', function() {
    let shouldAbort = window.confirm('Are you sure you want to abort the mission?');
    if (shouldAbort) {
      paragraph.innerHTML = 'Mission aborted! Space shuttle returning home.';
      button.disabled = true;
      missionAbort.style.backgroundColor = "red";
      missionAbort.disabled = true;
    } 
  });

}

window.addEventListener("load", init);