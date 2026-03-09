const canvas = document.getElementById("canvas");
const bgColorInput = document.getElementById("bgColor");
const roundnessInput = document.getElementById("roundness");
const placeholder = document.getElementById("placeholderText");

bgColorInput.addEventListener("input", (e) => {
  canvas.style.backgroundColor = e.target.value;
});

roundnessInput.addEventListener("input", (e) => {
  canvas.style.borderRadius = e.target.value + "px";
});

document.getElementById("toggleBoundary").onclick = () => {
  canvas.classList.toggle("show-boundary");
};

function createShape(type) {
  placeholder.style.display = "none";

  const shape = document.createElement("div");
  shape.classList.add("shape", type);

  shape.style.left = "50px";
  shape.style.top = "50px";

  let isDragging = false;
  let startX, startY;

  shape.addEventListener("mousedown", (e) => {
    isDragging = true;

    startX = e.clientX - shape.offsetLeft;
    startY = e.clientY - shape.offsetTop;
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    shape.style.left = e.clientX - startX + "px";
    shape.style.top = e.clientY - startY + "px";
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

  canvas.appendChild(shape);
}

document.getElementById("addSquare").onclick = () => {
  createShape("square");
};

document.getElementById("addCircle").onclick = () => {
  createShape("circle");
};

document.getElementById("clearCanvas").onclick = () => {
  const shapes = canvas.querySelectorAll(".shape");

  shapes.forEach((s) => s.remove());

  canvas.style.backgroundImage = "none";

  placeholder.style.display = "block";
};

document.getElementById("generateBtn").onclick = () => {
  placeholder.style.display = "none";

  canvas.style.backgroundImage = `url('https://picsum.photos/seed/${Math.random()}/600/450')`;

  canvas.style.backgroundSize = "cover";
};
