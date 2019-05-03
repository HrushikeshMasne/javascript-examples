var arr=[];

var input=prompt("what would you like to do?");

while(input !== "quit")
{
if(input === "list")
{
console.log(arr);
}
else if(input === "new")
{
var add=prompt("Enter todo item?");
arr.push(add);
}

input=prompt("what would you like to do?");
}