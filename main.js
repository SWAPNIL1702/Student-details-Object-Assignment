// The Constructor function for Student
function Student(name, roll_no, class_name, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.class_name = class_name;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;

    this.printReportCard = function () {
      console.log("+--------------------+");
      console.log("|     REPORT CARD    |");
      console.log("+--------------------+");
      console.log(`| Name     - ${this.name}     |`);
      console.log(`| Roll no. - ${this.roll_no}     |`);
      console.log(`| Class    - ${this.class_name}       |`);
      console.log(`| Section  - ${this.section}       |`);
      console.log(`| Maths   - ${this.marks_of_5_subjects.maths}       |`);
      console.log(`| Science - ${this.marks_of_5_subjects.science}       |`);
      console.log(`| English - ${this.marks_of_5_subjects.english}       |`);
      console.log(`| Hindi - ${this.marks_of_5_subjects.hindi}         |`);
      console.log(`| S.Sc    - ${this.marks_of_5_subjects.social_science}       |`);
      console.log(`| Percentage -${percentage(this.marks_of_5_subjects)}    |`);
      console.log("+--------------------+");
    }
  
    // Writing the Function to print the top three subjects
    this.printTop3Subjects = function () {
      printTop3Subjects(this.marks_of_5_subjects)
    }
  
      // To Print top three subjects
      function top3Subjects(marks){
        console.log("Top 3 Subjects:");

        const sortedSubjects = Object.keys(marks).sort(function (a,b) {
          return marks[b] - marks[a];
        });

        for (let i = 0; i < 3; i++) {
          const subject = sortedSubjects[i];
          const subjectMarks = marks[Subjects];
          console.log(`| ${i+1}. ${subject} - ${subjectMarks} |`);
        }
      }


      
      sortedSubjects.forEach(([subject, marks]) => {
        console.log(`${subject}: ${marks}`);
      });
    };
    
      // Function to Calculate the percentage
      function percentage(obj) {
        let totalmarks = 0;
        let obtainedmarks = 0;

        for (let subject in obj) {
          if (obj.hasownProperty(subject)){
            totalmarks += 100;
            obtainedmarks += obj[subject];
          }
        }

        let percentage = (obtainedmarks / totalmarks) * 100;
        return percentage.toFixed(2);
      }
  
      // Student Details

      let Student_1 = new Student ("Anthony", "7", "8th", "B",{
        maths: 92,
        science: 88,
        english: 91,
        hindi: 85,
        social_science: 82
      });

      let Student_2 = new Student ("Steve", "9", "9th", "C", {
        maths: 88,
        science: 90,
        english: 85,
        hindi: 87,
        social_science: 85
      });

      Student_1.printReportCard()
      Student_1.top3Subjects()

      Student_2.printReportCard()
      Student_2.top3Subjects()
      
      
