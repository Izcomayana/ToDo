type Day = {
  name: string;
  date: number;
};

const days: Day[] = [
  { name: "Mon", date: 1 },
  { name: "Tue", date: 2 },
  { name: "Wed", date: 3 },
  { name: "Thurs", date: 4 },
  { name: "Fri", date: 5 },
  { name: "Sat", date: 6 },
  { name: "Sun", date: 7 },
  { name: "Mon", date: 8 },
  { name: "Tue", date: 9 },
  { name: "Wed", date: 10 },
  { name: "Thurs", date: 11 },
];

const Dates: React.FC = () => {
  return (
    <div>
      <h4 className="month fw-semibold">January 2023</h4>
      <ul className="days d-md-none d-flex justify-content-between p-0 mt-3">
        {days
          .filter((day) => day.date < 7)
          .map((day) => (
            <li
              key={day.date}
              className="d-flex bg-transparent flex-column align-items-center px-2 py-1 border rounded head h-100"
            >
              <span>{day.name}</span>
              <span>{day.date}</span>
            </li>
          ))}
      </ul>

      <ul className="days d-none d-md-flex justify-content-between p-0 mt-3">
        {days.map((day) => (
          <li
            key={day.date}
            className="d-flex bg-transparent flex-column align-items-center px-2 py-1 border rounded head h-100"
          >
            <span>{day.name}</span>
            <span>{day.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dates;
