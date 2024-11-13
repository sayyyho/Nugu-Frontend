import { useState } from "react";
import { CHIP_DATA } from "@constants/chip";

export const useIntroForm = () => {
  const [content, setContent] = useState(""); // 소개글을 저장하는 상태
  const [selectedChip, setSelectedChip] = useState(
    Array(CHIP_DATA.length).fill(false)
  ); // 선택된 칩 상태

  // 키워드 선택 처리
  const handleClickStatus = (index) => {
    const newSelectedChip = [...selectedChip];
    newSelectedChip[index] = !newSelectedChip[index];

    if (newSelectedChip.filter((chip) => chip).length > 3) {
      return;
    }

    setSelectedChip(newSelectedChip);
  };

  const selectedKeywords = selectedChip
    .map((isSelected, idx) => (isSelected ? CHIP_DATA[idx] : null))
    .filter((keyword) => keyword !== null)
    .slice(0, 3);
  console.log("selectedKeywords", selectedKeywords);

  const [keyword1, keyword2, keyword3] = selectedKeywords;

  const handleChangeContent = (event) => {
    setContent(event.target.value);
  };

  return {
    content,
    handleChangeContent,
    handleClickStatus,
    keyword1,
    keyword2,
    keyword3,
    selectedChip,
    selectedCount: selectedKeywords.length,
  };
};
