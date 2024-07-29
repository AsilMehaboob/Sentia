"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { generateResponse } from "../../../services/Analyzer";
import { generateScore } from "../../../services/ScoreAnalyzer";
import { HelpModal } from "../../components/helpmodal";

export default function GridBackgroundDemo() {
  const [inputText, setInputText] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [score, setScore] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    if (!inputText.trim()) {
      setError("Please enter some text.");
      setIsLoading(false);
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
      setIsLoading(false);
    }
  };

  const renderScoreBar = () => {
    if (score === null) return null;

    const absScore = Math.abs(score);
    let label = "";
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="absolute pointer-events-none inset-0 dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)] flex items-center justify-center"></div>
      <div className="w-full max-w-md px-6 py-8 space-y-6 bg-black border-neutral-700 border-2 rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Sentiment Analysis</h1>
          <p className="mt-2 text-neutral-400">Enter some text and we'll analyze the sentiment.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="text" className="block text-sm font-medium text-white">
              Text to analyze
            </label>
            <div className="mt-1">
              <textarea
                id="text"
                rows={3}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="block w-full rounded-md border border-neutral-600 bg-neutral-800 px-4 py-3 text-white shadow-sm focus:border-primary focus:ring-primary"
                placeholder="Enter your text here..."
              />
            </div>
          </div>
          <div>
            <motion.button
              type="submit"
              className="w-full inline-flex justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-black bg-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isLoading}
            >
              {isLoading ? 'Analyzing...' : 'Analyze Sentiment'}
            </motion.button>
          </div>
        </form>
        <AnimatePresence>
          {response && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative bg-black shadow-md rounded p-4 w-full mt-4 border-neutral-700 border-2"
            >
              <h2 className="text-lg font-medium text-white">Sentiment Analysis Result:</h2>
              <button
                onClick={() => setIsHelpModalOpen(true)}
                className="absolute top-2 right-2 bg-neutral-800 text-white p-1 rounded-full w-6 h-6 flex items-center justify-center"
              >
                ?
              </button>
              <p className="mt-2 text-white">{response}</p>
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
