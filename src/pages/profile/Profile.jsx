import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar className="sidebar"/>
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/1.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/1.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Prashanth Nelluri</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
                <hr />
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed className="feed"/>
            <Rightbar/>
          </div>
        </div>
      </div>
    </>
  );
}