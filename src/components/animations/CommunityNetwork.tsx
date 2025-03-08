"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaDiscord } from 'react-icons/fa';

type Node = {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  icon?: boolean;
};

type Connection = {
  from: number;
  to: number;
};

export default function CommunityNetwork() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  
  useEffect(() => {
    // Create nodes
    const newNodes: Node[] = [];
    const centerNode = {
      id: 0,
      x: 50,
      y: 50,
      size: 14,
      color: '#5E4B3E', // coffee-brown
      icon: true
    };
    newNodes.push(centerNode);
    
    // Create surrounding nodes
    for (let i = 1; i < 10; i++) {
      const angle = (i * (360 / 9)) * (Math.PI / 180);
      const distance = 30 + Math.random() * 10;
      const x = 50 + Math.cos(angle) * distance;
      const y = 50 + Math.sin(angle) * distance;
      const size = 6 + Math.random() * 6;
      const colors = ['#5E4B3E', '#7D6B5D', '#88A872', '#A67C52', '#F8F1E9'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      newNodes.push({
        id: i,
        x,
        y,
        size,
        color
      });
    }
    
    setNodes(newNodes);
    
    // Create connections
    const newConnections: Connection[] = [];
    for (let i = 1; i < newNodes.length; i++) {
      // Connect to center
      newConnections.push({
        from: 0,
        to: i
      });
      
      // Connect some nodes to each other
      if (i < newNodes.length - 1 && Math.random() > 0.5) {
        newConnections.push({
          from: i,
          to: i + 1
        });
      }
      
      // Add some random connections
      if (Math.random() > 0.7) {
        const randomNode = Math.floor(Math.random() * (newNodes.length - 1)) + 1;
        if (randomNode !== i) {
          newConnections.push({
            from: i,
            to: randomNode
          });
        }
      }
    }
    
    setConnections(newConnections);
  }, []);
  
  return (
    <div className="w-full h-full bg-[#F8F1E9]/20 rounded-lg overflow-hidden">
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {/* Connections */}
        {connections.map((connection, index) => {
          const fromNode = nodes.find(n => n.id === connection.from);
          const toNode = nodes.find(n => n.id === connection.to);
          
          if (!fromNode || !toNode) return null;
          
          return (
            <motion.line
              key={`connection-${index}`}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="#5E4B3E"
              strokeWidth="0.5"
              strokeOpacity="0.3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
            />
          );
        })}
        
        {/* Nodes */}
        {nodes.map((node) => (
          <motion.g key={`node-${node.id}`}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill={node.color}
              fillOpacity={node.icon ? 1 : 0.7}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: node.id === 0 ? 0 : 0.5 + node.id * 0.15,
                type: "spring"
              }}
            />
            
            {/* Pulse effect for nodes */}
            {node.id !== 0 && (
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.size}
                stroke={node.color}
                strokeWidth="1"
                fill="transparent"
                initial={{ scale: 1, opacity: 0.7 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: node.id * 0.5,
                  repeatDelay: Math.random() * 2 + 1
                }}
              />
            )}
            
            {/* Icon for center node */}
            {node.icon && (
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <foreignObject
                  x={node.x - node.size / 2}
                  y={node.y - node.size / 2}
                  width={node.size}
                  height={node.size}
                >
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <FaDiscord />
                  </div>
                </foreignObject>
              </motion.g>
            )}
          </motion.g>
        ))}
        
        {/* Moving particles along connections */}
        {connections.map((connection, index) => {
          const fromNode = nodes.find(n => n.id === connection.from);
          const toNode = nodes.find(n => n.id === connection.to);
          
          if (!fromNode || !toNode) return null;
          
          return (
            <motion.circle
              key={`particle-${index}`}
              cx={fromNode.x}
              cy={fromNode.y}
              r={1.2}
              fill="#88A872"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                cx: [fromNode.x, toNode.x],
                cy: [fromNode.y, toNode.y]
              }}
              transition={{ 
                duration: 3,
                delay: 2 + index * 0.3,
                repeat: Infinity,
                repeatDelay: Math.random() * 5 + 3
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}
