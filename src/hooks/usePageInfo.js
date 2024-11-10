import { useParams, useLocation } from "react-router-dom";

export const usePageInfo = () => {
  const { page } = useParams();
  const url = useLocation().pathname;
  const parts = url.split("/");
  const nextPath = `/${parts[1]}/${Number(page) + 1}`;

  return { page, nextPath };
};
