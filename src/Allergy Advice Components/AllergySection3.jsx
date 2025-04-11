import React from "react";
import line from "../assets/images/line.png";
import qr from "../assets/images/qr.png";
import { FaMobileAlt } from "react-icons/fa";

function AllergySection3() {
  return (
    <div className="w-[80%] mx-auto py-10 space-y-5  ">
      <div className="flex justify-center items-center gap-5 mb-10 ">
        <img src={line} alt="Line" className="w-[100px]" />
        <h1 className="font-bold  lg:text-2xl text-lg   text-[#D95103] allergy">
          Allergy <span className="text-black">Advices</span>
        </h1>
        <img src={line} alt="Line" className="w-[100px]" />
      </div>

      <div className="space-y-3 paragraph">
        <p className="text-[#6B788E] lg:text-md text-sm leading-6 text-justify">
          Lorem ipsum dolor sit amet consectetur. Feugiat lectus sit est blandit
          in gravida. Nisl facilisis luctus sit porttitor placerat purus
          tincidunt. Cursus nascetur a mauris odio quis sociis pretium nisl. In
          viverra diam dis montes orci congue vulputate magna ullamcorper.
          Semper tellus ipsum felis maecenas ultrices turpis amet euismod
          malesuada. Amet sed neque vitae malesuada quis sed urna.
        </p>
        <p className="text-[#6B788E] lg:text-md text-sm leading-6 text-justify">
          Feugiat orci feugiat cursus risus tincidunt. Aliquet nam iaculis
          bibendum tortor varius sit. Volutpat nunc nisl quisque elit. Ac est
          ultricies risus et sed. Donec auctor tristique quam morbi pellentesque
          et. Scelerisque dui id arcu laoreet iaculis nunc et nulla sed. Aliquet
          nullam vulputate quis ut mi placerat auctor. Ipsum massa suspendisse
          netus mollis interdum.
        </p>
        <p className="text-[#6B788E] lg:text-md text-sm leading-6 text-justify">
          Augue leo eget ut vitae maecenas ac. Metus massa nunc tristique donec
          dignissim aenean congue justo et. Parturient elit adipiscing non vitae
          mattis. Congue senectus urna cursus nisi nisl nisl tincidunt rhoncus.
          Congue sit etiam vestibulum elit aenean leo enim volutpat. Aliquet
          vitae condimentum bibendum ullamcorper vel cursus libero netus
          bibendum. Lorem id ut proin tincidunt. Nibh nunc amet odio est et. Sem
          dui nunc morbi leo quisque viverra ultrices. Mattis at tempus
          ultricies ut feugiat nunc dignissim. Urna turpis purus turpis elit
          risus.
        </p>
        <p className="text-[#6B788E] lg:text-md text-sm leading-6 text-justify">
          Sed elit ornare senectus dignissim diam dolor sed dictum. Faucibus
          mauris senectus odio blandit diam nunc. Urna volutpat ut potenti ut
          mus orci neque sem. Mattis amet at amet faucibus nisl morbi aenean ac.
          Justo turpis bibendum donec lacinia. Enim integer ornare nibh urna
          enim tortor arcu sit lacinia. Dapibus praesent vitae dolor cursus
          fringilla hac facilisis pellentesque. Elementum lacus varius et neque
          amet aliquam donec sed. Ultrices euismod commodo id vehicula commodo.
          Amet lorem eros nulla mauris. Sit arcu enim sit nunc mi sed aenean.
          Ornare enim vitae volutpat est dui tortor. Viverra habitant et
          consequat vitae elit aliquet iaculis in tristique.
        </p>
        <p className="text-[#6B788E] lg:text-md text-sm leading-6 text-justify">
          Quam ipsum viverra ac laoreet platea in praesent. Mattis molestie arcu
          nulla convallis interdum proin dui ut porta. Amet potenti praesent
          pulvinar scelerisque vitae habitant eget. Senectus hac id aliquam
          ipsum urna. Est ut amet nec sollicitudin nunc viverra nec ipsum
          suspendisse. Etiam risus ultricies dictum nisl. Bibendum ultrices
          elementum feugiat erat suspendisse mi fermentum magna suspendisse.
          Nisi mattis consequat nec donec eu amet nulla a. At blandit vulputate
          morbi tortor amet. Hac nec gravida tempor ac. Senectus nunc libero
          scelerisque quisque. Risus condimentum mattis massa integer
        </p>
      </div>

      <div className="flex flex-col items-center mt-10 bg-[#FAFBFB] rounded-md py-5">
        <h1 className="text-[#0C6967] lg:text-xl text-lg font-bold">
          Scan the QR code
        </h1>
        <p className="text-[#6B788E] lg:text-base text-sm mb-5">
          You can also check the allergy advices using your phone as well
        </p>
        <img src={qr} alt="Qr code" className="w-[150px]" />
        <p className=" lg:text-lg text-sm flex items-center font-bold gap-1">
          <span className="text-[#D95103]">SCAN</span>ME!
          <FaMobileAlt size={24} />
        </p>
      </div>
    </div>
  );
}

export default AllergySection3;
