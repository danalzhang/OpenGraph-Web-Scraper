import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

function TryMePage() {
  const [URL, setURL] = useState("");
  const [extractedOGData, setExtractedOGData] = useState(null);
  const [clickedSearch, setClickedSearch] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && URL.trim() !== "") {
      handleExtraction();
    }
  };

  const handleExtraction = () => {
    setExtractedOGData(null);
    setClickedSearch(true);
    setLoading(true);

    fetch(
      `https://venv-six-omega.vercel.app/scrape?url=${encodeURIComponent(URL)}`
    )
      .then((response) => response.json())
      .then((data) => {
        setFetched(true);
        setExtractedOGData(data);
        setLoading(false);
        setURL("");
      })
      .catch((err) => {
        console.log("error in fetching = ", err);
        setLoading(false);
        setExtractedOGData(null);
      });
  };

  return (
    <div className="bg-indigo-700 py-10 px-4 sm:px-6 lg:px-8 flex justify-center overflow-hidden">
      <div className="h-screen w-screen p-6 space-y-6">
        <div className="text-center">
          <p
            className="mt-4 py-3 text-4xl font-bold text-white font-serif animate-bounce"
          >
            Try the OpenGraph Web Scrapper!
          </p>
        </div>

        <div className="flex flex-row items-center space-x-4 place-content-center">
          <input
            type="text"
            value={URL}
            onKeyPress={handleKeyPress}
            onChange={(e) => setURL(e.target.value)}
            className="bg-slate-200 block w-7/12 px-3 py-3 border border-indigo-500 rounded-3xl shadow-sm text-md placeholder-gray-500"
            placeholder="Enter your URL here"
          />
          <BsSearch
            onClick={handleExtraction}
            className="text-white text-3xl cursor-pointer hover:text-gray-300"
          />
        </div>

        {loading && clickedSearch && (
          <div className="flex justify-center mt-6">
            <div className="animate-spin rounded-full border-t-4 border-t-indigo-100 border-gray-300 h-24 w-24"></div>
          </div>
        )}

        {fetched && extractedOGData && (
          <div
            className="p-6 border-4 border-transparent rounded-md max-h-96 max-w-96 text-blue-300 font-mono text-base bg-stone-900 whitespace-pre-wrap"
            style={{
              boxShadow: "0 0 10px #000000, 0 0 20px #000000, 0 0 40px #5D3FD3, 0 0 80px #5D3FD3",
              margin: "4rem",
            }}
          >
            {JSON.stringify(extractedOGData, null, 2)}
          </div>
        )}

        {clickedSearch && !extractedOGData && !loading && (
          <div className="text-center mt-6">
            <p className="text-2xl text-white">No OG tags found!</p>
            <p className="text-white text-lg mt-2 t">
              Try Again ...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TryMePage;
