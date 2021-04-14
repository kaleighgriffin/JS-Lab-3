// 1
let submissions = [

    { name: "Jane",
    score: 95,
    date: 2020-01-24,
    passed: "true" },

    { name: "Joe",
    score: 77,
    date: 2018-05-14,
    passed: "true" },

    { name: "Jack",
    score: 59,
    date: 2019-07-05,
    passed: "false" },

    { name: "Jill",
    score: 88,
    date: 2020-04-22,
    passed: "true" }

  ];

console.log(submissions);

// 2
function addSubmission(array, newName, newScore, newDate) {
    let ifPassed;
    if (newScore >= 60) {
    ifPassed = true;
    } else {
    ifPassed = false;
    }
    array.push({name: newName, score: newScore, date: newDate, passed: ifPassed});
}

addSubmission(submissions, "Jeremy", 98, 2020-04-19, "true");
console.log(submissions);

// 3
function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
}

//4
function deleteSubmissionByName(array, name) {
    let nameIndex = array.findIndex( (submission) => submission.name === name );
    array.splice(nameIndex, 1);
}

deleteSubmissionByName(submissions, "Jill");
console.log(submissions);

// 5
function editSubmission(array, index, score) {
    const submission = array[index];
    console.log(submission);
    submission.score = score;
    submission.passed = score >= 60 ? true : false;
}

editSubmission(submissions, 2, 42);
console.log(submissions);

// 6
function findSubmissionByName(array, name) {
    const findSubmission = array.find( (submission) => submission.name === name );
    return findSubmission;
}

console.log( findSubmissionByName(submissions, "Jeremy") );

// 7
function findLowestScore(array) {
    let lowest = array[0].score;
    array.forEach(function(submission) {
        if (lowest.score > submission.score) {
            lowest = submission;
        }
    });
    return lowest;
}

console.log( findLowestScore(submissions) );

// 8
function findAverageScore(array) {
    let total = 0;
    let average;
    for (let submission of array) {
        total += submission.score;
    } average = total / array.length;
    return average;
}

console.log( findAverageScore(submissions) );

// 9
function filterPassing(array) {
    return array.filter( (x) => x.passed );
}

console.log( filterPassing(submissions) );

// 10
function filter90AndAbove(array) {
    return array.filter( (x) => x.score >= 90 );
}

console.log( filter90AndAbove(submissions) );