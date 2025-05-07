import React, { useRef, useEffect, useState } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { motion } from 'framer-motion';
import { cldData } from '../../data/staticData';
import Card from '../ui/Card';

interface Node {
  id: string;
  name: string;
  color?: string;
  size?: number;
  x?: number;
  y?: number;
}

interface Link {
  source: string | Node;
  target: string | Node;
  polarity: 'positive' | 'negative';
  label?: string;
}

interface GraphData {
  nodes: Node[];
  links: Link[];
}

const CLDViewer: React.FC = () => {
  const graphRef = useRef<any>(null);
  const [graphData, setGraphData] = useState<GraphData>({ nodes: [], links: [] });
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  
  // Prepare data for the graph
  useEffect(() => {
    const nodes = cldData.nodes.map(node => ({
      ...node,
      color: node.color || getRandomNodeColor(node.id),
      size: node.size || 15
    }));
    
    const links = cldData.links.map(link => ({
      ...link,
      color: link.polarity === 'positive' ? '#2aa371' : '#e11d48',
    }));
    
    setGraphData({ nodes, links });
  }, []);

  // Get a random color based on the node id for consistency
  const getRandomNodeColor = (id: string) => {
    // Simple hash function to generate consistent colors
    const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const colors = [
      '#2aa371', // primary
      '#1eaef8', // secondary
      '#ff8317', // accent
      '#4f46e5', // indigo
      '#0891b2', // cyan
      '#7c3aed'  // violet
    ];
    return colors[hash % colors.length];
  };

  // Handle node click
  const handleNodeClick = (node: Node) => {
    setSelectedNode(node);
    
    if (graphRef.current) {
      // Center the view on the clicked node
      graphRef.current.centerAt(node.x, node.y, 1000);
      graphRef.current.zoom(2.5, 1000);
    }
  };

  const LinkComponent = ({ link }: { link: Link }) => {
    const start = typeof link.source === 'object' ? link.source : { x: 0, y: 0 };
    const end = typeof link.target === 'object' ? link.target : { x: 0, y: 0 };
    
    if (!start.x || !start.y || !end.x || !end.y) return null;
    
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    
    // Calculate position for the polarity indicator (+ or -)
    const midX = start.x + dx * 0.5;
    const midY = start.y + dy * 0.5;
    
    return (
      <>
        {/* Line */}
        <line
          x1={start.x}
          y1={start.y}
          x2={end.x}
          y2={end.y}
          stroke={link.polarity === 'positive' ? '#2aa371' : '#e11d48'}
          strokeWidth={2}
          strokeOpacity={0.8}
        />
        
        {/* Polarity indicator */}
        <text
          x={midX}
          y={midY}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={link.polarity === 'positive' ? '#2aa371' : '#e11d48'}
          fontSize={18}
          fontWeight="bold"
        >
          {link.polarity === 'positive' ? '+' : '–'}
        </text>
      </>
    );
  };

  return (
    <div className="relative h-[600px] w-full">
      <ForceGraph2D
        ref={graphRef}
        graphData={graphData}
        nodeLabel="name"
        nodeColor="color"
        nodeVal="size"
        linkWidth={2}
        linkDirectionalArrowLength={5}
        linkDirectionalArrowRelPos={0.95}
        linkCurvature={0.2}
        onNodeClick={handleNodeClick}
        cooldownTicks={100}
        linkCanvasObjectMode={() => 'after'}
        linkCanvasObject={(link, ctx) => {
          // Empty but required to enable custom link rendering
        }}
        nodeCanvasObjectMode={() => 'after'}
        nodeCanvasObject={(node, ctx, globalScale) => {
          // Calculate the node radius
          const radius = Math.sqrt(node.size || 15) * 2;
          
          // Draw the node circle
          ctx.beginPath();
          ctx.arc(node.x!, node.y!, radius, 0, 2 * Math.PI);
          ctx.fillStyle = node.color || '#2aa371';
          ctx.fill();
          
          // Draw the text label
          const fontSize = 12 / globalScale;
          ctx.font = `${fontSize}px Inter`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = '#ffffff';
          
          // Split the text into lines if it's too long
          const words = node.name.split(' ');
          let line = '';
          let lines = [];
          let lineHeight = fontSize * 1.2;
          
          for (let i = 0; i < words.length; i++) {
            const testLine = line + words[i] + ' ';
            if (ctx.measureText(testLine).width > radius * 1.8) {
              lines.push(line);
              line = words[i] + ' ';
            } else {
              line = testLine;
            }
          }
          lines.push(line);
          
          // Draw each line
          lines.forEach((line, i) => {
            const y = node.y! + (i - (lines.length - 1) / 2) * lineHeight;
            ctx.fillText(line, node.x!, y);
          });
        }}
      />
      
      {/* Node info panel */}
      {selectedNode && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-4 bg-white dark:bg-neutral-900 p-4 rounded-lg shadow-md max-w-xs"
        >
          <h3 className="font-medium text-lg text-neutral-900 dark:text-neutral-100 mb-2">
            {selectedNode.name}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {getNodeDescription(selectedNode.id)}
          </p>
          <button 
            className="mt-3 text-xs text-secondary-600 dark:text-secondary-400 hover:underline"
            onClick={() => setSelectedNode(null)}
          >
            Close
          </button>
        </motion.div>
      )}
    </div>
  );
};

// Helper function to get descriptions for nodes
const getNodeDescription = (nodeId: string): string => {
  const descriptions: Record<string, string> = {
    returnRate: 'The percentage of ordered items that are returned by customers.',
    impulsivePurchase: 'Buying items without careful consideration, often leading to higher returns.',
    quality: 'The overall quality of products, affecting customer satisfaction and returns.',
    ecommerceWaste: 'Waste generated from packaging, shipping, and disposal of returned items.',
    operationalCost: 'Costs associated with processing returns, including shipping, inspection, and repackaging.',
    profit: 'Business profitability affected by return rates and operational costs.',
    productImprovement: 'Enhancements made to products based on customer feedback and return data.',
    strictReturnPolicy: 'Policies that place limitations or fees on product returns.',
    returnReasonTracking: 'Monitoring and analysis of why customers return products.',
    trust: 'Customer confidence in the brand and products.',
    brandVisibility: 'How well-known and recognized a brand is in the market.',
    sales: 'Total revenue from product sales.',
    goodReview: 'Positive customer feedback and ratings.',
    trustedProductTag: 'Special badges or indicators showing products with low return rates.',
    investmentOnProductInfo: 'Resources allocated to improve product descriptions, images, and specifications.',
    productRepresentation: 'How accurately products are displayed and described online.',
    '3dView': 'Interactive 3D visualization of products.',
    accurateFitScale: 'Tools that help customers determine the correct size or fit.'
  };
  
  return descriptions[nodeId] || 'No description available.';
};

export default CLDViewer;