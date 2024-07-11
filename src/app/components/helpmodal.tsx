import React from "react";
import { motion } from "framer-motion";

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  return (
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-white p-6 rounded-lg max-w-md w-full"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
      >
        <h2 className="text-2xl  mb-4">Help</h2>
        <p className="text-sm">The confidence score indicates how certain the model is about its sentiment prediction, ranging from 0 to 1. A higher score means greater confidence. For example, a confidence score of 0.95 means the model is 95% certain about its prediction. The sentiment score ranges from -1 (negative) to 1 (positive).</p>
        <button 
          onClick={onClose} 
          className="bg-neutral-800 text-white py-2 px-4 rounded mt-4"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};
