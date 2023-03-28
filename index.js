
let lock = false; //initialize lock to false
function doSomething() {
  if (!lock) { //check if the lock is not engaged
    lock = true; //engage the lock
    setTimeout(() => {
      //run your code here
      lock = false; //release the lock
    }, 1000); //delay the execution of code by 1000ms
  }
}