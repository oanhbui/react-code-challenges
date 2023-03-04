In this type of task, you need to render the given page using HTML and CSS/SCSS/Less, and implement some functionality on it using JS/JSX/TS/TSX/CoffeeScript based on the provided requirements. Apart from the description section, you can see coding and live preview sections on the screen to the right. The tabs in the coding section may or may not contain initial template code. The preview section renders all your changes in live mode.
Note that the CSS is already connected to the HTML here, and you can skip the <link rel="stylesheet" href="main.css"> part in the HTML configuration. But if you wish to add additional libraries, you can place them there; for example:
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
would add the standard bootstrap library as usual. One more way to add a library to the code is by using the "Manage Libraries" button ( ).
Let's explore a bit of the facilities of the environment, targetting this simple task:
•	Add 5 divisions in a single line, initially containing integer numbers 1 through 5. Each one of them should have class="box".
•	Add two buttons - one to the left of the boxes containing text <<, and the other to the right of the boxes, containing text >>.
The expected result is shown in the image below.
 
•	Add functionality to buttons:
o	If we click the << button, the numbers on the boxes should be cyclically shifted to the left. This means that all the values in the boxes from the second to the last one should be moved one to the left, and the value of the first box should be moved to the last box. For example, if the values are 1 2 3 4 5, after one << click the values should be 2 3 4 5 1.
o	If we click the >> button, the numbers on the boxes should be cyclically shifted to the right. This means that all the values in the boxes from the first to the fourth should be moved one to the right, and the value of the last box should be moved to the first one. For example, if the values are 1 2 3 4 5, after one >> click the values should be 5 1 2 3 4.
Initially, there is some default starting code in the HTML tab. If you click on the   button, you'll see that the tests fail (both in desktop and mobile modes).
Solution
1.	Add
<div>
  <div class="left-shift-button">
    <button><<</button>
  </div>
  <div class="boxes">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
    <div class="box">4</div>
    <div class="box">5</div>
  </div>
  <div class="right-shift-button">
    <button>>></button>
  </div>
</div>
after the <h1>Frontend Task</h1> element. As you can see in the preview section, the environment automatically detects the changes and displays the result.
1.	Type the following in the SCSS code:
.box {
  float: left;
  width: 20%;
  font-size: 40px;
}
button {
  font-size: 40px;
}
.left-shift-button, .right-shift-button, .boxes {
  float: left;
  width: 33.33%;
  text-align: center;
}
You can now see that some of the tests are passed if you click again on the   button. Also you can click the mobile icon in the top-right corner of the page -   to see the difference between previews on mobile and desktop versions.
1.	To add the required functionality, add the following code to the JS:
const buttons = document.getElementsByTagName("button");
const boxes = document.getElementsByClassName("box");

const arr = Array.prototype.map.call(boxes, box => box.innerHTML);
buttons[0].onclick = function() {
  arr.push(arr.shift());
  Array.prototype.forEach.call(boxes, (box, ind) => box.innerHTML = arr[ind]);
}

buttons[1].onclick = function() {
  arr.unshift(arr.pop());
  Array.prototype.forEach.call(boxes, (box, ind) => box.innerHTML = arr[ind]);
}
Now all the tests will pass. If you want to try the task in your own way, you can reset the project (click  ) and solve it yourself.
•	[execution time limit] 10 seconds
