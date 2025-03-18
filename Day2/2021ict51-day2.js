//print 3 numbers using Array
let numarray=[2,9,3]

	console.log(numarray);
	
console.log("")

//print  string values using Array
let name=["sharanjana","Shiro","kesha"]
for(let i=0;i<3;i++)
 {
	console.log(name[i])
}

console.log("")

//forEach array function

numarray.forEach((n) =>{
	console.log(n)
})

console.log("")


//find the max number in the array using forEach
let max=0;
numarray.forEach((n) =>
{
/*if(max<n)	
{
	max=n
}*/

(max<n) && (max=n)
})
console.log("Max is: "+max)

console.log("")

//print the nested array

//[[1,2,30],[5,6],[8,5,3]]
let arr2=[[1,2,30],[5,6],[8,5,3]]
arr2.forEach((n) =>{
	n.forEach((i) =>{
	console.log(i)	
	})
})
	console.log("")


//a=[4,5,6,3,7]
//b=[8,3,2,1,5]
//find common elements between a,b
	let a=[4,5,6,3,7]
	let b=[8,3,2,1,5]
	for(let i=0;i<5;i++)
	{
		for(let j=0;j<5;j++)
		{
			if(a[i]==b[j])
			{
				console.log("Common element:"+a[i])
			}
		}
	}
	
	console.log("")
	
//arr=[1,2,3,4,5,6]
//target=7
//write a code to find the all pairs that sum up to the target
	
let target= 7
let mid = parseInt(target/2)+1
let max1=target-1
let srt=1
 
for(let i=srt;i<mid;i++)
{
	for(let j=max1;j>=mid;j--)
	{
		if(i+j==target)
		{
			console.log("Pair: "+i+","+j)
		}
	}
}

console.log("")

//[4,8,3,4,3,2,1,8,4]
//find the most frequent elemnet in the array
let c = [4, 8, 3, 4, 3, 21, 8, 4];

let max2 = 0;
let mostFrequentNumber = 0; 

for (let i = 0; i < c.length; i++) {
    let count1 = 0; 
    
    for (let j = 0; j < c.length; j++) {
        if (c[i] === c[j]) {
            count1++; 
        }
    }
    
    if (count1 > max2) { 
        max2 = count1;
        mostFrequentNumber = c[i]; 
    }
}

console.log("Most frequent number: " + mostFrequentNumber);

console.log("")


//array operation
//push and pop
arr3=['a','b','d']
console.log(arr3)
arr3.push('e')
console.log(arr3)
arr3.pop()
console.log(arr3)

console.log("")

//JSON 
//{key:value}
let student ={regno:'2021/ICT/51', name:'Sharanjana',age:23,course:'IT',skills:['Java',"JS",'c++']}
console.log(student)
console.log(student.name)
let students=[
{regno:'2021/ICT/51', name:'Sharanjana',age:23,course:'IT'},
{regno:'2021/ICT/86', name:'Shiro',age:22,course:'IT'},
{regno:'2021/ICT/87', name:'Kesha',age:22,course:'IT'},
{regno:'2021/ICT/121', name:'Kabi',age:22,course:'IT'}
]

console.log(students)
console.log("")

//define 10 students in JSON
//store it in array
let std=[{regno:'2021ict01',gender:'male',course:'AMC',gpa:3.46},{regno:'2021ict02',gender:'female',course:'IT',gpa:3.91},{regno:'2021ict03',gender:'male',course:'IT',gpa:3.44},
         {regno:'2021ict04',gender:'female',course:'IT',gpa:3.54},{regno:'2021ict05',gender:'male',course:'AMC',gpa:1.24},{regno:'2021ict06',gender:'male',course:'BIO',gpa:2.34},
		  {regno:'2021ict07',gender:'female',course:'IT',gpa:2.32},{regno:'2021ict08',gender:'male',course:'AMC',gpa:2.78},{regno:'2021ict09',gender:'male',course:'BIO',gpa:2.97},
		   {regno:'2021ict10',gender:'female',course:'AMC',gpa:3.68}]
console.log(std)
	
	console.log("")
	
//find the female students
for(let i=0;i<10;i++)
{
	if(std[i].gender=='female')
	{
		console.log(std[i].regno)
	}
}

console.log("")
//find the students who are following IT course
for(let i=0;i<10;i++)
{
	if(std[i].course=='IT')
	{
		console.log(std[i].regno)
	}
}
console.log("")

//find the maX GPA
 
  max=std[0].gpa
  for(let i=0;i<10;i++)
  {
	  if(std[i].gpa>max)
	  {
		  max=std[i].gpa
	  }
  }
  console.log("Max: "+max)
  
  console.log("")
 
//find the GPA average 
  let total=0
  for(let i=0; i<10;i++)
  {
	  total=total+std[i].gpa
  }
  let avg=total/10
  console.log("Average gpa: "+avg)