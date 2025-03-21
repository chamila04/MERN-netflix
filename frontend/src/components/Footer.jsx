import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 md:px-8 bg-black text-white border-t border-gray-800">
      <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-5m leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href="https://github.com/chamila04"
            target="_blank"
            className="font-medium underline underline-offset-4"
          >
            Chamila Senaratne
          </a>
          . The source code is available on{" "}
          <a
            href="https://github.com/chamila04/MERN-netflix"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Github
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
