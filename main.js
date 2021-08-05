// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  // return random index of 'dnaBases' array
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//Step 1 - Create a factory function called 'pAequorFactory()'

const pAequorFactory = (num, array) => {
  return {
    specimenNum: num,
    dna: array,
    mutate() {
      // random number (0-14 and 0-2) generators to use to randomly select index of array.
      const randomNum = Math.floor(Math.random() * 15);
      const randomLetter = Math.floor(Math.random() * 3);
      // Select element in 'dna' array to mutate.
      const mutatedBase = this.dna[randomNum];
      // conditional statement to determine letter and remaining choices.
      switch(mutatedBase) {
        case 'A':
          // list the other options
          const optionA = ['T', 'C', 'G'];
          // select letter form array with random number.
          const select1 = optionA[randomLetter];
          // update specific item in array.
          array[randomNum] = select1;
          // modify array.
          pAequorFactory.dna = array;
          break;
        case 'T':
          // list the other options.
          const optionB = ['A', 'C', 'G'];
          // select letter form array with random number.
          const select2 = optionB[randomLetter];
          // update specific item in array.
          array[randomNum] = select2;
          // modify array.
          pAequorFactory.dna = array;
          break;
        case 'C':
          // list the other options.
          const optionC = ['A', 'T', 'G'];
          // select letter form array with random number.
          const select3 = optionC[randomLetter];
          // update specific item in array.
          array[randomNum] = select3;
          // modify array.
          pAequorFactory.dna = array;
          break;
        case 'G':
          // list the other options.
          const optionD = ['A', 'T', 'C'];
          // select letter form array with random number.
          const select4 = optionD[randomLetter];
          // update specific item in array.
          array[randomNum] = select4;
          // modify array.
          pAequorFactory.dna = array;
          break;
        default:
          console.log('That letter is not one of the provided options');
      }
    },
    compareDNA(pAequor) {
      // log to get a visual of data.
      console.log(`Sample 1: \n ${this.specimenNum} \n ${this.dna}`);
      console.log(`Sample 2: \n ${pAequor.specimenNum} \n ${pAequor.dna}`)
      // Assign the two arrays to variables, create and empty array for storage, and loop through looking for matching letters at the same index.
      const testSubject1 = this.dna;
      const testSubject2 = pAequor.dna;
      const matchedLetters = []
      for (let i=0; i< testSubject1.length; i++) {
          if(testSubject1[i] === testSubject2[i]) {
            
            matchedLetters.push(testSubject1[i]);
          };
      };
      // log to visualize.
      console.log(`${matchedLetters.length} matching`)
      // calculate the percent of matching letters, log and return.
      let amountMatching = matchedLetters.length
      let outOf = amountMatching / 15;
      let result = outOf * 100;
      console.log(`${Math.floor(result)}% match between subjects!`);
      return Math.floor(result);
    },
    willLikelySurvive() {
      // create an empty array to store the amount of matching letters.
      const countMatch = [];

      // assign the dna array to a variable and loop through it looking for 'C' & 'G' strands.
      const dnaArray = this.dna;
      for (let i=0; i< dnaArray.length; i++) {
        if(dnaArray[i] === 'C' || dnaArray[i] === 'G') {
          countMatch.push(dnaArray[i]);
        };
      };

      // calculate result.
      let amount = countMatch.length;
      let outOf = amount / 15;
      let result = outOf * 100;

      // Determine if the result is < or > 60.
      if(result < 60) {
        return false;
      } else {
        return true;
      };
    }
  };
};

// Test Function 1:
let test1 = pAequorFactory(1, mockUpStrand())
console.log(`TEST 1: \n ${JSON.stringify(test1)}`);

// Test Function 2:
let test2 = pAequorFactory(1, mockUpStrand())
console.log('TEST 2')
console.log(`Original: \n ${JSON.stringify(test2)}`)
test2.mutate();
console.log(`Mutated: \n ${JSON.stringify(test2)}`)

//Test Function 3:
let test3 = pAequorFactory(1, mockUpStrand());
let test4 = pAequorFactory(2, mockUpStrand());
console.log('TEST 3')
console.log(JSON.stringify(test3))
console.log(JSON.stringify(test4))
console.log(test3.compareDNA(test4));

// Test Function 4:
let test5 = pAequorFactory(1, mockUpStrand());
console.log('TEST 4')
console.log(test5.willLikelySurvive());

// Create 30 instances or survivors
const createSurvivors = () => {
  // create empty array for storage.
  const willSurvive = [];
  // loop until willSurvive holds 30 instances.
  for(let i = 0; willSurvive.length < 30; i++) {
    let subject = pAequorFactory(i, mockUpStrand());
    // Use conditional to determine if they will survive, if so, push to will survive
    if(subject.willLikelySurvive() == true) {
      
      willSurvive.push(subject)
    };

  };
  console.log(willSurvive.length)
  return willSurvive;
};

console.log(createSurvivors());


