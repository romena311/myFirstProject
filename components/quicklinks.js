import React, { Component } from "react";
import Link from 'next/link';
import ProfileIcon from './profile';
import GalleryIcon from './galleryIcon';
import PowerIcon from './power';

class QuickLinks extends Component {
  render() {
    return (
      <div id="footer" className="d-flex flex-column">
            <div className="header d-inline-flex px-2 pt-4">
            <ProfileIcon/>
            <h4 className="px-1 my-1">{" "}About Us{" "}</h4>
            </div>
            <hr className="bg-light w-100" />
            <div className="content my-2">
            <p className="px-1 py-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quo,
                doloremque error voluptatum! Ab?
                <span className="pl-3">
                    <Link href="/about">
                        <a className="tColor">More...</a>
                    </Link>
                </span>
            </p>
            </div>
            <div className="header d-inline-flex px-2 pt-4">
                <GalleryIcon/>
                <h4 className="px-1 my-1">{" "}Showcase{" "}</h4>
            </div>
            <hr className="bg-light w-100" />
            <div className="header d-inline-flex px-2 pt-4">
                <PowerIcon/>
                <h4 className="px-1 my-1">{" "}Sign Up{" "}</h4>
            </div>
            <hr className="bg-light w-100" />
      </div>
    );
  }
}

export default QuickLinks;
