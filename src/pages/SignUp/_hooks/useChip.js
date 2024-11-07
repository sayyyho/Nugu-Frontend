import { useRecoilState, useSetRecoilState } from "recoil";
import { chipState } from "@atoms/chipState";
import { signUpState } from "@atoms/signUpState";
import { CHIP_DATA } from "@constants/chip";

export const useChip = () => {
  const [selectedChip, setSelectedChip] = useRecoilState(chipState);
  const setSignUpData = useSetRecoilState(signUpState);

  const selectedCount = selectedChip.filter((chip) => chip).length;

  const handleClickStatus = (index) => {
    const newSelectedChip = [...selectedChip];
    newSelectedChip[index] = !newSelectedChip[index];

    if (newSelectedChip.filter((chip) => chip).length > 3) {
      return;
    }

    setSelectedChip(newSelectedChip);

    const selectedKeywords = newSelectedChip
      .map((isSelected, idx) => (isSelected ? CHIP_DATA[idx] : null))
      .filter((keyword) => keyword !== null);

    if (selectedKeywords.length === 3) {
      setSignUpData((prevData) => ({
        ...prevData,
        keyword1: selectedKeywords[0],
        keyword2: selectedKeywords[1],
        keyword3: selectedKeywords[2],
      }));
    }
  };

  return { selectedChip, handleClickStatus, selectedCount };
};
