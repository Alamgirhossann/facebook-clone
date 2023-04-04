import {
  DotsHorizontalIcon,
  ShareIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import React from "react";
import Contact from "./Contact";

const contacts = [
  {
    name: "sunny sangha",
    src: "https://links.papareact.com/l4v",
  },
  {
    name: "elon mask ",
    src: "https://links.papareact.com/kxk",
  },
  { name: "mark zuckerberg", src: "https://links.papareact.com/snf" },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/zvy",
  },
];

const Widgets = () => {
  return (
    <div className=" hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mt-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <ShareIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {contacts.map((contact)=>(
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
};

export default Widgets;
