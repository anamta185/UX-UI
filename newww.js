var navList = document.getElementById('my_nav_box');
var targets = [];
var targets_elem = [];	
// console.log(navList);
// console.log(navList.children);

for(let i = 0; i < navList.children.length ;i++){
    console.log(i);
    console.log(navList.children[i]);
    targets_elem.push(navList.children[i]);
    targets.push(navList.children[i].hash.substring(1));
}
// console.log("targets----->");
// console.log(targets);
var clicks_time = 0;



window.press_down = function() {   
    
    
    clicks_time++;
    
    if(clicks_time>0){
        console.log("OK");
        var element = document.getElementById('press_up');
        element.classList.remove("nav-arrow-disabled");
        // console.log(element);
    }
    if(clicks_time > targets.length-1){
        var element = document.getElementById('press_down');
        element.classList.add("nav-arrow-disabled");
        return false;
    }
    
   let target =  document.getElementById(targets[clicks_time]);
    
   for(let i = 0; i < navList.children.length ;i++){
    // console.log(i);
    // console.log(navList.children[i]);
    navList.children[i].classList.remove('active');
}
console.log("targets----->");
console.log(target.innerText);

let gameid = document.getElementById("navtitle")
gameid.innerText = target.innerText;


// ----------------
// -----------------------------

let classwidth = document.getElementById("progress-bar")
console.log(classwidth)
if(gameid.innerText == "Games"){  
    classwidth.style.width = "0%"
}
else if (gameid.innerText == "Call of Duty"){  
    classwidth.style.width = "20%"    
}
else if (gameid.innerText == "Electronic Shooter Game"){  
    classwidth.style.width = "40%"    
}
else if (gameid.innerText == "Activision Blizzard, Inc."){  

    classwidth.style.width = "60%"    
}
else if (gameid.innerText == "Electronic Game"){  
    classwidth.style.width = "80%"    
}
else if (gameid.innerText == "Unreal Tournament"){  
    classwidth.style.width = "100%"    
}


    target.click();
   
    // target.click();
    // target.classList.add("active");
  
    
    
    
	// console.log(target);
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}


window.press_up = function() {   
    
    
    clicks_time--;
    
    if(clicks_time>0){
        console.log("OK");
        var element = document.getElementById('press_down');
        element.classList.remove("nav-arrow-disabled");
        console.log(element);
    }
    if(clicks_time > targets.length-1){
        var element = document.getElementById('press_up');
        element.classList.add("nav-arrow-disabled");
        return false;
    }
   let target =  document.getElementById(targets[clicks_time]);
    targets_elem[clicks_time].click();
    
   for(let i = 0; i < navList.children.length ;i++){
    // console.log(i);
    // console.log(navList.children[i]);
    navList.children[i].classList.remove('active');
}
console.log("targets----->");
console.log(target.innerText);



let gameid = document.getElementById("navtitle")
gameid.innerText = target.innerText

let classwidth = document.getElementById("progress-bar")
console.log(classwidth)
if(gameid.innerText == "Games"){  
    classwidth.style.width = "0%"
}
else if (gameid.innerText == "Call of Duty"){  
    classwidth.style.width = "20%"    
}
else if (gameid.innerText == "Electronic Shooter Game"){  
    classwidth.style.width = "40%"    
}
else if (gameid.innerText == "Activision Blizzard, Inc."){  
    classwidth.style.width = "60%"    
}
else if (gameid.innerText == "Electronic Game"){  
    classwidth.style.width = "80%"    
}
else if (gameid.innerText == "Unreal Tournament"){  
    classwidth.style.width = "100%"    
}
    // console.log(target);
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}



window.onscroll = function() {ScrollFunction()};

function ScrollFunction(){
//  console.log(window.scrollY);
let classwidth = document.getElementById("progress-bar")
console.log(classwidth)

 if(window.scrollY>=2000 && window.scrollY<=2100){
  
    classwidth.style.width = "33.32%"  
    clicks_time = 2;
    targets_elem[clicks_time].click();
    // console.log(targets_elem[clicks_time]);
    return;
 }else if (window.scrollY>=830 && window.scrollY<=900){
    classwidth.style.width = "16.66%"
    clicks_time = 1;
    
    targets_elem[clicks_time].click();
    return;
     
 }else if (window.scrollY>=3395 && window.scrollY<=3420){
    classwidth.style.width = "49.98%"   
    clicks_time = 3;
    
    targets_elem[clicks_time].click();
    return;
     
 }else if (window.scrollY>=5560 && window.scrollY<=5570){
    classwidth.style.width = "66.64%"   
    clicks_time = 4;
    
    targets_elem[clicks_time].click();
    return;
     
 }else if (window.scrollY>=10585 && window.scrollY<=10600){
    classwidth.style.width = "83.30%"   
    clicks_time = 5;
    
    targets_elem[clicks_time].click();
    return;
     
 }else if (window.scrollY>=11485 && window.scrollY<=12000){
    classwidth.style.width = "100%"   
  
    clicks_time = 6;
    
    targets_elem[clicks_time].click();
    return;
     
 }else if (window.scrollY==1){
    classwidth.style.width = "0px";   
    clicks_time = 0;
    
    targets_elem[clicks_time].click();
    return;
     
 }
}

