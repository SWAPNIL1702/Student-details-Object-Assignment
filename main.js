// The Constructor function for Student
function Student(name, roll_no, class_name, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.class_name = class_name;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;
  
    // Writing the Function to print the top three subjects
    this.printTop3Subjects = function () {
      // Sort subjects based on marks
      const sortedSubjects = Object.entries(this.marks_of_5_subjects)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);
  
      // To Print top three subjects
      console.log("Top 3 Subjects:");
      sortedSubjects.forEach(([subject, marks]) => {
        console.log(`${subject}: ${marks}`);
      });
    };
  
    // Function to print the report card
    this.printReportCard = function () {
      // Calculate percentage
      const totalMarks = Object.values(this.marks_of_5_subjects).reduce((sum, marks) => sum + marks, 0);
      const percentage = (totalMarks / 500) * 100;
  
      // To Print report card
      console.log("+--------------------+");
      console.log("|     REPORT CARD    |");
      console.log("+--------------------+");
      console.log(`| Name     - ${this.name}`);
      console.log(`| Roll no. - ${this.roll_no}`);
      console.log(`| Class    - ${this.class_name}`);
      console.log(`| Section  - ${this.section}`);
      
      // To Print marks of each subject
      Object.entries(this.marks_of_5_subjects).forEach(([subject, marks]) => {
        console.log(`| ${subject.charAt(0).toUpperCase() + subject.slice(1)}  - ${marks}`);
      });
  
      console.log(`| Percentage - ${percentage.toFixed(1)} %`);
      console.log("+--------------------+");
    };
  }

  // An Example usage
const studentDetails = {
    name: "Huzaifa",
    roll_no: 16,
    class_name: "X",
    section: "A",
    marks_of_5_subjects: {
      science: 73,
      maths: 75,
      social_science: 79,
      english: 80,
      hindi: 67
    }
  };
  
  const huzaifa = new Student(
    studentDetails.name,
    studentDetails.roll_no,
    studentDetails.class_name,
    studentDetails.section,
    studentDetails.marks_of_5_subjects
  );
  
  // To Print top three subjects
  huzaifa.printTop3Subjects();
  
  // To Print report card
  huzaifa.printReportCard();