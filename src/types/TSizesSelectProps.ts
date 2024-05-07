import { TSize } from './TProductDetailsObject';

export type TSizesSelectProps = {
  sizesList: TSize[];
  active: string;
  changeActive: React.Dispatch<React.SetStateAction<string>>;
};
