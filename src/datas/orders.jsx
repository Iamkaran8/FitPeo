import person_1 from "../assets/orders_imgs/person_1.png";
import person_2 from "../assets/orders_imgs/person_2.png";
import person_3 from "../assets/orders_imgs/person_3.png";
import person_4 from "../assets/orders_imgs/person_4.png";
import person_5 from "../assets/orders_imgs/person_5.png";
import person_6 from "../assets/orders_imgs/person_6.png";
const orders = [
  {
    id: 1,
    name: "Wade Warren",
    img: person_1,
    orderno: 47238256,
    status: "Delivered",
    Amount: "$124.00",
    color: "green",
    bgcolor: "rgb(60, 179, 113, 0.2)",
  },
  {
    id: 2,
    name: "Jane Cooper",
    img: person_2,
    orderno: 46455789,
    status: "Delivered",
    Amount: "$365.02",
    color: "green",
    bgcolor: "rgb(60, 179, 113, 0.2)",
  },
  {
    id: 3,
    name: "Guy Hawkins",
    img: person_3,
    orderno: 734322215,
    status: "Cancelled",
    Amount: "$45.88",
    color: "red",
    bgcolor: "rgba(255,0,0,0.2)",
  },
  {
    id: 4,
    name: "Kristin Wastson",
    img: person_4,
    orderno: 23432096,
    status: "Pending",
    Amount: "$65.00",
    color: "red",
    bgcolor: "rgba(255,0,0,0.2)",
  },
  {
    id: 5,
    name: "Cody Fisher",
    img: person_5,
    orderno: 95324270,
    status: "Delivered",
    Amount: "$545.00",
    color: "green",
    bgcolor: "rgb(60, 179, 113, 0.2)",
  },
  {
    id: 6,
    name: "Savannah Nguyen",
    img: person_6,
    orderno: 785234268,
    status: "Delivered",
    Amount: "$128.20",
    color: "green",
    bgcolor: "rgb(60, 179, 113, 0.2)",
  },
];

export default orders;
