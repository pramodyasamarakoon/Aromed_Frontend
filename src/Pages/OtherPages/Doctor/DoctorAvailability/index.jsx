import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderBox from "../../../../components/HeaderBox";
import Logo from "../../../../components/Logo";
import Button from "../../../../components/MainButton";
import SuperButton from "../../../../components/SuperButton";
import Footer from "../../../../Lib/Footer";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  INITIAL_EVENTS,
  createEventId,
} from "../../../../Lib/Const/Event_Utils";
import { Grid } from "@mui/material";
import moment from "moment";
import AppointmentDialog from "./AppointmentDialog";

function DoctorAvailability() {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const events = [{ title: "Meeting", start: new Date() }];
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const handleWeekendsToggle = () => {
    setWeekendsVisible(!weekendsVisible);
  };

  const handleDateSelect = (selectInfo) => {
    const handleClickOpen = () => {
      setSelectedDate(selectInfo.startStr);
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    let title = prompt("Please enter a new title for your event");
    // let title = now();
    // let title = window.alert("Helloo");
    let calendarApi = selectInfo.view.calendar;
    console.log("selectInfo", selectInfo.view.calendar);

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });

      handleClickOpen();
    }

    // handleClickOpen();

    // return (
    //   <AppointmentDialog
    //     open={true}
    //     handleClose={handleClose}
    //     selectedDate={selectedDate}
    //   />
    // );
  };

  const handleEventClick = (clickInfo) => {
    // if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    clickInfo.event.remove();
    // }
  };

  const handleEvents = (events) => {
    setCurrentEvents({ events });
  };

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }
  return (
    <div className="bg-back-blue  ">
      {/* <NavBar/> */}
      <div className="w-full  bg-back-blue  text-white fixed z-10 top-0 ">
        {/* Current NavBar */}
        <div className="max-w-[1500px] h-[100px] mx-auto px-4 flex items-center justify-between ">
          <div>
            <Logo />
          </div>
          <div className="w-[50%] text-[18px] ">
            <div className="uppercase">
              <ul className="flex gap-4 ">
                <Link to="/DoctorHome">
                  <li>Appointments</li>
                </Link>
                <Link to="/DoctorAvailability">
                  <li className="Active">Availability</li>
                </Link>
              </ul>
            </div>
          </div>
          <div>
            <Button value="Account" />
          </div>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto mt-[100px] ">
        <HeaderBox header="Availability" />
        <div className="bg-box-blue/50">
          <Grid container>
            <Grid
              className="flex items-center justify-center p-4"
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}
            >
              <h1>Set your availability here</h1>
            </Grid>
            <Grid className="p-4 px-8" item lg={12} md={12} sm={12} xs={12}>
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                  left: "prev,next",
                  center: "title",
                  // right: "dayGridMonth,timeGridWeek,timeGridDay",
                  right: "today",
                }}
                height="500px"
                validRange={{
                  start: moment().add(14, "days").format("YYYY-MM-DD"), // two weeks from today
                  end: moment().add(1, "year").format("YYYY-MM-DD"), // one year from today
                }}
                visibleRange={{
                  start: moment().add(1, "weeks").startOf("week").toDate(),
                  end: moment().add(2, "weeks").endOf("week").toDate(),
                }}
                initialDate={moment().add(2, "weeks").startOf("week").toDate()}
                initialView="dayGridMonth"
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                weekends={weekendsVisible}
                initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                select={handleDateSelect}
                eventContent={renderEventContent} // custom render function
                eventClick={handleEventClick}
                eventsSet={handleEvents} // called after events are initialized/added/changed/removed
                /* you can update a remote database when these fire:
          eventAdd={function(){}}
          eventChange={function(){}}
          eventRemove={function(){}}
          */
              ></FullCalendar>
            </Grid>
          </Grid>
        </div>
      </div>

      {/* Select Dates */}
      <div className="max-w-[1240px] mx-auto mt-[100px] ">
        <HeaderBox header="Availability for this week" />
        <div className="bg-box-blue/30 py-12 ">
          <div className="flex justify-evenly ">
            <div className="w-[800px] px-8 py-8 text-xl bg-box-blue rounded-lg ">
              <table className="auto w-full ">
                <tr className="border-0 border-b-2 border-slate-500 ">
                  <td className="w-[200px] text-white ">Monday</td>
                  <td>
                    <SuperButton />
                  </td>
                </tr>
                <tr className="border-0 border-b-2 border-slate-500 ">
                  <td className="w-[200px] text-white ">Tuesday</td>
                  <td>
                    <SuperButton />
                  </td>
                </tr>
                <tr className="border-0 border-b-2 border-slate-500 ">
                  <td className="w-[200px] text-white ">Wednesday</td>
                  <td>
                    <SuperButton />
                  </td>
                </tr>
                <tr className="border-0 border-b-2 border-slate-500 ">
                  <td className="w-[200px] text-white ">Thursday</td>
                  <td>
                    <SuperButton />
                  </td>
                </tr>
                <tr className="border-0 border-b-2 border-slate-500 ">
                  <td className="w-[200px] text-white ">Friday</td>
                  <td>
                    <SuperButton />
                  </td>
                </tr>
                <tr className="border-0 border-b-2 border-slate-500 ">
                  <td className="w-[200px] text-white ">Saturday</td>
                  <td>
                    <SuperButton />
                  </td>
                </tr>
                <tr className="border-0 border-b-2 border-slate-500 ">
                  <td className="w-[200px] text-white ">Sunday</td>
                  <td>
                    <SuperButton />
                  </td>
                </tr>
              </table>
              <Button extraTailwind="mt-12" value="Save" />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-box-blue/30 mt-12 py-12 px-32 ">
          <div className="w-full mx-auto pt-24 pb-16 px-8 my-8 bg-white font-bold rounded-xl ">
            <div className="pb-16   ">
              <table className="table-auto w-full border-collapse border border-slate-500 ">
                <thead>
                  <th className=" border border-slate-600 bg-slate-400 ">
                    Date
                  </th>
                  <th className=" border border-slate-600 bg-slate-400">
                    Availability
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td>Monday</td>
                    <td>Video Conference</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DoctorAvailability;
