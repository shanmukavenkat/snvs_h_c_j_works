function RailwayStation(trainNo, platformNo) {
    this.trainNo = trainNo;
    this.platformNo = platformNo;
}

let railwayStation = new RailwayStation(130121, 3);
railwayStation.platformNo = 7;

console.log(railwayStation.platformNo);