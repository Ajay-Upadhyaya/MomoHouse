import React from "react";

function ContactSection2() {
  return (
    <>
      <div className="flex lg:flex-row flex-col w-[90%]  mx-auto  ">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d839.07544289403!2d85.3529075695808!3d27.747733598509985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1955dfb4864b%3A0xe7aef95bc9ef8eb8!2sMahankal%2C%20Budhanilkantha%2044600!5e1!3m2!1sen!2snp!4v1743168427228!5m2!1sen!2snp"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-[120%] lg:h-[600px] h-full"
          ></iframe>
        </div>
        <div className="py-8 px-16 lg:mx-16 mx-8">
          <div className="space-y-2 mb-10">
            <h1 className="text-2xl font-bold ">
              Contact <span className="text-[#D95103]">Us</span>{" "}
            </h1>
            <p className="text-sm text-[#6B788E]">
              If you have any queries, send us a message. Our Friendly team
              would love to hear from you
            </p>
          </div>
          <form action="">
            <div className="space-y-3">
              <div className="flex lg:flex-row flex-col gap-4">
                <label
                  htmlFor="fname"
                  className="flex flex-col gap-y-1 text-sm font-medium text-[#101828] lg:w-[60%]"
                >
                  First Name
                  <input
                    type="text"
                    id="fname"
                    required
                    className="border-[1px] border-[#DFE2E6] rounded-md px-4 py-2 text-sm outline-none font-normal"
                  />
                </label>
                <label
                  htmlFor="lname"
                  className="flex flex-col gap-y-1 text-sm font-medium text-[#101828] lg:w-[60%]"
                >
                  Last Name
                  <input
                    type="text"
                    id="lname"
                    required
                    className="border-[1px] border-[#DFE2E6] rounded-md px-4 py-2 text-sm outline-none font-normal"
                  />
                </label>
              </div>

              <label
                htmlFor="choice"
                className="flex flex-col gap-y-1 text-sm font-medium text-[#101828]"
              >
                What can we do for you ?
                <input
                  type="text"
                  id="choice"
                  required
                  className="border-[1px] border-[#DFE2E6] rounded-md px-4 py-2 text-sm outline-none font-normal"
                />
              </label>

              <label
                htmlFor="email"
                className="flex flex-col gap-y-1 text-sm font-medium text-[#101828]"
              >
                Email
                <input
                  type="email"
                  id="email"
                  required
                  className="border-[1px] border-[#DFE2E6] rounded-md px-4 py-2 text-sm outline-none font-normal"
                />
              </label>

              <label
                htmlFor="phone"
                className="flex flex-col gap-y-1 text-sm font-medium text-[#101828]"
              >
                Phone Number
                <input
                  type="text"
                  id="phone"
                  required
                  maxLength={10}
                  className="border-[1px] border-[#DFE2E6] rounded-md px-4 py-2 text-sm outline-none font-normal"
                />
              </label>
              <label
                htmlFor="textarea"
                className="flex flex-col gap-y-1 text-sm font-medium text-[#101828] "
              >
                Message
                <textarea
                  name="textarea"
                  id="textarea"
                  className="border-[1px] border-[#DFE2E6] rounded-md px-4 py-2 text-sm outline-none font-normal"
                ></textarea>
              </label>
              <div>
                <button className="  text-white bg-[#0C6967] lg:text-base text-sm px-7 py-4 my-7 rounded-full flex items-center gap-3 cursor-pointer hover:bg-orange-500  font-mono font-bold">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactSection2;
