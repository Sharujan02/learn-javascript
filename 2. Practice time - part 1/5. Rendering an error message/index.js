// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorId = document.getElementById("error")

function errorMsg() {
    errorId.textContent = "Something went wrong, please try again"
}