import axios from "axios";

document.addEventListener("click", async (event) => {
  if (event.target.id === "ENTER") {
    const input = document.getElementById("input");
    if (input.value) {
      const b = document.getElementById("b");
      b.childNodes[0].textContent = "Short Link";
      b.childNodes[1].textContent = "processing...";
      b.childNodes[2].innerHTML = `<div id="COPY">Copy</div>`;
      const response = await axios.post(
        "http://localhost:3001/api/linkShortner",
        { URL: input.value }
      );
      if (response) {
        b.childNodes[1].textContent = response.data.response;
      }
    } else {
      const b = document.getElementById("b");
      b.innerHTML="";
      alert("Enter Value First");
    }
  }
  if (event.target.id === "COPY") {
    let answer = document.getElementById("ANSWER");
    answer = answer.textContent;
    // Create a temporary textarea element to hold the text
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = answer;

    // Append the textarea to the document (make it invisible)
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(tempTextarea);

    const copyButton=document.getElementById("COPY");
    copyButton.style.color="black";
    copyButton.style.backgroundColor="red"
    copyButton.textContent="COPIED"
  }
});
