"use client"
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { generateResponse } from "../../../services/Analyzer";
import { HelpModal } from "../../components/helpmodal";
import { generateScore } from "../../../services/ScoreAnalyzer";

export function GridBackgroundDemo() {
  const [inputText, setInputText] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [score, setScore] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state for response

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true); // Set loading state

    if (!inputText.trim()) {
      setError("Please enter some text.");
      setIsLoading(false); // Reset loading state
      return;
    }

    try {
      const result = await generateResponse(inputText);
      setResponse(result);

      const score = await generateScore(inputText);
      setScore(parseFloat(score));
    } catch (error) {
      console.error("Error generating response or score:", error);
      setError("Error generating response or score. Please try again.");
    } finally {
      setIsLoading(false); // Reset loading state after request completes
    }
  };

  const renderScoreBar = () => {
    if (score === null) return null;

    const absScore = Math.abs(score);
    let label = "";
    // Determine sentiment label based on score
    if (score >= 0.8) {
      label = "Very Positive";
    } else if (score >= 0.6) {
      label = "Positive";
    } else if (score >= 0.3) {
      label = "Slightly Positive";
    } else if (score === 0) {
      label = "Neutral";
    } else if (score >= -0.2) {
      label = "Slightly Negative";
    } else if (score >= -0.6) {
      label = "Negative";
    } else {
      label = "Very Negative";
    }

    return (
      <div className="mt-4">
        <div className="text-white mb-2">Sentiment Analysis:</div>
        <div className="flex items-center">
          <div className="w-1/4 text-right text-white pr-2">{label}</div>
          <div className="w-1/2 h-8 bg-gray-300 rounded-full">
            <div
              className={`h-8 rounded-full ${score >= 0 ? 'bg-green-800' : 'bg-red-500'}`}
              style={{ width: `${absScore * 100}%` }}
            ></div>
          </div>
          <div className="w-1/4 pl-2">{score.toFixed(2)}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-screen w-full dark:bg-black bg-black  flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_0.5%,black)] flex items-center justify-center"></div>
      <div className="w-full max-w-5xl max-h-max p-6">
        
        <form onSubmit={handleSubmit} className="rounded-lg flex flex-col items-center bg-black border-neutral-700 border-2 px-8 pt-6 pb-8 w-full">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter text here..."
            rows={5}
            className="w-full p-2 mb-4 border text-white border-gray-300 resize-none rounded-2xl bg-neutral-800"
          />
          <motion.button
            type="submit"
            className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isLoading}
          >
            {isLoading ? 'Analyzing...' : 'Analyze'}
          </motion.button>
        </form>
    
        <AnimatePresence>
          {response && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative bg-black shadow-md rounded p-4 w-full mt-4 border-neutral-700 border-2 px-8 pt-6 pb-8"
            >
              <h2 className="text-xl text-white font-bold mb-2">Response:</h2>
              <button
                onClick={() => setIsHelpModalOpen(true)}
                className="absolute top-2 right-2 bg-neutral-800 text-white p-1 rounded-full w-6 h-6 flex items-center justify-center"
              >
                ?
              </button>
              <p className="text-white">{response}</p>
              {renderScoreBar()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isHelpModalOpen && (
          <HelpModal isOpen={isHelpModalOpen} onClose={() => setIsHelpModalOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
