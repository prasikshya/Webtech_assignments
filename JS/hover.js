var container=document.getElementById("container");

container.addEventListener("mouseenter", function() {
    container.style.backgroundColor = "green";
  });
  
  container.addEventListener("mouseleave", function() {
    container.style.backgroundColor = "yellow";
  });