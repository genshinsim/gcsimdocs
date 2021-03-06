import React from "react";
import styled from "styled-components";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import data from "./data.json";

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const Thead = styled.thead`
  background-color: #333;
`;

const TD = styled.td`
  padding: 0.5rem;
`;

const TH = styled.th`
  padding: 0.5rem;
`;

function AbilHitlag({ data }) {
  const rows = data.map((e) => {
    return (
      <tr key={e.ability}>
        <TD>{e.ability}</TD>
        <TD>{e.hitHaltTime}</TD>
        <TD>{e.hitHaltTimeScale}</TD>
        <TD>{e.canBeDefenseHalt ? "true" : "false"}</TD>
        <TD>{e.deployable ? "true" : "false"}</TD>
      </tr>
    );
  });

  return (
    <div style={{ marginTop: "1rem", width: "100%" }}>
      <Table>
        <Thead>
          <tr>
            <TH>Ability</TH>
            <TH>Halt Time</TH>
            <TH>Scale</TH>
            <TH>Defense Halt</TH>
            <TH>Deployable</TH>
          </tr>
        </Thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
}

const abils = ["normal", "charge", "skill", "burst", "asc", "cons"];
const abilLabels = [
  "Normal",
  "Charge Attack",
  "Skill",
  "Burst",
  "Ascension",
  "Cons",
];

export default function HitlagTable({ character }) {
  if (!(character in data)) {
    return <div>No hitlag data for character</div>;
    // return <div>No hitlag data found for {character}</div>;
  }
  const char = data[character];
  let tabs = [];
  let count = 0;
  abils.forEach((a, i) => {
    //skip if no data for this tab
    if (!(a in char)) {
      return;
    }
    console.log(char[a]);
    count++;
    tabs.push(
      <TabItem value={a} label={abilLabels[i]} key={a}>
        <AbilHitlag data={char[a]} />
      </TabItem>
    );
  });
  if (count == 0) {
    return <div>No hitlag data for character</div>;
  }
  return <Tabs>{tabs}</Tabs>;
}
