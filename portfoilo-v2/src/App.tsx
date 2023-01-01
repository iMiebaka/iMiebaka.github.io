function App() {
  return (
    <>
      <div id="main-wrapper">
        <header id="header" className="sticky-top">
          <nav className="primary-menu navbar navbar-expand-lg bg-dark navbar-text-light border-bottom-0 font-weight-500">
            <div className="container-fluid position-relative h-100 flex-lg-column justify-content-lg-center pl-3 p-lg-3">
              <a
                href="index.html"
                className="bg-light-3 rounded-pill p-2 mt-lg-2 mb-lg-2 d-none d-lg-inline-block"
              >
                <img
                  className="img-fluid rounded-pill d-block"
                  src="images/web-developer-160x160.jpg"
                  title="I'm David"
                  alt=""
                />
              </a>
              <a
                className="logo text-center text-capitalize d-lg-block mb-lg-4"
                href="index.html"
                title="Doon"
              >
                <h1 className="text-6 text-white mb-0">Mr. David</h1>
              </a>

              <div id="header-nav" className="collapse navbar-collapse w-100">
                <ul className="navbar-nav my-lg-auto text-lg-center">
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll active" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll" href="#about">
                      About Me
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll" href="#services">
                      What I Do
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll" href="#work">
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll" href="#process">
                      Workflow
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll" href="#clients">
                      My Clients
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll" href="#contact">
                      Contact Me
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="social-icons social-icons-light social-icons-sm mt-lg-4 ml-auto ml-lg-0 d-none d-sm-flex">
                <li className="social-icons-facebook">
                  <a
                    data-toggle="tooltip"
                    href="http://www.facebook.com/"
                    target="_blank"
                    title=""
                    data-original-title="Facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="social-icons-twitter">
                  <a
                    data-toggle="tooltip"
                    href="http://www.twitter.com/"
                    target="_blank"
                    title=""
                    data-original-title="Twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="social-icons-dribbble">
                  <a
                    data-toggle="tooltip"
                    href="http://www.dribbble.com/"
                    target="_blank"
                    title=""
                    data-original-title="Dribbble"
                  >
                    <i className="fab fa-dribbble"></i>
                  </a>
                </li>
              </ul>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#header-nav"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </nav>
        </header>

        <div id="content" role="main">
          <section id="home">
            <div className="hero-wrap">
              <div className="hero-mask opacity-8 bg-dark-4"></div>
              <div
                className="hero-bg parallax"
                style={{ backgroundImage: "url('images/bg/image-8.jpg');" }}
              ></div>
              <div className="hero-content d-flex flex-column fullscreen">
                <div className="container my-auto">
                  <div className="row pt-5">
                    <div className="col-lg-10 mx-auto text-center">
                      <h2 className="text-16 font-weight-600 text-white mb-2 mb-md-3">
                        Hello! I'm David
                      </h2>
                      <div className="typed-strings">
                        <p>Graphic Designer</p>
                        <p>Web Designer</p>
                        <p>Web Developer</p>
                        <p>Product Designer</p>
                      </div>
                      <p className="text-6 text-white font-weight-500 mb-3">
                        <span className="typed"></span>
                      </p>
                      <p className="lead text-white mb-3 mb-md-4">
                        based in San Francisco, California.
                      </p>
                      <a
                        href="#contact"
                        className="btn btn-light text-uppercase smooth-scroll"
                      >
                        Hire Me
                      </a>{" "}
                    </div>
                  </div>
                </div>
                <div className="container py-2 text-center">
                  {" "}
                  <a href="#about" className="text-light text-4 smooth-scroll">
                    <i className="fa fa-chevron-down"></i>
                  </a>{" "}
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="section">
            <div className="container px-lg-4 px-xl-5">
              <div className="row">
                <div className="col-lg-9 mx-auto text-center">
                  <h2 className="text-8 font-weight-600 line-height-4 mb-4">
                    I help you build brand for your business at an affordable
                    price.
                  </h2>
                </div>
                <div className="col-lg-10 mx-auto text-center">
                  <p className="lead">
                    I design for humans to help brands grow. I combine our
                    passion for design focused in people with advanced
                    development technologies. Thousands of clients have procured
                    exceptional results while working with me.
                  </p>
                </div>
              </div>
              <div className="border border-3 rounded p-5 mt-4">
                <div className="row">
                  <div className="col-lg-6">
                    <h3 className="text-7 mb-3">My Skills</h3>
                    <p className="text-3">
                      I help you build brand for your business at an affordable
                      price. Thousands of clients have procured exceptional
                      results while working with our dedicated team. when an
                      took a galley of make a type specimen book.
                    </p>
                    <a
                      href="#work"
                      className="btn btn-outline-secondary mt-2 shadow-none text-uppercase smooth-scroll"
                    >
                      My Work
                    </a>{" "}
                  </div>
                  <div className="col-lg-6 mt-4 mt-lg-0">
                    <p className="text-dark font-weight-500 text-left mb-2">
                      Branding & Desing <span className="float-right">95%</span>
                    </p>
                    <div className="progress progress-sm mb-4">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "95%" }}
                        aria-valuenow="95"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="text-dark font-weight-500 text-left mb-2">
                      Game Design <span className="float-right">65%</span>
                    </p>
                    <div className="progress progress-sm mb-4">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "65%" }}
                        aria-valuenow="65"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="text-dark font-weight-500 text-left mb-2">
                      Product Design & Develop{" "}
                      <span className="float-right">80%</span>
                    </p>
                    <div className="progress progress-sm mb-4">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="text-dark font-weight-500 text-left mb-2">
                      Mobile App Design <span className="float-right">55%</span>
                    </p>
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "55%" }}
                        aria-valuenow="55"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="brands-grid separator-border mt-5">
                <div className="row">
                  <div className="col-6 col-md-3">
                    <div className="featured-box text-center">
                      <h4 className="text-12 text-muted mb-0">
                        <span className="counter" data-from="0" data-to="10">
                          10
                        </span>
                      </h4>
                      <p className="text-3 mb-0">Years Experiance</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="featured-box text-center">
                      <h4 className="text-12 text-muted mb-0">
                        <span className="counter" data-from="0" data-to="356">
                          356
                        </span>
                      </h4>
                      <p className="text-3 mb-0">Happy Clients</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="featured-box text-center">
                      <h4 className="text-12 text-muted mb-0">
                        <span className="counter" data-from="0" data-to="793">
                          793
                        </span>
                      </h4>
                      <p className="text-3 mb-0">Projects Done</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-3">
                    <div className="featured-box text-center">
                      <h4 className="text-12 text-muted mb-0">
                        <span className="counter" data-from="0" data-to="38">
                          38
                        </span>
                      </h4>
                      <p className="text-3 mb-0">Get Awards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="section bg-white">
            <div className="container px-lg-4 px-xl-5">
              <div className="row">
                <div className="col-lg-9 mx-auto text-center">
                  <h2 className="text-8 font-weight-600 line-height-4 mb-5">
                    How I can help take your next project to new heights!
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-6 mb-4">
                  <div className="featured-box border rounded p-5">
                    <div className="featured-box-icon text-primary">
                      {" "}
                      <i className="fas fa-palette"></i>
                    </div>
                    <h3 className="text-6">UI/UX Design</h3>
                    <p className="text-3 mb-0">
                      Interesset lisque persius his et, in quot quidam
                      persequeris vim, essent possim iriure.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 mb-4">
                  <div className="featured-box border rounded p-5">
                    <div className="featured-box-icon text-primary">
                      {" "}
                      <i className="fas fa-pencil-ruler"></i>
                    </div>
                    <h3 className="text-6">Development</h3>
                    <p className="text-3 mb-0">
                      Lisque persius interesset his et, in quot quidam
                      persequeris vim, ad mea essent possim iriure.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 mb-4">
                  <div className="featured-box border rounded p-5">
                    <div className="featured-box-icon text-primary">
                      {" "}
                      <i className="fas fa-chart-area"></i>
                    </div>
                    <h3 className="text-6">Business Analysis</h3>
                    <p className="text-3 mb-0">
                      Quidam lisque persius interesset his et, in quot quidam
                      persequeris vim, ad mea.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
                  <div className="featured-box border rounded p-5">
                    <div className="featured-box-icon text-primary">
                      {" "}
                      <i className="fas fa-bullhorn"></i>
                    </div>
                    <h3 className="text-6">SEO Marketing</h3>
                    <p className="text-3 mb-0">
                      Persius interesset his et, in quot quidam vim ad
                      persequeris mea essent possim iriure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="work" className="section">
            <div className="container px-lg-4 px-xl-5">
              <div className="row">
                <div className="col-lg-9 mx-auto text-center">
                  <h2 className="text-8 font-weight-600 line-height-4 mb-5">
                    You can see here some of my most recent design projects.
                  </h2>
                </div>
              </div>
              <div className="popup-ajax-gallery">
                <div className="bg-white shadow-sm rounded mb-5">
                  <div className="row no-gutters">
                    <div className="col-lg-6 align-self-center order-1 order-lg-0">
                      <div className="p-5">
                        <div className="badge badge-info text-1 font-weight-500 px-3 py-2 rounded-pill mb-3">
                          Category
                        </div>
                        <h3 className="text-10 font-weight-700 mb-3">
                          Project Title
                        </h3>
                        <p className="text-3 mb-4">
                          Quidam persius interesset his et, in quot quidam
                          persequeris vim, ad mea essent possim iriure. persius
                          interesset his et, in quot quidam persequeris.
                        </p>
                        <a
                          href="ajax/portfolio-ajax-project-1.html"
                          className="btn btn-dark popup-ajax"
                        >
                          See more
                        </a>{" "}
                      </div>
                    </div>
                    <div className="col-lg-6 align-self-center order-0 order-lg-1">
                      {" "}
                      <img
                        className="img-fluid d-block rounded"
                        src="images/projects/project-1.jpg"
                        alt=""
                      />{" "}
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow-sm rounded mb-5">
                  <div className="row no-gutters">
                    <div className="col-lg-6 align-self-center">
                      {" "}
                      <img
                        className="img-fluid d-block rounded"
                        src="images/projects/project-6.jpg"
                        alt=""
                      />{" "}
                    </div>
                    <div className="col-lg-6 align-self-center">
                      <div className="p-5">
                        <div className="badge badge-info text-1 font-weight-500 px-3 py-2 rounded-pill mb-3">
                          Category
                        </div>
                        <h3 className="text-10 font-weight-700 mb-3">
                          Project Title
                        </h3>
                        <p className="text-3 mb-4">
                          Quidam persius interesset his et, in quot quidam
                          persequeris vim, ad mea essent possim iriure. persius
                          interesset his et, in quot quidam persequeris.
                        </p>
                        <a
                          href="ajax/portfolio-ajax-project-6.html"
                          className="btn btn-dark popup-ajax"
                        >
                          See more
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow-sm rounded mb-5">
                  <div className="row no-gutters">
                    <div className="col-lg-6 align-self-center order-1 order-lg-0">
                      <div className="p-5">
                        <div className="badge badge-info text-1 font-weight-500 px-3 py-2 rounded-pill mb-3">
                          Category
                        </div>
                        <h3 className="text-10 font-weight-700 mb-3">
                          Project Title
                        </h3>
                        <p className="text-3 mb-4">
                          Quidam persius interesset his et, in quot quidam
                          persequeris vim, ad mea essent possim iriure. persius
                          interesset his et, in quot quidam persequeris.
                        </p>
                        <a
                          href="ajax/portfolio-ajax-project-9.html"
                          className="btn btn-dark popup-ajax"
                        >
                          See more
                        </a>{" "}
                      </div>
                    </div>
                    <div className="col-lg-6 align-self-center order-0 order-lg-1">
                      {" "}
                      <img
                        className="img-fluid d-block rounded"
                        src="images/projects/project-9.jpg"
                        alt=""
                      />{" "}
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow-sm rounded mb-4">
                  <div className="row no-gutters">
                    <div className="col-lg-6 align-self-center">
                      {" "}
                      <img
                        className="img-fluid d-block rounded"
                        src="images/projects/project-11.jpg"
                        alt=""
                      />{" "}
                    </div>
                    <div className="col-lg-6 align-self-center">
                      <div className="p-5">
                        <div className="badge badge-info text-1 font-weight-500 px-3 py-2 rounded-pill mb-3">
                          Category
                        </div>
                        <h3 className="text-10 font-weight-700 mb-3">
                          Project Title
                        </h3>
                        <p className="text-3 mb-4">
                          Quidam persius interesset his et, in quot quidam
                          persequeris vim, ad mea essent possim iriure. persius
                          interesset his et, in quot quidam persequeris.
                        </p>
                        <a
                          href="ajax/portfolio-ajax-project-11.html"
                          className="btn btn-dark popup-ajax"
                        >
                          See more
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="process" className="section bg-white">
            <div className="container px-lg-4 px-xl-5">
              <div className="row">
                <div className="col-lg-5">
                  <h2 className="text-8 font-weight-600 line-height-4 mb-3">
                    Simple workflow of build your design.
                  </h2>
                  <p className="lead mb-4">
                    My work process. Delivering work within time and budget
                    which meets client’s requirements is our moto.
                  </p>
                  <a href="#contact" className="btn-link text-4 smooth-scroll">
                    Let's talk with me
                    <i className="fas fa-chevron-right text-2 ml-2"></i>
                  </a>{" "}
                </div>
                <div className="col-lg-7 mt-5 mt-lg-0">
                  <div className="accordion arrow-right" id="faqTopics">
                    <div className="card mb-3">
                      <div className="card-header" id="heading1">
                        <h5 className="mb-0">
                          {" "}
                          <a
                            href="#"
                            className="collapsed text-4 d-flex align-items-center"
                            data-toggle="collapse"
                            data-target="#collapse1"
                            aria-expanded="false"
                            aria-controls="collapse1"
                          >
                            <span className="text-7 font-weight-500 ml-2 mr-3">
                              1
                            </span>
                            Planning & Consulting
                          </a>{" "}
                        </h5>
                      </div>
                      <div
                        id="collapse1"
                        className="collapse"
                        aria-labelledby="heading1"
                        data-parent="#faqTopics"
                      >
                        <div className="card-body text-3 line-height-5">
                          {" "}
                          Lisque persius interesset his et, in quot quidam
                          persequeris vim, ad mea essent possim iriure. Mutat
                          tacimates id sit. Ridens mediocritatem ius an, eu nec
                          magna imperdiet.{" "}
                        </div>
                      </div>
                    </div>
                    <div className="card mb-3">
                      <div className="card-header" id="heading2">
                        <h5 className="mb-0">
                          {" "}
                          <a
                            href="#"
                            className="collapsed text-4 d-flex align-items-center"
                            data-toggle="collapse"
                            data-target="#collapse2"
                            aria-expanded="false"
                            aria-controls="collapse2"
                          >
                            <span className="text-7 font-weight-500 ml-2 mr-3">
                              2
                            </span>
                            Content
                          </a>{" "}
                        </h5>
                      </div>
                      <div
                        id="collapse2"
                        className="collapse"
                        aria-labelledby="heading2"
                        data-parent="#faqTopics"
                      >
                        <div className="card-body text-3 line-height-5">
                          {" "}
                          Iisque Anim pariatur cliche reprehenderit, enim
                          eiusmod high life accusamus terry richardson ad squid.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo.{" "}
                        </div>
                      </div>
                    </div>
                    <div className="card mb-3">
                      <div className="card-header" id="heading3">
                        <h5 className="mb-0">
                          {" "}
                          <a
                            href="#"
                            className="collapsed text-4 d-flex align-items-center"
                            data-toggle="collapse"
                            data-target="#collapse3"
                            aria-expanded="false"
                            aria-controls="collapse3"
                          >
                            <span className="text-7 font-weight-500 ml-2 mr-3">
                              3
                            </span>
                            Conception
                          </a>{" "}
                        </h5>
                      </div>
                      <div
                        id="collapse3"
                        className="collapse"
                        aria-labelledby="heading3"
                        data-parent="#faqTopics"
                      >
                        <div className="card-body text-3 line-height-5">
                          {" "}
                          Iisque persius interesset his et, in quot quidam
                          persequeris vim, ad mea essent possim iriure. Mutat
                          tacimates id sit. Ridens mediocritatem ius an, eu nec
                          magna imperdiet.{" "}
                        </div>
                      </div>
                    </div>
                    <div className="card mb-3">
                      <div className="card-header" id="heading4">
                        <h5 className="mb-0">
                          {" "}
                          <a
                            href="#"
                            className="collapsed text-4 d-flex align-items-center"
                            data-toggle="collapse"
                            data-target="#collapse4"
                            aria-expanded="false"
                            aria-controls="collapse4"
                          >
                            <span className="text-7 font-weight-500 ml-2 mr-3">
                              4
                            </span>
                            Design & Development
                          </a>{" "}
                        </h5>
                      </div>
                      <div
                        id="collapse4"
                        className="collapse"
                        aria-labelledby="heading4"
                        data-parent="#faqTopics"
                      >
                        <div className="card-body text-3 line-height-5">
                          {" "}
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. Food truck
                          quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                          tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo.{" "}
                        </div>
                      </div>
                    </div>
                    <div className="card mb-0">
                      <div className="card-header" id="heading5">
                        <h5 className="mb-0">
                          {" "}
                          <a
                            href="#"
                            className="collapsed text-4 d-flex align-items-center"
                            data-toggle="collapse"
                            data-target="#collapse5"
                            aria-expanded="false"
                            aria-controls="collapse5"
                          >
                            <span className="text-7 font-weight-500 ml-2 mr-3">
                              5
                            </span>
                            Delivery & Launch
                          </a>{" "}
                        </h5>
                      </div>
                      <div
                        id="collapse5"
                        className="collapse"
                        aria-labelledby="heading5"
                        data-parent="#faqTopics"
                      >
                        <div className="card-body text-3 line-height-5">
                          {" "}
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. Food truck
                          quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                          tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo.{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-white px-lg-4 px-xl-5">
            <div className="container section hero-wrap rounded">
              <div className="hero-mask opacity-8 bg-primary rounded"></div>
              <div
                className="hero-bg parallax rounded"
                style={{ backgroundImage: `url('images/bg/image-8.jpg')` }}
              ></div>
              <div className="hero-content text-center">
                <h2 className="text-9 font-weight-600 text-white mb-4">
                  Interested in working with me?
                </h2>
                <a
                  href="#contact"
                  className="btn btn-light shadow-none smooth-scroll"
                >
                  Hire Me!
                </a>{" "}
              </div>
            </div>
          </section>

          <section id="clients" className="section bg-white">
            <div className="container">
              <div className="row">
                <div className="col-lg-9 mx-auto text-center">
                  <h2 className="text-8 font-weight-600 line-height-4 mb-4">
                    See what my happy clients say about me. I'm proud to have my
                    clients.
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-9 mx-auto">
                  <div
                    className="owl-carousel owl-theme"
                    data-autoplay="true"
                    data-autoheight="true"
                    data-loop="true"
                    data-items="1"
                  >
                    <div className="item text-center pb-4">
                      {" "}
                      <span className="text-9 text-light opacity-7">
                        <i className="fa fa-quote-left"></i>
                      </span>
                      <p className="text-5 font-weight-300">
                        “Easy to use, reasonably priced simply dummy text of the
                        printing and typesetting industry. Quidam lisque persius
                        interesset his et, in quot quidam possim iriure.”
                      </p>
                      <img
                        className="img-fluid rounded-circle border d-inline-block w-auto"
                        src="images/testimonial/client-sm-1.jpg"
                        alt=""
                      />{" "}
                      <strong className="d-block font-weight-500 text-uppercase">
                        Jay Shah
                      </strong>
                      <p className="text-muted">Founder at Icomatic Pvt Ltd</p>
                    </div>
                    <div className="item text-center pb-4">
                      {" "}
                      <span className="text-9 text-light opacity-7">
                        <i className="fa fa-quote-left"></i>
                      </span>
                      <p className="text-5 font-weight-300">
                        “I am happy Working with printing and typesetting
                        industry. Quidam lisque persius interesset his et, in
                        quot quidam persequeris essent possim iriure.”
                      </p>
                      <img
                        className="img-fluid rounded-circle border d-inline-block w-auto"
                        src="images/testimonial/client-sm-2.jpg"
                        alt=""
                      />{" "}
                      <strong className="d-block font-weight-500 text-uppercase">
                        Patrick Cary
                      </strong>
                      <p className="text-muted">Freelancer from USA</p>
                    </div>
                    <div className="item text-center pb-4">
                      {" "}
                      <span className="text-9 text-light opacity-7">
                        <i className="fa fa-quote-left"></i>
                      </span>
                      <p className="text-5 font-weight-300">
                        “Only trying it out since a few days. But up to now
                        excellent. Seems to work flawlessly.”
                      </p>
                      <img
                        className="img-fluid rounded-circle border d-inline-block w-auto"
                        src="images/testimonial/client-sm-3.jpg"
                        alt=""
                      />{" "}
                      <strong className="d-block font-weight-500 text-uppercase">
                        Dennis Jacques
                      </strong>
                      <p className="text-muted">User from USA</p>
                    </div>
                    <div className="item text-center pb-4">
                      {" "}
                      <span className="text-9 text-light opacity-7">
                        <i className="fa fa-quote-left"></i>
                      </span>
                      <p className="text-5 font-weight-300">
                        “I have used them twice now. Good rates, very efficient
                        service and priced simply dummy text of the printing and
                        typesetting industry quidam interesset his et.
                        Excellent.”
                      </p>
                      <img
                        className="img-fluid rounded-circle border d-inline-block w-auto"
                        src="images/testimonial/client-sm-4.jpg"
                        alt=""
                      />{" "}
                      <strong className="d-block font-weight-500 text-uppercase">
                        Chris Tom
                      </strong>
                      <p className="text-muted">User from UK</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="section">
            <div className="container px-lg-4 px-xl-5">
              <div className="row">
                <div className="col-lg-9 mx-auto text-center">
                  <h2 className="text-8 font-weight-600 line-height-4 mb-5">
                    Send us a note, and let’s get started on your project today!
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-10 col-xl-9 mx-auto">
                  <form
                    id="contact-form"
                    className="form-border"
                    action="php/mail.php"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            name="name"
                            type="text"
                            className="form-control"
                            required
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            name="email"
                            type="email"
                            className="form-control"
                            required
                            placeholder="Email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea
                        name="form-message"
                        className="form-control"
                        rows={3}
                        required
                        placeholder="Tell us more about your needs........"
                      ></textarea>
                    </div>
                    <p className="text-center mt-5 mb-0">
                      <button
                        id="submit-btn"
                        className="btn btn-outline-dark shadow-none d-inline-flex"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </p>
                    <p className="text-muted text-center mt-4">
                      I will get back to you in less than 24 hours.
                    </p>
                  </form>
                </div>
              </div>
              <ul className="social-icons social-icons-lg social-icons-muted justify-content-center">
                <li className="social-icons-facebook">
                  <a
                    data-toggle="tooltip"
                    href="http://www.facebook.com/"
                    target="_blank"
                    title=""
                    data-original-title="Facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="social-icons-twitter">
                  <a
                    data-toggle="tooltip"
                    href="http://www.twitter.com/"
                    target="_blank"
                    title=""
                    data-original-title="Twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="social-icons-dribbble">
                  <a
                    data-toggle="tooltip"
                    href="http://www.dribbble.com/"
                    target="_blank"
                    title=""
                    data-original-title="Dribbble"
                  >
                    <i className="fab fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <footer id="footer" className="section">
          <div className="container px-lg-4 px-xl-5">
            <div className="row">
              <div className="col-lg-6 text-center text-lg-left">
                <p className="mb-3 mb-lg-0">
                  Copyright &copy; 2021 <a href="#">Doon</a>. All Rights
                  Reserved.
                </p>
              </div>
              <div className="col-lg-6">
                <ul className="nav nav-separator justify-content-center justify-content-lg-end">
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      data-toggle="modal"
                      data-target="#terms-policy"
                      href="#"
                    >
                      Terms of Use
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      data-toggle="modal"
                      data-target="#terms-policy"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link"
                      data-toggle="modal"
                      data-target="#disclaimer"
                      href="#"
                    >
                      Disclaimer
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <a
        id="back-to-top"
        className="rounded"
        data-toggle="tooltip"
        title="Back to Top"
        href="javascript:void(0)"
      >
        <i className="fa fa-chevron-up"></i>
      </a>

      <div
        id="terms-policy"
        className="modal fade"
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-xl modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Terms & Policy</h5>
              <button
                type="button"
                className="close font-weight-400"
                data-dismiss="modal"
                aria-label="Close"
              >
                {" "}
                <span aria-hidden="true">&times;</span>{" "}
              </button>
            </div>
            <div className="modal-body p-4">
              <p className="text-3">
                Quidam lisque persius interesset his et, in quot quidam
                persequeris vim, ad mea essent possim iriure. Lisque persius
                interesset his et, in quot quidam persequeris vim, ad mea essent
                possim iriure. lisque persius interesset his et, in quot quidam
                mea essent possim iriure.
              </p>
              <h3 className="mb-3 mt-4">Terms of Use</h3>
              <p>
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure. Lisque persius interesset his
                et, in quot quidam persequeris vim, ad mea essent possim iriure.
                lisque persius interesset his et, in quot quidam mea essent
                possim iriure.
              </p>
              <h5 className="text-4">
                Part I – Information Doon collects and controls
              </h5>
              <p>
                Persius interesset his et, in quot quidam persequeris vim, ad
                mea essent possim iriure. Lisque persius interesset his et, in
                quot quidam persequeris vim, ad mea essent possim iriure.
              </p>
              <h5 className="text-4">
                Part II – Information that Doon processes on your behalf
              </h5>
              <p>
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure. Lisque persius interesset his
                et, in quot quidam persequeris vim.
              </p>
              <h5 className="text-4">Part III – General</h5>
              <p>
                Interesset his et, in quot quidam persequeris vim, ad mea essent
                possim iriure. Lisque persius interesset his et, in quot quidam
                persequeris vim, ad mea essent possim iriure. lisque persius
                interesset his et, in quot quidam mea essent possim iriure.
              </p>
              <h3 className="mb-3 mt-4">Privacy Policy</h3>
              <p>
                Quidam lisque persius interesset his et, in quot quidam
                persequeris vim, ad mea essent possim iriure. Lisque persius
                interesset his et, in quot quidam persequeris vim, ad mea essent
                possim iriure. lisque persius interesset his et, in quot quidam
                mea essent possim iriure.
              </p>
              <ol className="line-height-5">
                <li>
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </li>
                <li>
                  Quidam lisque persius interesset his et, Lisque persius
                  interesset his et, in quot quidam persequeris vim, ad mea
                  essent possim iriure.
                </li>
                <li>
                  In quot quidam persequeris vim, ad mea essent possim iriure.
                  Quidam lisque persius interesset his et.
                </li>
                <li>
                  Quidam lisque persius interesset his et, Lisque persius
                  interesset his et.
                </li>
                <li>
                  Interesset his et, Lisque persius interesset his et, in quot
                  quidam persequeris vim, ad mea essent possim iriure.
                </li>
                <li>
                  Persius interesset his et, Lisque persius interesset his et,
                  in quot quidam persequeris vim, ad mea essent possim iriure.
                </li>
                <li>
                  Quot quidam persequeris vim Quidam lisque persius interesset
                  his et, Lisque persius interesset his et, in quot quidam
                  persequeris vim, ad mea essent possim iriure.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div
        id="disclaimer"
        className="modal fade"
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Copyright & Disclaimer</h5>
              <button
                type="button"
                className="close font-weight-400"
                data-dismiss="modal"
                aria-label="Close"
              >
                {" "}
                <span aria-hidden="true">&times;</span>{" "}
              </button>
            </div>
            <div className="modal-body p-4">
              <p className="text-3">
                Quidam lisque persius interesset his et, in quot quidam
                persequeris vim, ad mea essent possim iriure. Lisque persius
                interesset his et, in quot quidam persequeris vim, ad mea essent
                possim iriure. lisque persius interesset his et, in quot quidam
                mea essent possim iriure.
              </p>
              <ul className="line-height-5">
                <li>
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </li>
                <li>
                  Quidam lisque persius interesset his et, Lisque persius
                  interesset his et, in quot quidam persequeris vim, ad mea
                  essent possim iriure.
                </li>
                <li>
                  In quot quidam persequeris vim, ad mea essent possim iriure.
                  Quidam lisque persius interesset his et.
                </li>
                <li>
                  Quidam lisque persius interesset his et, Lisque persius
                  interesset his et.
                </li>
                <li>
                  Interesset his et, Lisque persius interesset his et, in quot
                  quidam persequeris vim, ad mea essent possim iriure.
                </li>
                <li>
                  Persius interesset his et, Lisque persius interesset his et,
                  in quot quidam persequeris vim, ad mea essent possim iriure.
                </li>
                <li>
                  Quot quidam persequeris vim Quidam lisque persius interesset
                  his et, Lisque persius interesset his et, in quot quidam
                  persequeris vim, ad mea essent possim iriure.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="styles-switcher" className="right">
        <h2 className="text-3">Color Switcher</h2>
        <hr />
        <ul>
          <li
            className="red"
            data-toggle="tooltip"
            title="Red"
            data-path="css/color-red.css"
          ></li>
          <li
            className="pink"
            data-toggle="tooltip"
            title="Pink"
            data-path="css/color-pink.css"
          ></li>
          <li
            className="purple"
            data-toggle="tooltip"
            title="Purple"
            data-path="css/color-purple.css"
          ></li>
          <li
            className="blue"
            data-toggle="tooltip"
            title="Blue"
            data-path="css/color-blue.css"
          ></li>
          <li
            className="cyan"
            data-toggle="tooltip"
            title="Cyan"
            data-path="css/color-cyan.css"
          ></li>
          <li
            className="teal"
            data-toggle="tooltip"
            title="Teal"
            data-path="css/color-teal.css"
          ></li>
          <li
            className="green"
            data-toggle="tooltip"
            title="Green"
            data-path="css/color-green.css"
          ></li>
          <li
            className="yellow"
            data-toggle="tooltip"
            title="Yellow"
            data-path="css/color-yellow.css"
          ></li>
          <li
            className="orange"
            data-toggle="tooltip"
            title="Orange"
            data-path="css/color-orange.css"
          ></li>
          <li
            className="brown"
            data-toggle="tooltip"
            title="Brown"
            data-path="css/color-brown.css"
          ></li>
        </ul>
        <button
          className="btn btn-dark text-1 font-weight-400 rounded-0 shadow-none px-2 py-1"
          id="reset-color"
        >
          Reset Default
        </button>
        <button className="btn switcher-toggle">
          <i className="fas fa-cog"></i>
        </button>
      </div>
    </>
  );
}

export default App;
