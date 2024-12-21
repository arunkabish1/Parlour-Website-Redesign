const Footer = () => {
  return (
    <div>
      <div className="bg-slate-100 w-full rounded-llg">
        <div>
          <h1 className="text-[#145f7a] text-center mt-10 mb-10 p-5 text-3xl font-quicksand font-semibold">Quick Links</h1>
          <ul className="text-center space-y-7 text-lg font-quicksand ">
            <li>
              <a href="https://www.instagram.com/rainbow_acadamy">Instagram</a>
            </li>
            <li>
              <a href="https://www.youtube.com/@akilarajesh316">Youtube</a>
            </li>
            <li>
              <a href="https://api.whatsapp.com/message/3UF3YMVU3JMJA1">Whatsapp</a>
              
            </li>
          </ul>
        </div>
        <div className="bg-[#145f7a]  rounded-llg mt-10">
          <h1 className="text-center mt-10 p-5 text-3xl font-quicksand font-semibold text-white">Location</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d62711.75335994239!2d79.59250026863799!3d10.774148899252914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a55478abe5b9cdf%3A0x649a3123723827f!2sNo.%2060%2C%20South%20Street%2C%20upstairs.%20PK%20Raja%20Medicals%2C%20S%20Main%20Rd%2C%20Tamil%20Nadu%20610001!3m2!1d10.774067299999999!2d79.6336999!5e0!3m2!1sen!2sin!4v1734808215012!5m2!1sen!2sin"
             width="410" height="450"
            className="px-2 rounded-llg"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div>
        <p className="text-center text-white text-lg py-2 font-cursive">Made with Love - Arun</p>
      </div>
    </div>
  );
};

export default Footer;
