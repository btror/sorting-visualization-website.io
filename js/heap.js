var list = [];
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
//ctx.translate(0, 550);
//ctx.scale(1, -1);
ctx.fillStyle = "black";
ctx.font="17px Verdana";



async function heapSort() {
    //disable randomize button
    disableButtons();
    //start sort
    let n = list.length;
    for (let i = n / 2 - 1; i >= 0; i--) {
        sort(list, n, i);
    }
    for (let i = n - 1; i > 0; i--) {
        let temp = list[0];
        list[0] = list[i];
        list[i] = temp;
        sort(list, i, 0);
    }
    //end sort
    repaint(list, -1);
    //re-enable the button
    enableButtons();
}

async function sort(list, n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < n && list[l] > list[largest]) {
        largest = l;
    }

    if (r < n && list[r] > list[largest]) {
        largest = r;
    }

    if (largest != i) {
        let swap = list[i];
        list[i] = list[largest];
        list[largest] = swap;

        sort(list, n, largest);
    }

}

function resolve(delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, delay);
    });
  }

function repaint(list, index) {
    ctx.clearRect(0, 0, c.width, c.height);
    //ctx.fillStyle = "#FF0000";
    let k = 22;
    if (index != -1) {
        for (let i = 0; i < list.length; i++) {
            if (i == index) {
                ctx.fillStyle="red";
                ctx.fillRect(k, 4, 50, list[i]);
                ctx.fillText(list[i], k + 8, list[i] + 25);
            } else {
                ctx.fillStyle="black";
                ctx.fillRect(k, 4, 50, list[i]);
                ctx.fillText(list[i], k + 8, list[i] + 25);
            }
            
            k += 51;
        }
    } else {
        for (let i = 0; i < list.length; i++) {
            
            ctx.fillStyle="black";
            ctx.fillRect(k, 4, 50, list[i]);
            ctx.fillText(list[i], k + 8, list[i] + 25);
              
            k += 51;
        }
    }
    
}

function disableButtons() {
    document.getElementById("sort-bubble").disabled = true;
    document.getElementById("sort-selection").disabled = true;
    document.getElementById("sort-insertion").disabled = true;
    document.getElementById("sort-comb").disabled = true;
    //document.getElementById("sort-quick").disabled = true;
    document.getElementById("sort-merge").disabled = true;
    document.getElementById("randomize").disabled = true;
    document.getElementById("sort-heap").disabled = true;
}

function enableButtons() {
    document.getElementById("sort-bubble").disabled = false;
    document.getElementById("sort-selection").disabled = false;
    document.getElementById("sort-insertion").disabled = false;
    document.getElementById("sort-comb").disabled = false;
    //document.getElementById("sort-quick").disabled = false;
    document.getElementById("sort-merge").disabled = false;
    document.getElementById("sort-heap").disabled = false;
    document.getElementById("randomize").disabled = false;
}


