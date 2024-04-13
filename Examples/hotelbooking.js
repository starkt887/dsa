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
    guestAcc: 6,
    bookings: [
        {//15-17
            id: 1,
            startDate: "2024-04-10",
            endDate: "2024-04-15",
        },
        {
            id: 2,
            startDate: "2024-04-08",
            endDate: "2024-04-13",
        },
        {
            id: 3,
            startDate: "2024-04-13",
            endDate: "2024-04-16",
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
    custStartDate = prompt("Enter start date[YYYY-MM-DD]= ")
    custEndDate = prompt("Enter end date[YYYY-MM-DD]= ")
    let compStartDate = formatToComparableDate(custStartDate)
    let compEndDate = formatToComparableDate(custEndDate)

    // "custStartDate>=bookingStartDate && custEndDate<=bookingEndDate"
    let bookings = hotel.bookings;
    let newReqDates = []
    let durationInDays = compEndDate.diff(compStartDate, "days")
    console.log(durationInDays);
    for (let i = 0; i < durationInDays; i++) {
        newReqDates.push(compStartDate.add(i, "days").format("YYYY-MM-DD"))
    }
    console.log(newReqDates);
    let isAvaialble = true;
    newReqDates.every((date) => {

        let compDate = dayjs(date)
        let conflictBookings = bookings.filter((booking) => {
            //if booking startdate is equal or inbetween
            if (compDate.isSameOrAfter(dayjs(booking.startDate)) &&
                compDate.isSameOrBefore(dayjs(booking.endDate))
            ) {
                return booking
            }
            //if booking endate is equal ir inbetween
            if (compDate.isSameOrBefore(dayjs(bookings.endDate)) &&
                compDate.isSameOrAfter(dayjs(bookings.startDate))) {
                return booking
            }
        })

        console.log(`Date: ${compDate.format("YYYY-MM-DD")}`);
        console.log(`No of People Residing:${conflictBookings.length * 2}`);
        let totalResidingForDate = conflictBookings.length * 2
        if (totalResidingForDate == hotel.guestAcc) {
            isAvaialble = false;
        }
        return isAvaialble
    })
    if (isAvaialble) {
        console.log("Hotel is Available for your Dates");
    } else {
        console.log("Hotel is Not Available for your Dates");
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