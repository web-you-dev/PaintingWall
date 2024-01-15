// movableControls.js
document.addEventListener("DOMContentLoaded", () => {
    const movableControls = document.getElementById("movableControls");
    let isDragging = false;
    let offsetX, offsetY;

    movableControls.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - movableControls.getBoundingClientRect().left;
        offsetY = e.clientY - movableControls.getBoundingClientRect().top;
    });

    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            const newLeft = e.clientX - offsetX;
            const newTop = e.clientY - offsetY;

            const maxX = window.innerWidth - movableControls.offsetWidth-2;
            const maxY = window.innerHeight - movableControls.offsetHeight;

            movableControls.style.left = `${Math.max(0, Math.min(newLeft, maxX))}px`;
            movableControls.style.top = `${Math.max(0, Math.min(newTop, maxY))}px`;
        }
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });
});
