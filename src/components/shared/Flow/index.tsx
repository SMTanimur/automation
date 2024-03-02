import ReactFlow, { Background, NodeProps } from "reactflow"; // Import ReactFlow and Background
import { data } from "~/data";
import { ComponentType } from "react";


import { SankeyNodeComponent } from "../customsankey";
import { useFlow } from "~/hooks/useFlow";

// Define node types
const nodeTypes = {
  sankey: SankeyNodeComponent
}

// Interface for extended ReactFlow props
interface ExtendedReactFlowProps {
  elements: any[]; 
}

// Define elements for the ReactFlow component
const elements = [
  {
    id: "1",
    type: "sankey",
    data: data, // pass sankey data here
    position: { x: 100, y: 100 },
  },
  {
    id: "2",
    type: "default",
    position: { x: 400, y: 100 },
    data: { label: "Node 1" },
  },
  {
    id: "e1-2",
    source: "1",
    target: "2",
  },
];

const nodes = [
  {
    id: '1', 
    type: 'sankey',
    data: data,
    position: {x:0, y:0}
  }
];


// Flow component
function Flow() {
  const {
    onNodesChange,
    edges,
    onEdgesChange,
    onConnect,
    reactFlowWrapper,
    setReactFlowInstance,
    onDrop,
    onDragOver,
    setEdgeStyleType,
    edgeStyleType,
    diagramName,
    setDiagramName,
    onDiagramSave,
    createNewDiagram,
  } = useFlow();
  return (
    <div style={{ width: '100%', height: '1000px' }}> 
    <ReactFlow  {...{
                nodes,
                onNodesChange,
                onEdgesChange,
                onConnect,
                onDrop,
                onDragOver,
                edges,
              }}
              nodeTypes={nodeTypes}
              nodesConnectable={true}
              maxZoom={2}
              minZoom={0.3}
              deleteKeyCode={`Delete`}
              onInit={setReactFlowInstance}
              fitView
              fitViewOptions={{ maxZoom: 0.8 }}
              className="border rounded-md"
              id="canvas" > {/* Pass elements prop */}
      <Background />
    </ReactFlow>
    </div>
  );
}

export default Flow;