class Driver {
  constructor (name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }


  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let horizontalBlocks = eastWest.slice(this.beginningLocation.horizontal, this.endingLocation.horizontal).length
    let verticalBlocks = parseInt(this.endingLocation.vertical) - parseInt(this.beginningLocation.vertical)
    return horizontalBlocks + verticalBlocks
  }
}
