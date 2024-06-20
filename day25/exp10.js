function calculateGrades(arr, name) {
  let brr = [];       //this part check the grade of the mark
  let resul = [];
  arr.forEach((values) => {
    if (values.mark >= 90) brr.push("A+ grade");
    else if (values.mark >= 80 && values.mark < 90) brr.push(" A grade");
    else if (values.mark >= 70 && values.mark < 80) brr.push(" B grade");
    else if (values.mark >= 60 && values.mark < 70) brr.push(" C grade");
    else brr.push("Failed");
  });
  ///////////////////////////////////////////////
  resul.push({ name });
  arr.forEach((values) => {
    if (values.subject) {
      subject = values.subject;
      for (let Status of brr) {
        if (Status === "Failed") {    /////this part push the item to the resul that wanted
          resul.push({ subject, Status });
        } else {
          resul.push({ subject, Status });
        }
        if (Status === brr[brr.length - 1]) break;
      }
    }
  });
  if (brr.includes("Failed")) {
    let totalResult = "You Failed in The Sem Exam";
    resul.push({ totalResult });
  } else {
    let totalResult = "You Passed in The Sem Exam";
    resul.push({ totalResult });
  }
  return resul;
}
//////////////////////////////////////
const students = [
  {
    name: "John Doe",
    scores: [
      { subject: "Math", mark: 90 },
      { subject: "English", mark: 85 },
      { subject: "Science", mark: 95 },
    ],
    exp: [
      { name: "John Doe" },
      { subject: "Math", Status: "A+ grade" },
      { subject: "English", Status: "A+ grade" },
      { subject: "Science", Status: "A+ grade" },
      { totalResult: "You Passed in The Sem Exam" },
    ],
  },
  {
    name: "Alice Smith",
    scores: [
      { subject: "History", mark: 80 },
      { subject: "Geography", mark: 75 },
      { subject: "Biology", mark: 85 },
    ],
    exp: [
      { name: "Alice Smith" },
      { subject: "History", Status: " A grade" },
      { subject: "Geography", Status: " A grade" },
      { subject: "Biology", Status: " A grade" },
      { totalResult: "You Passed in The Sem Exam" },
    ],
  },
  {
    name: "Bob Johnson",
    scores: [
      { subject: "Chemistry", mark: 70 },
      { subject: "Physics", mark: 68 },
      { subject: "Economics", mark: 72 },
    ],
    exp: [
      { name: "Bob Johnson" },
      { subject: "Chemistry", Status: " B grade" },
      { subject: "Physics", Status: " B grade" },
      { subject: "Economics", Status: " B grade" },
      { totalResult: "You Passed in The Sem Exam" },
    ],
  },
];
function TestcalculateGrades() {
  students.forEach((student, index) => {
    let result = calculateGrades(student.scores, student.name);
     if(JSON.stringify(result)===JSON.stringify(student.exp)){
          console.log("Test",index+1,"Passed");
     }else{
        console.log("Test",index+1,"Failed");
        console.log("The Expected Result:",student.exp);
        console.log("The Actual Result:",result);
        console.log(".......................................")
     }
  });
}

TestcalculateGrades();
