"use client";
import React from "react";
import { DropdownComponentProps } from "@/util/lib";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Selection,
} from "@nextui-org/react";

export default function Dropdowncomponent({
  items,
  selectedItem,
}: DropdownComponentProps) {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set(["default"]),
  );
  const matchSelected = items.find(
    (item) => item.id === Array.from(selectedKeys)[0],
  );
  console.log(matchSelected);
  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys],
  );
  const dropItem = items.map((item) => (
    <DropdownItem key={item.id}>{item.title}</DropdownItem>
  ));
  selectedItem(
    matchSelected != undefined ? matchSelected.title : selectedValue,
  );

  return (
    <Dropdown radius="sm">
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize">
          {matchSelected != undefined ? matchSelected.title : selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        {dropItem}
      </DropdownMenu>
    </Dropdown>
  );
}
