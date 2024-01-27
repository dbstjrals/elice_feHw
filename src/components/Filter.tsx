"use client";

import styled from "styled-components";
import { FILTER_LIST } from "@/constants/filterList";
import useFilter from "@/hooks/useFilter";

const Filter = () => {
  const { isSelected, updateFilter } = useFilter();

  return (
    <Table>
      {FILTER_LIST.map((category, index) => (
        <Item key={category.label} $isEnd={index === FILTER_LIST.length - 1}>
          <Label>{category.label}</Label>
          <Value>
            {category.values.map((value, index) => {
              const label = category.enLabel;
              const sortName = index.toString();
              return (
                <ValueChip
                  key={value.name}
                  className={isSelected({ label, sortName }) ? "active" : ""}
                  onClick={() => updateFilter({ label, sortName })}
                >
                  <span>{value.name}</span>
                </ValueChip>
              );
            })}
          </Value>
        </Item>
      ))}
    </Table>
  );
};

export default Filter;

const Table = styled.div`
  width: 100%;
  min-width: 500px;
  margin-bottom: 0.75rem;

  background-color: white;

  border: 1px solid rgb(225, 226, 228);
`;

const Item = styled.div<{ $isEnd: boolean }>`
  display: flex;

  border-bottom: ${({ $isEnd }) => !$isEnd && "1px solid rgb(225, 226, 228)"};
`;

const Label = styled.div`
  width: 8rem;
  min-width: 8rem;
  padding: 0.875rem 1rem;

  display: flex;

  font-size: 1rem;
  font-weight: 700;
  color: #5e5f61;

  background-color: #f9fafc;
  border-right: 1px solid rgb(225, 226, 228);
`;

const Value = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  padding: 0 0.5rem;
`;

const ValueChip = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  margin: 0.5rem;
  padding: 0.25rem 0.75rem;

  border-radius: 30px;

  background-color: rgb(240, 241, 243);
  transition: background-color 0.2s ease-in-out;

  span {
    font-size: 0.875rem;
    color: rgb(94, 95, 97);
  }

  &:hover {
    background-color: rgb(225, 226, 228);
    transition: background-color 0.2s ease-in-out;

    span {
      color: rgb(0, 0, 0);
    }
  }

  &.active {
    background-color: rgb(82, 79, 161);
    span {
      color: white;
    }

    &:hover {
      background-color: rgb(66, 63, 140);
      transition: background-color 0.2s ease-in-out;
    }
  }
`;
