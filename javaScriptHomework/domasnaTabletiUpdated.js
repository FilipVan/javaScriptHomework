
var costPerPiece = 119.95;
var taxPerPiece = 5;
var totalPieces = 30;
var sum;


function calculateFullPrice(costPerPiece,taxPerPiece,totalPieces){
    var sum = (costPerPiece*(taxPerPiece/100)+costPerPiece)*totalPieces;
    outcome = ("Cenata na "+totalPieces+"tableti e "+sum);
    return outcome;
}

alert(calculateFullPrice(costPerPiece,taxPerPiece,totalPieces));