const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function countBatteries(totalNumberOfBatteries, element) {
    totalNumberOfBatteries += element;
    return totalNumberOfBatteries; 
}

const totalBatteries = batteryBatches.reduce(countBatteries, 0);