import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-black text-white ">
      <div className="px-10 py-6 lg:py-12 flex flex-col lg:flex-row  gap-8 lg:justify-between max-w-[1350px] mx-auto">
        {/* logo and description */}
        <div>
          <p className="text-3xl font-semibold">
            BIG<span className="text-yellow-500">YAN</span>
          </p>
          <p className="mt-2 max-w-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae,
            mollitia? Recusandae assumenda commodi itaque ex sint inventore ipsa
            delectus saepe.
          </p>
        </div>

        {/* quick links */}
        <FooterColumn title="Quick Links" arr={quickLinks} />

        {/* More info */}
        <FooterColumn title="More Info" arr={moreInfo} />

        {/* Contact Us */}
        <FooterColumn title="Contact Us" arr={contactInfo} />
      </div>
    </footer>
  );
}

const FooterColumn = ({ title, arr }) => {
  return (
    <div>
      <h1 className="text-lg font-semibold">{title}</h1>
      {arr.map((item) => {
        return (
          <div key={item.id} className="flex items-center">
            {item.icon && <div className="mr-2">{item.icon}</div>}
            {item.label && (
              <p className="font-semibold mr-1">{item.label} : </p>
            )}
            {item.isExternalLink ? (
              <a href={item.route} target="_blank">
                {item.text}
              </a>
            ) : (
              <Link className="block capitalize">{item.text}</Link>
            )}
          </div>
        );
      })}
    </div>
  );
};

const quickLinks = [
  { id: 1, text: "home", route: "/" },
  { id: 3, text: "bear counter", route: "/bear-counter" },
  { id: 5, text: "contact", route: "/contact" },
];

const moreInfo = [
  { id: 2, text: "about", route: "/about" },
  { id: 4, text: "blogs", route: "/blogs" },
];

const contactInfo = [
  {
    id: 1,
    icon: <FaPhoneAlt />,
    label: "Phone",
    text: "+977 9841644488",
    route: "tel:9841644488",
    isExternalLink: true,
  },
  {
    id: 2,
    icon: <MdEmail />,
    label: "Email",
    text: "bigyansapkotacodes@gmail.com",
    route: "mailto:bigyansapkotacodes@gmail.com",
    isExternalLink: true,
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt />,
    label: "Address",
    text: "CG Landmark, Bharatpur",
    route: "www.google.com",
    isExternalLink: true,
  },
];
