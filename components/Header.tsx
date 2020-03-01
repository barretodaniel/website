export default () => {
  return (
    <nav className="relative z-10 flex items-center justify-between sm:h-10 lg:justify-start">
      <div className="flex items-center flex-grow flex-shrink-0">
        <div className="flex items-center justify-between w-full">
          <a className="ml-2" href="/">
            <img className="h-8 w-auto sm:h-10" src="/img/logo.svg" alt="Logo" />
          </a>
          <div className="flex items-center">
            <a className="ml-2" href="https://github.com/barretodaniel">
              <img className="md:h-8 w-auto h-6" src="/img/github.svg" alt="Github Profile" />
            </a>
            <a className="ml-2" href="https://twitter.com/barretodanielr">
              <img className="md:h-8 w-auto h-6" src="/img/twitter.svg" alt="Twitter Profile" />
            </a>
            <a className="ml-2" href="https://www.linkedin.com/in/daniel-r-barreto/">
              <img className="md:h-8 w-auto h-6" src="/img/linkedin.svg" alt="LinkedIn Profile" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
