const botFAQs = {
  // Missing Quick Reply Responses - Add these to your botFAQs object:

"💻 My Skills": {
  response: "I'm skilled in HTML5, CSS3, JavaScript, React, Tailwind CSS, API integration, responsive design, and performance optimization. I also work with Figma for design and Git for version control. 💡",
  quick_replies: ["🚀 My Projects", "Contact", "💰 Pricing"]
},

"🚀 My Projects": {
  response: "I've built diverse projects including a weather app with API integration, an e-commerce store with cart functionality, a task manager with Pomodoro timer, and various landing pages. Each project focuses on clean code and user experience! 🚀",
  quick_replies: ["Weather App", "E-commerce Site", "Task Manager", "Portfolio"]
},

"Contact": {
  response: "Ready to work together? 📬 Email me at mubeenahma1123@gmail.com or connect on LinkedIn. I'm quick to respond and excited to discuss your project!",
  quick_replies: ["📞 Share contact email", "Book a call", "💰 Pricing"]
},

"💰 Pricing": {
  response: "My rates are competitive and project-based: Landing pages ($20-50), Full websites ($80-200), E-commerce sites ($100-300). All include responsive design, revisions, and support! 💰",
  quick_replies: ["Get a quote", "Contact", "What's included?"]
},

"📞 Share contact email": {
  response: "📧 Email: mubeenahma1123@gmail.com | 📱 WhatsApp: +923218492868 | 💼 LinkedIn: Mubeen Ahmad - I'm always happy to chat about your project!"
},

"Business Website": {
  response: "Perfect! Business websites need to build trust and convert visitors. What's your business focus? 🏢",
  quick_replies: ["Service-based business", "Product-based business", "Local business", "Online business"]
},

"Yes, I have content": {
  response: "Great! Having content ready speeds up the process significantly. I can work with your existing content and optimize it for web presentation. 📝"
},

"I need help with branding": {
  response: "No problem! I can help create your brand identity including logo design, color palette, typography, and overall visual direction. 🎨",
  quick_replies: ["Need logo design", "Full brand package", "Brand refresh"]
},

"I need copywriting too": {
  response: "Perfect! I write conversion-focused copy that speaks to your audience and drives action. From headlines to CTAs, I've got you covered. ✍️",
  quick_replies: ["Website copy", "Sales pages", "About page copy"]
},

"Include a form": {
  response: "Absolutely! I can add contact forms, lead capture forms, or custom forms with validation and email notifications. 📝"
},

"Need email integration": {
  response: "Sure! I can integrate with services like Mailchimp, ConvertKit, or custom email solutions to capture and manage your leads effectively. 📧"
},

"Add product demo": {
  response: "Great idea! I can embed video demos, create interactive product showcases, or add preview galleries to highlight your product's best features. 🎥"
},

"Include countdown": {
  response: "Perfect for creating urgency! I can add countdown timers for launches, sales, or limited-time offers to boost conversions. ⏰"
},

"Launch strategy?": {
  response: "I can help plan your launch timeline, create teaser content, set up analytics tracking, and optimize for maximum impact on launch day. 🚀"
},

"View past work": {
  response: "Check out my portfolio to see real examples of launch pages, product showcases, and conversion-optimized designs I've created for other clients. 💼"
},

"Include RSVP form": {
  response: "Absolutely! I can create custom RSVP forms with attendee management, confirmation emails, and integration with your preferred tools. 📋"
},

"Event details?": {
  response: "I'll help you present all essential event information clearly - date, time, location, agenda, speakers, and any special instructions in an engaging layout. 📅"
},

"Mobile-friendly?": {
  response: "100%! All my event pages are fully responsive and optimized for mobile registration since many people RSVP from their phones. 📱"
},

"Track signups?": {
  response: "Yes! I can set up analytics to track registration rates, traffic sources, and conversion metrics so you know exactly how your event page is performing. 📊"
},

"Design Portfolio": {
  response: "Perfect! Design portfolios need to showcase your creativity beautifully. I'll create galleries, case studies, and smooth navigation to highlight your best work. 🎨"
},

"Photography": {
  response: "Great choice! Photography portfolios need stunning image galleries, smooth loading, and professional presentation. I'll make your photos shine online. 📸"
},

"Development Work": {
  response: "Excellent! I'll showcase your coding projects with live demos, code snippets, tech stacks used, and detailed project breakdowns. Perfect for developer portfolios. 👨‍💻"
},

"Creative Arts": {
  response: "Amazing! Creative portfolios need unique layouts that reflect your artistic style. I'll design something as creative as your work itself. 🎭"
},

"Case Studies": {
  response: "Smart approach! Case studies show your process and results. I'll create detailed project breakdowns with before/after, challenges, solutions, and outcomes. 📈"
},

"Weather App": {
  response: "My weather app features real-time data from OpenWeather API, 5-day forecasts, location search, and responsive design. Built with vanilla JavaScript and clean UI! 🌤️"
},

"Task Manager": {
  response: "TaskFlow includes task creation, editing, filtering, Pomodoro timer (25 min), dark/light themes, and localStorage for offline functionality. Great for productivity! ✅"
},

"Service-based business": {
  response: "Perfect! Service businesses need credibility and clear value propositions. I'll highlight your expertise, testimonials, and make it easy for clients to contact you. 🤝"
},

"Product-based business": {
  response: "Great! Product businesses need compelling showcases and easy purchasing flows. I'll create beautiful product displays with clear CTAs. 🛍️"
},

"Local business": {
  response: "Excellent! Local businesses need local SEO optimization, contact info prominence, and location-based features. I'll help you dominate your local market. 📍"
},

"Online business": {
  response: "Perfect! Online businesses need conversion optimization, trust signals, and seamless user experiences. I'll build for maximum online impact. 💻"
},

"About page copy": {
  response: "I'll craft compelling about page copy that tells your story, builds trust, and connects with your audience on a personal level. It's where relationships begin! 👥"
},
  "can you help me choose a domain and hosting": {
    response: "Absolutely — I guide you through selecting reliable hosting and the perfect domain name that reflects your brand.",
    quick_replies: ["Domain suggestions?", "Hosting recommendations?", "Setup included?", "Ongoing management?"]
  },
  "what if i need additional features later": {
    response: "No problem! I build scalable websites, so new features can be added smoothly as your business grows.",
    quick_replies: ["Feature examples?", "Additional cost?", "Timeline for updates?", "Maintenance plan?"]
  },
  "do you offer a design-first or code-first approach": {
    response: "It depends on your needs — I can start with mockups or jump straight to clean development with your approval at each step.",
    quick_replies: ["Design first", "Code first", "What's better?", "Show examples"]
  },
  "will i be able to track my visitors and traffic": {
    response: "Absolutely — I can integrate Google Analytics or other tools to help you monitor user behavior and performance.",
    quick_replies: ["Google Analytics?", "Other tracking tools?", "Privacy compliant?", "Custom reports?"]
  },
  "will my website include legal pages like privacy policy or terms": {
    response: "Yes — I can include essential legal pages and help you set them up properly for compliance.",
    quick_replies: ["Privacy policy", "Terms of service", "Cookie policy", "GDPR compliance"]
  },
  "Domain suggestions?": {
    response: "Yes! I'll help you brainstorm brandable, SEO-friendly domain names — and check for availability across popular extensions like .com, .co, and more."
  },
  "Hosting recommendations?": {
    response: "Definitely. I recommend reliable and secure hosting based on your needs — like Bluehost, SiteGround, Hostinger, or scalable cloud providers like Vercel or Netlify for modern stacks."
  },
  "Setup included?": {
    response: "Yes — I take care of the full setup process: connecting your domain, configuring hosting, and pointing everything to your live website smoothly and securely."
  },
   "Tell me about yourself": {
    response: "Hi there! 👋 I'm Mubeen Ahmad, a creative front-end developer passionate about crafting responsive, user-friendly interfaces. I turn ideas into interactive, visually appealing websites. 💻✨",
    quick_replies: ["💻 My Skills", "🚀 My Projects", "Contact"]
  },
  "What are your technical skills?": {
    response: "I'm skilled in HTML, CSS, JavaScript, and modern frameworks like React. I also work with APIs, animations, responsive design, and performance optimization. 💡",
    quick_replies: ["🚀 My Projects", "Contact", "💰 Pricing"]
  },
  "Show me your projects": {
    response: "Absolutely! I’ve built a weather app, e-commerce store, to-do task manager, portfolio site, and even a tic-tac-toe game with AI logic. 🚀 Want to see one in action?",
    quick_replies: ["Weather App", "To-Do App", "E-commerce Site", "Portfolio"]
  },
  "What are your rates?": {
    response: "My pricing depends on the project scope, but I offer flexible packages for landing pages, full websites, and custom apps. 💰 Let's discuss your needs!",
    quick_replies: ["Contact", "Landing Page", "Full Website"]
  },
  "How can I contact you?": {
    response: "You can reach out to me via email or connect with me on LinkedIn. I'm quick to respond and always happy to chat! 📬",
    quick_replies: ["📞 Share contact email", "💻 My Skills", "🚀 My Projects"]
  },
  "Ongoing management?": {
    response: "If you'd prefer hands-off maintenance, I offer ongoing management — including renewals, backups, updates, and performance monitoring so everything stays running smoothly."
  },
  "Feature examples?": {
    response: "Common additions include contact forms, booking systems, payment gateways, user accounts, blog sections, or advanced animations — whatever your business grows to need."
  },
  "Additional cost?": {
    response: "Pricing depends on complexity, but I offer fair rates for existing clients. Simple additions like forms are usually $20-50, while complex features are quoted separately."
  },
  "Timeline for updates?": {
    response: "Most feature additions take 2-5 days depending on complexity. I'll always give you a clear timeline upfront so you know what to expect."
  },
  "Maintenance plan?": {
    response: "Yes! I offer ongoing maintenance plans that include regular updates, feature additions, and priority support — perfect for growing businesses."
  },
  "Design first": {
    response: "Great choice! I'll create detailed mockups and wireframes in Figma first, get your approval, then build exactly what you've seen and approved."
  },
  "Code first": {
    response: "Perfect for faster launches! I'll build a working prototype quickly and iterate based on your feedback — ideal when you trust my design judgment."
  },
  "What's better?": {
    response: "Design-first is better for complex projects or when you want full visual control. Code-first works great for simpler sites or when speed is priority."
  },
  "Google Analytics?": {
    response: "Yes! I can set up Google Analytics 4 with custom goals, conversion tracking, and audience insights — so you know exactly how your site performs."
  },
  "Other tracking tools?": {
    response: "Absolutely! I can integrate tools like Hotjar for heatmaps, Facebook Pixel for ads, or privacy-focused options like Plausible Analytics."
  },
  "Privacy compliant?": {
    response: "Yes — I ensure all tracking is GDPR and privacy-compliant with proper cookie consent and data handling according to current regulations."
  },
  "Custom reports?": {
    response: "I can set up custom dashboards and automated reports so you get the exact metrics that matter most to your business goals."
  },
  "Privacy policy": {
    response: "I can create a comprehensive privacy policy tailored to your business, covering data collection, cookies, and user rights according to GDPR and other regulations."
  },
  "Terms of service": {
    response: "I'll draft clear terms of service that protect your business while being user-friendly — covering usage rights, limitations, and legal requirements."
  },
  "Cookie policy": {
    response: "I can add a compliant cookie policy with proper consent mechanisms, explaining what cookies you use and giving users control over their preferences."
  },
  "GDPR compliance": {
    response: "I ensure full GDPR compliance including data processing notices, user rights information, and proper consent flows for EU visitors."
  },
   "Domain suggestions?": {
    response: "Yes! I'll help you brainstorm brandable, SEO-friendly domain names — and check for availability across popular extensions like .com, .co, and more."
  },
  "Hosting recommendations?": {
    response: "Definitely. I recommend reliable and secure hosting based on your needs — like Bluehost, SiteGround, Hostinger, or scalable cloud providers like Vercel or Netlify for modern stacks."
  },
  "Setup included?": {
    response: "Yes — I take care of the full setup process: connecting your domain, configuring hosting, and pointing everything to your live website smoothly and securely."
  },
  "Ongoing management?": {
    response: "If you'd prefer hands-off maintenance, I offer ongoing management — including renewals, backups, updates, and performance monitoring so everything stays running smoothly."
  },
  "What's included?": {
    response: "Support includes bug fixes, minor updates, performance monitoring, and answering any questions you have about using or managing the site effectively."
  },
  "How long?": {
    response: "I typically offer free support for the first 30 days after launch. After that, I can continue on a monthly maintenance plan if you need ongoing help."
  },
  "Training provided?": {
    response: "Yes! I offer personalized walkthroughs, screen recordings, or live sessions to help you confidently manage your website on your own."
  },
  "Update assistance?": {
    response: "Definitely. Whether it's adding new content, updating plugins, or making layout tweaks — I'm here to assist whenever you need updates."
  },
  "Call Timing": {
    response: "I'm flexible with scheduling and can accommodate different time zones. We can find a time that works best for both of us."
  },
  // Website Development Requests
  "i need a website": {
    response: "Sounds great! Please tell me more about your project so I can provide a more tailored response. 💬 Let's bring your vision to life — tell me what you need!",
    quick_replies: ["Business Website", "Portfolio Website", "Landing Page", "E-commerce Site"]
  },
  "can you build a website for my business": {
    response: "Sounds great! Please tell me more about your project so I can provide a more tailored response. 🏢 Your business deserves a bold online presence — let's start!",
    quick_replies: ["Yes, I have content", "I need help with branding", "I need copywriting too"]
  },
  "i want a website but don't know where to start can you guide me": {
    response: "Absolutely! I'll guide you through every step — from idea to launch. 🧭 No stress — I'll walk you through it all!",
    quick_replies: ["What's the process?", "Can we schedule a call?", "Can you show examples?"]
  },
  "What's the process?": {
    response: "It starts with a quick chat to understand your goals, then I'll guide you through planning, design, development, and launch — step by step. 🛠️"
  },
  "Can we schedule a call?": {
    response: "Sure! Let's have a quick call to align on your vision. <a href='https://calendly.com/mubeenahma1123/30min' target='_blank'>Click here to book a 30-minute call</a>. 📞"
  },
  "Can you show examples?": {
    response: "Of course — check out my projects in the portfolio section to see the kind of work I do. ✨"
  },

  // Quick Reply Responses - Website Types
  "landing page": {
    response: "Great! Landing pages are perfect for conversions. 🚀 What's your main goal?",
    quick_replies: ["Lead Generation", "Product Launch", "Event Registration", "Service Promotion"]
  },
  "Lead Generation": {
    response: "Awesome — I can design a high-converting lead gen page with persuasive copy, strong CTAs, and smart forms.",
    quick_replies: ["Include a form", "Need email integration", "What's the process?", "Show examples"]
  },
  "Product Launch": {
    response: "Exciting! Let's build buzz and drive action with a bold launch page that highlights your product's value.",
    quick_replies: ["Add product demo", "Include countdown", "Launch strategy?", "View past work"]
  },
  "Event Registration": {
    response: "Perfect — I'll create a clean, mobile-friendly event page with RSVP integration and essential details front and center.",
    quick_replies: ["Include RSVP form", "Event details?", "Mobile-friendly?", "Track signups?"]
  },
  "Service Promotion": {
    response: "Nice! We'll design a landing page that highlights your services, value, and invites users to take the next step."
  },
  "portfolio website": {
    response: "Excellent choice! A portfolio will showcase your work beautifully. 🎨 What type of work do you want to display?",
    quick_replies: ["Design Portfolio", "Photography", "Development Work", "Creative Arts", "Web Design", "Graphic Design", "Case Studies"]
  },
  "i want a portfolio website": {
    response: "Excellent choice! A portfolio will showcase your work beautifully. 🎨 What type of work do you want to display?",
    quick_replies: ["Web Design", "Graphic Design", "Case Studies"]
  },
  "e-commerce site": {
    response: "Fantastic! An online store will boost your sales. 🛒 What will you be selling?",
    quick_replies: ["Physical Products", "Digital Products", "Services", "Subscriptions"]
  },
  "Physical Products": {
    response: "Great! Are these products handmade, dropshipped, or sourced from suppliers?",
    quick_replies: ["Handmade", "Dropshipping", "From Suppliers", "Not Sure Yet"]
  },
  "Handmade": {
    response: "That's wonderful! Handmade products give a unique personal touch. Do you already have inventory or are you making them to order?"
  },
  "Dropshipping": {
    response: "Got it! Dropshipping is efficient and low-risk. Do you already have suppliers in mind or need help finding trusted ones?"
  },
  "From Suppliers": {
    response: "Nice! Working with suppliers can help you scale faster. Will you handle fulfillment or use a third-party service?"
  },
  "Not Sure Yet": {
    response: "No worries! I can guide you through the best approach based on your goals, budget, and product type."
  },
  "Digital Products": {
    response: "Awesome! Digital products are easy to scale. Are you selling courses, templates, software, or something else?",
    quick_replies: ["Courses", "Templates", "Software", "Ebooks"]
  },
  "Courses": {
    response: "Nice! Online courses are booming. Will you host them on your own site or use a platform like Teachable or Gumroad?"
  },
  "Templates": {
    response: "Perfect! Templates are highly in demand. Are these for design, documents, websites, or something else?"
  },
  "Software": {
    response: "Great! Software requires a solid UX and delivery system. Is this a web app, desktop tool, or mobile app?"
  },
  "Ebooks": {
    response: "Excellent! Ebooks are a great way to share expertise. Do you have your content ready or need help with formatting and design?"
  },
  "Services": {
    response: "Nice! Service-based e-commerce needs a strong booking or inquiry system. What kind of services will you offer?",
    quick_replies: ["Consulting", "Freelance Work", "Online Coaching", "Other Services"]
  },
  "Consulting": {
    response: "Consulting is all about credibility. Do you already have packages or want help structuring your offers and booking flow?"
  },
  "Freelance Work": {
    response: "Great! Freelance platforms can be limiting — having your own booking site is smart. What kind of freelance services do you offer?"
  },
  "Online Coaching": {
    response: "Perfect! Coaching platforms can be customized with scheduling, payments, and even client progress tracking. Want that built in?"
  },
  "Other Services": {
    response: "Sounds good! I'd love to hear more about the services you're offering so we can tailor the platform to your needs."
  },
  "Subscriptions": {
    response: "Smart move! Subscriptions build long-term customer relationships. Will it be for products, content, or services?",
    quick_replies: ["Subscription Boxes", "Premium Content", "Software Access", "Other"]
  },
  "Subscription Boxes": {
    response: "Nice! Subscription boxes require solid logistics. Do you already have suppliers and shipping in place?"
  },
  "Premium Content": {
    response: "Premium content is a great model for creators. Will it include video, articles, courses, or a mix?"
  },
  "Software Access": {
    response: "Great! SaaS subscriptions are powerful. Do you need user management, payment integration, or trials built in?"
  },
  "Other": {
    response: "Awesome! Tell me more about your subscription idea so I can help structure it for maximum engagement."
  },

  "book a call": {
    response: "📞 Book a 30-minute call with Mubeen: https://calendly.com/mubeenahma1123/30min"
  },
  "Show me your past work": {
    response: "Absolutely! You can explore my past work in the Projects section — it's filled with real-world solutions I've built. Let me know if you'd like any one specific!"
  },

  // Contact
  "how can i contact you": {
    response: "You can reach me via email at mubeenahma1123@gmail.com or through my LinkedIn profile. 📩",
  },

  // Understanding Business
  "how do you understand my business needs": {
    response: "I start with a call or brief to learn about your goals, audience, and vision. 📞 Let's chat and align on your business goals!",
    quick_replies: ["Let's book a call", "Show me your past work"]
  },

  // Services
  "do you provide branding services too": {
    response: "Yes — from logo design to color palette and typography, I help define your brand. 🎨 Let's shape a visual identity you're proud of!",
    quick_replies: ["Need logo design", "Full brand package", "Brand refresh"]
  },
  "Need logo design": {
    response: "Great! I design logos that are clean, memorable, and aligned with your brand's values. Want to discuss your vision?"
  },
  "Full brand package": {
    response: "Perfect — I can create a complete visual identity: logo, color system, typography, style guide, and brand strategy."
  },
  "Brand refresh": {
    response: "Refreshing your brand? I'll modernize your look while keeping what makes your brand recognizable and trusted."
  },
  "can you help with copywriting": {
    response: "Absolutely. I write clean, engaging, and conversion-focused content. ✍️ Words that sell — I've got them covered!",
    quick_replies: ["Website copy", "Sales pages", "Blog content", "Social media"]
  },
  "content writing": {
    response: "Great! What type of content do you need help with? ✍️",
    quick_replies: ["Website copy", "Sales pages", "Blog content", "Social media"]
  },
  "Website copy": {
    response: "Perfect! Strong website copy can boost trust and conversions. Are you looking for homepage content, about page, services, or all of the above?"
  },
  "Sales pages": {
    response: "Awesome! Sales pages are all about persuasive storytelling and clear calls-to-action. What are you selling, and who's your target audience?"
  },
  "Blog content": {
    response: "Blog content is great for SEO and engagement. Do you already have topics in mind, or would you like help with strategy too?"
  },
  "Social media": {
    response: "Social media content helps build brand presence and connection. Which platforms are you focusing on — Instagram, LinkedIn, Twitter, or something else?"
  },
  "what's your design style": {
    response: "Clean, bold, user-centric — with attention to detail and a touch of personality. ✨ Let's design something stylish and strategic!",
    quick_replies: ["Show examples", "Minimalist style", "Bold & modern", "Custom approach"]
  },
  "Show examples": {
    response: "Absolutely! You can check out my latest work in the Projects section — it highlights different styles across websites, apps, and branding. Want me to walk you through any specific one?"
  },
  "Minimalist style": {
    response: "Great choice! I love working with minimalist aesthetics — clean layouts, smart use of white space, and intentional typography to make every element count."
  },
  "Bold & modern": {
    response: "Nice! Bold and modern designs are all about strong visuals, confident colors, and standout messaging. I can help your brand look sharp and current."
  },
  "Custom approach": {
    response: "Every brand is unique — I tailor the design approach based on your goals, audience, and personality. Let's chat about what will resonate most with your users."
  },

  // Technical Questions
  "can you build my website from scratch": {
    response: "Absolutely! I specialize in custom-built websites tailored to your brand and goals.",
    quick_replies: ["What technologies?", "How long does it take?", "What's included?"]
  },
  "What technologies?": {
    response: "I use modern, scalable technologies like HTML5, CSS3, JavaScript, React, Next.js, and Tailwind CSS — depending on the project needs. If needed, I can also integrate backend services or CMS platforms like WordPress or Sanity."
  },
  "How long does it take?": {
    response: "Timelines vary based on the scope and features, but most projects take between 2–4 weeks. I'll share a detailed timeline once we discuss your requirements."
  },
  "What's included?": {
    response: "A complete website build includes responsive design, clean code, basic SEO setup, contact forms, and performance optimization. I can also add animations, CMS integration, or e-commerce features if needed."
  },
  "what technologies do you use": {
    response: "HTML, CSS, JavaScript, and React — everything to make your site modern and responsive. I also have strong command over WordPress and other no-code/low-code tools for faster deployment when needed.",
    quick_replies: ["Is it mobile-friendly?", "How about SEO?", "Performance optimized?", "Browser compatible?"]
  },
  "Is it mobile-friendly?": {
    response: "Absolutely! Every site I build is fully responsive — meaning it looks and functions great on all screen sizes: mobile, tablet, and desktop. 📱💻"
  },
  "How about SEO?": {
    response: "Great question! I implement on-page SEO best practices like proper tag hierarchy, meta descriptions, alt text, and fast loading to help your site rank better in search engines."
  },
  "Performance optimized?": {
    response: "Yes! I optimize every project for speed by minimizing code, using lazy loading, optimizing images, and leveraging caching — all to give users a faster experience."
  },
  "Browser compatible?": {
    response: "Definitely. I test every site across all major browsers — Chrome, Firefox, Safari, and Edge — to ensure consistent performance and design everywhere."
  },
  "is your code mobile friendly": {
    response: "Yes, I follow a mobile-first approach to ensure your site looks great on all devices.",
    quick_replies: ["Test on real devices?", "What screen sizes?", "Tablet optimized?", "Touch-friendly?"]
  },
  "Test on real devices?": {
    response: "Absolutely! I test all websites on real mobile and tablet devices to ensure proper layout, functionality, and performance in real-world conditions."
  },
  "What screen sizes?": {
    response: "I design and test across a wide range of screen sizes — from small mobile phones (320px) to large desktops (1440px+), ensuring a seamless experience on all breakpoints."
  },
  "Tablet optimized?": {
    response: "Yes! I make sure layouts are adjusted specifically for tablet devices — not just stretched mobile views. This includes orientation handling and UI scaling for mid-size screens."
  },
  "Touch-friendly?": {
    response: "Definitely. I ensure that buttons, menus, and interactive elements are fully touch-friendly with proper spacing and gestures in mind for smooth usability on mobile devices."
  },
  "how fast will my website load": {
    response: "I optimize every page for speed using clean code, image compression, and best practices.",
    quick_replies: ["What loading time?", "How do you optimize?", "Image compression?", "Performance tools?"]
  },
  "What loading time?": {
    response: "Most websites I build load in under 2.5 seconds on average, depending on the hosting and complexity. I aim for excellent Core Web Vitals scores to ensure fast user experience."
  },
  "How do you optimize?": {
    response: "I use a mix of techniques like minified CSS/JS, lazy loading, optimized fonts, responsive images, and clean, lightweight code to ensure every page loads fast and efficiently."
  },
  "Image compression?": {
    response: "Yes! I compress all images using tools like TinyPNG or built-in build optimizers. I also use modern formats like WebP to reduce file size without losing quality."
  },
  "Performance tools?": {
    response: "I regularly test and optimize using tools like Google Lighthouse, PageSpeed Insights, and GTmetrix — ensuring your site meets top performance benchmarks."
  },

  // E-commerce
  "do you build e-commerce websites": {
    response: "Yes, I've built mini e-commerce apps with cart, search, and product listing features. 🛒 Let's turn your store into a smooth shopping experience!",
    quick_replies: ["Payment integration?", "Inventory management?", "Order tracking?", "Mobile checkout?"]
  },
  "Payment integration?": {
    response: "Absolutely! I can integrate secure payment gateways like Stripe, PayPal, Razorpay, or custom solutions — ensuring smooth and safe transactions for your customers."
  },
  "Inventory management?": {
    response: "Yes! I can build or integrate systems that let you easily manage product stock, availability, and automatic updates — even with low-code tools if needed."
  },
  "Order tracking?": {
    response: "Definitely. I can add real-time order tracking features or integrate with third-party logistics to give your customers full visibility from purchase to delivery."
  },
  "Mobile checkout?": {
    response: "100%. I design mobile-first checkout flows that are fast, easy, and optimized for conversions — so users can buy comfortably on any device."
  },

  // Support & Maintenance
  "will you guide me after the website is live": {
    response: "Of course! I provide support, tutorials, and post-launch check-ins. 🧑‍🏫 I stay with you even after the launch!",
    quick_replies: ["What support included?", "How long?", "Training provided?", "Update assistance?"]
  },
  "What support included?": {
    response: "Support includes bug fixes, minor updates, performance monitoring, and answering any questions you have about using or managing the site effectively."
  },
  "How long?": {
    response: "I typically offer free support for the first 30 days after launch. After that, I can continue on a monthly maintenance plan if you need ongoing help."
  },
  "Training provided?": {
    response: "Yes! I offer personalized walkthroughs, screen recordings, or live sessions to help you confidently manage your website on your own."
  },
  "Update assistance?": {
    response: "Definitely. Whether it's adding new content, updating plugins, or making layout tweaks — I'm here to assist whenever you need updates."
  },
  "do you offer website maintenance plans": {
    response: "Yes — I offer monthly and quarterly maintenance plans for updates, backups, and performance checks.",
    quick_replies: ["Monthly Plan", "Quarterly Plan", "What's included?", "Pricing?"]
  },
  "Monthly Plan": {
    response: "The monthly plan includes regular updates, security checks, backups, minor content edits, and performance optimization — all to keep your site running smoothly and securely."
  },
  "Quarterly Plan": {
    response: "The quarterly plan covers core updates, backups, performance audits, and basic support — ideal for websites that don't change often but still need care."
  },
  "What's included?": {
    response: "All plans typically include software updates, plugin/theme checks, backups, speed optimization, uptime monitoring, and minor content tweaks. I can also tailor it to your needs."
  },
  "Pricing?": {
    response: "Pricing depends on the complexity and platform of your site. Monthly plans usually start at $39/month, and quarterly plans from $129. Let me know your site type and I'll give you a custom quote."
  },

  // Business Focus
  "do you work with small businesses or startups": {
    response: "That's my sweet spot — I love helping small brands grow online. 🌱 Small brand? Big dreams? I've got your back!",
    quick_replies: ["Startup packages?", "Small business rates?", "Growth-focused?", "Budget options?"]
  },
  "Startup packages?": {
    response: "Absolutely! I offer tailored startup packages that include branding, website design, and launch support — everything you need to go from idea to online presence."
  },
  "Small business rates?": {
    response: "Yes, I offer special pricing for small businesses — flexible, fair, and built to grow with you. Let's talk about what fits your goals and budget best."
  },
  "Growth-focused?": {
    response: "Definitely. Every project I take on is designed with long-term growth in mind — from SEO-ready code to scalable design systems that evolve as you do."
  },
  "Budget options?": {
    response: "Of course! I can offer phased solutions, MVP builds, or simple landing pages to get you started — without compromising quality or strategy."
  },

  // Content & Branding
  "what if i don't have a logo or content yet": {
    response: "No worries! I can create the branding and help you write the content from scratch. 📦 Start from zero — I'll handle the rest!",
    quick_replies: ["Need branding", "Need content", "Need both", "What's the process?"]
  },
  "Need branding": {
    response: "Great! I'll help you craft a unique brand identity — including logo, color palette, fonts, and style direction that reflect your values and connect with your audience."
  },
  "Need content": {
    response: "No problem! I'll guide you through a content strategy and write high-converting copy for your website — from homepage to about, services, and more."
  },
  "Need both": {
    response: "Perfect — that's my specialty! I offer full-package solutions that include branding, content writing, and web design to launch your online presence from the ground up."
  },
  "What's the process?": {
    response: "It starts with a short discovery session to understand your goals and target audience. Then I'll handle branding, draft your content, share everything for feedback, and bring it all to life in a beautiful website."
  },
  "can you help me choose a domain and hosting": {
    response: "Absolutely — I guide you through selecting reliable hosting and the perfect domain name that reflects your brand.",
    quick_replies: ["Domain suggestions?", "Hosting recommendations?", "Setup included?", "Ongoing management?"]
  },
  "Domain suggestions?": {
    response: "Yes! I'll help you brainstorm brandable, SEO-friendly domain names — and check for availability across popular extensions like .com, .co, and more."
  },
  "Hosting recommendations?": {
    response: "Definitely. I recommend reliable and secure hosting based on your needs — like Bluehost, SiteGround, Hostinger, or scalable cloud providers like Vercel or Netlify for modern stacks."
  },
  "Setup included?": {
    response: "Yes — I take care of the full setup process: connecting your domain, configuring hosting, and pointing everything to your live website smoothly and securely."
  },
  "Ongoing management?": {
    response: "If you'd prefer hands-off maintenance, I offer ongoing management — including renewals, backups, updates, and performance monitoring so everything stays running smoothly."
  },

  // Communication & Process
  "can we schedule a call": {
    response: "Yes! Book a free discovery call to discuss your goals and how I can help. 📅",
    quick_replies: ["Book Now"]
  },
  "Book Now": {
    response: "Great! You can book a time that works for you here: https://calendly.com/mubeenahma1123/30min"
  },
  "how do we communicate during the project": {
    response: "Via WhatsApp, email, or Zoom — whatever suits you best.",
    quick_replies: ["WhatsApp preferred", "Email updates", "Video calls"]
  },
  "WhatsApp preferred": {
    response: "Perfect! I'll keep you updated regularly via WhatsApp with progress, previews, and quick check-ins. Let me know your number or preferred chat timing. 📱"
  },
  "Email updates": {
    response: "Sure! I'll send you organized updates, files, and progress summaries via email — perfect if you prefer structured communication. 📧"
  },
  "Video calls": {
    response: "Absolutely — we can schedule Zoom or Google Meet calls at key milestones to review progress and align on next steps. Just let me know your availability. 🎥"
  },
  "can i see progress during the project": {
    response: "Yes, I share live previews and updates at every stage.",
    quick_replies: ["How often?", "Live preview links?", "Feedback process?", "Revision rounds?"]
  },
  "How often?": {
    response: "I typically share updates weekly or at key milestones — but I'm happy to adjust the frequency based on your preferences."
  },
  "Live preview links?": {
    response: "Yes! I'll provide a private live preview link so you can see your project evolve in real-time and track progress anytime. 🔗"
  },
  "Feedback process?": {
    response: "I make feedback easy! You can share notes via email, WhatsApp, or even leave comments directly on previews using tools like Figma or MarkUp."
  },
  "Revision rounds?": {
    response: "I usually include 2–3 rounds of revisions depending on the project scope — ensuring we refine everything until you're fully satisfied."
  },

  // Pricing & Getting Started
  "how do i get started with you": {
    response: "Drop me a message — I'll respond quickly and get things moving.",
    quick_replies: ["Send Message", "Book Free Call", "See Portfolio"]
  },
  "Send Message": {
    response: "Great! You can message me directly here — just tell me a bit about your project and goals, and I'll take it from there. 💬"
  },
  "Book Free Call": {
    response: "Perfect! Let's schedule a quick discovery call to align on your needs. 📅 <a href='https://calendly.com/mubeenahma1123/30min' target='_blank'>Click here to book now</a>."
  },
  "See Portfolio": {
    response: "Sure! Here's my portfolio where you can explore past projects and get a feel for my style and expertise. [Insert your portfolio link here] 💼"
  },
  "do you offer free consultations": {
    response: "Yes — let's talk about your goals before you commit. It's a great way to see if we're the right fit. 🤝",
    quick_replies: ["Book Now", "What's Included?", "Next Steps"]
  },
  "Book Now": {
    response: "Awesome! You can book your free 30-minute consultation here: https://calendly.com/mubeenahma1123/30min"
  },
  "What's Included?": {
    response: "The consultation includes a discussion about your goals, challenges, and project vision. I'll offer insights, suggestions, and outline a plan tailored to your needs."
  },
  "Next Steps": {
    response: "After the call, I'll send you a custom proposal with a timeline, pricing, and next steps — so you'll know exactly what to expect moving forward."
  },
  "are you available for hire right now": {
    response: "Yes! Let's build something amazing — message me and let's get started.",
  },

  // About & Experience
  "who are you": {
    response: "I'm Mubeen Ahmad — a creative front-end developer from Vehari, Pakistan.",
    quick_replies: ["Your experience?", "What makes you different?", "See your work", "Your background?"]
  },
  "Your experience?": {
    response: "I've been crafting user-friendly websites and interfaces for over 3 years, working on everything from portfolios to full e-commerce stores."
  },
  "What makes you different?": {
    response: "I blend clean design with real-world functionality — focusing on conversion, performance, and personalized user experience. I also stay closely involved with clients throughout the process."
  },
  "See your work": {
    response: "Absolutely! You can check out my recent projects in the Portfolio sections. Let me know if you'd like a guided walkthrough. 💼"
  },
  "Your background?": {
    response: "I'm self-taught with a strong passion for design and code. I've worked with startups — always aiming to deliver polished, strategic websites."
  },
  "what makes you different": {
    response: "I blend design, code, copy, and strategy — all in one package.",
    quick_replies: ["Show examples", "Pricing advantage?", "Full-service approach", "Client testimonials?"]
  },
  "Show examples": {
    response: "Sure! You can view my recent work in the Portfolio section — every project reflects my hands-on approach from layout to launch."
  },
  "Pricing advantage?": {
    response: "Since I handle multiple parts of the project myself, you avoid the cost of hiring separate designers, developers, and copywriters. It's efficient and budget-friendly. 💡"
  },
  "Full-service approach": {
    response: "From wireframes to final polish, I handle design, development, content guidance, and optimization — ensuring your brand looks and performs its best online."
  },
  "Client testimonials?": {
    response: "Yes! I have feedback from past clients highlighting my communication, quality, and reliability. Let me know if you'd like me to share them with you."
  },
  "what's your background": {
    response: "I'm self-taught, learning by doing — backed by projects and an internship at Code Alpha.",
    quick_replies: ["Code Alpha role?", "Self-taught journey?", "Project examples", "Certifications?"]
  },
  "Code Alpha role?": {
    response: "At Code Alpha, I interned as a front-end developer — working on real-world UI tasks, improving user flows, and collaborating with other developers to sharpen my skills."
  },
  "Self-taught journey?": {
    response: "I started by learning HTML, CSS, and JavaScript on my own — building projects, studying best practices, and constantly pushing myself to improve through hands-on work."
  },
  "Project examples": {
    response: "You'll find my best work in the Portfolio section — from weather apps and landing pages to e-commerce UIs and interactive tools. Each one helped me grow as a developer."
  },
  "Certifications?": {
    response: "Yes, I've earned certifications from platforms like freeCodeCamp, Simpli learn, and others — they back up my practical experience with foundational knowledge."
  },

  // Learning & Skills
  "how did you learn front end development": {
    response: "I'm self-taught — learned through online courses, real projects, and consistent practice.",
    quick_replies: ["What resources?", "How long learning?", "Practice projects?", "Still learning?"]
  },
  "What resources?": {
    response: "I used platforms like freeCodeCamp, YouTube, Scrimba, and MDN Docs. I also followed real-world tutorials and rebuilt popular UIs to sharpen my skills. 📚"
  },
  "How long learning?": {
    response: "I've been learning and building for over a year now — consistently improving by working on real projects and refining my design-to-code process. ⏳"
  },
  "Practice projects?": {
    response: "Yes — I've built weather apps, portfolio sites, task tools, landing pages, and e-commerce UIs. Each helped me grow both technically and creatively. 💻"
  },
  "Still learning?": {
    response: "Absolutely! I stay updated with the latest front-end trends, explore new tools like GSAP and Framer Motion, and constantly improve my workflow. 🚀"
  },
  "what are you learning these days": {
    response: "React, Prompt Engineering, and AI-assisted development tools.",
    quick_replies: ["React projects?", "AI tools usage?", "Prompt engineering?", "Future plans?"]
  },
  "React projects?": {
    response: "I'm building interactive UIs using React — including a weather app, a portfolio site, and a chatbot interface with smart reply logic. ⚛️"
  },
  "AI tools usage?": {
    response: "I'm exploring tools like ChatGPT, Midjourney, and AI code assistants to speed up workflows, generate ideas, and enhance client experience. 🤖"
  },
  "Prompt engineering?": {
    response: "I'm learning how to write effective prompts to get precise, creative outputs from AI tools — which helps in both content generation and dev productivity. 🧠"
  },
  "Future plans?": {
    response: "Next, I plan to dive deeper into Next.js, animations with Framer Motion, and AI integration in web projects to offer smarter solutions. 🚀"
  },

  // Technical Deep Dive
  "what's your go to css method flex or grid": {
    response: "Both — I use Flex for alignment and Grid for complex layouts.",
    quick_replies: ["Layout examples?", "Responsive design?", "Modern CSS?", "Performance impact?"]
  },
  "Layout examples?": {
    response: "I use Flexbox for navbars, cards, and form alignment — and CSS Grid for full-page layouts, image galleries, and dashboards. 📐"
  },
  "Responsive design?": {
    response: "Yes — I follow a mobile-first approach using media queries, relative units, and modern CSS to ensure smooth adaptability across devices. 📱"
  },
  "Modern CSS?": {
    response: "Definitely! I work with custom properties, container queries, clamp(), and logical properties — clean, scalable, and future-ready. ✨"
  },
  "Performance impact?": {
    response: "Flex and Grid are both lightweight. Used properly, they improve layout performance and reduce the need for extra markup or JS. ⚡"
  },
  "do you use animations": {
    response: "Subtle, meaningful animations — nothing flashy, just enough to engage users.",
    quick_replies: ["Animation examples?", "Performance cost?", "User experience?", "Custom animations?"]
  },
  "Animation examples?": {
    response: "I use fade-ins, hover effects, button transitions, and scroll-based animations — all enhancing the interface without overwhelming it. 🎯"
  },
  "Performance cost?": {
    response: "I use GPU-accelerated properties like transform and opacity to keep animations smooth and lightweight. Performance always comes first. ⚡"
  },
  "User experience?": {
    response: "Animations help guide attention, improve feedback, and create a modern, polished feel. It's all about intentional movement. 🧭"
  },
  "Custom animations?": {
    response: "Yes! I build custom animations with CSS keyframes or tools like Framer Motion in React for more complex UI interactions. ✨"
  },
  "hi": {
        response: "Hello! 👋 Great to see you! How can I help you today?",
        quick_replies: ["About Me", "My Skills", "My Projects", "Contact"]
    },
    "hello": {
        response: "Hi there! 😊 Welcome! What would you like to know about my work?",
        quick_replies: ["About Me", "My Skills", "My Projects", "Contact"]
    },
    "hey": {
        response: "Hey! 🌟 Nice to meet you! How can I assist you today?",
        quick_replies: ["About Me", "My Skills", "My Projects", "Contact"]
    },
    "good morning": {
        response: "Good morning! ☀️ Hope you're having a great day! How can I help?",
        quick_replies: ["About Me", "My Skills", "My Projects", "Contact"]
    },
    "good afternoon": {
        response: "Good afternoon! 😊 What brings you here today?",
        quick_replies: ["About Me", "My Skills", "My Projects", "Contact"]
    },

  // Additional Services
  "do you offer content creation services": {
    response: "Yes — I write web copy, LinkedIn posts, and assist with digital strategy.",
    quick_replies: ["Web copywriting", "Social media", "Content strategy", "SEO content"]
  },
  "Web copywriting": {
    response: "I craft clear, engaging copy tailored to your audience — from landing pages to full website content that converts. 🖋️"
  },
  "Social media": {
    response: "I create strategic, branded content for platforms like LinkedIn and Instagram to boost visibility and engagement. 📲"
  },
  "Content strategy": {
    response: "I help plan your content direction, voice, and goals — so everything you publish supports your business objectives. 🎯"
  },
  "SEO content": {
    response: "I write with both humans and search engines in mind — using proper structure, keywords, and value-driven content. 🔍"
  },
  "can you help grow my linkedin presence": {
    response: "Absolutely — I create branded content and growth strategies.",
    quick_replies: ["Content creation", "Growth strategy", "Profile optimization", "Engagement tactics"]
  },
  "Content creation": {
    response: "I write compelling LinkedIn posts tailored to your brand voice and goals — from carousels to value-driven text posts that resonate with your audience."
  },
  "Growth strategy": {
    response: "I help you build a consistent presence with a strategic mix of content, timing, hashtags, and audience targeting to grow your reach organically."
  },
  "Profile optimization": {
    response: "I audit and enhance your LinkedIn profile — from headline to summary — to ensure it clearly communicates your value and attracts the right opportunities."
  },
  "Engagement tactics": {
    response: "I provide tips and techniques to increase post visibility, boost meaningful conversations, and turn interactions into leads and collaborations."
  },
  "do you offer video editing": {
    response: "Yes — I edit short-form videos with CapCut for reels, promos, and testimonials.",
    quick_replies: ["Social media videos", "Promotional content", "Testimonials", "Video pricing"]
  },
  "Social media videos": {
    response: "I create eye-catching, fast-paced edits tailored for platforms like Instagram, TikTok, and YouTube Shorts — perfect for grabbing attention and driving engagement."
  },
  "Promotional content": {
    response: "From product highlights to service intros, I edit sharp, branded promos that clearly communicate your offer and boost conversions."
  },
  "Testimonials": {
    response: "I turn raw testimonial footage into polished, trust-building content with captions, cuts, and branding — ideal for websites and social proof on social media."
  },
  "Video pricing": {
    response: "Pricing depends on video length, complexity, and revisions — but I offer affordable packages for startups and small businesses. Let's talk about what you need!"
  },

  // Extended FAQ from second document
  "what if i need additional features later": {
    response: "No problem! I build scalable websites, so new features can be added smoothly as your business grows."
  },
  "can you redesign my old website": {
    response: "Definitely! I can give your current site a modern facelift while improving speed, structure, and usability."
  },
  "will you write the content or do i need to provide it": {
    response: "I can work both ways — either using content you provide or helping craft clear, compelling copy aligned with your brand."
  },
  "can you integrate third-party tools like mailchimp calendly stripe": {
    response: "Yes — I can integrate tools for email marketing, scheduling, payments, and more, based on your workflow."
  },
  "will i be able to track my visitors and traffic": {
    response: "Absolutely — I can integrate Google Analytics or other tools to help you monitor user behavior and performance."
  },
  "can you make the website multilingual": {
    response: "Yes — I can set up language toggles and structure your content for smooth multilingual support."
  },
  "do you offer a design-first or code-first approach": {
    response: "It depends on your needs — I can start with mockups or jump straight to clean development with your approval at each step."
  },
  "will my website include legal pages like privacy policy or terms": {
    response: "Yes — I can include essential legal pages and help you set up properly for compliance."
  },
  "do you build landing pages": {
    response: "Yes — conversion-focused landing pages that turn visitors into customers."
  },
  "can i edit the site later": {
    response: "I can build it with easy-to-edit components or integrate CMS options based on your need."
  },
  "how do you handle seo": {
    response: "I use semantic HTML, proper tags, and performance optimization to boost visibility."
  },
  "will my site work on all browsers": {
    response: "Yes — I test on all major browsers for consistent cross-platform experience."
  },
  "do you offer custom designs or use templates": {
    response: "100% custom — designed uniquely for your brand, no cookie-cutter templates."
  },
  "how long does a typical project take": {
    response: "Depends on complexity — basic landing pages take 3–5 days, full sites a bit longer."
  },
  "can you fix my existing site": {
    response: "Yes — I can review, clean up, and upgrade your current website to perform better. 🔧 Let's fix what's broken and make it shine!"
  },
  "what makes your websites stand out": {
    response: "Function meets feel — fast, beautiful, and built to convert. 🚀 Stand out online with a high-performance website!"
  },
  "what tools do you use to code": {
    response: "Visual Studio Code, GitHub for version control, and browser dev tools for testing."
  },
  "do you use figma or canva for ui ux": {
    response: "Both — Figma for detailed design systems, Canva for quick visuals and branding."
  },
  "what's your workflow like": {
    response: "Understand → Design → Develop → Test → Launch → Support."
  },
  "do you use github": {
    response: "Yes, I version all my work and collaborate via GitHub for clean, trackable code."
  },
  "can you collaborate with other developers designers": {
    response: "Absolutely — I'm a great team player and love working on collaborative projects."
  },
  "how do you handle responsiveness": {
    response: "I use Flexbox, Grid, and media queries to ensure pixel-perfect results on all screens."
  },
  "do you optimize for performance": {
    response: "Always — from image compression to lazy loading and minified assets."
  },
  "what's your testing process": {
    response: "I test on real devices, multiple screen sizes, and various browsers before launch."
  },
  "can you integrate apis": {
    response: "Yes — I've worked with weather APIs, product APIs, and more."
  },
  "will i get all the source files": {
    response: "100% — including HTML, CSS, JS files, and any design assets."
  },
  "can i request revisions": {
    response: "Definitely — I offer multiple revisions to ensure you're fully satisfied."
  },
  "do you meet deadlines": {
    response: "Always — I plan efficiently and communicate clearly to deliver on time."
  },
  "how many projects have you completed": {
    response: "Several — including personal projects, internship work, and freelance collaborations."
  },
  "are you available for urgent projects": {
    response: "Yes — if I have availability, I'm happy to take on express work."
  },
  "what time zone do you work in": {
    response: "Pakistan Standard Time (GMT+5), but I'm flexible with client schedules."
  },
  "do you freelance full time": {
    response: "I'm currently a student and freelancer — available for freelance and internships."
  },
  "do you offer long term support": {
    response: "Yes — I'm happy to stay on and maintain, improve, or grow your project over time."
  },
  "why should i choose you": {
    response: "I care about your business — not just the code. I build with impact in mind."
  },
  "do you work on content too": {
    response: "Yes — I help with LinkedIn content, copywriting, and content strategy."
  },
  "can you create short form videos": {
    response: "Yes — I use CapCut for social media edits and promos."
  },
  "do you speak english fluently": {
    response: "Yes — intermediate level, fluent enough for all client communication."
  },
  "are you open to remote work worldwide": {
    response: "100% — I work with global clients remotely."
  },
  "do you have any certifications": {
    response: "Yes — I've completed FreeCodeCamp's Responsive Web Design certification."
  },
  "what's your approach to learning new tech": {
    response: "I break it into small projects, apply it practically, and build from there."
  },
  "are you learning react": {
    response: "Yes, I'm currently building small apps using components, hooks, and JSX."
  },
  "what excites you about web development": {
    response: "The mix of logic and creativity — turning ideas into real, interactive experiences."
  },
  "what are your favorite types of projects": {
    response: "Landing pages, e-commerce interfaces, and anything that helps people take action."
  },
  "what's your long term goal": {
    response: "To become a React and AI-integrated front-end developer working on global products."
  },
  "do you follow a daily coding routine": {
    response: "Yes — I code daily, build UI experiments, and review concepts to stay sharp."
  },
  "how do you handle burnout": {
    response: "I take breaks, play cricket, refresh with design, or explore AI tools for fun."
  },
  "do you ever stop learning": {
    response: "Never — every project, bug, and idea is a new lesson."
  },
  "how do you manage responsive typography": {
    response: "I use clamp() and media queries for scalable text sizing."
  },
  "what's your favorite js method and why": {
    response: "map() — it's powerful for transforming UI data efficiently."
  },
  "do you write reusable code": {
    response: "Yes — I modularize functions and components for cleaner scalability."
  },
  "how do you debug javascript errors": {
    response: "With console.log, browser dev tools, and methodical step-by-step analysis."
  },
  "how do you structure a front end project": {
    response: "I follow clear folders: assets/, components/, scripts/, styles/."
  },
  "do you use es6 features": {
    response: "Yes — arrow functions, destructuring, template literals, and async/await."
  },
  "how do you handle errors in fetch api": {
    response: "I use .catch() and try...catch blocks for user-friendly error handling."
  },
  "what's your approach to form validation": {
    response: "I use JS events, RegEx, and conditionals to validate before submission."
  },
  "what's your strategy for optimizing performance": {
    response: "Minify files, use lazy loading, compress assets, and reduce DOM complexity."
  },
  "do you create mockups before coding": {
    response: "Yes — I often design in Figma first to map out structure and flow."
  },
  "what ui principles do you follow": {
    response: "Clarity, contrast, hierarchy, and consistency across devices."
  },
  "do you use design systems": {
    response: "Yes — even in small projects, I maintain reusable style guides."
  },
  "what's your preferred color palette style": {
    response: "Soft contrast, readable shades, with strong CTA accents."
  },
  "do you care about accessibility": {
    response: "Absolutely — I use semantic tags, alt texts, and readable contrast ratios."
  },
  "can you design logos too": {
    response: "Yes — I use Canva/Figma to create clean, brand-consistent logos."
  },
  "do you animate elements on scroll": {
    response: "Yes — using Intersection Observer or scroll libraries for subtle effects."
  },
  "can you design a complete ui kit": {
    response: "Yes — including typography, spacing, color, and component rules."
  },
  "what makes your designs user friendly": {
    response: "Simplicity, clarity, and intuitive user journeys."
  },
  "do you follow ux best practices": {
    response: "Always — from wireframes to micro-interactions and feedback cues."
  },
  "have you worked with international clients": {
    response: "Yes — I've collaborated remotely and adapted to various time zones."
  },
  "how do you handle project requirements": {
    response: "I begin with a detailed brief and refine it through early prototypes."
  },
  "can you follow brand guidelines": {
    response: "Yes — I ensure your site reflects your brand consistently."
  },
  "what if i change my mind during the project": {
    response: "I allow for feedback loops and structured revisions."
  },
  "can we work long term": {
    response: "Absolutely — I love building long-term partnerships."
  },
  "what are your payment terms": {
    response: "50% upfront, 50% after delivery — flexible based on project scope."
  },
  "do you sign ndas": {
    response: "Yes — your data and ideas are always safe with me."
  },
  "what's your pricing structure": {
    response: "Flat rates for small projects, and custom quotes for bigger ones."
  },
  "can you work on urgent tasks": {
    response: "If I'm available, I can start immediately and deliver fast."
  },
  "what's prompt engineering": {
    response: "It's the art of crafting instructions for AI to generate accurate, useful content."
  },
  "do you use ai in your workflow": {
    response: "Yes — I use AI to speed up tasks, brainstorm, and refine content/code."
  },
  "do you support multi language websites": {
    response: "Yes — I can create English/Urdu bilingual sites with toggle features."
  },
  "what industries do you serve": {
    response: "I'm open to all — but I especially enjoy tech, education, and small business sectors."
  },
  "where are you based": {
    response: "Vehari, Punjab, Pakistan — but I work globally, remotely."
  },
  "working with international clients": {
    response: "Yes! I work with clients globally and I'm experienced in remote collaboration across different timezones."
  },
  "different from other developers": {
    response: "I combine technical skills with creative design thinking, offer competitive pricing, fast delivery, and unlimited revisions."
  },
  "ongoing support": {
    response: "Yes! I provide post-launch support and maintenance for all my projects."
  },
  "help with existing websites": {
    response: "Definitely! I can help with updates, improvements, bug fixes, and adding new features to existing websites."
  },
  "how long does a project take": {
    response: "It depends on complexity, but most projects are completed within 3-7 days. I always provide realistic timelines upfront."
  },
  "work with wordpress": {
    response: "I specialize in custom HTML/CSS/JavaScript and React development, but I can work with existing WordPress sites for customizations."
  },
  "Show me your projects": {
    response: "I've built a range of creative web projects—from AI landing pages to e-commerce sites, weather apps, games, and task managers. Each project focuses on clean design, responsive layouts, and real-world functionality. My portfolio reflects both technical skill and design thinking"
  }
};

// Advanced FAQ patterns with triggers and quick replies
const advancedBotFAQs = {
  website_request: {
    triggers: ["i need a website", "build me a site", "want a site", "create website", "make website"],
    response: "Sounds great! Please tell me more about your project so I can provide a more tailored response. 💬 Let's bring your vision to life — tell me what you need!",
    quick_replies: ["Business Website", "Portfolio Website", "Landing Page", "E-commerce Site"]
  },
  business_website: {
    triggers: ["business website", "company website", "corporate site", "business site"],
    response: "Sounds great! Please tell me more about your project so I can provide a more tailored response. 🏢 Your business deserves a bold online presence — let's start!",
    quick_replies: ["Yes, I have content", "I need help with branding", "I need copywriting too"]
  },
  guidance: {
    triggers: ["don't know where to start", "guide me", "need help starting", "help me start", "where to begin"],
    response: "Absolutely! I'll guide you through every step — from idea to launch. 🧭 No stress — I'll walk you through it all!",
    quick_replies: ["What's the process?", "Can we schedule a call?", "Can you show examples?"]
  },
  content_branding: {
    triggers: ["no logo", "no content", "missing logo", "need branding", "need content"],
    response: "No worries! I can create the branding and help you write the content from scratch. 📦 Start from zero — I'll handle the rest!",
    quick_replies: ["Need branding", "Need content", "Need both"]
  },
  hosting_domain: {
    triggers: ["domain", "hosting", "web hosting", "domain name", "server"],
    response: "Absolutely — I guide you through selecting reliable hosting and the perfect domain name that reflects your brand.",
    quick_replies: ["Need domain", "Need hosting", "Need both"]
  },
  schedule_call: {
    triggers: ["schedule a call", "book a call", "can we talk", "let's talk", "phone call"],
    response: "Yes! Book a free discovery call to discuss your goals and how I can help.",
    quick_replies: ["Book Now", "What's included?", "Call Timing"]
  },
  maintenance: {
    triggers: ["maintenance", "website support", "site updates", "ongoing support", "website care"],
    response: "Yes — I offer monthly and quarterly maintenance plans for updates, backups, and performance checks.",
    quick_replies: ["Monthly Plan", "Quarterly Plan", "Tell me more"]
  },
  get_started: {
    triggers: ["get started", "begin project", "start working", "let's begin", "start now"],
    response: "Drop me a message — I'll respond quickly and get things moving.",
    quick_replies: ["Send Message", "Book Free Call", "Show Previous Work"]
  },
  hiring: {
    triggers: ["available for hire", "can i hire you", "hiring", "hire you", "work with you"],
    response: "Yes! Let's build something amazing — message me and let's get started.",
    quick_replies: ["Message Now", "Get a Quote", "Book Call"]
  },
  greeting: {
    triggers: [
      "hello", "hi", "hey", "good morning", "good afternoon", "good evening",
      "hola", "greetings", "what's up", "yo", "howdy", "sup", "wassup",
      "hi there", "hey there", "good day", "salutations"
    ],
    response: "Hi there! 👋 I'm Mubeen's AI Assistant, a Creative Front-End Developer. How can I help you today?",
    quick_replies: []
  },
  simple_greeting: {
    triggers: ["intro", "introduction", "start", "begin", "help", "info"],
    response: "Welcome! 🎉 I'm Mubeen Ahmad, a front-end developer specializing in React, JavaScript, and creating beautiful websites. What would you like to know?",
    quick_replies: []
  },
  introduction: {
    triggers: [
      "who are you", "tell me about yourself", "introduce yourself",
      "what's your background", "who is mubeen", "about mubeen ahmad",
      "your experience", "your story", "background info", "about you"
    ],
    response: "Hi! I'm Mubeen Ahmad 👋, a Creative Front-End Developer from Vehari, Punjab, Pakistan. I specialize in HTML, CSS, JavaScript, React, and creating responsive web experiences. I'm currently gaining hands-on experience through my internship at Code Alpha and love building innovative web solutions!",
    quick_replies: []
  },
  skills: {
    triggers: [
      "skills", "technologies", "what can you do", "programming languages",
      "tech stack", "tools", "expertise", "abilities", "competencies",
      "frontend skills", "development skills", "technical skills", "technology"
    ],
    response: "My technical skills include: 💻\n\n🔧 Frontend: HTML5, CSS3, JavaScript, React, Tailwind CSS, DOM Manipulation\n🎨 Design Tools: Figma, Canva\n📚 Currently Learning: Prompt Engineering, Advanced React Projects\n\nI'm also skilled in responsive design, SEO optimization, API integration, and creating clean user experiences!",
    quick_replies: []
  },
  projects: {
    triggers: [
      "projects", "work", "portfolio", "what have you built", "examples",
      "show me your work", "previous projects", "development work", "code samples", "github"
    ],
    response: "Here are some of my featured projects: 🚀\n\n1. 🌐 **Personal Portfolio**\n   • SEO-optimized, responsive portfolio with animations\n   • Technologies: HTML5, CSS3, JavaScript\n   • Features: Personal branding, project links, clean UI\n\n2. 🛒 **Bazaarly - Mini E-commerce App**\n   • Product listing, cart, search functionality\n   • Technologies: HTML, CSS, JavaScript, API Integration\n   • Features: Responsive design, API-based data, toast notifications\n\n3. ✅ **TaskFlow - To-Do List App**\n   • Task manager with Pomodoro timer (25 minutes)\n   • Technologies: HTML5, CSS3, JavaScript, localStorage\n   • Features: Theme toggle, filter tabs, offline support",
    quick_replies: []
  },
  experience: {
    triggers: [
      "experience", "work experience", "job", "internship", "employment",
      "current work", "where do you work", "professional experience", "career", "code alpha"
    ],
    response: "I'm currently working as a Frontend Intern at Code Alpha (Remote, June 2025 - present) 💼\n\nWhat I'm doing:\n• Developing projects using JavaScript, API integration, and DOM manipulation\n• Gaining practical experience in responsive design and version control\n• Working with real-world workflows and industry best practices\n\nThis internship has been incredible for applying my skills in a professional environment!",
    quick_replies: []
  },
  pricing: {
    triggers: [
      "price", "cost", "budget", "expensive", "cheap", "how much", "quote", 
      "pricing", "rate", "fee", "charges", "money", "payment", "hire", "freelance", "rates"
    ],
    response: "Great question about pricing! 💰\n\nMy rates are very competitive:\n\n🌐 **Landing Pages:** $20-50\n🛒 **E-commerce Sites:** $80-200\n📱 **Web Applications:** $100-300\n🎨 **Logo Design:** $10-30\n⚡ **Quick Fixes:** $5-20\n\nI offer:\n✅ Fast delivery (3-7 days)\n✅ Unlimited revisions\n✅ Post-launch support\n✅ Responsive design included\n\nLet's discuss your specific needs for an accurate quote!",
    quick_replies: []
  },
  services: {
    triggers: [
      "services", "what do you offer", "can you help", "do you do", "capabilities",
      "what services", "offerings", "help with", "provide", "specialize", "service"
    ],
    response: "Here's what I can help you with: 🎯\n\n🌐 **Web Development**\n   • Landing pages & business websites\n   • E-commerce stores\n   • Portfolio websites\n   • Web applications\n\n🎨 **Design Services**\n   • Logo design\n   • UI/UX design\n   • Responsive layouts\n\n⚡ **Additional Services**\n   • Website optimization\n   • API integration\n   • LinkedIn content strategy\n\nAll services include responsive design, SEO optimization, and ongoing support!",
    quick_replies: []
  },
  contact: {
    triggers: [
      "contact", "reach you", "get in touch", "email", "phone", "call",
      "message", "communicate", "talk", "discuss", "connect", "hire", "reach out", "connect"
    ],
    response: "Let's connect! 📞 Here are the best ways to reach me:\n\n📧 **Email:** MubeenAhma1123@gmail.com\n📱 **Phone/WhatsApp:** +923218492868\n💼 **LinkedIn:** Mubeen Ahmad\n🔗 **GitHub:** github.com/MubeenAhmad1123\n\nI'm available for new projects and always excited to discuss how I can help bring your ideas to life!",
    quick_replies: []
  },
  casual_responses: {
    triggers: [
      "ok", "okay", "cool", "nice", "good", "great", "awesome", "thanks", "thank you",
      "interesting", "wow", "amazing", "perfect", "excellent", "sounds good"
    ],
    response: "Glad you're interested! 😊 Is there anything specific you'd like to know more about?",
    quick_replies: []
  }
};

// Fuse.js config
const options = {
  keys: ["keywords"],
  threshold: 0.4,
  includeScore: true,
  isCaseSensitive: false
};

const fuse = new Fuse(botFAQs, options);

// Smart reply logic
function getFuzzyResponse(msg) {
  const result = fuse.search(msg.toLowerCase());
  return result.length ? result[0].item.response : null;
}
