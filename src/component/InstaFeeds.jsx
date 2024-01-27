import React, { useState, useEffect } from "react";

const InstaFeeds = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.instagram.com/web/search/topsearch/?context=blended&query=gunkwang2021/"
        );

        const result = await response.json();

        if (result.users && result.users.length > 0) {
          setUserData(result.users[0].user);
          setLoading(false);
        } else {
          console.error("No user data found in the response:", result);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="user-profile">
      {loading ? (
        <p>Loading...</p>
      ) : userData ? (
        <div>
          <img src={userData.profile_pic_url} alt={userData.username} />
          <p>Username: {userData.username}</p>
          <p>Full Name: {userData.full_name}</p>
          <p>Followers: {userData.all_media_count}</p>
          {/* Add more information as needed */}
        </div>
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
};

export default InstaFeeds;
