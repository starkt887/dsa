const dayjs = require("dayjs");
var isBetween = require('dayjs/plugin/isBetween')
var isSameOrAfter = require('dayjs/plugin/isSameOrAfter')
dayjs.extend(isSameOrAfter)
var isSameOrBefore = require('dayjs/plugin/isSameOrBefore')
dayjs.extend(isSameOrBefore)
const prompt = require('prompt-sync')();

let hotel = {
    name: "Vaishnavi Resort",
    address: "Pune, Maharashtra, India",
    guestAcc: 4,
    bookings: [
        {//15-17
            id: 1,
            startDate: "2024-04-15",
            endDate: "2024-04-17",
        },
        {
            id: 2,
            startDate: "2024-04-14",
            endDate: "2024-04-15",
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
    custStartDate = "2024-04-15" //prompt("Enter start date[YYYY-MM-DD]= ")
    custEndDate = "2024-04-17"//prompt("Enter end date[YYYY-MM-DD]= ")
    let compStartDate = formatToComparableDate(custStartDate)
    let compEndDate = formatToComparableDate(custEndDate)

    // "custStartDate>=bookingStartDate && custEndDate<=bookingEndDate"
    let bookings = hotel.bookings;


    let allDates = []
    let diff = compEndDate.diff(compStartDate, "days")
    for (let i = 0; i <= diff; i++) {
        allDates.push(compStartDate.add(i, "day").format("YYYY-MM-DD"))
    }
    console.log("Booking Dates", allDates);
    let isAvaialble = true;
    let status=allDates.every((date) => {
        console.log(`Conflicting bookings:${date}`);
        let compDate = dayjs(date)
        let conflictBookings = bookings.filter((booking) => {
            if (compDate.isSameOrAfter(dayjs(booking.startDate)) &&
                compDate.isSameOrBefore(dayjs(booking.endDate))
            ) {
                return booking
            }
            if (compDate.isSameOrBefore(dayjs(booking.endDate)) &&
                compDate.isSameOrAfter(dayjs(booking.startDate))) {
                return booking
            }
        })
        console.log(conflictBookings);

        let totalResiding = conflictBookings.length * 2
        console.log(`Residing on date:${totalResiding}`);
        if (totalResiding >= hotel.guestAcc) {
            console.log("Break");
            isAvaialble = false
        }
        return isAvaialble
    })
    console.log(status);
    console.log("-------------Status------------");
    if (isAvaialble) {
        console.log("Booking is Avaialble");
    }
    else {
        console.log("Booking is not Available");
    }
}
main()
























// console.log(hotel);
// console.log(new Date().toLocaleDateString());
// console.log(dayjs(new Date()).format("YYYY-MM-DD"));
// const d1 = dayjs("1994-04-04")
// const d2 = dayjs(new Date())
// console.log(d2.diff(d1,"minutes"))

//Find bookings that are conflicting
// let bookingsConflicting = []
// for (let i = 0; i < bookings.length; i++) {
//     console.log("------------------------------");
//     console.log(`Booking id=${bookings[i].id}`);
//     console.log("Start Dates in between");
//     //if booking startdate is equal or inbetween
//     if (compStartDate.isSameOrAfter(dayjs(bookings[i].startDate)) &&
//         compStartDate.isSameOrBefore(dayjs(bookings[i].endDate))
//     ) {
//         console.log(bookings[i]);
//         bookingsConflicting.push(bookings[i])
//         continue
//     }
//     console.log("End Dates in between");
//     //if booking endate is equal ir inbetween
//     if (compEndDate.isSameOrBefore(dayjs(bookings[i].endDate)) &&
//         compEndDate.isSameOrAfter(dayjs(bookings[i].startDate))) {
//         console.log(bookings[i]);
//         bookingsConflicting.push(bookings[i])
//     }

// }
// console.log("Conflicting bookings:", bookingsConflicting);