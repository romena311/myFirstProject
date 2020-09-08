import React, { Component } from "react";
import GlobalUserIcon from "./global";
import Facebook from "./facebook";
import Twitter from "./twitter";
import GitHub from "./github";
import GooglePlus from "./googleplus";
import Instagram from "./instagram";
import LinkedIn from "./linkedin";
import Pinterest from "./pinterest";
import Skype from "./skype";

class Social extends Component {
  render() {
    return (
      <div id="footer" className="d-flex flex-column">
            <div className="header d-inline-flex px-2 pt-4">
                <GlobalUserIcon/>
                <h4 className="px-1 my-1">{" "}Follow Us{" "}</h4>
            </div>
            <hr className="bg-light w-100" />
            <div className="content my-2">
                <button className="btn mx-2 my-2 px-1 py-2">
                    <a href="#" className="mx-2">
                        <Facebook />
                    </a>
                </button>
                <button className="btn mx-2 my-2 px-1 py-2">
                    <a href="#" className="mx-2">
                        <Twitter />
                    </a>
                </button>
                <button className="btn mx-2 my-2 px-1 py-2">
                    <a href="#" className="mx-2">
                        <GitHub />
                    </a>
                </button>
                <button className="btn mx-2 my-2 px-1 py-2">
                    <a href="#" className="mx-2">
                        <GooglePlus />
                    </a>
                </button>
                <button className="btn mx-2 my-2 px-1 py-2">
                    <a href="#" className="mx-2">
                        <Instagram />
                    </a>
                </button>
                <button className="btn mx-2 my-2 px-1 py-2">
                    <a href="#" className="mx-2">
                        <LinkedIn />
                    </a>
                </button>
                <button className="btn mx-2 my-2 px-1 py-2">
                    <a href="#" className="mx-2">
                        <Pinterest />
                    </a>
                </button>
                <button className="btn mx-2 my-2 px-1 py-2">
                    <a href="#" className="mx-2">
                        <Skype />
                    </a>
                </button>
            </div>
      </div>
    );
  }
}

export default Social;
