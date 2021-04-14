// 1
let submissions = [
    { name: "Jane", score: 95, date: 2020-01-24, passed: "true" },
    { name: "Joe", score: 77, date: 2018-05-14, passed: "true" },
    { name: "Jack", score: 59, date: 2019-07-05, passed: "false" },
    { name: "Jill", score: 88, date: 2020-04-22, passed: "true" }
  ];

// 2
submissions.push("Jeremy", 98, 2020-04-19, "true");

submissions.splice() {
    if (submissions.score >= 60) {
        return true;
    } else {
        return false;
    }
}



function addSubmission(submissions);
//console.log(submissions);

function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
}

deleteSubmissionByIndex(submissions, 1);
console.log(submissions);

function deleteSubmissionByName(array, index) {
    array.pop();
}
