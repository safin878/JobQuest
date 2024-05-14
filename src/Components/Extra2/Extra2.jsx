import "./Extra2.css";
const Extra2 = () => {
  return (
    <div className="container mx-auto ">
      <div>
        <h2 className="text-center text-6xl font-bold">Happy Clients.</h2>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <div className="w-full  max-w-md px-8 py-4 my-16   rounded-lg shadow-lg border-color-2 border">
          <div className="flex justify-center -mt-16 md:justify-end">
            <img
              className="object-cover w-20 h-20 border-2 border-color-1 rounded-full"
              alt="Testimonial avatar"
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
            />
          </div>
          <h2 className="mt-2 text-xl font-semibold text-color-2 md:mt-0">
            Web Developer
          </h2>
          <p className="mt-2 text-sm ">
            JobQuest web developer offering dynamic designs with a keen eye for
            detail and a commitment to client satisfaction. Let's bring your
            digital vision to life!
          </p>
          <div className="flex justify-end mt-4">
            <a
              href="#"
              className="text-lg font-medium text-color-1 "
              tabIndex={0}
              role="link"
            >
              John Doe
            </a>
          </div>
        </div>
        <div className="w-full max-w-md px-8 py-4 my-16   rounded-lg shadow-lg border-color-2 border">
          <div className="flex justify-center -mt-16 md:justify-end">
            <img
              className="object-cover w-20 h-20 border-2 border-color-1 rounded-full"
              alt="Testimonial avatar"
              src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg"
            />
          </div>
          <h2 className="mt-2 text-xl font-semibold text-color-2 md:mt-0">
            Graphics Designer
          </h2>
          <p className="mt-2 text-sm ">
            Creative graphics designer on JobQuest, crafting visually stunning
            solutions tailored to your brand's essence. Elevate your visual
            identity with my expertise and dedication
          </p>
          <div className="flex justify-end mt-4">
            <a
              href="#"
              className="text-lg font-medium text-color-1 "
              tabIndex={0}
              role="link"
            >
              Elon Musk
            </a>
          </div>
        </div>
        <div className="w-full max-w-md px-8 py-4 my-16   rounded-lg shadow-lg border-color-2 border">
          <div className="flex justify-center -mt-16 md:justify-end">
            <img
              className="object-cover w-20 h-20 border-2 border-color-1 rounded-full"
              alt="Testimonial avatar"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Meeting_with_Bill_Gates_-_Nov._8%2C_2019_%2849054512147%29_%28cropped%29.jpg/640px-Meeting_with_Bill_Gates_-_Nov._8%2C_2019_%2849054512147%29_%28cropped%29.jpg"
            />
          </div>
          <h2 className="mt-2 text-xl font-semibold text-color-2 md:mt-0">
            Web Developer
          </h2>
          <p className="mt-2 text-sm ">
            Skilled software engineer proficient in diverse coding languages,
            dedicated to crafting efficient solutions tailored to clients'
            needs. Let's build innovative software together!
          </p>
          <div className="flex justify-end mt-4">
            <a
              href="#"
              className="text-lg font-medium text-color-1 "
              tabIndex={0}
              role="link"
            >
              Bill Gates
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extra2;
