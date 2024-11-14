import { useState } from "react";
import { useRecoilState } from "recoil";
import { signUpState } from "@atoms/signUpState";
import { CHIP_DATA } from "@constants/chip";
export const usePatchChip = () => {
  const [updateData, setUpdateData] = useRecoilState(signUpState);
  const [selectedChip, setSelectedChip] = useState(
    CHIP_DATA.map(
      (chip) =>
        updateData.keyword1 === chip ||
        updateData.keyword2 === chip ||
        updateData.keyword3 === chip
    )
  );
  const selectedCount = selectedChip.filter((chip) => chip).length;

  const handleClickStatus = (index) => {
    const updatedChip = [...selectedChip];
    console.log(updatedChip);
    updatedChip[index] = !updatedChip[index];
    if (updatedChip.filter((chip) => chip).length > 3) {
      return;
    }
    setSelectedChip(updatedChip);
    const selectedKeywords = updatedChip
      .map((isSelected, idx) => (isSelected ? CHIP_DATA[idx] : null))
      .filter((keyword) => keyword !== null);

    if (selectedKeywords.length === 3) {
      setUpdateData((prevData) => ({
        ...prevData,
        keyword1: selectedKeywords[0],
        keyword2: selectedKeywords[1],
        keyword3: selectedKeywords[2],
      }));
    }
  };

  return { selectedChip, handleClickStatus, selectedCount };
};
