//task1
// own resume data in Json format

var myprofile={
    "name":"usha",
    "age":"25",
    "Gender":"female",
    "yearofpassedout":"2020",
    "dob":'15/03/2000',
    "languagesknown":["tamil","kannada","english"],
    "department":"BSc(IS)",
    "phnumber":"837932847",
    "skills":["js","html","php","java","c","c##"]
}
//loopin for,for in, for of, foreach
//for loop

for (var i=0;i<myprofile.length;i++)
{
    console.log(myprofile[i])
}
//for in
for(var key in myprofile)
{
console.log(myprofile[key]);
}
//for of
for(var obj of myprofile)
{
   console.log(obj.languagesknown); 
}


//foreach
myprofile.forEach((ele) => {console.log(ele.Gender)
    
});