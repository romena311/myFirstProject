import Social from './social';
import LatestPost from './latestPosts';
import QuickLinks from './quicklinks';

function Footer() {
  return (
    <>
      <footer className="bg-black tColor">
        <div className="row">
            <div className="col-lg-4 pt-4">
              <QuickLinks/>
            </div>
            <div className="col-lg-4 pt-4">
               <Social/> 
            </div>
            <div className="col-lg-4 pt-4">
              <LatestPost/>
            </div>
          </div>
      </footer>
    </>
  );
}

export default Footer;
