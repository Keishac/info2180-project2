window.onload=() =>
{
	var parent = document.getElementById("puzzlearea");
	var child = document.querySelectorAll("#puzzlearea div"); 
	var shuffle_but= document.getElementById("shufflebutton");
	var x=0;
	var y=0;
	var s1='300px';
	var s2='300px';
	var count =0;
	

	
for (var i=0; i<child.length; i++){
	child[i].classList.add("puzzlepiece"); 
	child[i].style.left=x+"px";
    child[i].style.top =y+"px"; 
	child[i].style.backgroundPosition=`${-x}px ${-y}px`;
	x+=100; 
	count+=1;
if (count%4==0){
	y+=100;
	x=0;
	
}

child[i].addEventListener("mouseover", hover);
child[i].addEventListener("mouseout",hoverout);
child[i].addEventListener("click",move_over);

}

shuffle_but.addEventListener("click",shuffle);
function hover() {
	if (move(parseInt(this.innerHTML))){
		this.style.border= "2px solid red";
		this.style.color= "red"; 
	
	}
	
}

function hoverout() {
	if (move(parseInt(this.innerHTML))){
		this.style.border= "2px solid black";
		this.style.color= "black";
		
		} 
} 

function shuffle()
 {
  for (var i=0; i<250; i++)
        {
            let random = parseInt(Math.random()* 100) %4;
            if (random == 0)
            {
                let mve = check_up(s1,s2);
                if ( mve != -1)
                {
                    change(mve);
                }
            }
            if (random == 1)
            {
                let mve = check_down(s1,s2);
                if ( mve != -1) 
                {
                    change(mve);
                }
            }
            if (random == 2)
            {
                let mve = check_left(s1,s2);
                if ( mve != -1)
                {
                    change(mve);
                }
            }
            if (random == 3)
            {
                let mve = check_right(s1,s2);
                if (mve != -1)
                {
                    change(mve);
                }
				
            }
        }
 }





function move_over(){ 
		if (move(parseInt(this.innerHTML))){ 
			change(this.innerHTML-1);
			
			
		}

};
function change (pos){
	var temp= child[pos].style.top; 
	child[pos].style.top= s2; 
	s2=temp;  
	
	temp=child[pos].style.left;
	child[pos].style.left= s1; 
	s1=temp;  
}
 
 function move(pos) { 
	if (check_left(s1, s2)== (pos-1))
	{ 
	return true; 
	} 
	if (check_down(s1,s2)== (pos-1))
	{ 
	return true; 
	} 
	if (check_up(s1, s2)== (pos-1))
	{ 
	return true; 
	} 
	
	if (check_right(s1,s2)== (pos-1))
	{ 
	return true; 
	} 
	 
	 
 }
 
 function check_up(x,y){
	 var x_axis= parseInt(x);
	 var y_axis= parseInt(y); 
	 if (y_axis>0){
		 for(var i=0; i<child.length; i++){ 
		 if (parseInt(child[i].style.top)+ 100 == y_axis && parseInt(child[i].style.left)== x_axis) {
			 return i;
		 }
	 }
 }
 else{
	 return -1 
	 
 }
 }
 
 function check_down(x,y)
	{
	var x_axis= parseInt(x);
	 var y_axis= parseInt(y); 
	 if (y_axis<300){
		 for(var i=0; i<child.length; i++){ 
		 if (parseInt(child[i].style.top)- 100 == y_axis && parseInt(child[i].style.left)== x_axis) {
			 return i;
		 }
	 }
	}else{
	 return -1;
	 
 }}
 
 function check_left(x,y)
	{
	 var x_axis= parseInt(x);
	 var y_axis= parseInt(y); 
	 if (x_axis>0){
		 for(var i=0; i<child.length; i++){ 
		 if (parseInt(child[i].style.left)+ 100 == x_axis && parseInt(child[i].style.top)== y_axis) 
		 {
			 return i;
		 }
		}
	}else{
	 return -1 
	 }
	}
 
function check_right(x,y)
	{
	var x_axis= parseInt(x);
	 var y_axis= parseInt(y); 
	 if (x_axis<300){
		 for(var i=0; i<child.length; i++){ 
		 if (parseInt(child[i].style.left)- 100 == x_axis && parseInt(child[i].style.top)== y_axis) {
			 return i;
		 }
	 }
	}
 else{
	 return -1 
	 
 }
}
  

 }
 

