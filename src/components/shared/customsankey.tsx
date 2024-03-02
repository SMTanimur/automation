import React from "react";
import { Sankey, SankeyProps } from "./Snakey";
import { data } from "~/data";

// Define props for the SankeyNode component
type SankeyNodeProps = {
  data: SankeyProps["data"]; // Pass data from React Flow to Sankey component
  width?: number;
  height?: number;
};

// Define SankeyNode component
const SankeyNode: React.FC<SankeyNodeProps> = ({ data, width = 200, height = 200 }) => {
  return (
    <div style={{ width, height }}>
      <Sankey data={data} width={width} height={height} /> {/* Render Sankey component */}
    </div>
  );
};

// Define custom node type for React Flow
export const SankeyNodeComponent = (props:any) => {
    const { data } = props;
    return (
            <SankeyNode 
             data={data}
             width={700}
             height={800}
            />
          
    )
}