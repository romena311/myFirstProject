import React, { Component } from "react";
import PostIcon from './postIcon';
import PlusIcon from './plus';
import styles from '../styles/latestpost.module.css';

class LatestPost extends Component {
  render() {
    return (
      <div id="footer" className="d-flex flex-column">
            <div className="header d-inline-flex px-2 pt-4">
                <PostIcon/>
                <h4 className="px-1 my-1">{" "}Latest Posts{" "}</h4>
            </div>
            <hr className="bg-light w-100"/>
            <div className="content my-2">
                <div className="imgThumbnailContent pb-3">
                    <div className="imgThumbnail img-fluid">
                        <div className={`${styles.IMG} img-bg`}>
                            <div className="overlayImg">
                                <div>
                                    <PlusIcon/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contentHolder">
                        <h6>
                            <a href="#">{" "}The Headlines{" "}</a>
                        </h6>
                    </div>
                </div>
                <div className="imgThumbnailContent pb-3">
                    <div className="imgThumbnail img-fluid">
                        <div className={`${styles.IMG} img-bg`}>
                            <div className="overlayImg">
                                <div>
                                    <PlusIcon/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contentHolder">
                        <h6>
                            <a href="#">{" "}The Headlines{" "}</a>
                        </h6>
                    </div>
                </div>
                <div className="imgThumbnailContent pb-3">
                    <div className="imgThumbnail img-fluid">
                        <div className={`${styles.IMG} img-bg`}>
                            <div className="overlayImg">
                                <div>
                                    <PlusIcon/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contentHolder">
                        <h6>
                            <a href="#">{" "}The Headlines{" "}</a>
                        </h6>
                    </div>
                </div>
                <div className="imgThumbnailContent pb-3">
                    <div className="imgThumbnail img-fluid">
                        <div className={`${styles.IMG} img-bg`}>
                            <div className="overlayImg">
                                <div>
                                    <PlusIcon/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contentHolder">
                        <h6>
                            <a href="#">{" "}The Headlines{" "}</a>
                        </h6>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}


export default LatestPost;