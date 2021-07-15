import React from "react";

import "./UserInfo.css";

const UserInfo = ({ user }) => (
  <div className="user-infos">
    <img
      src="https://scontent.fmaa1-3.fna.fbcdn.net/v/t1.6435-9/67787568_1455830591240470_478656057686622208_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=174925&_nc_ohc=B8JrDWdOvVkAX9BMS46&_nc_ht=scontent.fmaa1-3.fna&oh=851d899eb2d4a459aebfb12de8f58879&oe=60D4A62A"
      className="p-2 avatar"
      width="130"
      height="130"
      alt="User"
    />
    <div className="user">
      <h5>yaswanth</h5>
      <div className="infos">
        {user.location && (
          <div className="info">
            <i className="fa fa-map-marker pr-1" />
            <span>{user.location} · </span>
          </div>
        )}
        {user.blog && (
          <div className="info">
            <i className="fa fa-globe pr-1" />
            <span>{user.blog} · </span>
          </div>
        )}
        {user.email && (
          <div className="info">
            <i className="fa fa-envelope pr-1" />
            <span> pasumarthiyaswanth1000@gmail.com </span>
          </div>
        )}
        {user.twitter_username && (
          <div className="info">
            <i className="fa fa-twitter pr-1" />
            <span>{user.twitter_username} · </span>
            <br />
          </div>
        )}

        {user.followers && (
          <div className="info">
            <i className="fa fa-group" />
            <span>{user.followers} Followers · </span>
          </div>
        )}
        {user.following && (
          <div className="info">
            <i className="fa fa-heart pr-1" />
            <span>{user.following} Following </span>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default React.memo(UserInfo);
