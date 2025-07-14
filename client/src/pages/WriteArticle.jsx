import { Edit, Sparkles } from "lucide-react";
import React, { useState } from "react";
import axios from "axios"
import { useAuth } from "@clerk/clerk-react";
import toast from "react-hot-toast";
import Markdown from "react-markdown";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL; 


const WriteArticle = () => {
  const articleLenght = [
    { length: 800, text: "Short (500-800 words)" },
    { length: 1200, text: "Medium (800-1200 words)" },
    { length: 1600, text: "Long (1200+ words)" },
  ];
  const [selectedLength, setSelectedLength] = useState(articleLenght[0]);
  const [input, setInput] = useState("");
  const [loading,setLoading]=useState(false);
  const [content,setContent]=useState("");

  const{getToken}=useAuth();

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const prompt = `Write an article about ${input} in ${selectedLength.text}`;
      const {data} =await axios.post('/api/ai/generate-article',{prompt,length:selectedLength.length},{
        headers:{Authorization:`Bearer ${await getToken()}`}
      })
      if(data.success){
        setContent(data.content)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
    setLoading(false)
  };

  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-500">
      {/* left col */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#4A7AFF]" />
          <h1 className="text-xl font-semibold">Article Configuration</h1>
        </div>
        <p className="mt-6 text-sm font-bold">Article Topic</p>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="The future of artificial intelligence is ..."
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          required
        />
        <p className="mt-4 text-sm font-bold">Artical Length</p>
        <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
          {articleLenght.map((item, index) => (
            <span
              onClick={() => setSelectedLength(item)}
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer  ${
                selectedLength.text === item.text
                  ? "bg-bule-50  text-blue-700"
                  : "bg-gray-50 text-gray-700"
              } `}
              key={index}
            >
              {item.text}
            </span>
          ))}
        </div>

        <button disabled={loading} className="w-full flex  justify-center items-center gap-2 bg-gradient-to-r from-[#226BFF] to-[#226BFF] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer">
          {
            loading ? <span className="w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin"></span>:<Edit className="w-5" />
          }
          
          Generate article
        </button>
      </form>
      {/* right col */}
      <div className="w-full max-w-lg p-4 bg-white rouned-lg flex flex-col border border-gray-200 rounded-lg min-h-96 max-h-129">
        <div className="flex gap-3 items-center">
          <Edit className="w-5 h-5 text-[#4A7AFF]" />
          <h1 className="text-xl font-semibold">Generated article</h1>
        </div>
        {!content ?(
           <div className="flex-1 flex justify-center items-center">
          <div className="flex justify-center items-center flex-col gap-2">
            <Edit className="w-9 h-9" />
            <p>Enter the topic and click " Generate article " to get started</p>
          </div>
        </div>
        ) : (
          <div className="mt-3 h-full overflow-y-scroll text-sm text-slate-600">
              <div className="reset-tw">
                <Markdown>
                    {content}
                </Markdown>
                </div>
          </div>
        )}
       
      </div>
    </div>
  );
};

export default WriteArticle;
