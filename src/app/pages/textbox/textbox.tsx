"use client"
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { generateResponse } from "../../../services/Analyzer";
import { HelpModal } from "../../components/helpmodal";
import { generateScore } from "../../../services/ScoreAnalyzer";

export function GridBackgroundDemo() {
  const [inputText, setInputText] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [score, setScore] = useState<number | null>(null); // Use null to indicate initial state
  const [error, setError] = useState<string | null>(null); // State for handling errors
  const [isHelpModalOpen, setIsHelpModalOpen] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error state

    if (!inputText.trim()) {
      setError("Please enter some text."); // Handle empty input error
      return;
    }

    try {
      const result = await generateResponse(inputText);
      setResponse(result);

      const score = await generateScore(inputText);
      setScore(parseFloat(score)); // Convert score to a number
      console.log(score)

    } catch (error) {
      console.error("Error generating response or score:", error);
      setError("Error generating response or score. Please try again.");
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
    } else if (score == 0) {
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
    <div className="h-screen w-full dark:bg-black bg-black dark:bg-grid-black/[0.2] bg-grid-white/[0.059] flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_0.5%,black)] flex items-center justify-center"></div>
      <div className="w-full max-w-5xl max-h-max p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Generative AI Sentiment Analyzer</h1>
        <form onSubmit={handleSubmit} className="rounded-lg flex flex-col items-center bg-black border-neutral-700 border-2 px-8 pt-6 pb-8 w-full">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter text here..."
            rows={5}
            className="w-full p-2 mb-4 border text-white border-gray-300 resize-none rounded-2xl bg-neutral-800"
          />
          <button
            type="submit"
            className="bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Analyze
          </button>
        </form>
        {error && (
          <div className="bg-red-500 text-white p-2 rounded mt-4">
            Error: {error}
          </div>
        )}
        {response && (
          <div className="relative bg-black shadow-md rounded p-4 w-full mt-4 border-neutral-700 border-2 px-8 pt-6 pb-8">
            <h2 className="text-xl text-white font-bold mb-2">Response:</h2>
            <button
              onClick={() => setIsHelpModalOpen(true)}
              className="absolute top-2 right-2 bg-neutral-800 text-white p-1 rounded-full w-6 h-6 flex items-center justify-center"
            >
              ?
            </button>
            <p className="text-white">{response}</p>
            {renderScoreBar()}
          </div>
        )}
      </div>

      <AnimatePresence>
        {isHelpModalOpen && (
          <HelpModal isOpen={isHelpModalOpen} onClose={() => setIsHelpModalOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
