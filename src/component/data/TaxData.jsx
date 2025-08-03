import { MdTypeSpecimen } from "react-icons/md";
import { GoLaw } from "react-icons/go";
import { GrSystem } from "react-icons/gr";
import { GiReceiveMoney } from "react-icons/gi";

const TaxData = [
  {
    id: 1,
    taxIcon: <MdTypeSpecimen />,
    title: "Tax Type",
    description:
      "A tax type refers to the specific category or classification of tax that is applied to individuals or businesses. ",
    btn: "Learn More",
    to: "",
    bgC: "bg-green-700",
    txC: "text-white",
  },
  {
    id: 2,
    taxIcon: <GrSystem />,
    title: "Tax System",
    description:
      "A tax system is the framework and set of rules that govern how taxes are collected, managed, and enforced within a jurisdiction.",
    btn: "Learn More",
    to: "",
    bgC: "bg-amber-500",
    txC: "text-white",
  },
  {
    id: 3,
    taxIcon: <GiReceiveMoney />,
    title: "Tax Collection",
    description:
      "Tax collection is the process by which government authorities gather taxes owed by individuals and businesses.",
    btn: "Learn More",
    to: "",
    bgC: "bg-red-500",
    txC: "text-gray-800",
  },
  {
    id: 4,
    taxIcon: <GoLaw />,
    title: "Tax Compliance",
    description:
      "Tax compliance refers to the adherence of individuals and businesses to tax laws and regulations.  ",
    btn: "Learn More",
    to: "",
    bgC: "bg-blue-500",
    txC: "text-white",
  },
];

export default TaxData;