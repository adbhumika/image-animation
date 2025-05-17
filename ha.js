const bodyElement=document.querySelector("body");
const imageurls=[


  "2.gif",
  "3.gif",
  "4.gif",
];
bodyElement.addEventListener("mousemove",(event)=>{
    const xPos=event.offsetX;
    const yPos=event.offsetY;

    const spanElement=document.createElement("span");
    spanElement.style.position="absolute";
    spanElement.style.left=xPos+"px";
    spanElement.style.top=yPos+"px";

    const size=Math.random()*100;
    spanElement.style.width=size+"px";
    spanElement.style.height=size+"px";
    
    const randomIndex=Math.floor(Math.random()*imageurls.length);
    const randomimageurls=imageurls[randomIndex];
    spanElement.style.backgroundImage=`url("${randomimageurls}")`;

    bodyElement.appendChild(spanElement);
      setTimeout(()=>{
        spanElement.remove();
    },3000);
});
bodyElement.addEventListener("click",(event)=>{
   const xPos=event.offsetX;
    const yPos=event.offsetY;
    const designElement=document.createElement("div");
    designElement.style.left=xPos+"px";
    designElement.style.top=yPos+"px";
    const size=Math.random()*100;
    designElement.style.width=size+"px";
    designElement.style.height=size+"px";
    bodyElement.appendChild(designElement);
      setTimeout(()=>{
        designElement.remove();
    },3000);
});
