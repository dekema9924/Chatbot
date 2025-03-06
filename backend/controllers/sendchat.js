
const { GoogleGenerativeAI } = require("@google/generative-ai");

module.exports = sendChat=async(req,res)=>{
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    
    let prompt = req.body.text

    const result = await model.generateContent(prompt, {
        generationConfig: {
            maxOutputTokens: 1, // Limits response length
          },
    });
    
    if(!result) return res.status(400).json({mmessage: 'error'})
        return res.status(200).json(result.response.text())
}