import Image from "next/image";

export function SectionHome(props) {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="lg:mx-28 lg:mt-16 mx-5 mt-10">
              <h2 className="lg:text-6xl text-5xl font-bold text-blue-900">
                {props.title}
              </h2>
              <p className="text-gray-500 text-justify font-light lg:text-3xl text-2xl mt-3 mb-10">
                {props.paragraph}
              </p>
              <div className="mb-10">
                <a
                  className=" transition ease-in-out delay-150  
                  bg-orange-600 text-white text-center 
                  p-4 border border-gray-300
                  rounded-lg drop-shadow-md
                  font-medium text-2xl flex flex-col
                  items-center justify-center
                  hover:-translate-y-1 hover:scale-40
                  hover:bg-gray-500 duration-300 hover:text-white"
                  href="/login"
                >
                  {props.button}
                </a>
              </div>
            </div>
            <div>
              <Image
                src="/img/banner-1.png"
                alt="Picture of the author"
                width={900}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
