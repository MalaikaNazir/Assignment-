//Question 15
let guestList = ["Sir Zia" ,"Sir Sajid" , "Sir Abid Shirwani" ,"Sir Jahanzaib Tayyab " ,"Sir Zakka"]

//step 1 print the name of person who can't make it
let guestWhoCantMakeIt :string ="Sir Sajid"
console.log(`${guestWhoCantMakeIt} can't make it to dinner` )

//step 2 Replace the name of guest who can't make it 
let newGuest :string ="Sir Ahmad "
let indexOfGuestWhoCantMakeIt : number = guestList.indexOf(guestWhoCantMakeIt)
//console.log(indexOfGuestWhoCantMakeIt)

if(indexOfGuestWhoCantMakeIt !== -1){
    guestList[indexOfGuestWhoCantMakeIt ] = newGuest
}
//console.log(guestList[1])

//step 3 Print a second set of invitation messages
console.log("Print a second set of invitation messages")
guestList.forEach((guest:string)=>
{
console.log(`Dear ${guest} You are invited to Dinner`)
})
export {guestList}