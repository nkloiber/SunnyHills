document.getElementById("submit-btn").addEventListener("click", function () {
    startSunset()
});

function startSunset() {
    let height1 = parseInt(document.getElementById("Input1").value);
    let height2 = parseInt(document.getElementById("Input1").value);
    let height3 = parseInt(document.getElementById("Input1").value);
    let height4 = parseInt(document.getElementById("Input1").value);
    let height5 = parseInt(document.getElementById("Input1").value);
    let heightArray = [height1, height2, height3, height4, height5];
    let newArray = [];
    let count = 1;
    let currMax = heightArray[0];
    newArray.push(currMax);
    
    for (let i = 1; i < heightArray.length; i++) {
        if (heightArray[i] > currMax) {
            newArray.push(heightArray[i]);
            count++;
            currMax = heightArray[i];
        }
    }
    document.getElementById("DisplaySunset").innerHTML = `${count} See Sunset: [${newArray}]`;
}


