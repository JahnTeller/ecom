import { Selection } from "@nextui-org/react";
export interface heroProps {
  page: string;
  path: string;
}
export interface productProps {
  image: string;
  name: string;
  price: number;
  onSale: false | number;
  category: caterogyProps;
  description: null | string;
  createdAt: null | Date;
  updatedAt: null | Date;
}
export interface caterogyProps {
  id: string;
  title: string;
}

export interface itemDropdown {
  id: string;
  title: string;
}
export interface DropdownComponentProps {
  items: itemDropdown[];
  selectedItem: (item: string) => void;
}
