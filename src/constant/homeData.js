import {
  All, Bars,
  BeautyAndSpa,
  CarLocation,
  CarWash, Gyms,
  HomeServices,
  Hotels,
  Museum,
  Park,
  Restaurants,
  Shopping
} from "../components/Svgs.jsx";

export const menuItems = [
  { name: "All", icon: <All />, to: "/" },
  { name: "Restaurants", icon: <Restaurants />, to: "/" },
  { name: "Hotels", icon: <Hotels />, to: "/" },
  { name: "Home services", icon: <HomeServices />, to: "/" },
  { name: "Shopping", icon: <Shopping />, to: "/" },
  { name: "Car location", icon: <CarLocation />, to: "/" },
  { name: "Beauty & Spa", icon: <BeautyAndSpa />, to: "/" },
  { name: "Park", icon: <Park />, to: "/" },
  { name: "Museum", icon: <Museum />, to: "/" },
  { name: "Car wash", icon: <CarWash />, to: "/" },
  { name: "Bars", icon: <Bars />, to: "/" },
  { name: "Gyms", icon: <Gyms />, to: "/" },
];