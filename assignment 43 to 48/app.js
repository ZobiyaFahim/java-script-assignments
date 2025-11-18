// assignment start 43 to 48
// Question 1
// 1. Show an alert box on click on a link.
function showAlert() {
    alert("Link clicked!");
}
// Question 2
// 2. Display some Mobile images in browser. On click on an image Show the message in alert to user.
function showImageAlert() {
    alert("You clicked on the mobile image!");
}
// Question 3
// 3. Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted.
function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
// Question 4
// 4. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.
function changeImageOnHover(image) {
    image.src = "imagee1.png"; // Change to the new image path
}
function revertImageOnMouseOut(image) {
    image.src = "imge2.png"; // Change to the original image path
}

// Question 5   
// 5. Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser.
var counter = 0;
function increaseCounter() {
    counter++;
    document.getElementById("counterDisplay").innerText = counter;
}
function decreaseCounter() {
    counter--;
    document.getElementById("counterDisplay").innerText = counter;
}
// assignment end 43 to 48  











