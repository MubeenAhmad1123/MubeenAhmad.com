let userName = "";
let lastTopic = "";

// ------------------ THEME TOGGLER ------------------
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    const profileImg = document.getElementById('profile-img');
    
    // Check if elements exist before proceeding
    if (!themeIcon) {
        console.error('Theme icon element not found');
        return;
    }
    
    const isMidnight = body.classList.contains('theme-midnight-gold');

    body.classList.remove('theme-midnight-gold', 'theme-neon-cyber');

    if (isMidnight) {
        body.classList.add('theme-neon-cyber');
        themeIcon.className = 'fas fa-sun';
        if (profileImg) {
            profileImg.src = 'img/profile1.webp';
        }
        // Store theme in memory instead of localStorage
        window.selectedTheme = 'theme-neon-cyber';
    } else {
        body.classList.add('theme-midnight-gold');
        themeIcon.className = 'fas fa-moon';
        if (profileImg) {
            profileImg.src = 'img/profile.webp';
        }
        // Store theme in memory instead of localStorage
        window.selectedTheme = 'theme-midnight-gold';
    }
}
document.addEventListener("DOMContentLoaded", () => {
  const chatToggle    = document.getElementById("chat-toggle");
  const chatContainer = document.getElementById("chatbot-container");
  const chatClose     = document.getElementById("chat-close");

  if (!chatToggle || !chatContainer || !chatClose) {
    console.error("Missing chat elements");
    return;
  }

  function toggleChat() {
    chatToggle.classList.toggle("active");
    chatContainer.classList.toggle("hidden");
  }

  // Bind opening and closing
  chatToggle.addEventListener("click", toggleChat);
  chatClose.addEventListener("click", toggleChat);

  // Expose globally if still using inline:
  window.toggleChat = toggleChat;
});


    // --- INITIAL ANIMATION ---
    document.querySelectorAll('[data-animate]').forEach(el => {
        el.classList.add('animate');
    });

    // --- SMOOTH SCROLL ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // --- SCROLL OBSERVER ANIMATIONS ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('section').forEach(section => observer.observe(section));

  

    // --- FORM SUBMISSION ---
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }


// --- NAVBAR SCROLL STYLE CHANGE ---
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) {
        nav.style.background = 'var(--bg-card)';
        nav.style.backdropFilter = window.scrollY > 100 ? 'blur(20px)' : 'blur(10px)';
    }
});
// ------------------ BACK TO TOP ------------------
const backToTopBtn = document.getElementById("backToTop");
if (backToTopBtn) {
    window.addEventListener("scroll", () => {
        backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// ------------------ TYPEWRITER ------------------
const skills = [
    "Front-End Developer",
    "UI Designer",
    "Video Editor",
    "LinkedIn Content Strategist",
    "Creative Technologist"
];

const skillElement = document.getElementById("typed-skill");
if (skillElement) {
    const typingSpeed = 100, deletingSpeed = 50;
    const pauseAfterTyping = 1500, pauseBeforeTyping = 500;
    let skillIndex = 0, charIndex = 0, isDeleting = false;

    function typeEffect() {
        const current = skills[skillIndex];
        skillElement.textContent = isDeleting
            ? current.substring(0, --charIndex)
            : current.substring(0, ++charIndex);

        let delay = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === current.length) {
            delay = pauseAfterTyping;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            skillIndex = (skillIndex + 1) % skills.length;
            delay = pauseBeforeTyping;
        }

        setTimeout(typeEffect, delay);
    }
    typeEffect();
}
// ==================== FIXED TRAINABLE CHATBOT WITH IMPROVED RESPONSES ====================

class TrainableChatbot {
    constructor() {
        this.conversationHistory = [];
        this.userProfile = {
            name: "",
            interests: [],
            projectType: "",
            budget: "",
            timeline: "",
            visitCount: 0
        };
        this.currentTopic = "";
        this.lastResponseType = ""; // Track last response type to avoid repetition
          this.recentResponses = []; // Add this line
    this.maxRecentResponses = 3; 
        // Training data structures
        this.trainingData = {
            intents: {},
            responses: {},
            entities: {},
            patterns: {},
            faq: {},
            customRules: []
        };
        
        this.init();
        this.loadTrainingData();
    }

    // ==================== IMPROVED TRAINING DATA LOADING ====================
    async loadTrainingData() {
        // Load default training data first
        this.loadDefaultTrainingData();
        
        // Load Mubeen's personal data
        this.loadMubeenPersonalData();
        
        // Load custom training data
        await this.loadCustomTrainingData();
    }

    // ⭐ IMPROVED MUBEEN'S DATA WITH BETTER PATTERN MATCHING ⭐


    loadDefaultTrainingData() {
        // Initialize base structure
        this.trainingData.intents = {};
        this.trainingData.faq = {};
        this.trainingData.customRules = [];
    }

    async loadCustomTrainingData() {
        try {
            const response = await fetch('./data/training_data.json');
            if (response.ok) {
                const customData = await response.json();
                this.mergeTrainingData(customData);
            }
        } catch (error) {
            console.log('No custom training file found, using defaults');
        }
    }

    mergeTrainingData(newData) {
        Object.keys(newData).forEach(key => {
            if (this.trainingData[key]) {
                if (key === 'intents') {
                    Object.keys(newData[key]).forEach(intent => {
                        this.trainingData[key][intent] = newData[key][intent];
                    });
                } else if (key === 'customRules') {
                    this.trainingData[key].push(...newData[key]);
                } else {
                    this.trainingData[key] = { ...this.trainingData[key], ...newData[key] };
                }
            } else {
                this.trainingData[key] = newData[key];
            }
        });
    }

    // ==================== IMPROVED INTENT DETECTION ====================
    detectIntent(message) {
      
      
const text = this.preprocessMessage(message); // Add this line
    let bestMatch = { intent: 'general', score: 0 };

        // Check custom rules first
        for (const rule of this.trainingData.customRules) {
            if (rule.pattern.test(text)) {
                return 'custom_' + this.trainingData.customRules.indexOf(rule);
            }
        }

        // Check FAQ exact matches
        const faqMatch = this.findFAQMatch(text);
        if (faqMatch) {
            return 'faq';
        }

        // Check trained intents with improved scoring
        Object.entries(this.trainingData.intents).forEach(([intent, data]) => {
            const score = this.calculateIntentScore(text, data.patterns);
            if (score > bestMatch.score) {
                bestMatch = { intent, score };
            }
        });

        // Lower threshold for better matching
        return bestMatch.score > 0.2 ? bestMatch.intent : 'general';
    }
    // ----------------- Global Bot FAQs ------------------

// Add this new function after detectIntent
preprocessMessage(message) {
    const text = message.toLowerCase().trim();
    
    // Handle variations and common typos
    const variations = {
        'wat': 'what',
        'u': 'you',
        'ur': 'your',
        'r': 'are',
        'plz': 'please',
        'thx': 'thanks',
        'ty': 'thank you',
        'web dev': 'web development',
        'frontend': 'front end',
        'backend': 'back end'
    };
    
    let processedText = text;
    Object.keys(variations).forEach(key => {
        const regex = new RegExp(`\\b${key}\\b`, 'g');
        processedText = processedText.replace(regex, variations[key]);
    });
    
    return processedText;
}
    // ==================== IMPROVED SCORING ALGORITHM ====================
  calculateIntentScore(text, patterns) {
    let maxScore = 0;
    const textWords = text.split(' ').filter(word => word.length > 2);
    
    patterns.forEach(pattern => {
        let score = 0;
        const patternWords = pattern.toLowerCase().split(' ').filter(word => word.length > 2);
        
        // Exact match gets highest score
        if (text === pattern.toLowerCase()) {
            score = 3.0;
        }
        // Check if text contains the complete pattern or vice versa
        else if (text.includes(pattern.toLowerCase())) {
            score = 2.5;
        }
        else if (pattern.toLowerCase().includes(text)) {
            score = 2.0;
        }
        // Check for partial matches with higher threshold
        else {
            let wordMatches = 0;
            let totalWords = Math.max(patternWords.length, textWords.length);
            
            patternWords.forEach(patternWord => {
                textWords.forEach(textWord => {
                    // Exact word match
                    if (textWord === patternWord) {
                        wordMatches += 1.0;
                    }
                    // Partial word match (both directions)
                    else if (textWord.length > 3 && patternWord.length > 3) {
                        if (textWord.includes(patternWord) || patternWord.includes(textWord)) {
                            wordMatches += 0.8;
                        }
                    }
                });
            });
            
            // Higher threshold for word matching
            score = wordMatches / totalWords;
            
            // Bonus for shorter queries that match well
            if (textWords.length <= 2 && wordMatches > 0) {
                score += 0.3;
            }
        }
        
        maxScore = Math.max(maxScore, score);
    });

    return maxScore;
}
    findFAQMatch(text) {
        const faqKeys = Object.keys(this.trainingData.faq);
        
        if (this.trainingData.faq[text]) {
            return text;
        }
        
        for (const key of faqKeys) {
            if (this.calculateSimilarity(text, key) > 0.6) {
                return key;
            }
        }
        
        return null;
    }

    calculateSimilarity(str1, str2) {
        const words1 = str1.toLowerCase().split(' ');
        const words2 = str2.toLowerCase().split(' ');
        
        let matches = 0;
        words1.forEach(word => {
            if (words2.some(w => w.includes(word) || word.includes(w))) {
                matches++;
            }
        });
        
        return matches / Math.max(words1.length, words2.length);
    }

    // ==================== IMPROVED RESPONSE GENERATION ====================
    generateResponse(intent, entities, message) {
    let response = '';
    
    if (intent.startsWith('custom_')) {
        const ruleIndex = parseInt(intent.split('_')[1]);
        const rule = this.trainingData.customRules[ruleIndex];
        response = this.personalizeResponse(rule.response, entities);
    }
    else if (intent === 'faq') {
        const faqKey = this.findFAQMatch(message.toLowerCase());
        if (faqKey) {
            response = this.personalizeResponse(this.trainingData.faq[faqKey], entities);
        }
    }
    else if (this.trainingData.intents[intent]) {
        const responses = this.trainingData.intents[intent].responses;
        
        // Filter out recently used responses
        let availableResponses = responses.filter(r => !this.recentResponses.includes(r));
        if (availableResponses.length === 0) {
            // If all responses were recent, use all but clear the recent list
            availableResponses = responses;
            this.recentResponses = [];
        }
        
        const randomResponse = availableResponses[Math.floor(Math.random() * availableResponses.length)];
        response = this.personalizeResponse(randomResponse, entities);
        
        // Track this response
        this.recentResponses.push(randomResponse);
        if (this.recentResponses.length > this.maxRecentResponses) {
            this.recentResponses.shift(); // Remove oldest
        }
    }
    else {
        response = this.generateFallbackResponse(message);
    }

    this.lastResponseType = intent;
    return response;
}
    personalizeResponse(response, entities) {
        let personalizedResponse = response;
        
        if (entities.name && this.userProfile.name) {
            personalizedResponse = personalizedResponse.replace(/\{name\}/g, this.userProfile.name);
        }
        
        if (entities.budget) {
            personalizedResponse = personalizedResponse.replace(/\{budget\}/g, entities.budget);
        }
        
        if (entities.projectType) {
            personalizedResponse = personalizedResponse.replace(/\{projectType\}/g, entities.projectType);
        }

        return personalizedResponse;
    }

    // ==================== IMPROVED FALLBACK RESPONSES ====================
    generateFallbackResponse(message) {
    // Check if the message might be a casual response
    const casualWords = ['ok', 'okay', 'cool', 'nice', 'good', 'great', 'awesome', 'thanks', 'wow'];
    const isCasual = casualWords.some(word => message.toLowerCase().includes(word));
    
    if (isCasual) {
        const casualResponses = [
            "Glad you're interested! 😊 What else would you like to know?",
            "Thanks! 🌟 Any questions about my projects, skills, or services?",
            "Awesome! 🚀 Feel free to ask about web development or my work!",
            "Great! 💫 What would you like to explore next?",
            "Perfect! 🎯 How else can I help you today?"
        ];
        return this.getUniqueResponse(casualResponses);
    }
    
    // Check if asking about pizza or random topics
    const randomTopics = ['pizza', 'food', 'weather', 'music', 'movies', 'sports'];
    const isRandom = randomTopics.some(topic => message.toLowerCase().includes(topic));
    
    if (isRandom) {
        const funResponses = [
            "Haha! While I'd love to chat about that, I'm here to help with web development! 😄 Got any coding questions?",
            "That's interesting! But I'm much better at talking about websites than that topic! 💻 What can I build for you?",
            "Ha! I prefer coding to that topic! 😊 Let's talk about web development - what project do you have in mind?"
        ];
        return this.getUniqueResponse(funResponses);
    }
    
    // Default fallback responses
    const fallbackResponses = [
        "I'm still learning! Could you rephrase that or ask about my skills, projects, pricing, or services? 🤔",
        "Hmm, I didn't quite catch that. Try asking about my web development services, experience, or portfolio! 💻",
        "Not sure about that one! Feel free to ask about my projects, technical skills, or how I can help you! 🚀",
        "Let me help you better! Try asking about pricing, my background, or what services I offer! 😊"
    ];
    
    return this.getUniqueResponse(fallbackResponses);
}

// Add this new helper function after generateFallbackResponse
getUniqueResponse(responses) {
    let availableResponses = responses.filter(r => !this.recentResponses.includes(r));
    if (availableResponses.length === 0) {
        availableResponses = responses;
        this.recentResponses = [];
    }
    
    const selectedResponse = availableResponses[Math.floor(Math.random() * availableResponses.length)];
    
    // Track this response to avoid repetition
    this.recentResponses.push(selectedResponse);
    if (this.recentResponses.length > this.maxRecentResponses) {
        this.recentResponses.shift();
    }
    
    return selectedResponse;
}
    extractKeywords(text) {
        const stopWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were'];
        return text.toLowerCase()
            .replace(/[^\w\s]/g, '')
            .split(' ')
            .filter(word => word.length > 2 && !stopWords.includes(word));
    }

    saveTrainingData() {
        console.log('Training data updated in memory');
    }

    exportTrainingData() {
        return JSON.stringify(this.trainingData, null, 2);
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.displayInitialGreeting();
        });
    }
// 2. Fixed sendMessage function with better error handling
sendMessage() {
    const input = document.getElementById("user-input");
    if (!input) return;

    const message = input.value.trim();
    if (!message) return;

    this.clearSuggestions();
    this.displayMessage("user", message);
    this.displayTyping();

    // Preprocess the message for better matching
    const processedMessage = this.preprocessMessage(message);
    let matchedEntry = null;
    let matchedKey = null;

    // Try exact match first (case-insensitive)
    const exactKey = Object.keys(botFAQs).find(key => 
        key.toLowerCase() === processedMessage.toLowerCase()
    );
    
    if (exactKey) {
        matchedEntry = botFAQs[exactKey];
        matchedKey = exactKey;
    }

    // If no exact match, try partial matching with priority scoring
    if (!matchedEntry) {
        let bestMatch = { key: null, score: 0, entry: null };
        
        Object.keys(botFAQs).forEach(key => {
            const keyLower = key.toLowerCase();
            const msgLower = processedMessage.toLowerCase();
            
            // Calculate match score
            let score = 0;
            
            // Exact phrase match gets highest score
            if (msgLower.includes(keyLower) || keyLower.includes(msgLower)) {
                score = 100;
            }
            // Word-by-word matching
            else {
                const keyWords = keyLower.split(/\s+/);
                const msgWords = msgLower.split(/\s+/);
                
                const matchingWords = keyWords.filter(keyWord =>
                    msgWords.some(msgWord => 
                        msgWord.includes(keyWord) || keyWord.includes(msgWord)
                    )
                );
                
                score = (matchingWords.length / keyWords.length) * 80;
            }
            
            if (score > bestMatch.score && score > 50) {
                bestMatch = { key, score, entry: botFAQs[key] };
            }
        });
        
        if (bestMatch.entry) {
            matchedEntry = bestMatch.entry;
            matchedKey = bestMatch.key;
        }
    }

    // Use matched response or fallback
    let response;
    let quickReplies = [];

    if (matchedEntry) {
        response = matchedEntry.response;
        quickReplies = matchedEntry.quick_replies || [];
    } else {
        // Fallback to the original processMessage method
        response = this.processMessage(message);
    }

    const delay = Math.min(800 + response.length * 20, 2500);

    setTimeout(() => {
        this.removeTyping();
        this.displayMessage("bot", response);

        // Show quick reply buttons
        if (quickReplies.length > 0) {
            const suggestions = quickReplies.map(text => ({ 
                label: text, 
                value: text 
            }));
            this.showSuggestions(suggestions);
        } else {
            this.clearSuggestions();
        }
    }, delay);

    input.value = "";
}

// 3. Enhanced preprocessing function with greeting detection
preprocessMessage(message) {
    let text = message.toLowerCase().trim();
    
    // Handle common variations and typos
    const variations = {
        'wat': 'what',
        'u': 'you',
        'ur': 'your',
        'r': 'are',
        'plz': 'please',
        'thx': 'thanks',
        'ty': 'thank you',
        'web dev': 'web development',
        'frontend': 'front end',
        'backend': 'back end',
        'website': 'site',
        'webpage': 'site',
        // Add greeting variations
        'hii': 'hi',
        'hiii': 'hi',
        'helo': 'hello',
        'hellow': 'hello',
        'hy': 'hi',
        'hye': 'hi'
    };
    
    Object.keys(variations).forEach(key => {
        const regex = new RegExp(`\\b${key}\\b`, 'g');
        text = text.replace(regex, variations[key]);
    });
    
    return text;
}

// 4. Updated generateResponse function to work with both systems
generateResponse(intent, entities, message) {
    let response = '';
    
    // First check if this is a direct FAQ match
    const faqMatch = this.findFAQMatch(message.toLowerCase());
    if (faqMatch && botFAQs[faqMatch]) {
        response = this.personalizeResponse(botFAQs[faqMatch].response, entities);
        return response;
    }
    
    // Then check custom rules
    if (intent.startsWith('custom_')) {
        const ruleIndex = parseInt(intent.split('_')[1]);
        const rule = this.trainingData.customRules[ruleIndex];
        response = this.personalizeResponse(rule.response, entities);
    }
    // Check training data intents
    else if (this.trainingData && this.trainingData.intents && this.trainingData.intents[intent]) {
        const responses = this.trainingData.intents[intent].responses;
        
        // Filter out recently used responses
        let availableResponses = responses.filter(r => !this.recentResponses.includes(r));
        if (availableResponses.length === 0) {
            availableResponses = responses;
            this.recentResponses = [];
        }
        
        const randomResponse = availableResponses[Math.floor(Math.random() * availableResponses.length)];
        response = this.personalizeResponse(randomResponse, entities);
        
        // Track this response
        this.recentResponses.push(randomResponse);
        if (this.recentResponses.length > this.maxRecentResponses) {
            this.recentResponses.shift();
        }
    }
    else {
        response = this.generateFallbackResponse(message);
    }

    this.lastResponseType = intent;
    return response;
}

// 5. Fixed findFAQMatch function
findFAQMatch(text) {
    const lowerText = text.toLowerCase().trim();
    
    // Direct key match first
    for (const key in botFAQs) {
        if (lowerText === key.toLowerCase()) {
            return key;
        }
    }
    
    // Partial match
    for (const key in botFAQs) {
        if (lowerText.includes(key.toLowerCase()) || key.toLowerCase().includes(lowerText)) {
            return key;
        }
    }
    
    // Keyword-based matching
    const textWords = lowerText.split(/\s+/);
    for (const key in botFAQs) {
        const keyWords = key.toLowerCase().split(/\s+/);
        const matchCount = keyWords.filter(keyWord => 
            textWords.some(textWord => 
                textWord.includes(keyWord) || keyWord.includes(textWord)
            )
        ).length;
        
        if (matchCount > keyWords.length / 2) {
            return key;
        }
    }
    
    return null;
}

// 6. Fixed displayInitialGreeting function with better error handling
displayInitialGreeting() {
    const greetings = [
        "Hi there! 👋 I'm Mubeen Ahmad, a Creative Front-End Developer. How can I help you today?",
        "Hello! 😊 Great to see you! I'm Mubeen - what brings you here?",
        "Hey! 🌟 Welcome to my space! I'm a front-end developer ready to help with your projects!"
    ];
    
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];
    
    // Clear any existing suggestions first
    this.clearSuggestions();
    
    // Display the greeting message first
    setTimeout(() => {
        this.displayMessage("bot", greeting);
        
        // Force show suggestions after message is displayed
        setTimeout(() => {
            const suggestions = [
                { label: "👋 About Me", value: "Tell me about yourself" },
                { label: "💻 My Skills", value: "What are your technical skills?" },
                { label: "🚀 My Projects", value: "Show me your projects" },
                { label: "💰 Pricing", value: "What are your rates?" },
                { label: "📞 Contact", value: "How can I contact you?" }
            ];
            
            console.log("Showing initial suggestions:", suggestions); // Debug log
            this.showSuggestions(suggestions);
            
            // Fallback - if showSuggestions doesn't work, try direct DOM manipulation
            if (!document.querySelector('.suggestion-button')) {
                this.forceShowSuggestions(suggestions);
            }
        }, 800);
        
    }, 1000);
}

// 7. Fallback function to force show suggestions if showSuggestions fails
forceShowSuggestions(suggestions) {
    console.log("Force showing suggestions"); // Debug log
    
    // Try to find the suggestions container
    let suggestionsContainer = document.querySelector('.suggestions-container') || 
                              document.querySelector('#suggestions') ||
                              document.querySelector('.quick-replies');
    
    // If no container exists, create one
    if (!suggestionsContainer) {
        suggestionsContainer = document.createElement('div');
        suggestionsContainer.className = 'suggestions-container';
        suggestionsContainer.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin: 10px 0;
            padding: 10px;
        `;
        
        // Try to append to common chat container locations
        const chatContainer = document.querySelector('.chat-container') ||
                            document.querySelector('#chat-messages') ||
                            document.querySelector('.messages') ||
                            document.body;
        
        chatContainer.appendChild(suggestionsContainer);
    }
    
    // Clear existing suggestions
    suggestionsContainer.innerHTML = '';
    
    // Create suggestion buttons
    suggestions.forEach(suggestion => {
        const button = document.createElement('button');
        button.className = 'suggestion-button';
        button.textContent = suggestion.label;
        button.style.cssText = `
            background: #007bff;
            color: white;
            border: none;
            padding: 8px 12px;
            border-radius: 20px;
            cursor: pointer;
            font-size: 14px;
            transition: background 0.3s;
        `;
        

        button.onmouseover = () => button.style.background = '#0056b3';
        button.onmouseout = () => button.style.background = '#007bff';
        
        // Add click handler
        button.onclick = () => {
            const input = document.getElementById("user-input");
            if (input) {giy
                input.value = suggestion.value;
                this.sendMessage();
            }
        };
        
        suggestionsContainer.appendChild(button);
    });
}

    extractEntities(message) {
        const entities = {};
        const nameMatch = message.match(/(?:my name is|i'm|i am)\s+([a-zA-Z]+)/i);
        if (nameMatch) entities.name = nameMatch[1];
        const budgetMatch = message.match(/\$?(\d+(?:,\d{3})*(?:\.\d{2})?)/);
        if (budgetMatch) entities.budget = budgetMatch[1];
        const timeMatch = message.match(/(\d+)\s*(days?|weeks?|months?|hours?)/i);
        if (timeMatch) entities.timeframe = `${timeMatch[1]} ${timeMatch[2]}`;
        const projectTypes = ['website', 'landing page', 'e-commerce', 'blog', 'portfolio', 'dashboard', 'app'];
        projectTypes.forEach(type => {
            if (message.toLowerCase().includes(type)) entities.projectType = type;
        });
        return entities;
    }

    updateUserProfile(entities) {
        if (entities.name) this.userProfile.name = entities.name.charAt(0).toUpperCase() + entities.name.slice(1);
        if (entities.budget) this.userProfile.budget = entities.budget;
        if (entities.timeframe) this.userProfile.timeline = entities.timeframe;
        if (entities.projectType) {
            this.userProfile.projectType = entities.projectType;
            if (!this.userProfile.interests.includes(entities.projectType)) {
                this.userProfile.interests.push(entities.projectType);
            }
        }
        this.userProfile.visitCount++;
    }

    displayMessage(sender, message) {
        const chatBody = document.getElementById("chat-body");
        if (!chatBody) return;
        
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender);
        const avatar = document.createElement("img");
        avatar.classList.add("avatar");
        avatar.src = sender === "user" ? "img/user-avatar.webp" : "img/bot-avatar.webp";
        avatar.alt = sender === "user" ? (this.userProfile.name || "You") : "Mubeen";
        const textDiv = document.createElement("div");
        textDiv.classList.add("text");
        textDiv.style.whiteSpace = "pre-line";
        textDiv.textContent = message;
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(textDiv);
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    displayTyping() {
        const chatBody = document.getElementById("chat-body");
        if (!chatBody) return;
        const typingDiv = document.createElement("div");
        typingDiv.classList.add("message", "bot");
        typingDiv.id = "typing-indicator";
        const avatar = document.createElement("img");
        avatar.classList.add("avatar");
        avatar.src = "img/bot-avatar.webp";
        avatar.alt = "Mubeen";
        const dots = document.createElement("div");
        dots.classList.add("typing-dots");
        dots.innerHTML = "<span></span><span></span><span></span>";
        typingDiv.appendChild(avatar);
        typingDiv.appendChild(dots);
        chatBody.appendChild(typingDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    removeTyping() {
        const typingIndicator = document.getElementById("typing-indicator");
        if (typingIndicator) typingIndicator.remove();
    }

   showSuggestions(suggestions) {
    const container = document.getElementById("quick-replies");
    if (!container) return;

    container.innerHTML = "";

    suggestions.forEach(suggestion => {
        const btn = document.createElement("button");
        btn.textContent = suggestion.label;
        btn.classList.add("quick-btn");
        btn.onclick = () => {
            const input = document.getElementById("user-input");
            if (input) {
                input.value = suggestion.value;
                this.sendMessage();
                this.clearSuggestions();
            }
        };
        container.appendChild(btn);
    });
    container.scrollIntoView({ behavior: "smooth", block: "end" });

}


    clearSuggestions() {
        const container = document.getElementById("quick-replies");
        if (container) container.innerHTML = "";
    }

    checkEnter(e) {
        if (e.key === "Enter") this.sendMessage();
    }

    // ==================== ADDITIONAL TRAINING METHODS ====================
    addIntent(intentName, patterns, responses) {
        if (!this.trainingData.intents[intentName]) {
            this.trainingData.intents[intentName] = { patterns: [], responses: [] };
        }
        
        this.trainingData.intents[intentName].patterns.push(...patterns);
        this.trainingData.intents[intentName].responses.push(...responses);
        
        this.saveTrainingData();
    }

    addFAQ(question, answer) {
        this.trainingData.faq[question.toLowerCase()] = answer;
        this.saveTrainingData();
    }

    addCustomPattern(pattern, response, priority = 1) {
        this.trainingData.customRules.push({
            pattern: new RegExp(pattern, 'i'),
            response: response,
            priority: priority
        });
        this.saveTrainingData();
    }
}

// ==================== INITIALIZE CHATBOT ====================
const chatbot = new TrainableChatbot();
function findAdvancedFAQMatch(text) {
    const lowerText = text.toLowerCase();
    
    for (const [key, faq] of Object.entries(advancedBotFAQs)) {
        for (const trigger of faq.triggers) {
            if (lowerText.includes(trigger.toLowerCase())) {
                return faq;
            }
        }
    }
    
    return null;
}
// Global functions
function sendMessage() {
    chatbot.sendMessage();
}

function checkEnter(e) {
    chatbot.checkEnter(e);
}

// Debug functions
function exportTrainingData() {
    const data = chatbot.exportTrainingData();
    console.log("Training data exported:", data);
    return data;
}

// Test function
function testChatbot() {
    console.log("Testing Mubeen's chatbot:");
    console.log("Available intents:", Object.keys(chatbot.trainingData.intents));
    console.log("FAQ items:", Object.keys(chatbot.trainingData.faq));
    console.log("Custom rules:", chatbot.trainingData.customRules.length);
    
    // Test some inputs
    const testInputs = ["hello", "hi", "intro", "skills", "projects", "pricing"];
    testInputs.forEach(input => {
        const intent = chatbot.detectIntent(input);
        console.log(`"${input}" -> Intent: ${intent}`);
    });
}

// Make available globally
window.chatbot = chatbot;
window.testChatbot = testChatbot;