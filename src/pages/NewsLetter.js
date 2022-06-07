import { useRef, useState } from "react";
import { addSubscriberToList } from "../AddEmailSubscriber";
import "../index.css";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export default function NewsLetter() {
  const emailRef = useRef();
  const nameRef = useRef();
  const [disabled, setDisabled] = useState(false);

  const onClickHandler = async () => {
    setDisabled(true);
    const res = await addSubscriberToList(
      emailRef.current.value,
      nameRef.current.value
    );
    if (res === 200) {
      toast.success("Hurray!! Info has been added.");
    } else if (res === 400) {
      toast.error("Oops!! Fill in all details mate.");
    }
    setDisabled(false);
  };

  return (
    <>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <div className=" w-full h-screen relative">
        <div className=" hidden lg:flex bg-[#1E1E1E] h-screen w-1/2 absolute left-0 justify-center items-center">
          <img
            src={require("../assets/Logo.png")}
            alt="Logo"
            className=" w-64 h-64"
          />
        </div>
        <div className="h-screen w-full lg:w-1/2 bg-[#E0E9FF] absolute right-0 p-10 justify-center items-center flex">
          <div className=" w-full h-fit h-max-[] max-w-[400px] flex items-center flex-col">
            <img
              src={require("../assets/Logo.png")}
              alt="logo"
              className="lg:hidden w-24 h-24 rounded-md"
            />
            <h1 className=" text-xl lg:text-2xl mt-10 poppins font-semibold">
              Subscribe to the NewsLetter
            </h1>
            <p className=" text-justify mt-5 font-extralight">
              Thanks for showing interest in <b>Codurz</b>. 
               <b> Codurz</b> is under production.
              Once released, It'll be able to provide an all-in-one suite
              containing tools for developers and educators. Educators would be
              able to teach coding in a tailored environment. This environment
              would be responsible for providing the learner with an
              extraordinary and hands-on experience. Developers would be able to
              create production-ready applications without the hassle of
              installing a single dependency on their machines.
              <br></br>
              To keep updated what is happening inside Codurz, Subscribe to the NewsLetter
            </p>
            <input
              placeholder="Your Name"
              className=" poppins text-sm w-full py-2 px-5 bg-[#E0E9FF] border shadow-md border-[#8B8B8B] rounded-md mt-5 mb-2"
              type={"text"}
              ref={nameRef}
            />
            <input
              placeholder="Your Email"
              className=" poppins text-sm w-full py-2 px-5 bg-[#E0E9FF] border shadow-md border-[#8B8B8B] rounded-md mb-2"
              type={"email"}
              ref={emailRef}
            />
            <button
              onClick={() => onClickHandler()}
              disabled={disabled}
              className="poppins shadow-md text-md font-medium text-[#E0E9FF] w-full flex justify-center items-center bg-[#1E1E1E] py-2 rounded-md"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
