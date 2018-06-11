var button = document.getElementById("add");
// document.querySelector("#last").textContent =  ;

console.log(button)
button.addEventListener("click", function(){
	console.log("Hello")
	
	// get input value 
	const value = document.querySelector("#item").value
	console.log(value)

	// Create Element
	const li = document.createElement("li")
	
	// Set Element content to some value
	li.textContent= value
	
	//appenchild element to parent
	const ul = document.querySelector("ul")
	
	ul.appendChild(li)


})


function addNewBtn(value) {
	const newBtn = document.createElement("button");
	value.textContent = "Cancel";
	value.classList.add("cancelBtn");
	addCancelf(newBtn);
	value.appendChild(newBtn);
   }
   
   document.querySelectorAll(forEach)(addNewBtn);
   
   var cancelBtns = document.querySelectorAll(".cancelBtn");
   
   function addCancelf(eachBtn) {
	eachBtn.addEventListener("click", event => {
	  var liToRemove = event.target.parentNode;
	  liToRemove.remove();
	});
   }


// ('#delete').click(function(){
// 	$('li').remove();
	
	



// const tasks = [
// 	'buy milk',
// 	'eat dinner',
// 	'nail javascript',
// 	'give feedback',
// ];
// tasks.forEach(function (element){
    
//     const list = document.createElement("li")
//     document.querySelector("ul").appendChild(list)
//     list.textContent=element
//     console.log(list)
    
// })
