let day;
switch (new Date().getDay()) {
  case 0:
    day = "sunday";
    break;
  case 1:
    day = "monday";
    break;
  case 2:
    day = "tuesday";
    break;
  case 3:
    day = "wednesday";
    break;
  case 4:
    day = "thurday";
    break;
  case 5:
    day = "friday";
    break;
  case 6:
    day = "saturday";
    break;
  default:
    day = "Invalid day";
    break;
}
console.log(day);
/////////////////////////////////////////////////////////
switch(new Date().getDay()){
    case 0:
        day = " this is sunday";
        break;
      case 1:
        day = "this is monday";
        break;
      case 2:
        day = "this is tuesday";
        break;
      case 3:
        day = "this is wednesday";
        break;
      case 4:
        day = " this is thurday";
        break;
      case 5:
        day = "this is friday";
        break;
      case 6:
        day = "this is saturday";
        break;
      default:
        day = "Invalid day";
        break; 
}
console.log(day);
////////////////////////////////////////
switch (new Date().getDay()) {
    case 4:
    case 5:
      text = "Soon it is Weekend";
      break;
    case 0:
    case 6:
      text = "It is Weekend";
      break;
    default:
      text = "Looking forward to the Weekend";
  }
  console.log(text);
  /////////////////////////////////////
  