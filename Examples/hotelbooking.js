const dayjs = require("dayjs");
var isBetween = require('dayjs/plugin/isBetween')
var isSameOrAfter = require('dayjs/plugin/isSameOrAfter')
dayjs.extend(isSameOrAfter)
const prompt = require('prompt-sync')();

let hotel = {
    name: "Vaishnavi Resort",
    address: "Pune, Maharashtra, India",
    guestAcc: 6,
    bookings: [
        {
            id: 1,
            startDate: "2024-04-17",
            endDate: "2024-04-20",
        },
        {
            id: 2,
            startDate: "2024-04-14",
            endDate: "2024-04-17",
        }
    ]
}

function formatToReadableDate(date) {
    let dt = dayjs(date).format('YYYY-MM-DD')
    return dt
}
function formatToComparableDate(date) {
    let dt = dayjs(date)
    return dt
}

function main() {
    let custStartDate, custEndDate;
    custStartDate = "2024-04-13" //prompt("Enter start date[YYYY-MM-DD]= ")
    custEndDate = "2024-04-16"//prompt("Enter end date[YYYY-MM-DD]= ")
    let compStartDate = formatToComparableDate(custStartDate)
    let compEndDate = formatToComparableDate(custEndDate)

    // "custStartDate>=bookingStartDate && custEndDate<=bookingEndDate"

    let bookings = hotel.bookings;
    for (let i = 0; i < bookings.length; i++) {
        console.log("------------------------------");
        console.log(`Booking id=${bookings[i].id}`);
        console.log("Both dates in between");
        //if bookings are equal or inbetween of start and end date of customer 
        if ((dayjs(bookings[i].startDate).isSame(compStartDate)
            || dayjs(bookings[i].startDate).isAfter(compStartDate))
            &&
            (dayjs(bookings[i].endDate).isSame(compEndDate)
                || dayjs(bookings[i].endDate).isBefore(compEndDate))
        ) {
            console.log(bookings[i]);
        }
        console.log("Start Dates in between");
        //if booking startdate is equal or inbetween
        if ((dayjs(bookings[i].startDate).isSameOrAfter(compStartDate)))
        // && dayjs(bookings[i].startDate).isAfter(compStartDate))) 
        {
            console.log(bookings[i]);
        }
        // console.log("End Dates in between");
        // //if booking endate is equal ir inbetween
        // if ((dayjs(bookings[i].endDate).isSame(compEndDate)
        //    && dayjs(bookings[i].endDate).isBefore(compEndDate))) {
        //     console.log(bookings[i]);
        // }

    }

}
main()
























// console.log(hotel);
// console.log(new Date().toLocaleDateString());
// console.log(dayjs(new Date()).format("YYYY-MM-DD"));
// const d1 = dayjs("1994-04-04")
// const d2 = dayjs(new Date())
// console.log(d2.diff(d1,"minutes"))
