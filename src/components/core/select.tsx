import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Option = {
  label: string;
  value: string;
};

type CustomSelectProps = {
  dataSource: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
};

export const CustomSelect: React.FC<CustomSelectProps> = ({
  dataSource,
  value,
  onChange,
  placeholder = "Select an option",
  label = "Options",
}) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {dataSource.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

type GroupedOption = {
  label: string;
  options: { label: string; value: string }[];
};

type GroupedSelectProps = {
  data: GroupedOption[];
  value: string;
  onChange: (value: string) => void;
};

export const GroupedSelect: React.FC<GroupedSelectProps> = ({
  data,
  value,
  onChange,
}) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select an item" />
      </SelectTrigger>
      <SelectContent>
        {data.map((group) => (
          <SelectGroup key={group.label}>
            <SelectLabel>{group.label}</SelectLabel>
            {group.options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
};
