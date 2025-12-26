
import { GoogleGenAI } from "@google/genai";

/**
 * LỜI KHUYÊN NHANH (FLASH LITE)
 */
export const getFarmAdvice = async (userPrompt: string) => {
  // Always create a new instance before call as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-flash-lite-latest',
      contents: userPrompt,
      config: {
        systemInstruction: "Bạn là chuyên gia tư vấn nông nghiệp GOFAM. Trả lời cực nhanh, thông minh, thực tế bằng tiếng Việt.",
      }
    });
    return response.text;
  } catch (error) {
    console.error("AI Error:", error);
    return "Xin lỗi, tôi không thể xử lý yêu cầu lúc này.";
  }
};

/**
 * PHÂN TÍCH KỸ THUẬT CHUYÊN SÂU (GEMINI 3 PRO + THINKING)
 * Giải quyết các vấn đề lãng phí tài nguyên với đề xuất phần cứng & thuật toán cụ thể.
 */
export const specializedIrrigationOptimization = async (zoneId: string, currentWaste: string) => {
  const freshAi = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `Bạn là một kỹ sư thủy lợi và chuyên gia IoT nông nghiệp cấp cao. 
  
  BỐI CẢNH: 
  Khu vực canh tác: ${zoneId}. 
  Vấn đề hiện tại: Đang lãng phí ${currentWaste} lượng nước tưới so với định mức lý tưởng.
  
  YÊU CẦU ĐỀ XUẤT CHI TIẾT:
  1. THAY ĐỔI PHẦC CỨNG: Đề xuất loại béc tưới (ví dụ: béc bù áp), cảm biến độ ẩm đất (tensiometer), van điện từ và bộ biến tần (VFD) cho bơm. Giải thích lý do chọn từng loại.
  2. THUẬT TOÁN ĐIỀU KHIỂN: Mô tả logic điều khiển tưới thông minh dựa trên chỉ số Evapotranspiration (ET) và dữ liệu cảm biến thời gian thực.
  3. LỊCH TRÌNH TƯỚI TỐI ƯU: Đề xuất khung giờ tưới trong ngày (sáng sớm/chiều muộn) để giảm bay hơi và tối ưu hóa sự hấp thụ của rễ.
  4. PHÂN TÍCH ROI & TIẾT KIỆM: Ước tính phần trăm nước tiết kiệm được (kỳ vọng >20%) và thời gian hoàn vốn đầu tư (ROI) dựa trên chi phí nước và điện năng.

  YÊU CẦU ĐỊNH DẠNG: Trình bày chuyên nghiệp bằng tiếng Việt, sử dụng Markdown, có số liệu minh họa cụ thể.`;

  const response = await freshAi.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: prompt,
    config: {
      thinkingConfig: { thinkingBudget: 32768 },
      tools: [{ googleSearch: {} }]
    }
  });

  const grounding: any[] = [];
  const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
  chunks.forEach((chunk: any) => {
    if (chunk.web) grounding.push({ title: chunk.web.title, uri: chunk.web.uri });
  });

  return {
    text: response.text,
    grounding
  };
};

/**
 * GENERATE PRO IMAGE (GEMINI 3 PRO IMAGE)
 */
export const generateProImage = async (prompt: string, aspectRatio: string = "1:1", imageSize: string = "1K") => {
  const aiInstance = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await aiInstance.models.generateContent({
    model: 'gemini-3-pro-image-preview',
    contents: { parts: [{ text: prompt }] },
    config: {
      imageConfig: {
        aspectRatio: aspectRatio as any,
        imageSize: imageSize as any
      }
    }
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  throw new Error("No image data returned from Gemini 3 Pro Image");
};

/**
 * GENERATE VEO VIDEO (VEO 3.1)
 */
export const generateVeoVideo = async (prompt: string, image?: { data: string, mime: string }, aspectRatio: string = '16:9') => {
  const aiInstance = new GoogleGenAI({ apiKey: process.env.API_KEY });
  let operation = await aiInstance.models.generateVideos({
    model: 'veo-3.1-fast-generate-preview',
    prompt,
    image: image ? { imageBytes: image.data, mimeType: image.mime } : undefined,
    config: {
      numberOfVideos: 1,
      resolution: '720p',
      aspectRatio: aspectRatio as any
    }
  });

  while (!operation.done) {
    await new Promise(resolve => setTimeout(resolve, 10000));
    operation = await aiInstance.operations.getVideosOperation({ operation: operation });
  }

  const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
  if (!downloadLink) throw new Error("Video generation failed or no URI returned");
  return `${downloadLink}&key=${process.env.API_KEY}`;
};

/**
 * EDIT IMAGE (GEMINI 2.5 FLASH IMAGE)
 */
export const editFarmImage = async (base64Data: string, mimeType: string, prompt: string) => {
  const aiInstance = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await aiInstance.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        { inlineData: { data: base64Data, mimeType } },
        { text: prompt }
      ],
    },
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  throw new Error("No image data returned from edit request");
};

/**
 * DEEP ANALYSIS WITH THINKING & GROUNDING
 */
export const deepAnalysis = async (prompt: string, useSearch: boolean, useMaps: boolean) => {
  const aiInstance = new GoogleGenAI({ apiKey: process.env.API_KEY });
  // Maps grounding requires Gemini 2.5 models
  const model = useMaps ? 'gemini-2.5-flash' : 'gemini-3-pro-preview';
  const tools: any[] = [];
  if (useSearch) tools.push({ googleSearch: {} });
  if (useMaps) tools.push({ googleMaps: {} });

  const response = await aiInstance.models.generateContent({
    model,
    contents: prompt,
    config: {
      thinkingConfig: { thinkingBudget: 16384 },
      tools: tools.length > 0 ? tools : undefined
    }
  });

  const grounding: any[] = [];
  const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
  chunks.forEach((chunk: any) => {
    if (chunk.web) grounding.push({ title: chunk.web.title, uri: chunk.web.uri });
    if (chunk.maps) grounding.push({ title: chunk.maps.uri, uri: chunk.maps.uri });
  });

  return {
    text: response.text,
    grounding
  };
};
