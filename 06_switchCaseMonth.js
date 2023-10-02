function MonthOfYear(monthNum){
    switch (monthNum) {
            case 1:
            console.log("January");
            break;
            case 2:
            console.log('2nd month : Februry');
            break;
            case 3:
            console.log('March');
            break;
            case 4:
            console.log('April');
            break;
            case 5:
            console.log('5th month : May');
            break;
            case 6:
            console.log('June');
            break;
            case 7:
            console.log('July');
            break;
            case 8:
            console.log("August");
            break;
            case 9:
            console.log("Saptember");
            break;
            case 10:
            console.log("Octomber");
            break;
            case 11:
            console.log("November");
            break;
            case 12:
            console.log('12th month : December');
            break;
            default:
                console.log(`Invalid data : ${monthNum}`);
              break;
            break;
    }

}
MonthOfYear(0);
MonthOfYear(2);
MonthOfYear(5);
MonthOfYear(12);
MonthOfYear(15);
MonthOfYear(100);
MonthOfYear(null);
MonthOfYear(undefined);

