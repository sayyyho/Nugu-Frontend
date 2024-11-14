import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { signUpState } from "@atoms/signUpState";
import { CHIP_DATA } from "@constants/chip";
export const usePatchChip = () => {
  const [updateData, setUpdateData] = useRecoilState(signUpState);
  const [selectedChip, setSelectedChip] = useState(
    new Array(CHIP_DATA.length).fill(false)
  );
  const selectedCount = selectedChip.filter((chip) => chip).length;

  useEffect(() => {
    const initialSelectedChips = [
      updateData.keyword1,
      updateData.keyword2,
      updateData.keyword3,
    ];

    const updatedChip = [...selectedChip];

    initialSelectedChips.forEach((keyword) => {
      const index = CHIP_DATA.indexOf(keyword);
      if (index !== -1) {
        updatedChip[index] = true;
      }
    });

    setSelectedChip(updatedChip);
  }, [updateData]);

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
