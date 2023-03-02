const waitingClick = document.querySelectorAll('.waitingClick');
const clickCursor = document.getElementById('clickCursor');



function addClickCursor(name){
    name.forEach(element => {
        element.addEventListener("mousemove", function(event) {
            const x = event.clientX;
            const y = event.clientY;
            clickCursor.style.transform = `translate(${x}px, ${y}px)`;
          });
        element.addEventListener("mouseenter", () => {clickCursor.style.display = 'block'; element.style.cursor = 'none';})
        element.addEventListener("mouseleave", () => {clickCursor.style.display = 'none'})
    });
}

addClickCursor(waitingClick);