import './input.css'

console.log('Aomi Thoughts - Ready for Figma integration!');

// Simple client-side router
function router() {
  const path = window.location.pathname;
  
  if (path === '/blog') {
    showBlogPage();
  } else {
    showLandingPage();
  }
}

function showLandingPage() {
  document.getElementById('app').innerHTML = getLandingPageHTML();
  initializeLandingPage();
}

function showBlogPage() {
  document.getElementById('app').innerHTML = getBlogPageHTML();
  initializeBlogPage();
}

function getLandingPageHTML() {
  return `
    
    <div class="w-full min-h-screen px-10 pb-5 relative bg-white flex flex-col justify-start items-center overflow-hidden">
      <div data-breakpoint="Desktop" class="self-stretch flex flex-col justify-start items-center">
        <!-- Mobile Header -->
        <div class="mobile-nav w-full h-20 max-w-[1500px] pt-5 pb-8 flex justify-between items-center md:hidden">
          <img src="/assets/images/aomi-logo.svg" alt="Aomi" class="h-8 w-auto" />
        </div>
        
        <!-- Desktop Header -->
        <div class="desktop-nav w-full h-36 max-w-[1500px] pt-5 pb-20 flex justify-between items-center">
          <img src="/assets/images/aomi-logo.svg" alt="Aomi" class="h-15 w-auto" />
          <a href="https://github.com/aomi-labs" target="_blank" rel="noopener noreferrer" data-state="Default" class="px-5 py-3.5 bg-fuchsia-700 rounded-full flex justify-center items-center gap-0.5 hover:bg-fuchsia-800 transition-colors">
            <div class="text-center justify-start text-white text-sm font-light font-['Bauhaus_Chez_Display_2.0'] leading-tight">Github ↗</div>
          </a>
        </div>
      </div>
      <div class="w-full max-w-[1500px] flex flex-col justify-start items-start gap-60 overflow-hidden">
        <div class="scroll-reveal scroll-reveal-delay-1 self-stretch text-center justify-start text-black text-[160px] font-black font-['Bauhaus_Chez_Display_2.0'] leading-[136px] mt-7">UX reinvention.</div>
        <div data-breakpoint="Desktop" class="scroll-reveal scroll-reveal-delay-2 self-stretch h-96 relative bg-gradient-to-l from-blue-400/50 to-fuchsia-700/50 rounded-[30px]">
          <div class="w-[927px] h-[644px] left-1/2 -translate-x-1/2 top-[-141px] absolute bg-black rounded-3xl shadow-[0px_-4px_20px_0px_rgba(0,0,0,0.10)] border-l-2 border-r-2 border-t-2 border-white/50 overflow-hidden">
            <img class="w-[889.74px] h-[505.44px] left-[18.63px] top-[18.50px] absolute rounded-2xl" src="/assets/images/kk-1.jpg" />
          </div>
        </div>
      </div>
      <div class="self-stretch flex flex-col justify-start items-center">
        <div class="w-full max-w-[1500px] pb-28 flex flex-col justify-start items-center">
          <div class="self-stretch pt-20 pb-14 border-t-[0.50px] border-gray-200 flex flex-col justify-start items-start gap-12">
            <div class="self-stretch flex flex-col justify-start items-center gap-12">
              <div id="about" class="scroll-reveal scroll-reveal-delay-1 self-stretch text-center text-black text-6xl font-bold font-['Bauhaus_Chez_Display_2.0'] leading-[54px]">Consumer Crypto on Natural Language</div>
              <div class="scroll-reveal scroll-reveal-delay-2 self-stretch text-center text-neutral-500 text-sm font-normal font-['DotGothic16'] tracking-wide">All blockchains are interoperable ledgers processing generic actions against their states. You should be able to talk to blockchains without intermediaries, skipping the frontends or protocol-defined SDKs. Aomi eliminates bespoke integrations between AI frameworks and on-chain apps, allowing Claude/ChatGPT talks to a high-performance clients directly via Model-Context Protocol.</div>
            </div>
            <div class="scroll-reveal scroll-reveal-delay-3 self-stretch px-11 pt-10 inline-flex justify-start items-start gap-5 flex-wrap content-start">
              <div class="slide-in-right slide-in-right-delay-1 flex-1 min-w-64 pr-5 py-10 border-t border-gray-200 inline-flex flex-col justify-start items-start gap-6">
                <div class="w-6 h-6 relative overflow-hidden">
                  <img class="w-6 h-6 object-contain" src="/assets/images/chart_icon.png" alt="Generalization" />
                </div>
                <div class="self-stretch flex flex-col justify-start items-start gap-5">
                  <div class="self-stretch justify-start text-black text-lg font-normal font-['Bauhaus_Chez_Display_2.0'] leading-none">Generalization</div>
                  <div class="self-stretch justify-start text-neutral-500 text-sm font-normal font-['DotGothic16'] tracking-wide">Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.</div>
                </div>
              </div>
              <div class="slide-in-right slide-in-right-delay-2 flex-1 min-w-64 pr-5 py-10 border-t border-gray-200 inline-flex flex-col justify-start items-start gap-5">
                <div class="w-6 h-6 relative overflow-hidden">
                  <img class="w-6 h-6 object-contain" src="/assets/images/earth_icon.png" alt="Scalability" />
                </div>
                <div class="self-stretch flex flex-col justify-start items-start gap-5">
                  <div class="self-stretch justify-start text-black text-lg font-normal font-['Bauhaus_Chez_Display_2.0'] leading-none">Scalability</div>
                  <div class="self-stretch justify-start text-neutral-500 text-sm font-normal font-['DotGothic16'] tracking-wide">Model-Context Protocol turns MxN adaption into one-off integration, saving millions of costs for AI frameworks and applications.</div>
                </div>
              </div>
              <div class="slide-in-right slide-in-right-delay-3 flex-1 min-w-64 pr-10 py-10 border-t border-gray-200 inline-flex flex-col justify-start items-start gap-6">
                <div class="w-6 h-6 relative overflow-hidden">
                  <img class="w-6 h-6 object-contain" src="/assets/images/account_icon.png" alt="Security" />
                </div>
                <div class="self-stretch flex flex-col justify-start items-start gap-5">
                  <div class="self-stretch justify-start text-black text-lg font-normal font-['Bauhaus_Chez_Display_2.0'] leading-none">Security</div>
                  <div class="self-stretch justify-start text-neutral-500 text-sm font-normal font-['DotGothic16'] tracking-wide">Type-safe transaction crafting with audited contract artifacts, plus agentic safeguard with server-side simulation against blockchain states.</div>
                </div>
              </div>
              <div class="slide-in-right slide-in-right-delay-4 flex-1 min-w-64 pr-10 py-10 border-t border-gray-200 inline-flex flex-col justify-start items-start gap-6">
                <div class="w-6 h-6 relative overflow-hidden">
                  <img class="w-6 h-6 object-contain" src="/assets/images/cable_icon.png" alt="Performance" />
                </div>
                <div class="self-stretch flex flex-col justify-start items-start gap-5">
                  <div class="self-stretch justify-start text-black text-lg font-normal font-['Bauhaus_Chez_Display_2.0'] leading-none">Performance</div>
                  <div class="self-stretch justify-start text-neutral-500 text-sm font-normal font-['DotGothic16'] tracking-wide">Node-based implementation on robust light clients, indexers, and dev-tools, leveraging Anthropic MCP SDKs in Rust/Go.</div>
                </div>
              </div>
            </div>
          </div>
          <img class="scroll-reveal scroll-reveal-delay-1 w-[1200px] h-[620px] relative rounded-[30px] object-cover mx-auto" src="/assets/images/kk-2.png" />
        </div>
        <div class="w-full max-w-[1500px] pb-28 inline-flex justify-start items-start gap-5">
          <div class="flex-1 pt-14 pb-20 border-t border-gray-200 inline-flex flex-col justify-start items-start gap-10">
            <div class="self-stretch px-11 flex flex-col justify-start items-start gap-10">
              <div id="mission" class="slide-in-right slide-in-right-delay-1 w-[503.13px] justify-start text-black text-4xl font-normal font-['Bauhaus_Chez_Display_2.0'] leading-10">"Put $100 in a pool with the best yield."</div>
              <div class="slide-in-right slide-in-right-delay-1 self-stretch justify-start text-neutral-500 text-sm font-normal font-['DotGothic16'] tracking-wide">How do AI achieve this if the pool is unknown to the framework?</div>
            </div>
            <div class="self-stretch flex flex-col justify-start items-start">
              <div class="slide-in-right slide-in-right-delay-2 self-stretch px-11 pr-2.5 py-5 border-t border-gray-200 inline-flex justify-center items-start gap-7">
                <div class="justify-start text-neutral-500 text-base font-normal font-['DotGothic16']">01</div>
                <div class="flex-1 pr-10 justify-start text-black text-1.3xl font-light font-['Bauhaus_Chez_Display_2.0'] leading-tight mt-1">Planning: agent plans the what to search, what to fetch, and how to execute.</div>
              </div>
              <div class="slide-in-right slide-in-right-delay-3 self-stretch px-11 pr-2.5 py-5 border-t border-gray-200 inline-flex justify-center items-start gap-7">
                <div class="justify-start text-neutral-500 text-base font-normal font-['DotGothic16']">02</div>
                <div class="flex-1 pr-10 justify-start text-black text-1.3xl font-light font-['Bauhaus_Chez_Display_2.0'] leading-tight mt-1">Web search: like ChatGPT, LLM sees the publicly available data, on-chain and off-chain, including code, documentations, and prices. Goes back to planning stage with better view of what's going on.</div>
              </div>
              <div class="slide-in-right slide-in-right-delay-4 self-stretch px-11 pr-2.5 py-5 border-t border-gray-200 inline-flex justify-center items-start gap-7">
                <div class="justify-start text-neutral-500 text-base font-normal font-['DotGothic16']">03</div>
                <div class="flex-1 pr-10 justify-start text-black text-1.3xl font-light font-['Bauhaus_Chez_Display_2.0'] leading-tight mt-1">Fetching: agents knows what it needs from previous stages and fetches necessary verifiable contracts from blockchain indexers. Ensures server compile the code.</div>
              </div>
              <div class="slide-in-right slide-in-right-delay-4 self-stretch px-11 pr-2.5 py-5 border-t border-gray-200 inline-flex justify-center items-start gap-7">
                <div class="justify-start text-neutral-500 text-base font-normal font-['DotGothic16']">04</div>
                <div class="flex-1 pr-10 justify-start text-black text-1.3xl font-light font-['Bauhaus_Chez_Display_2.0'] leading-tight mt-1">Execute: previous context is trimmed and fed into LLM. Agent generates scripts that fulfill user intent. Simulates the scripts for security and land the transactions.</div>
              </div>
            </div>
            <div class="slide-in-right slide-in-right-delay-4 self-stretch px-11 justify-start text-neutral-500 font-normal text-sm font-['DotGothic16'] tracking-wide">Think of <a href="https://manus.im/" target="_blank" rel="noopener noreferrer" class="text-neutral-500 hover:text-fuchsia-700 transition-colors">Manus ↗</a> or <a href="https://openai.com/index/introducing-chatgpt-agent/" target="_blank" rel="noopener noreferrer" class="text-neutral-500 hover:text-fuchsia-700 transition-colors">OpenAI's Agent mode ↗</a> for on-chain tasks.</div>
          </div>
          <div class="slide-in-right slide-in-right-delay-4 w-[519px] max-w-[1600px] inline-flex flex-col justify-start items-end">
            <div class="w-[519px] h-[620px] overflow-hidden rounded-[30px]">
              <img class="w-full h-full object-cover" src="/assets/images/kk-3.webp" />
            </div>
          </div>
        </div>
        <div class="w-full max-w-[1500px] pb-28 flex flex-col justify-start items-start gap-5 overflow-hidden">
          <div class="self-stretch px-60 py-20 border-t border-blue-100 flex flex-col justify-start items-center gap-10">
            <div class="self-stretch flex flex-col justify-start items-center gap-10">
              <div class="scroll-reveal scroll-reveal-delay-1 self-stretch text-center justify-start text-black text-6xl font-bold font-['Bauhaus_Chez_Display_2.0'] leading-[54px]">Service Model for Order Flow</div>
              <div class="scroll-reveal scroll-reveal-delay-2 self-stretch text-center justify-start text-neutral-500 text-sm font-normal font-['DotGothic16'] tracking-wide">In the coming years, 50%+ of transaction flows will have AI in the loop. Businesses with product-market fit will saturate the block-building pipeline, either as middleware or direct-to-consumer distribution.</div>
              <a href="https://orderflow.art/?isOrderflow=true" target="_blank" rel="noopener noreferrer" data-type="Primary" class="scroll-reveal scroll-reveal-delay-3 px-5 py-3.5 bg-fuchsia-700 rounded-full flex flex-col justify-center items-center gap-2.5 hover:bg-fuchsia-800 transition-colors">
                <div class="text-center justify-start text-white text-sm font-light font-['Bauhaus_Chez_Display_2.0'] leading-tight">Discover More</div>
              </a>
            </div>
          </div>
          <!-- Desktop Table Layout -->
          <div class="scroll-reveal scroll-reveal-delay-1 self-stretch rounded-[20px] inline-flex justify-start items-stretch overflow-hidden comparison-table hidden md:flex">
            <div class="slide-in-right slide-in-right-delay-1 w-1/3 bg-white rounded-[20px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-start items-start overflow-hidden">
              <div class="self-stretch h-24 px-7 py-10 border-b border-blue-100 inline-flex justify-center items-start gap-4">
                <div class="justify-center text-neutral-500 text-2xl font-medium font-['Bauhaus_Chez_Display_2.0'] leading-7">Capability</div>
              </div>
              <div class="self-stretch px-7 py-8 border-b-[0.50px] border-gray-200 inline-flex justify-start items-center gap-2">
                <div class="flex-1 justify-start text-black text-1.3xl font-light font-['Bauhaus_Chez_Display_2.0'] leading-none">Breadth of on-chain tasks AI can perform arbitrarily securely</div>
              </div>
              <div class="self-stretch px-7 py-8 border-b-[0.50px] border-gray-200 inline-flex justify-start items-center gap-2">
                <div class="w-3.5 h-3.5 relative overflow-hidden">
                  <div class="w-2.5 h-2 left-[2.04px] top-[3.26px] absolute bg-neutral-500"></div>
                </div>
                <div class="flex-1 justify-start text-black text-1.3xl font-light font-['Bauhaus_Chez_Display_2.0'] leading-none">Any contracts on supported chains</div>
              </div>
              <div class="self-stretch px-7 py-8 border-b-[0.50px] border-gray-200 inline-flex justify-start items-center gap-2">
                <div class="w-3.5 h-3.5 relative overflow-hidden">
                  <div class="w-2.5 h-2 left-[2.04px] top-[3.26px] absolute bg-neutral-500"></div>
                </div>
                <div class="flex-1 justify-start text-black text-1.3xl font-light font-['Bauhaus_Chez_Display_2.0'] leading-none">Zero bespoke integration</div>
              </div>
              <div class="self-stretch px-7 py-8 border-b-[0.50px] border-gray-200 inline-flex justify-start items-center gap-2">
                <div class="w-3.5 h-3.5 relative overflow-hidden">
                  <div class="w-2.5 h-2 left-[2.04px] top-[3.26px] absolute bg-neutral-500"></div>
                </div>
                <div class="flex-1 justify-start text-black text-1.3xl font-light font-['Bauhaus_Chez_Display_2.0'] leading-none">Context, states, prompt engineering</div>
              </div>
              <div class="self-stretch px-7 py-8 border-b-[0.50px] border-gray-200 inline-flex justify-start items-center gap-2">
                <div class="w-3.5 h-3.5 relative overflow-hidden">
                  <div class="w-2.5 h-2 left-[2.04px] top-[3.26px] absolute bg-neutral-500"></div>
                </div>
                <div class="flex-1 justify-start text-black text-1.3xl font-light font-['Bauhaus_Chez_Display_2.0'] leading-none">Custom-built framework for performance</div>
              </div>
            </div>
            <div class="slide-in-right slide-in-right-delay-2 w-1/3 inline-flex flex-col justify-start items-start">
              <div class="self-stretch h-24 px-7 py-10 border-b border-blue-100 inline-flex justify-center items-start gap-4">
                <div class="justify-center text-neutral-500 text-2xl font-medium font-['Bauhaus_Chez_Display_2.0'] leading-7">Automacy</div>
              </div>
              <div class="self-stretch px-7 py-8 border-b-[0.50px] border-gray-200 inline-flex justify-start items-center gap-4">
                <div class="flex-1 justify-start text-black text-1.3xl font-light font-['Bauhaus_Chez_Display_2.0'] leading-tight">Depth and continuity of an agent's ability to perform a task asynchronously and independently</div>
              </div>
              <div class="self-stretch px-7 py-8 border-r-[0.50px] border-b-[0.50px] border-gray-200 inline-flex justify-start items-center gap-2">
                <div class="w-3.5 h-3.5 relative overflow-hidden">
                  <div class="w-2.5 h-2 left-[2.04px] top-[3.26px] absolute bg-neutral-500"></div>
                </div>
                <div class="flex-1 justify-start text-black text-1.3xl font-light font-['Bauhaus_Chez_Display_2.0'] leading-tight">Manage assets in trusted environment</div>
              </div>
              <div class="self-stretch px-7 py-8 border-b-[0.50px] border-gray-200 inline-flex justify-start items-center gap-2">
                <div class="w-3.5 h-3.5 relative overflow-hidden">
                  <div class="w-2 h-2 left-[2.92px] top-[2.92px] absolute bg-neutral-500"></div>
                </div>
                <div class="flex-1 justify-start text-black text-1.3xl font-light font-['Bauhaus_Chez_Display_2.0'] leading-tight">Bespoke to certain protocols</div>
              </div>
            </div>
            <div class="slide-in-right slide-in-right-delay-3 w-1/3 inline-flex flex-col justify-start items-start">
              <div class="self-stretch h-24 px-7 py-10 border-b border-blue-100 inline-flex justify-center items-start gap-4">
                <div class="justify-center text-neutral-500 text-xl font-medium font-['Bauhaus_Chez_Display_2.0'] leading-relaxed">Collaboration</div>
              </div>
              <div class="self-stretch px-7 py-8 border-l-[0.50px] border-b-[0.50px] border-gray-200 inline-flex justify-start items-center gap-4">
                <div class="flex-1 justify-start text-black text-1.3xl font-light font-['Bauhaus_Chez_Display_2.0'] leading-tight">Degree of agent coordination, specialization, and emergent behavior in multi-agent swarm</div>
              </div>
              <div class="self-stretch px-7 py-8 border-b-[0.50px] border-gray-200 inline-flex justify-start items-center gap-2">
                <div class="w-3.5 h-3.5 relative overflow-hidden">
                  <div class="w-2.5 h-2 left-[2.04px] top-[3.26px] absolute bg-neutral-500"></div>
                </div>
                <div class="flex-1 justify-start text-black text-1.3xl font-light font-['Bauhaus_Chez_Display_2.0'] leading-tight">Economic incentives</div>
              </div>
              <div class="self-stretch px-7 py-8 border-l-[0.50px] border-b-[0.50px] border-gray-200 inline-flex justify-start items-center gap-2">
                <div class="w-3.5 h-3.5 relative overflow-hidden">
                  <div class="w-2 h-2 left-[2.92px] top-[2.92px] absolute bg-neutral-500"></div>
                </div>
                <div class="flex-1 justify-start text-black text-1.3xl font-light font-['Bauhaus_Chez_Display_2.0'] leading-tight">No guarantee in completing user intent</div>
              </div>
            </div>
          </div>
          
          <!-- Mobile Card Layout -->
          <div class="comparison-cards flex md:hidden flex-col gap-6">
            <div class="comparison-card">
              <h3 class="text-xl font-semibold font-['Bauhaus_Chez_Display_2.0'] mb-4 text-neutral-500">Capability</h3>
              <p class="text-sm font-normal font-['DotGothic16'] text-neutral-500 mb-4">Breadth of on-chain tasks AI can perform arbitrarily securely</p>
              <ul class="space-y-3">
                <li class="flex items-start gap-3"><div class="w-2 h-2 bg-neutral-500 rounded-full mt-2 flex-shrink-0"></div><span class="text-sm font-light font-['Bauhaus_Chez_Display_2.0'] text-wrap">Any contracts on supported chains</span></li>
                <li class="flex items-start gap-3"><div class="w-2 h-2 bg-neutral-500 rounded-full mt-2 flex-shrink-0"></div><span class="text-sm font-light font-['Bauhaus_Chez_Display_2.0'] text-wrap">Zero bespoke integration</span></li>
                <li class="flex items-start gap-3"><div class="w-2 h-2 bg-neutral-500 rounded-full mt-2 flex-shrink-0"></div><span class="text-sm font-light font-['Bauhaus_Chez_Display_2.0'] text-wrap">Context, states, prompt engineering</span></li>
                <li class="flex items-start gap-3"><div class="w-2 h-2 bg-neutral-500 rounded-full mt-2 flex-shrink-0"></div><span class="text-sm font-light font-['Bauhaus_Chez_Display_2.0'] text-wrap">Custom-built framework for performance</span></li>
              </ul>
            </div>
            
            <div class="comparison-card">
              <h3 class="text-xl font-semibold font-['Bauhaus_Chez_Display_2.0'] mb-4 text-neutral-500">Automacy</h3>
              <p class="text-sm font-normal font-['DotGothic16'] text-neutral-500 mb-4 text-wrap">Depth and continuity of an agent's ability to perform a task asynchronously and independently</p>
              <ul class="space-y-3">
                <li class="flex items-start gap-3"><div class="w-2 h-2 bg-neutral-500 rounded-full mt-2 flex-shrink-0"></div><span class="text-sm font-light font-['Bauhaus_Chez_Display_2.0'] text-wrap">Manage assets in trusted environment</span></li>
                <li class="flex items-start gap-3"><div class="w-2 h-2 bg-neutral-500 rounded-full mt-2 flex-shrink-0"></div><span class="text-sm font-light font-['Bauhaus_Chez_Display_2.0'] text-wrap">Bespoke to certain protocols</span></li>
              </ul>
            </div>
            
            <div class="comparison-card">
              <h3 class="text-xl font-semibold font-['Bauhaus_Chez_Display_2.0'] mb-4 text-neutral-500">Collaboration</h3>
              <p class="text-sm font-normal font-['DotGothic16'] text-neutral-500 mb-4 text-wrap">Degree of agent coordination, specialization, and emergent behavior in multi-agent swarm</p>
              <ul class="space-y-3">
                <li class="flex items-start gap-3"><div class="w-2 h-2 bg-neutral-500 rounded-full mt-2 flex-shrink-0"></div><span class="text-sm font-light font-['Bauhaus_Chez_Display_2.0'] text-wrap">Economic incentives</span></li>
                <li class="flex items-start gap-3"><div class="w-2 h-2 bg-neutral-500 rounded-full mt-2 flex-shrink-0"></div><span class="text-sm font-light font-['Bauhaus_Chez_Display_2.0'] text-wrap">No guarantee in completing user intent</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div id="blog" class="w-full max-w-[1500px] pt-20 pb-28 border-t border-gray-200 flex flex-col justify-start items-start gap-20">
          <div class="self-stretch inline-flex justify-between items-start">
            <div class="scroll-reveal scroll-reveal-delay-1 text-center justify-start text-black text-6xl font-semibold font-['Bauhaus_Chez_Display_2.0'] leading-[54px]">Hear our thoughts</div>
            <button onclick="navigateToBlog()" data-type="Primary" class="scroll-reveal scroll-reveal-delay-2 px-5 py-3.5 bg-fuchsia-700 rounded-full inline-flex flex-col justify-center items-center gap-2.5 hover:bg-fuchsia-800 transition-colors">
              <div class="text-center justify-start text-white text-sm font-light font-['Bauhaus_Chez_Display_2.0'] leading-tight">Blog ↗</div>
            </button>
          </div>
          <div class="scroll-reveal scroll-reveal-delay-3 self-stretch inline-flex justify-center items-start gap-5 blog-columns flex-col md:flex-row">
            <div class="flex-1 min-w-60 pr-7 pt-14 pb-5 border-t border-gray-200 inline-flex flex-col justify-start items-start gap-14">
              <div class="self-stretch justify-start text-neutral-500 text-7xl font-normal font-['DM_Sans'] leading-[80px]">01</div>
              <div class="self-stretch pl-5 flex flex-col justify-start items-start gap-5">
                <div class="self-stretch justify-start text-black text-lg font-light font-['Bauhaus_Chez_Display_2.0'] leading-none">States</div>
                <div class="self-stretch justify-start text-neutral-500 text-sm font-normal font-['DotGothic16'] tracking-wide"><a href="https://github.com/humanlayer/12-factor-agents" target="_blank" rel="noopener noreferrer" class="text-neutral-500 hover:text-fuchsia-700 transition-colors">12-Factor Agents - Principles for building reliable LLM applications ↗</a></div>
                <div class="self-stretch justify-start text-neutral-500 text-sm font-normal font-['DotGothic16'] tracking-wide"><a href="https://www.anthropic.com/engineering/building-effective-agents" target="_blank" rel="noopener noreferrer" class="text-neutral-500 hover:text-fuchsia-700 transition-colors">Building Effective Agents ↗</a></div>
                <div class="self-stretch justify-start text-neutral-500 text-sm font-normal font-['DotGothic16'] tracking-wide"><a href="https://huyenchip.com/2025/01/07/agents.html" target="_blank" rel="noopener noreferrer" class="text-neutral-500 hover:text-fuchsia-700 transition-colors">Chip Huyan's Agent ↗</a></div>
              </div>
            </div>
            <div class="flex-1 min-w-60 pr-7 pt-14 pb-5 border-t border-gray-200 inline-flex flex-col justify-start items-start gap-14">
              <div class="self-stretch justify-start text-neutral-500 text-7xl font-normal font-['DM_Sans'] leading-[80px]">02</div>
              <div class="self-stretch pl-5 flex flex-col justify-start items-start gap-5">
                <div class="self-stretch justify-start text-black text-lg font-light font-['Bauhaus_Chez_Display_2.0'] leading-none">Context</div>
                <div class="self-stretch justify-start text-neutral-500 text-sm font-normal font-['DotGothic16'] tracking-wide"><a href="https://dennyzhou.github.io/LLM-Reasoning-Stanford-CS-25.pdf" target="_blank" rel="noopener noreferrer" class="text-neutral-500 hover:text-fuchsia-700 transition-colors">LLM Reasoning ↗</a></div>
                <div class="self-stretch justify-start text-neutral-500 text-sm font-normal font-['DotGothic16'] tracking-wide"><a href="https://arxiv.org/pdf/2205.11916" target="_blank" rel="noopener noreferrer" class="text-neutral-500 hover:text-fuchsia-700 transition-colors">The Ultimate Guide to Prompting ↗</a></div>
                <div class="self-stretch justify-start text-neutral-500 text-sm font-normal font-['DotGothic16'] tracking-wide"><a href="https://www.latent.space/p/shunyu" target="_blank" rel="noopener noreferrer" class="text-neutral-500 hover:text-fuchsia-700 transition-colors">Language Agents: From Reasoning to Acting ↗</a></div>
              </div>
            </div>
            <div class="flex-1 min-w-60 pr-7 pt-14 pb-5 border-t border-gray-200 inline-flex flex-col justify-start items-start gap-14">
              <div class="self-stretch justify-start text-neutral-500 text-7xl font-normal font-['DM_Sans'] leading-[80px]">03</div>
              <div class="self-stretch pl-5 flex flex-col justify-start items-start gap-5">
                <div class="self-stretch justify-start text-black text-lg font-light font-['Bauhaus_Chez_Display_2.0'] leading-none">Evals</div>
                <div class="self-stretch justify-start text-neutral-500 text-sm font-normal font-['DotGothic16'] tracking-wide"><a href="https://hamel.dev/blog/posts/llm-judge/" target="_blank" rel="noopener noreferrer" class="text-neutral-500 hover:text-fuchsia-700 transition-colors">LLM-as-a-judge ↗</a></div>
                <div class="self-stretch justify-start text-neutral-500 text-sm font-normal font-['DotGothic16'] tracking-wide"><a href="https://hamel.dev/blog/posts/evals/index.html" target="_blank" rel="noopener noreferrer" class="text-neutral-500 hover:text-fuchsia-700 transition-colors">Your AI Product Needs Evals ↗</a></div>
              </div>
            </div>
          </div>
        </div>
        <div class="scroll-reveal scroll-reveal-delay-1 self-stretch pb-10 flex flex-col justify-start items-center gap-2.5">
          <div class="w-full h-[664.29px] max-w-[1500px] max-h-[830.36px] rounded-[30px] inline-flex justify-center items-center gap-2.5 overflow-hidden">
            <img class="w-[1200px] h-[664px] object-cover rounded-[30px]" src="/assets/images/kk-4.png" />
          </div>
        </div>
        <div class="w-full max-w-[1500px] px-72 py-28 border-t-[0.50px] border-gray-200 flex flex-col justify-start items-center gap-10">
          <div id="contact" class="scroll-reveal scroll-reveal-delay-1 self-stretch text-center justify-start text-black text-6xl font-bold font-['Bauhaus_Chez_Display_2.0'] leading-[54px]">Connect with us</div>
          <div class="scroll-reveal scroll-reveal-delay-2 self-stretch text-center justify-start text-neutral-500 text-sm font-normal font-['DotGothic16'] tracking-wide">Schedule a quick call to learn about putting guardrails on hallucinations.</div>
          <div data-type="Primary" class="scroll-reveal scroll-reveal-delay-3 px-5 py-3.5 bg-fuchsia-700 rounded-full inline-flex flex-col justify-center items-center gap-2.5">
            <div class="text-center justify-start text-white text-sm font-light font-['Bauhaus_Chez_Display_2.0'] leading-tight">Contact ↗</div>
          </div>
        </div>
      </div>
      <div class="w-full max-w-[1500px] pt-10 pb-5 border-t border-gray-200 flex flex-col justify-end items-start gap-20">
        <div class="self-stretch inline-flex justify-start items-end gap-10">
          <img src="/assets/images/a.svg" alt="A" class="w-24 h-10 object-contain" />
          <div class="flex-1 h-4"></div>
          <div class="justify-center text-lime-800 text-1.3xl font-light font-['Bauhaus_Chez_Display_2.0'] leading-none">All Rights Reserved</div>
        </div>
      </div>
      <div class="floating-nav fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-5 bg-white/40 rounded-[100px] backdrop-blur-lg inline-flex justify-start items-center gap-7 overflow-hidden z-50">
        <a href="#about" class="text-center justify-start text-black text-sm font-light font-['Bauhaus_Chez_Display_2.0'] leading-tight hover:text-fuchsia-700 transition-colors">About</a>
        <a href="#mission" class="text-center justify-start text-black text-sm font-light font-['Bauhaus_Chez_Display_2.0'] leading-tight hover:text-fuchsia-700 transition-colors">Mission</a>
        <a href="#blog" class="text-center justify-start text-black text-sm font-light font-['Bauhaus_Chez_Display_2.0'] leading-tight hover:text-fuchsia-700 transition-colors">Blog</a>
        <a href="#contact" class="text-center justify-start text-black text-sm font-light font-['Bauhaus_Chez_Display_2.0'] leading-tight hover:text-fuchsia-700 transition-colors">Contact</a>
      </div>
    </div>
  `;
}

function getBlogPageHTML() {
  return `
    <div class="gradient-bg min-h-screen">
      <div id="app" class="min-h-screen flex justify-center">
        <div class="w-[1280px] relative bg-transparent inline-flex flex-col justify-start items-center overflow-hidden">
          <div class="w-[1200px] max-w-[1500px] px-16 pt-7 pb-56 inline-flex justify-between items-start">
            <div class="flex justify-start items-start">
              <button onclick="navigateToHome()" class="cursor-pointer">
                <img src="/assets/images/aomi-logo.svg" alt="Aomi Labs" class="h-10" />
              </button>
            </div>
            <div class="flex justify-start items-center gap-5 flex-wrap content-center">
              <a href="https://x.com/aomi_labs" target="_blank" class="justify-start text-zinc-800 text-sm font-normal font-['Source_Code_Pro'] leading-tight hover:text-zinc-600 cursor-pointer">X ↗</a>
              <a href="mailto:info@foameo.ai" class="justify-start text-zinc-800 text-sm font-normal font-['Source_Code_Pro'] leading-tight hover:text-zinc-600 cursor-pointer">Contact ↗</a>
              <a href="https://github.com/foameo" target="_blank" class="justify-start text-zinc-800 text-sm font-normal font-['Source_Code_Pro'] leading-tight hover:text-zinc-600 cursor-pointer">Github ↗</a>
            </div>
          </div>
          <div class="self-stretch flex flex-col justify-start items-start overflow-hidden">
            <div class="w-full max-w-[1500px] px-24 pt-9 pb-12 flex flex-col justify-start items-center gap-12">
              <div class="self-stretch flex flex-col justify-start items-center gap-12">
                <div class="text-center justify-start text-zinc-800 text-8xl font-black font-bauhaus uppercase leading-[143px]">AOMI'S THOUGHTS</div>
              </div>
              <div class="self-stretch flex flex-col justify-start items-start gap-5">
                <div class="w-20 justify-start text-zinc-800 text-base font-normal font-['Source_Code_Pro'] uppercase leading-tight">INTRO</div>
                <div class="w-full max-w-[600px] justify-start text-zinc-800 text-sm font-normal font-['Source_Code_Pro'] leading-none">What's in our mind in crafting nondeterministic State Machine</div>
              </div>
            </div>
            <div class="w-full max-w-[1500px] px-24 pt-12 border-t-[0.50px] border-stone-300 inline-flex justify-center items-start gap-12">
              <div class="flex-1 px-2.5 pt-7 pb-10 rounded-full flex justify-center items-center gap-2.5">
                <div class="relative w-[408px] h-[408px] flex-shrink-0">
                  <img id="record-image" class="record-image shadow-[0px_3.1289148330688477px_3.1289148330688477px_0px_rgba(0,0,0,0.25)] border-8 border-white rounded-full transition-transform duration-100" src="/assets/images/main-image.jpg" alt="Aomi Thoughts" />
                  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-2 border-gray-300"></div>
                </div>
              </div>
              <div class="flex-1 inline-flex flex-col justify-start items-start">
                <div class="self-stretch pb-12 flex flex-col justify-start items-start gap-7">
                  <div class="justify-start text-zinc-800 text-base font-normal font-['Source_Code_Pro'] uppercase leading-tight">Catalog</div>
                  <div class="self-stretch flex flex-col justify-start items-start">
                    <div data-state="Default" class="self-stretch h-9 px-2 py-2.5 inline-flex justify-start items-center gap-4">
                      <div class="justify-start text-zinc-800 text-sm font-normal font-['Source_Code_Pro'] leading-none">8.2.25</div>
                      <div class="flex-1 justify-start text-zinc-800 text-sm font-normal font-['Source_Code_Pro'] leading-none">How everything started</div>
                      <a href="https://buttoned-hyacinth-ade.notion.site/How-Everything-Started-20436be0954d80bb844fe0548dec3a98?pvs=74" target="_blank" class="justify-start text-zinc-800 text-sm font-normal font-['Source_Code_Pro'] leading-none hover:text-zinc-600 cursor-pointer">Read ↗</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full max-w-[1500px] px-24 pt-7 pb-24 border-t-[0.50px] border-stone-300 flex flex-col justify-start items-start gap-10">
              <div class="justify-start text-zinc-800 text-base font-normal font-['Source_Code_Pro'] uppercase leading-tight">Who generate Aomi's Thoughts </div>
              <div class="self-stretch flex flex-col justify-start items-start gap-10">
                <div class="self-stretch justify-start text-zinc-800 text-sm font-normal font-['Source_Code_Pro'] leading-none">Cecilia<br/><br/>Obsessed with Mermaid and pondering... with Claude</div>
                <div class="self-stretch justify-start text-zinc-800 text-sm font-normal font-['Source_Code_Pro'] leading-none">Alex<br/><br/>Literary influences shape his sonic textures</div>
              </div>
            </div>
            <div class="self-stretch px-24 flex flex-col justify-start items-start gap-10">
              <div class="justify-start text-zinc-800 text-base font-normal font-['Source_Code_Pro'] uppercase leading-tight">Moments</div>
              <div class="self-stretch inline-flex justify-start items-start gap-5 flex-wrap content-start">
                <div class="flex-1 h-80 min-w-60 py-7 inline-flex flex-col justify-center items-center gap-4">
                  <img class="w-52 h-52 object-cover rounded" src="/assets/images/neon-retrieve.jpg" alt="Neon Reverie" />
                  <div class="justify-start text-zinc-800 text-sm font-normal font-['Source_Code_Pro'] leading-none">Neon Reverie</div>
                  <div class="justify-start text-zinc-800 text-sm font-normal font-['Source_Code_Pro'] leading-none"> ↗</div>
                </div>
                <div class="flex-1 h-80 min-w-60 py-7 inline-flex flex-col justify-center items-center gap-4">
                  <img class="w-52 h-52 object-cover rounded" src="/assets/images/summer-went-missing.jpg" alt="Summer Went Missing" />
                  <div class="justify-start text-zinc-800 text-sm font-normal font-['Source_Code_Pro'] leading-none">Summer Went Missing</div>
                  <div class="justify-start text-zinc-800 text-sm font-normal font-['Source_Code_Pro'] leading-none"> ↗</div>
                </div>
                <div class="flex-1 h-80 min-w-60 py-7 inline-flex flex-col justify-center items-center gap-4">
                  <img class="w-52 h-52 object-cover rounded" src="/assets/images/inkwell-shadow.jpg" alt="Inkwell Shadows" />
                  <div class="justify-start text-zinc-800 text-sm font-normal font-['Source_Code_Pro'] leading-none">Inkwell Shadows</div>
                  <div class="justify-start text-zinc-800 text-sm font-normal font-['Source_Code_Pro'] leading-none"> ↗</div>
                </div>
                <div class="flex-1 h-80 min-w-60 py-7 inline-flex flex-col justify-center items-center gap-4">
                  <img class="w-52 h-52 object-cover rounded" src="/assets/images/golden-hour-hosts.jpg" alt="Golden Hour Ghosts" />
                  <div class="justify-start text-zinc-800 text-sm font-normal font-['Source_Code_Pro'] leading-none">Golden Hour Ghosts</div>
                  <div class="justify-start text-zinc-800 text-sm font-normal font-['Source_Code_Pro'] leading-none"> ↗</div>
                </div>
              </div>
            </div>
            <div class="w-full max-w-[1500px] px-24 pt-7 flex flex-col justify-start items-center gap-12">
              <div class="self-stretch h-40 pt-7 pb-24 border-t-[0.50px] border-stone-300 flex flex-col justify-start items-start gap-10">
                <div class="justify-start text-zinc-800 text-base font-normal font-['Source_Code_Pro'] uppercase leading-tight">Random facts</div>
                <div class="self-stretch justify-start text-zinc-800 text-sm font-normal font-['Source_Code_Pro'] leading-none">AOMI is written with the kanji characters for "ao" (青), meaning "blue," and "mi" (海), meaning "sea" or "ocean." <br/><br/></div>
              </div>
            </div>
          </div>
          <div class="w-full max-w-[1500px] px-24 pt-24 pb-20 inline-flex justify-start items-start gap-14">
            <div class="flex-1 pt-20 border-t border-stone-300 flex justify-center items-center gap-20">
              <img src="/assets/images/aomi-logo.svg" alt="Aomi Labs" class="h-10" />
              <div class="flex-1 h-7 relative">
                <div class="w-56 left-[666.96px] top-[7px] absolute text-right justify-start text-neutral-600 text-xs font-normal font-['Source_Code_Pro'] leading-none">Rights:<br/>All rights reserved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Navigation functions
function navigateToBlog() {
  window.history.pushState({}, '', '/blog');
  router();
  window.scrollTo(0, 0);
}

function navigateToHome() {
  window.history.pushState({}, '', '/');
  router();
  window.scrollTo(0, 0);
}


// Make functions globally accessible
window.navigateToBlog = navigateToBlog;
window.navigateToHome = navigateToHome;

// Initialize landing page functionality
function initializeLandingPage() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.scroll-reveal, .slide-in-right').forEach(el => {
    observer.observe(el);
  });
}

// Initialize blog page functionality
function initializeBlogPage() {
  const recordImage = document.getElementById('record-image');
  
  if (recordImage) {
    let ticking = false;
    
    function updateRecordRotation() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const rotation = scrollTop * 0.5;
      recordImage.style.transform = `rotate(${rotation}deg)`;
      ticking = false;
    }
    
    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateRecordRotation);
        ticking = true;
      }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
  }
}

// Handle browser back/forward buttons
window.addEventListener('popstate', router);

// Initialize on page load
document.addEventListener('DOMContentLoaded', router);