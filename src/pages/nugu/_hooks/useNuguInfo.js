import { useEffect, useState } from "react";
import { getNuguInfo } from "@apis/nuguInfo";

export const useNuguInfo = (uuid) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!uuid) return;

    const fetchData = async () => {
      try {
        const response = await getNuguInfo(uuid);
        console.log(response);
        setData(response);
      } catch (err) {
        console.error("Error fetching Nugu Info:", err);
        setError(err);
      }
    };

    fetchData();
  }, [uuid]);
  return { data, error };
};

// TODO - 쿠키 있으면 상태 가능으로 없으면 불가능으로 상태관리 - 상태 넘겨주기
