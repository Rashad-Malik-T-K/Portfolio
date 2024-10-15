import React from "react";
import Skill from "./Skill";
import { Text3D } from "@react-three/drei";
const Skills = ({ icons, font }) => {
  const textOptions = {
    font,
    size: 10,
    height: 4,
  };
  return (
    <group>
      <mesh rotation={[0, Math.PI, 0]} position={[-80, 0, 120]}>
        <Text3D {...textOptions}>Skills</Text3D>
        <meshStandardMaterial attach="material" color="#fafafa" metalness={1} />
      </mesh>
      {/*React*/}
      <Skill icon={icons[1]} position={[-100, 5, 80]} scale={[10, 7, 1]} />
      {/*Python*/}
      <Skill icon={icons[3]} position={[-110, 5, 60]} scale={[7, 7, 1]} />
      {/*SQl*/}
      <Skill icon={icons[4]} position={[-100, 5, 100]} scale={[10, 7, 1]} />
      {/*CPP*/}
      <Skill icon={icons[5]} position={[-70, 5, 60]} scale={[6, 6, 1]} />
      {/*HTML*/}
      <Skill icon={icons[6]} position={[-80, 5, 80]} scale={[7, 7, 1]} />
      {/*CSS*/}
      <Skill icon={icons[7]} position={[-120, 5, 100]} scale={[7, 7, 1]} />
      {/*THREE*/}
    </group>
  );
};

export default Skills;
