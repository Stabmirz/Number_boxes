const boxes = document.querySelectorAll(".col");
for (let i = 0; i < boxes.length; i++) {
    boxes[i].textContent = i + 1;
}
const colors = [
'rgb(255, 255, 255)',
 'rgb(255, 165, 0)',
 'rgb(0, 128, 0)',
 'rgb(128, 0, 128)',
 'rgb(255, 192, 203)',

]
//define the class
class NumberBoxes {
    // the constructor should run as soon as i creat a new instance
    constructor(colors) {
         // this.changeNumber();
        // this.changeColor();
        this.colors = colors;
        this.addClickHandlers();
    }
    changeNumber(num) {
        //console.log(num)                                //console.log("Running changeNumber")
        //first loop, and DESCEND (itterate down not up) starting from the num that was passed in
        for (let i = num; i>0; i--){
            //grab the textContent from the box(perseInt change the changes the stringe value into a number value so it can be increment)
            let value = parseInt(boxes[i-1].textContent);
            //then increament by 1
            value = (value>=9) ? 1 : value+1;   //(ternary operator)
            //then put it back in the box
            boxes[i-1].textContent = value;
        }
    }
    changeColor(num) {
      //  console.log("Running changeColor")
      //first loop, and DESCEND (itterate down not up) starting from the num that was passed in
          //let style = window.getComputedStyle(boxes[num-1]);
          //console.log(style.backgroundColor)
      for(let i = num; i>0; i--){
          //i need to get the computed style of the element
          let style = window.getComputedStyle(boxes[i-1]);
          //Using the style that i just computed I will search throigh  the colors array to find the index of the boxes current color
          let index = this.colors.indexOf(style.backgroundColor)
          //increment the index by 1
          index = (index >= this.colors.length - 1)? 0 : index + 1;
          //set the background color to the box
          boxes[i-1].style.backgroundColor = this.colors[index]
      }
    }
    //methode to add click handlers on each box
    addClickHandlers() {
        //boxes is outside the class you are going to loop over on eavery element of this nodelist...
        boxes.forEach(box => {
            //...then ass a event listner on each one
            box.addEventListener('click', e => {
                //then run the following function
                this.changeNumber(box.dataset.place);                //this.changeNumber()
                this.changeColor(box.dataset.place);
            })
        })
    }
}
//this is how you creat a new instance
const numberbox = new NumberBoxes(colors)