import React, { useState, useEffect } from "react";
import * as api from "../../services/api";

import "./social-media-links.css";

const SocialMediaLinks = () => {
  const [links, setLinks] = useState({
    linkedIn_link: "",
    facebook_link: "",
    instagram_link: "",
    twitter_link: "",
  });

  useEffect(() => {
    (async function () {
      api
        .fetchWebsiteDetails()
        .then((result) => result.data.data)
        .then((res) => setLinks(res[0]));
    })();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission logic here
    console.log(links);
    api.updateSocialMediaLinks(links);
  };

  return (
    <div className="social-media-container">
      <h2>Add social media links to contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="linkedin">LinkedIn</label>
          <input
            type="text"
            id="linkedin"
            name="linkedin"
            placeholder="Enter your LinkedIn profile URL"
            value={links.linkedIn_link}
            onChange={(e) =>
              setLinks({ ...links, linkedIn_link: e.target.value })
            }
          />
        </div>
        <div className="input-container">
          <label htmlFor="facebook">Facebook</label>
          <input
            type="text"
            id="facebook"
            name="facebook"
            placeholder="Enter your Facebook profile URL"
            value={links.facebook_link}
            onChange={(e) =>
              setLinks({ ...links, facebook_link: e.target.value })
            }
          />
        </div>
        <div className="input-container">
          <label htmlFor="instagram">Instagram</label>
          <input
            type="text"
            id="instagram"
            name="instagram"
            placeholder="Enter your Instagram profile URL"
            value={links.instagram_link}
            onChange={(e) =>
              setLinks({ ...links, instagram_link: e.target.value })
            }
          />
        </div>
        <div className="input-container">
          <label htmlFor="twitter">Twitter</label>
          <input
            type="text"
            id="twitter"
            name="twitter"
            placeholder="Enter your Twitter profile URL"
            value={links.twitter_link}
            onChange={(e) =>
              setLinks({ ...links, twitter_link: e.target.value })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SocialMediaLinks;
