// const scroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true,
//   });

function CircleAnimation(){
    window.addEventListener("mousemove",function(dets){
         console.log(dets)
     document.querySelector("#miniCircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`
        
    })
}
CircleAnimation();