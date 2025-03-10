import { useState } from 'react'
import axios from 'axios'
import { Loader } from 'lucide-react'

function App(){
  const[ textInput, setTextInput ] = useState("")
  const [ selectValue, setSelectValue ] = useState("")
  const [result, setResult ] = useState("")
  const [ loading, setLoading] = useState(false)
  const handleTextTranslation = async () => {
  setLoading(true)
  try{
      const options = {
        method: 'POST',
        url: 'https://google-translator9.p.rapidapi.com/v2',
        headers: {
        'x-rapidapi-key': 'f7725f939cmsh89543c5a47335b8p14c811jsne676d6e0320f',
        'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
        'Content-Type': 'application/json'
        },
        data: {
          q: `${textInput}`,
          source: 'en',
          target: `${selectValue}`,
          format: 'text'
        }
      };
        const response = await axios.request(options)
        setLoading(false)
        console.log(response?.data?.data?.translations?.[Number(0)]?.translatedText)
        setResult(response?.data?.data?.translations?.[Number(0)]?.translatedText)

    }catch (error) {
      setLoading(false)
        console.log(error?.data)
      }
    }

   console.log(textInput)
   console.log(selectValue)
 return( 
    <div className="size-24 bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600
        h-screen w-screen flex items-center justify-center">
        <div className="flex items-center justify-center flex-col gap-y-10">
            <h1 className="text-3xl text-blue-700 font-bold">
                Text Translator
            </h1>
            <div className = "flex items-center justify-content-center flex-col gap-y-10 "> 
                <textarea name="input-text" className = "bg-indigo-350 h-30 w-[500px]  border border-indigo-100 ring-2 outline-1 rounded-xl text-xl px-3 py-2 text-indigo-900"
                onChange={(e) => setTextInput(e.target.value)}/>
                <textarea name="input-text" className = "bg-indigo-350 h-30 w-[500px] font-bold border border-indigo-700 ring-2  outline-1 rounded-xl text-xl px-3 py-2 text-indigo-50"
                value={result} readOnly/>
             </div>
        <div>
        <label className="text-white " htmlFor="options">Converted Into: </label>
        <select name="value" className="bg-white px-2 py-1 rounded-lg border border-indio-100 ring
        outline-none cursor-pointer" onChange={(e) => setSelectValue(e.target.value)}>
          <option value="">Select</option>
          <option value="te">Telugu</option>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="bn">Bengali</option>
          <option value="ta">Tamil</option>
          <option value="kn">Kannada</option>
          <option value="ml">Malayalam</option>
          <option value="ur">Urdhu</option>
          <option value="or">Oriya</option>
          <option value="gu">Gujarati</option>
          <option value="mn">Marati</option>
          <option value="ne">Nepali</option>
          <option value="zh">Chinese</option>
          <option value="ru">Russian</option>
          <option value="el">Greek</option>
          <option value="ja">Japanese</option>
        </select>
  </div>

      <button className="bg-indigo-500 text-white mx-auto w-[500px] py-2 hover:bg-pink font-bold hover:bg-indigo-700
          rounded-lg cursor-pointer flex items-center justify-center" onClick={handleTextTranslation}>
          {
            loading ? (<Loader className="animate-spin"/>) : "Translate"
          }
      </button>

      </div>
    </div>
)
}
export default App
