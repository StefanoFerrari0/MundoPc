import React from "react";

function Header(props) {
  return (
    <section className="relative py-8 px-4">
      <div className="z-20 relative text-white container mx-auto">
        <p className="leading-normal font-bold text-3xl mt-20">{props.title}</p>
        <p className="leading-normal">{props.subtitle}</p>
        <a
          href="/productos"
          className="inline-block bg-rojo text-white no-underline font-bold hover:bg-red-800 mt-4 p-4 px-10 rounded rounded-lg"
        >
          {props.button}
        </a>
      </div>
      <div className="absolute inset-0 h-auto z-10">
        <img src={props.image} alt="" className="h-full w-full object-fit-cover" />
      </div>
    </section>
  );
}

export default Header;
