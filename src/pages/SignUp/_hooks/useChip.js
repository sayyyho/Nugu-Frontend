import { useRecoilState } from "recoil";
import { chipState } from "@atoms/chipState";

export const useChip = () => {
  const [selectedChip, setSelectedChip] = useRecoilState(chipState);
  const selectedCount = selectedChip.filter((chip) => chip).length;

  const handleClickStatus = (index) => {
    if (selectedCount >= 3 && !selectedChip[index]) {
      return;
    }

    const newSelectedChip = [...selectedChip];
    newSelectedChip[index] = !newSelectedChip[index];
    setSelectedChip(newSelectedChip);
  };

  return { selectedChip, handleClickStatus, selectedCount };
};
