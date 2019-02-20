		const factors = [
	88 ,
	225 ,
	365 ,
	687 ,
	4333 ,
	10756 ,
	30688 ,
	60193 ,
	90555 
];

alert("Enter you Date of Birth and click on ? Mark");

const ms = 86400000 ;

function calcAge(day){
	var age = [] ;
	var td = new Date();
	var d ;
	d = (td.getTime() - day.getTime())/ms ;
	
	for(var i=0;i<8;i++){
		var a = d/factors[i];
		age.push(a.toFixed(2));
	}
	return age ;
}

function submit(){
	var date ;
	var month ;
	var year ;
	
	date = document.getElementById("date").value;
	month = document.getElementById("month").selectedIndex ;
	year = document.getElementById("year").value ;
	
	if(date=="" || year==""){
		return 0;
	}
	
	var d = new Date(year,month,date) ;
	
	var age = calcAge(d)
	showAge(age);
}

function showAge(age){
	var lbl ;
	lbl= document.getElementsByClassName("age");
	for(var i=0;i<lbl.length;i++){
		lbl[i].innerHTML = age[i];
	}
	document.getElementById("pa").classList.add("open");
}