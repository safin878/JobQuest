const Blogs = () => {
  return (
    <div className="p-6 flex justify-evenly">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://i.postimg.cc/mZcmgbbB/download.png" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className=" ">
            <span className="text-[20px] font-bold">Question</span>:{""}
            <span className="text-[px]">
              What is an access token and refresh token? How do they work and
              where should we store them on the client side?
            </span>
          </h2>
          <p className="text-center">
            <span className="text-[20px]  font-bold">Answer</span>
          </p>

          <div>
            <p>
              {" "}
              <span className="font-semibold">
                {" "}
                Access Token and Refresh Token:
              </span>
            </p>
            <p className="my-3">
              {" "}
              <span className="font-semibold"> Access Token:</span>
              <span className="text-[14px">
                An access token is a credential used to access protected
                resources on behalf of a user. It is typically short-lived and
                grants access to specific resources for a limited period. Access
                tokens are commonly used in authentication mechanisms like OAuth
                2.0.
              </span>
            </p>
            <p>
              {" "}
              <span className="font-semibold"> Refresh Token: </span>
              <span className="text-[14px">
                A refresh token is a credential used to obtain a new access
                token after the current access token expires. Refresh tokens are
                typically long-lived compared to access tokens and are used to
                maintain persistent authentication sessions without requiring
                the user to repeatedly log in. They are securely stored and
                exchanged for new access tokens when needed.
              </span>
            </p>
            <p className="my-3">
              {" "}
              <span className="font-semibold">How They Work: </span>
              <span className="text-[14px">
                When a user logs in or authenticates with a server, they receive
                both an access token and a refresh token. The access token is
                sent with each request to access protected resources, while the
                refresh token is securely stored on the client side. When the
                access token expires, the client can use the refresh token to
                obtain a new access token without requiring the user to log in
                again.
              </span>
            </p>
            <p className="my-3">
              {" "}
              <span className="font-semibold">
                Storage on the Client Side:{" "}
              </span>
              <span className="text-[14px">
                Access tokens are typically stored in memory (e.g., in a
                variable) or in browser storage mechanisms such as localStorage
                or sessionStorage. Refresh tokens, being more sensitive and
                long-lived, are usually stored in an HTTP-only secure cookie to
                mitigate security risks associated with storing them in the
                browser's memory.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* 2nd */}

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://i.postimg.cc/7LCt577P/images.png" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className=" ">
            <span className="text-[20px] font-bold">Question</span>:{""}
            <span className="text-[px]">
              What is express js? What is Nest JS (google it)?
            </span>
          </h2>
          <p className="text-center max-h-12">
            <span className="text-[20px]   font-bold">Answer</span>
          </p>

          <div>
            <p>
              {" "}
              <span className="font-semibold"> Express.js and NestJS:</span>
            </p>
            <p className="my-3">
              {" "}
              <span className="font-semibold">Express.js:</span>
              <span className="text-[14px">
                Express.js is a popular web application framework for Node.js.
                It provides a robust set of features for building web servers
                and APIs quickly and efficiently. With Express, developers can
                define routes, handle HTTP requests and responses, set up
                middleware, and more. It's known for its simplicity,
                flexibility, and minimalistic design.
              </span>
            </p>
            <p>
              {" "}
              <span className="font-semibold"> NestJS:</span>
              <span className="text-[14px">
                NestJS is a progressive Node.js framework for building
                efficient, reliable, and scalable server-side applications. It
                is built on top of Express.js and heavily inspired by Angular's
                architecture and syntax. NestJS provides a modular and organized
                structure for building server-side applications, with features
                like dependency injection, middleware, decorators, and more. It
                aims to enhance developer productivity and maintainability by
                offering well-defined patterns and practices.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* 3nd */}

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://i.postimg.cc/DfYhDQg5/images.jpg" alt="Shoes" />
        </figure>
        <div className="card-body flex ">
          <h2 className=" ">
            <span className="text-[20px] font-bold">Additional</span>:{"  "}{" "}
            {"  "}
            <span className="text-[px]">Explain My code.</span>
          </h2>
          <div>
            <p className="my-3">
              {" "}
              <span className="font-semibold">Visual Appeal and Design:</span>
              <span className="text-[14px">
                Ensure pleasing color contrast, proper alignment, and spacing.
                Customize the design of components taken from libraries to make
                them unique. Create a visually appealing website design,
                avoiding similarities with previous assignments or practice
                projects.
              </span>
            </p>
            <p>
              {" "}
              <span className="font-semibold"> Navbar and Footer:</span>
              <span className="text-[14px">
                Keep the navbar and footer consistent on all pages except the
                404 page. Design a meaningful footer with website logo, name,
                copyright, contact information, social media links, etc.
              </span>
            </p>
            <p className="my-3">
              {" "}
              <span className="font-semibold"> Navbar Contents:</span>
              <span className="text-[14px">
                The navbar should include Website logo, Website name, Home, All
                Jobs, Applied Jobs, Add A Job, My Jobs, Blogs, and User Profile.
                Conditional rendering of profile picture, Add A Job, My Jobs,
                and Applied Jobs based on login status.
              </span>
            </p>
            <p>
              {" "}
              <span className="font-semibold">
                {" "}
                Login & Registration Systems:
              </span>
              <span className="text-[14px">
                Display relevant error messages on the Registration and Login
                pages. Login Page: Provide options for Email/Password login,
                Google Sign-in, and a link to the Registration page.
                Registration Page: Include fields for Name, Email, Password, and
                Photo URL.
              </span>
            </p>
            <p>
              {" "}
              <span className="font-semibold"> Home Page:</span>
              <span className="text-[14px">
                Banner Section: Implement a slider/banner with a Heading Title
                and Short Description. Job by Category: Use a tab system with at
                least 4 tabs representing different job categories (On-Site,
                Remote, Hybrid, Part-Time). Implement an "All Jobs" tab to
                display jobs from all categories. Each job card within a
                category should include details such as the name of the job
                poster, job title, posting date, application deadline, salary
                range, number of applicants, and a "View Details" button.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
