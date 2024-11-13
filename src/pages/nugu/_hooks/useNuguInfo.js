import { useEffect, useState } from "react";
import { getNuguInfo } from "@apis/nuguInfo";
import Cookies from "js-cookie";

export const useNuguInfo = (uuid) => {
  const [data, setData] = useState({
    nickname: "",
    mbti: "",
    org: "",
    intro: "",
    instaUrl: "",
    keywords: [],
  });
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!uuid) return;
    if (Cookies.get("access_token")) {
      setIsAdmin(true);
    }

    const fetchData = async () => {
      try {
        const response = await getNuguInfo(uuid);
        const {
          nickname,
          mbti,
          org,
          intro,
          insta_url,
          keyword1,
          keyword2,
          keyword3,
        } = response;

        setData({
          nickname,
          mbti,
          org,
          intro,
          instaUrl: insta_url,
          keywords: [keyword1, keyword2, keyword3],
        });
      } catch (err) {
        console.error("Error fetching Nugu Info:", err);
        setError(err);
      }
    };

    fetchData();
  }, [uuid]);

  return { data, error, isAdmin };
};
