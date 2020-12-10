/**Codewars
 * 
 * The Story:
 * Bob working as bus driver. He is popular with residents, sometimes he has 
 * problem people can't all fit. How can we help figure it out.
 
 
 Write func that accepts parameters:
 -cap = amount of ppl bus can hold minus driver
 
 - on = num of people on bus except driver
 
 -wait = num is the num of people waiting to get on bus mins driver
 
 Problem: 
 if there enough space, return 0
 if not enough space, return num of ppl he can't take
 */

 function enough(cap, on, wait) {
     if (on === cap) {
         return wait
     }
     let freeSeats = cap -on;
     if (freeSeats >= wait) {
         return 0
     } 
    return wait - freeSeats    
 }

 //if on === cap

    //return wait
 
 //set free seats to cap - on

 
 //if free seats >= wait

    //return 0

//else

 //return wait - free seats


 //Test:
 describe("Example Tests", function(){
     Test.assertEquals(enough(10, 5, 5 ), 0);
 })