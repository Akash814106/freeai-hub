export const categories = {
  chat: 'AI Chatbots',
  code: 'AI Coding Assistants',
  image: 'AI Image Generators',
  video: 'AI Video Generators',
  slides: 'AI Presentations and PPT Makers',
  resume: 'AI Resume Builders',
  research: 'AI Research Tools',
  writing: 'AI Writing Assistants',
  audio: 'AI Voice and Audio Tools',
  music: 'AI Music Generators',
  web: 'AI Website Builders',
  agents: 'AI Agents and Automation',
  productivity: 'AI Productivity Tools',
  students: 'AI Tools for Students',
  data: 'AI Data Analysis Tools',
  open: 'Open-Source AI Tools',
}

export const pricingLabels = {
  free: 'Completely Free',
  freemium: 'Freemium',
  trial: 'Free Trial',
  unknown: 'Needs verification',
}

// Each row contains id, name, category, official URL, description, uses, pricing, limits, and source.
// URLs below are HTTPS. A missing pricing field means the free offer needs verification.
const entries = `
chatgpt|ChatGPT|chat|chatgpt.com|An everyday assistant for working through ideas, writing, and answering questions.|Brainstorming,Drafting,Study help|freemium|Limited access to advanced models, uploads, and image generation.|chatgpt.com/pricing
claude|Claude|chat|claude.ai|A conversational assistant for writing, coding, and reasoning through long documents.|Document analysis,Editing,Coding|freemium|Usage is limited within five-hour and weekly windows.|claude.com/pricing
gemini|Gemini|chat|gemini.google.com|Google's assistant for working with text, images, and questions.|Brainstorming,Image analysis,Learning|freemium|Limited access to advanced models and features. Availability can change with demand.|support.google.com/gemini/answer/16275805
deepseek|DeepSeek|chat|www.deepseek.com|A chat assistant with web search and reasoning modes.|Reasoning,Search,File analysis|free|The consumer app is free. API access is billed separately.|api-docs.deepseek.com/news/news250115/
copilot|Microsoft Copilot|chat|copilot.com|Microsoft's conversational assistant for web questions and creative tasks.|Web questions,Drafting
mistral|Mistral Vibe|chat|mistral.ai/products/vibe/|Mistral's assistant for chat, research, and coding.|Chat,Research,Coding
github-copilot|GitHub Copilot|code|github.com/features/copilot|An editor assistant that suggests code and helps you reason through a project.|Autocomplete,Debugging,Code chat|freemium|The Free plan has monthly usage allowances.|docs.github.com/en/copilot/get-started/plans
cursor|Cursor|code|cursor.com|An AI code editor with project-aware chat and multi-file edits.|Refactoring,Autocomplete,Debugging|freemium|Agent and chat requests are limited. Cloud agents and third-party models require a higher tier.|cursor.com/pricing
replit|Replit|code|replit.com|A browser workspace for building and running apps with an AI agent.|Prototyping,Web apps,Coding
aider|Aider|code|aider.chat|A terminal-based coding assistant that edits files in Git repositories.|Pair programming,Refactoring,Git|free|The CLI is free. You supply a local model or a hosted model account.|aider.chat
continue|Continue|code|github.com/continuedev/continue|An open-source toolkit for building and running coding agents and checks.|Code review,Automation,Agents|free|The open-source software is free. Model and hosting charges may apply.|github.com/continuedev/continue
leonardo|Leonardo AI|image|leonardo.ai|Generate illustrations, visual concepts, and design assets from prompts.|Concept art,Illustration,Image editing|freemium|Daily generation tokens are limited. Free generations are public.|leonardo.ai/pricing
ideogram|Ideogram|image|ideogram.ai|An image generator suited to designs that include legible text.|Typography,Posters,Thumbnails|freemium|Full-quality PNG downloads require a paid plan.|docs.ideogram.ai/quick-start-guide
firefly|Adobe Firefly|image|www.adobe.com/products/firefly.html|Adobe's creative suite for generating and editing images and other media.|Image generation,Generative fill|freemium|Generations use a limited credit allowance. Premium video and audio features may require an upgrade.|helpx.adobe.com/creative-cloud/apps/generative-ai/generative-credits-faq.html
krita-ai|Krita AI Diffusion|image|github.com/Acly/krita-ai-diffusion|An AI painting plugin for Krita with image generation inside the canvas.|Digital painting,Inpainting,Illustration|free|Local generation needs compatible hardware and a ComfyUI setup.|github.com/Acly/krita-ai-diffusion
runway|Runway|video|runway.com|A suite of generative video tools for turning prompts or images into clips.|Storyboarding,Text to video,Image animation|freemium|Includes 125 one-time credits. Credits do not refresh.|runway.com/pricing
pika|Pika|video|pika.art|Create stylized video clips and transformations from text and images.|Short clips,Visual effects|freemium|Free video generations are subject to usage limits.|pika.art/pricing
luma|Luma Dream Machine|video|lumalabs.ai/dream-machine|Generate and animate clips for creative video projects.|Motion concepts,Image to video
wan|Wan2.1|video|github.com/Wan-Video/Wan2.1|Downloadable models for generating video from prompts or images.|Local generation,Text to video|free|Local inference requires compatible hardware and model downloads.|github.com/Wan-Video/Wan2.1
gamma|Gamma|slides|gamma.app|Turn an outline into a designed presentation, document, or web page.|Pitch decks,Slide generation,Reports|freemium|Starter AI credits do not refresh. Free generation is capped at ten cards per prompt.|help.gamma.app/en/articles/8077107-how-can-i-upgrade-my-gamma-subscription
canva|Canva|slides|www.canva.com|Design presentations, graphics, and documents with templates and AI tools.|Presentations,Graphics,Templates|freemium|Limited access to Standard and Premium AI tools. Ultra AI tools require an upgrade.|www.canva.com/pricing/
napkin|Napkin AI|slides|www.napkin.ai|Turn written ideas into diagrams and visuals for presentations or documents.|Diagrams,Visual storytelling,Slide visuals|freemium|Includes 500 AI credits per week. PPT and SVG exports require an upgrade.|www.napkin.ai/pricing/
slidesgo|Slidesgo|slides|slidesgo.com|Browse presentation templates and draft slides with an AI presentation maker.|Slide templates,Lesson decks|freemium|Up to three AI-generated presentations and three template downloads per month.|slidesgo.com/pricing
rezi|Rezi|resume|www.rezi.ai|Build a structured resume designed for applicant tracking systems.|Resume drafting,ATS keywords|freemium|One resume, up to three PDF downloads, and limited AI tools.|www.rezi.ai/pricing
teal|Teal|resume|www.tealhq.com|Create resumes and keep track of job applications in one workspace.|Resume tailoring,Job tracking|freemium|Basic resume tools are free. Expanded AI and advanced analysis require Teal+.|www.tealhq.com/pricing
resume-worded|Resume Worded|resume|resumeworded.com|Get automated feedback on your resume and LinkedIn profile.|Resume scoring,LinkedIn feedback
kickresume|Kickresume|resume|www.kickresume.com/en/|Build resumes and cover letters using templates and AI writing assistance.|Resume templates,Cover letters
perplexity|Perplexity|research|www.perplexity.ai|Search the web with an AI assistant that shows the sources behind its answers.|Web research,Citations,Fact finding|freemium|Advanced searches and access to premium models are limited.|www.perplexity.ai/help-center/en/articles/10352901-what-is-perplexity-pro
notebooklm|Google NotebookLM|research|notebook.google.com|Ask questions about your own sources and turn them into study material.|PDF research,Study guides,Audio overviews|freemium|Standard quotas apply to AI features and source limits. Higher limits are available with paid access.|support.google.com/gemininotebook/answer/17670842
elicit|Elicit|research|elicit.com|Find academic papers and extract findings into a structured review.|Literature review,Paper screening|freemium|Paper search and summaries are available. Research Agent and report usage is limited.|elicit.com/pricing
consensus|Consensus|research|consensus.app|Search scientific papers and explore what published studies say about a question.|Evidence search,Academic research|freemium|Basic search is free. Advanced research features have usage caps.|help.consensus.app/en/articles/10087865-subscription-plans
grammarly|Grammarly|writing|www.grammarly.com|Check grammar and polish writing across documents, email, and the web.|Proofreading,Editing,Tone|freemium|Basic writing suggestions are included. Generative AI prompts have usage limits.|support.grammarly.com/hc/en-us/articles/19812297751053-Get-started-with-Grammarly
deepl|DeepL|writing|www.deepl.com/en|Translate text and documents with a neural translation tool.|Translation,Multilingual writing
quillbot|QuillBot|writing|quillbot.com|Rewrite sentences, summarize text, and check drafts for grammar.|Paraphrasing,Editing,Summaries|freemium|Free paraphrasing and summaries have word and feature limits.|quillbot.com/premium
languagetool|LanguageTool|writing|languagetool.org|Check spelling, grammar, and style in multiple languages.|Proofreading,Multilingual editing|freemium|Basic writing checks are included. Advanced style and grammar suggestions require Premium.|languagetool.org/premium
elevenlabs|ElevenLabs|audio|elevenlabs.io|Generate spoken audio from text or build voice-driven experiences.|Voiceovers,Text to speech,Dubbing|freemium|Generation uses a limited credit allowance. The free plan excludes commercial rights.|elevenlabs.io/docs/overview/administration/billing
adobe-podcast|Adobe Podcast|audio|podcast.adobe.com|Clean up speech recordings and prepare audio for podcasts and voiceovers.|Noise removal,Podcast editing|freemium|Enhance Speech supports up to 30 minutes per file and one hour of audio per day.|helpx.adobe.com/in/firefly/web/work-with-audio-and-video/work-with-audio/frequently-asked-questions-about-enhance-speech.html
whisper|Whisper|audio|github.com/openai/whisper|An installable speech recognition model for transcription and translation.|Transcription,Speech translation|free|Runs locally. Speed and supported model sizes depend on your hardware.|github.com/openai/whisper
murf|Murf|audio|murf.ai|Create synthetic narration in an online voiceover studio.|Narration,Voice prototypes|trial|Ten minutes of voice generation are included. Downloads require a paid plan.|help.murf.ai/is-murf-free-to-use
suno|Suno|music|suno.com|Generate songs from a description or your own lyrics.|Songwriting,Music demos,Instrumentals|freemium|Generation is credit-limited. Free-plan songs are for noncommercial use.|suno.com/pricing
udio|Udio|music|www.udio.com|Generate and extend music from prompts and lyrics.|Song demos,Music exploration
audiocraft|AudioCraft|music|github.com/facebookresearch/audiocraft|Meta's local research toolkit for generating music and audio from text.|Text to music,Audio experiments|free|Requires local compute. The pretrained model weights have noncommercial terms.|github.com/facebookresearch/audiocraft
framer|Framer|web|www.framer.com|Design and publish responsive websites with a visual editor and AI assistance.|Landing pages,Portfolios,Web design|freemium|Publish on a Framer domain. Custom domains require a paid site plan.|www.framer.com/solutions/website-builder/
webflow|Webflow|web|webflow.com|Build responsive sites visually with a CMS and AI-assisted tools.|Marketing sites,CMS,Web design|freemium|The Starter plan uses a Webflow subdomain and has limited CMS capacity.|webflow.com/pricing
wix|Wix|web|www.wix.com|Create a website from a conversational brief and customize it visually.|Business websites,Portfolios
lovable|Lovable|web|lovable.dev|Create web app prototypes by describing screens and behavior in chat.|App prototypes,Web design|freemium|Five build credits per day, capped at 30 per month.|lovable.dev/pricing
n8n|n8n|agents|n8n.io|Connect services and AI models with a visual workflow builder.|Workflow automation,AI agents,Integrations|freemium|The Community Edition requires self-hosting. Hosted access is a separate offer.|n8n.io/pricing
flowise|Flowise|agents|flowiseai.com|Build LLM applications and agent workflows in a visual editor.|AI agents,Chatbots,RAG|free|The self-hosted project is free. Hosting and external models may have costs.|github.com/FlowiseAI/Flowise
dify|Dify|agents|dify.ai|Create and deploy agent workflows with prompts, models, and knowledge bases.|AI workflows,Knowledge bases,Agents|freemium|The cloud Sandbox includes a limited pool of message credits. You can connect your own model key.|dify.ai/pricing
langflow|Langflow|agents|www.langflow.org|Build and inspect model workflows using a node-based editor.|RAG,Agent prototyping,Workflows|free|Local setup and model access are required. Hosted providers may charge.|github.com/langflow-ai/langflow
otter|Otter.ai|productivity|otter.ai|Transcribe meetings and capture summaries and action items.|Meeting notes,Transcription|freemium|The Basic plan includes up to 300 monthly transcription minutes.|otter.ai/pricing
tldv|tl;dv|productivity|tldv.io|Record meetings and find important moments in transcripts.|Meeting recordings,Team notes
goblin|Goblin Tools|productivity|goblin.tools|A collection of small tools for breaking tasks down and rewriting messages.|Task breakdown,Tone adjustment|free|The web tools are free. Mobile apps are sold separately.|goblin.tools
wolfram|WolframAlpha|students|www.wolframalpha.com|Look up computed answers across mathematics, science, and other subjects.|Math practice,Calculations,Science
photomath|Photomath|students|photomath.com|Scan math problems and walk through the steps to a solution.|Math homework,Equation solving
quizlet|Quizlet|students|quizlet.com/features/ai-flashcard-generator/|Turn lecture slides and study notes into flashcards and practice material.|Flashcards,Practice tests,Study notes
ai-studio|Google AI Studio|data|aistudio.google.com|Prototype with Gemini and test prompts on documents and other inputs.|Data extraction,Prompt testing,Prototyping|freemium|Free-tier availability and rate limits vary by model. Paid API usage is separate.|ai.google.dev/gemini-api/docs/pricing
kaggle|Kaggle Notebooks|data|www.kaggle.com/code|Run notebook-based data and machine learning projects in a browser.|Python notebooks,Model training,Data analysis|free|Accelerator availability and session time are subject to quotas.|www.kaggle.com/docs/efficient-gpu-usage
orange|Orange Data Mining|data|orangedatamining.com|Build visual workflows for machine learning, statistics, and data exploration.|Classification,Visualization,Data mining|free|Runs locally. Larger datasets depend on your computer's resources.|orangedatamining.com
julius|Julius AI|data|julius.ai|Ask questions about datasets and build charts through a conversational interface.|Spreadsheet analysis,Charts,Data exploration|freemium|The Free plan includes a daily credit allowance. More usage requires an upgrade.|julius.ai/pricing
ollama|Ollama|open|ollama.com|Download and run language models directly on your computer.|Local LLMs,Offline experiments,Prototyping|free|Local inference uses your own hardware. Ollama cloud inference is billed separately.|ollama.com/pricing
hugging-face|Hugging Face|open|huggingface.co|Explore public model repositories, datasets, and interactive Spaces.|Model discovery,Dataset search,Demos|freemium|Basic CPU Spaces are free. Dedicated GPUs and hosted inference may cost extra.|huggingface.co/pricing
comfyui|ComfyUI|open|github.com/Comfy-Org/ComfyUI|Build node-based generative media workflows on your own machine.|Diffusion workflows,Image generation|free|Local execution requires compatible hardware. Model licenses vary.|github.com/Comfy-Org/ComfyUI
llama-cpp|llama.cpp|open|github.com/ggml-org/llama.cpp|Run quantized language models on local hardware through a CLI or server.|Local inference,Quantized models|free|You need compatible model files and enough local memory.|github.com/ggml-org/llama.cpp
`

export const tools = entries.trim().split('\n').map(row => {
  const [id, name, category, url, description, uses, pricing = 'unknown', limits = 'Needs verification. Check the provider for current free access and limits.', source] = row.split('|')
  return {
    id, name, category, url: 'https://' + url, description, uses: uses.split(','),
    pricing, limits, source: source ? 'https://' + source : null,
  }
})

export const collections = {
  featured: { title: 'Featured Tools', description: 'Editor picks for everyday work and creative projects.', ids: ['chatgpt', 'claude', 'perplexity', 'cursor', 'leonardo', 'gamma'] },
  trending: { title: 'Trending Tools', description: 'An editorial shortlist of tools to try.', ids: ['deepseek', 'napkin', 'pika', 'suno', 'lovable', 'n8n'] },
  students: { title: 'Best AI Tools for Students', description: 'Research a topic, review your notes, or work through a problem.', ids: ['notebooklm', 'perplexity', 'consensus', 'photomath', 'wolfram', 'quillbot'] },
  developers: { title: 'Best AI Tools for Developers', description: 'Code, prototype, and experiment with models.', ids: ['github-copilot', 'cursor', 'replit', 'aider', 'ollama', 'ai-studio'] },
}

