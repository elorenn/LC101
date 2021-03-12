// 18.6. Studio: Classes

//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
  constructor(name, mass, scores=[]) {
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }
  addScore(newScore){
    this.scores.push(newScore);
  }
  average(){
    let sum = 0;
    for (let i = 0; i < this.scores.length; i++) {
      sum += this.scores[i];
    }
    return Math.round((sum/this.scores.length) * 10)/10;
  }
  status(){
    let averageScore = this.average();
    if (averageScore >= 90) {
      return 'Accepted';
    } else if (averageScore < 90) {
      if (averageScore >= 80) {
        return 'Reserve';
      } else if (averageScore >= 70) {
        return 'Probationary';
      } else {
        return 'Rejected';
      }
    }
  }
}

//at or above 90% are automatically accepted to our training program. Reserve candidates average between 80 - 89%, while probationary candidates average between 70 - 79%. Averages below 70% lead to a rejection notice.
//(Accepted, Reserve, Probationary, or Rejected) depending on a candidate's average.


/*
Bubba Bear has a mass of 135 kg and test scores of 88, 85, and 90.
Merry Maltese has a mass of 1.5 kg and test scores of 93, 88, and 97.
Glad Gator has a mass of 225 kg and test scores of 75, 78, and 62
*/

let bubbaBear = new CrewCandidate('Bubba Bear', 135, [88,85,90]);
let merryMaltese = new CrewCandidate('Merry Maltese', 1.5, [93,88,97]);
let gladGator = new CrewCandidate('Glad Gator', 225, [75,78.62]);

console.log(bubbaBear);
console.log(merryMaltese);
console.log(gladGator);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

bubbaBear.addScore(83);
console.log(`Bubba Bear's Scores: ${bubbaBear.scores}`); // [88,85,90,83]
console.log(merryMaltese.average()); // 92.7

console.log(`${bubbaBear.name} earned an average test score of ${bubbaBear.average()}% and has a status of ${bubbaBear.status()}.`);

console.log(`${merryMaltese.name} earned an average test score of ${merryMaltese.average()}% and has a status of ${merryMaltese.status()}.`);

console.log(`${gladGator.name} earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}.\n`);

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

let numTests = 0;
while (gladGator.status() !== 'Accepted') {
  let newScore = Math.round(Math.random()*(10)) + 90;
  gladGator.addScore(newScore);
  numTests ++;

  console.log(`In attempt ${numTests}, ${gladGator.name} earned a ${newScore}, raising his average test score to ${gladGator.average()}% resulting in a status of ${gladGator.status()}.\n`);  
}
console.log(`It took ${gladGator.name} ${numTests} attempts to achieve a status of ${gladGator.status()}.`);

