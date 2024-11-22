const printView = document.getElementById("print");
printView.addEventListener("click", function () {
  print();
});

const btn = document.getElementById("download");

btn.addEventListener("click", async function () {
  console.log("pressed");

  var elementHTML = document.querySelector("#main");
  const options = {
          filename: 'Mahesh Resume.pdf',
          margin: [-5, -4.5, -5, 0],
          image: { type: 'jpeg', quality: 1 },
          html2canvas: { scale: 3, logging: true, dpi: 192, letterRendering: true },
          jsPDF: { 
              unit: 'mm', 
              format: 'a4', 
              orientation: 'portrait' 
          }
      };
      html2pdf().set(options).from(elementHTML).save();
});