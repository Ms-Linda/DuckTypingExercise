var nothing = "";

var plane = "plane";

var drone = "drone";

var sevenFiftySeven = "757";

var shellPlane = null;

var flyingObjects = [nothing, plane, drone, sevenFiftySeven, shellPlane];

function takeOff(a){
    for(i = 0; i < a.length; i++){
        if(a[i]){
            console.log(a[i] + " is preparing for takeoff!")
        }
        else{
            console.log(a[i] + " cannot fly")
        }   
    }
}

takeOff(flyingObjects);