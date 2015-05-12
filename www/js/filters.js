angular.module('starter.filters', [])
    .filter('displayLetter', [function(){
        return function check(number){
            var numberGrade = number;
            switch(numberGrade) {
                case "4":
                    return "A";
                case "3.5":
                    return "B+";
                case "3":
                    return "B";
                case "2.5":
                    return "C+";
                case "2":
                    return "C";
                case "1":
                    return "D";
                case "0":
                    return "F";
                default:
                    return "F";
            }
        }
    }]);