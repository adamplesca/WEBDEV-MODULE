//document.write("hello");
function arrayDemo(){
   //gets item from array, 0-6 in order
   //gets array 
    var items= ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var index = Math.floor(Math.random() * 7);
    //use random index to get number
    items[index];
    document.getElementById("demo").innerHTML = "Today is " +items[index];
    //if item number is higher then 6 it pops up with undefinded
}
