let employees = [
    { empId: 101, name: "sachin", sal: 5000 },
    { empId: 103, name: "Rahul", sal: 6000 },
    { empId: 104, name: "Ramesh", sal: 9000 },
    { empId: 102, name: "Deepak", sal: 7000 }
];

// 1) declare array of employees & sort them in ascending order (empName)
 function asc_name(){
  return employees.sort((a,b)=>{
    return a.name.charCodeAt(0)-b.name.charCodeAt(0)
  })
 }
 console.log(asc_name());

 // 2) declare array of employees & sort them in ascending order (empId)
 function asc_id()
 {
    return employees.sort((a,b)=>
        (a.empId-b.empId)   )
 }
 console.log(asc_id());

 // 3)declare array of employees & filter the employees whose sal>6000;
 function dis_emp()
 {
    return employees.filter((emp) => emp.sal > 6000)
 }
console.log(dis_emp());

//4)declare array of employees & increase sal of every employee by 500;

function dis_emp1()
{
    return employees.map((emp)=> {
        (emp.sal += 500)
        return emp;
    }
)
}
console.log(dis_emp1());

// 5) declare array of employees & add "comp:ibm" to every employee;

function com()
{
    return employees.map((emp)=>
    {
       emp.comp = 'ibm'
       return emp
    }
)
}
console.log(com())

// 6) convert array of letters to array of words
		const inputArr = [ 
            'b', 'a', 'k', 'e', '',
            'c', 'a', 'k', 'e', '',
            'e', 'a', 't'
            ];
   output = ['bake','cake','eat'];

function arr_words()
{
    return inputArr.reduce((inp,let)=>
        {
         if(let === '')
            {
                inp.push('');
            }   
            else{
                inp[inp.length-1] += let;
            }
            return inp
        },[''])
}

//console.log(arr_words())

// 7) add Dept info for each employee
let employee = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
    { eId: 104, name: "reena", sal: 8000, gender: "female" }]
let departments = [
    { eId: 101, dept: "sales" },
    { eId: 104, dept: "marketing" }
];
function addDeptInfo(employee, departments) {
    return employee.map(emp => {
        let deptInfo = departments.find(dept => dept.eId === emp.eId);
        return { ...emp, dept: deptInfo ? deptInfo.dept : null };
    });
}

//console.log(addDeptInfo(employee, departments));

//8. declare array of employees & groupBy employees-name
    // sample output: {
	// 	'sanjay' : [{},{}],
	// 	'alok' : [{}]
	// }

    function groupByEmployeeName(employees) {
        return employees.reduce((acc, employee) => {
          if (!acc[employee.name]) {
            acc[employee.name] = [];
          }
          acc[employee.name].push(employee);
          return acc;
        }, {});
      }
   // console.log(groupByEmployeeName(employees));


// 9.intersection of 2 number arrays

    function intersection(arr1, arr2) {
        let set2 = new Set(arr2);

        return arr1.filter(num => set2.has(num));
    }
    
    let array1 = [1, 2, 3, 4, 5];
    let array2 = [4, 5, 6, 7, 8];
    
    //console.log(intersection(array1, array2));

// 10. WAP to print the occurance of each elements 
//input = [10,20,30,40,50,10,30,50]
//output = {10:2, 20:1, 30:2 , 40:1, 50:2}

function countOccurrences(arr) {
    
    let occurrenceMap = {};

    arr.forEach(num => {
        if (occurrenceMap[num]) {
            occurrenceMap[num] += 1;  
        } else {
            occurrenceMap[num] = 1;   
        }
    });

    return occurrenceMap;
}

let input = [10, 20, 30, 40, 50, 10, 30, 50];
//console.log(countOccurrences(input))
