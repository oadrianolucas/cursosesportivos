import Image from "next/image";
export function SectionRowTwo(props) {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <div className="px-4 py-3 lg:mx-0">
              <h2 className="text-4xl font-bold text-blue-900">
                {props.title}
              </h2>
              <p className="text-gray-500 text-justify font-light text-3xl mt-3 mb-4">
                {props.paragraph}
              </p>
              <a
                className="font-bold text-2xl text-gray-600 hover:text-gray-400"
                href="/login"
              >
                Saiba mais
              </a>
            </div>
          </div>
          <div className="m-3">
            <Image
              className="rounded-2xl"
              src={props.img}
              alt={props.alt}
              width={900}
              height={100}
            />
          </div>
        </div>
      </section>
    </>
  );
}
