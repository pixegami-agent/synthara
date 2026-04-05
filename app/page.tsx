import { ArrowRight, Zap, Shield, BarChart3, Globe, Sparkles, ChevronRight, Star, Check } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-pink-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-syne font-800 text-xl font-extrabold tracking-tight text-gray-900">Synthara</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#product" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Product</a>
            <a href="#features" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Features</a>
            <a href="#pricing" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Docs</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Sign in</a>
            <a href="#" className="gradient-bg text-white text-sm font-medium px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
              Get started →
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-gradient-to-b from-pink-100 to-transparent opacity-60 blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-0 w-[400px] h-[400px] rounded-full bg-pink-200 opacity-30 blur-3xl animate-pulse-pink pointer-events-events-none" />
        <div className="absolute top-60 left-0 w-[300px] h-[300px] rounded-full bg-fuchsia-200 opacity-20 blur-3xl animate-float-slow pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-100 rounded-full px-4 py-2">
              <Star className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
              <span className="text-xs font-medium text-pink-600">Backed by Y Combinator · Series A $42M</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-syne text-center text-6xl md:text-8xl font-extrabold tracking-tight text-gray-900 leading-[1.05] mb-8">
            Automate everything.<br />
            <span className="gradient-text">Ship faster.</span>
          </h1>

          <p className="text-center text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12">
            Synthara connects your tools, agents, and workflows into one intelligent layer — so your team spends zero time on repetitive work and all time on what matters.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <a href="#" className="gradient-bg text-white font-semibold px-8 py-4 rounded-full text-base hover:opacity-90 transition-all glow-pink flex items-center gap-2">
              Start free — no credit card
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#product" className="flex items-center gap-2 text-gray-600 font-medium hover:text-gray-900 transition-colors">
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                <svg className="w-4 h-4 ml-0.5" viewBox="0 0 16 16" fill="currentColor"><path d="M6 3.5L12 8 6 12.5V3.5z"/></svg>
              </div>
              Watch demo
            </a>
          </div>

          {/* Hero Visual */}
          <div className="relative max-w-5xl mx-auto animate-float">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 glow-pink">
              {/* Fake dashboard UI */}
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-400 border border-gray-200 w-64 mx-auto text-center">app.synthara.ai/workflows</div>
                </div>
              </div>
              <div className="bg-white p-8">
                {/* Dashboard content */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: 'Automations Active', value: '2,847', change: '+12%', color: 'text-pink-500' },
                    { label: 'Hours Saved / Week', value: '1,204', change: '+34%', color: 'text-emerald-500' },
                    { label: 'Cost Reduction', value: '68%', change: '+8%', color: 'text-violet-500' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <div className="text-xs text-gray-400 mb-1">{stat.label}</div>
                      <div className="text-2xl font-syne font-bold text-gray-900">{stat.value}</div>
                      <div className={`text-xs font-medium mt-1 ${stat.color}`}>{stat.change} this month</div>
                    </div>
                  ))}
                </div>
                {/* Workflow visualization */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                    <span className="text-xs font-medium text-gray-500">Live Workflow — Customer Onboarding Pipeline</span>
                  </div>
                  <div className="flex items-center gap-3 overflow-x-auto pb-2">
                    {[
                      { label: 'New Signup', icon: '👤', done: true },
                      { label: 'Verify Email', icon: '✉️', done: true },
                      { label: 'CRM Sync', icon: '🔄', done: true },
                      { label: 'AI Scoring', icon: '🧠', done: true, active: true },
                      { label: 'Slack Alert', icon: '💬', done: false },
                      { label: 'Welcome Seq', icon: '🚀', done: false },
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-3 flex-shrink-0">
                        <div className={`flex flex-col items-center gap-1 p-3 rounded-xl border min-w-[80px] ${step.active ? 'bg-pink-50 border-pink-200' : step.done ? 'bg-white border-gray-200' : 'bg-gray-50 border-gray-100'}`}>
                          <span className="text-lg">{step.icon}</span>
                          <span className="text-[10px] text-gray-500 text-center leading-tight">{step.label}</span>
                          {step.done && <div className={`w-4 h-4 rounded-full flex items-center justify-center ${step.active ? 'bg-pink-500' : 'bg-gray-300'}`}>
                            <Check className="w-2.5 h-2.5 text-white" />
                          </div>}
                        </div>
                        {i < 5 && <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social proof logos */}
          <div className="mt-16 text-center">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">Trusted by teams at</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-40 grayscale">
              {['Notion', 'Linear', 'Vercel', 'Stripe', 'Figma', 'Loom'].map((co) => (
                <span key={co} className="font-syne font-bold text-lg text-gray-800">{co}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white border border-pink-100 rounded-full px-4 py-2 mb-6">
              <Zap className="w-3.5 h-3.5 text-pink-500" />
              <span className="text-xs font-medium text-pink-600">Everything you need</span>
            </div>
            <h2 className="font-syne text-5xl font-extrabold text-gray-900 mb-4">Built for the AI era</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">One platform. Infinite automations. Zero overhead.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: 'Instant Automation',
                desc: 'Connect any app in seconds. 500+ native integrations. Build complex workflows with a visual drag-and-drop editor or plain English.',
                tag: 'No-code',
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: 'AI-Powered Agents',
                desc: 'Deploy intelligent agents that learn, adapt, and act on your behalf — handling emails, data entry, scheduling, and decision-making 24/7.',
                tag: 'Powered by GPT-4o',
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: 'Real-time Analytics',
                desc: 'Full observability across every workflow. Track performance, catch errors instantly, and optimize with AI-generated suggestions.',
                tag: 'Live dashboards',
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: 'Enterprise Security',
                desc: 'SOC 2 Type II, GDPR, and HIPAA compliant. SSO, audit logs, role-based permissions, and zero-knowledge data handling by default.',
                tag: 'SOC 2 certified',
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: 'Global Scale',
                desc: 'Run millions of automations per day with 99.99% uptime SLA. Infrastructure across 18 regions with sub-50ms latency guarantees.',
                tag: '18 regions',
              },
              {
                icon: <ArrowRight className="w-6 h-6" />,
                title: 'Team Collaboration',
                desc: 'Share workflows, run approvals, and manage access with full version control. Teams move faster when automation is a team sport.',
                tag: 'Built for teams',
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 card-hover">
                <div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-500 flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <div className="inline-block text-[10px] font-semibold text-pink-500 uppercase tracking-wider bg-pink-50 px-2 py-1 rounded-full mb-3">
                  {feature.tag}
                </div>
                <h3 className="font-syne text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Demo Section */}
      <section id="product" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-100 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                <span className="text-xs font-medium text-pink-600">The Synthara difference</span>
              </div>
              <h2 className="font-syne text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                Natural language.<br /><span className="gradient-text">Real automation.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Just describe what you want. Synthara writes the workflow, connects your tools, and gets it running — often in under 60 seconds.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Works with your existing stack — no rip-and-replace',
                  'Autonomous agents that handle edge cases intelligently',
                  'Human-in-the-loop controls for sensitive tasks',
                  'Full audit trail of every action taken',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity">
                See it in action <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="relative">
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-gray-400 text-xs ml-2">Synthara AI · Natural Language Builder</span>
                </div>
                <div className="p-6 space-y-4">
                  <div className="bg-gray-800 rounded-xl p-4">
                    <p className="text-gray-300 text-sm mb-3 font-medium">You said:</p>
                    <p className="text-white text-sm leading-relaxed">"When a new deal is marked Won in Salesforce, send a Slack message to #revenue, create a Notion page with deal notes, and schedule an onboarding call in Calendly."</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-400 text-xs">Synthara is building your workflow...</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { step: '1', text: 'Trigger: Salesforce deal stage → Won', done: true },
                      { step: '2', text: 'Action: Post to Slack #revenue channel', done: true },
                      { step: '3', text: 'Action: Create Notion page from template', done: true },
                      { step: '4', text: 'Action: Schedule Calendly onboarding invite', done: true },
                    ].map((s) => (
                      <div key={s.step} className="flex items-center gap-3 bg-gray-800 rounded-lg px-4 py-3">
                        <div className="w-5 h-5 rounded-full bg-pink-500 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-300 text-xs">{s.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-4">
                    <p className="text-pink-400 text-xs font-medium">✨ Workflow created and deployed in 12 seconds.</p>
                    <p className="text-gray-400 text-xs mt-1">Running live · 0 errors · Last triggered 4 min ago</p>
                  </div>
                </div>
              </div>
              {/* Floating card */}
              <div className="absolute -right-6 -bottom-6 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-48 animate-float-slow">
                <div className="text-xs text-gray-400 mb-1">Automations today</div>
                <div className="text-2xl font-syne font-bold text-gray-900">12,491</div>
                <div className="text-xs text-emerald-500 font-medium mt-1">↑ 23% vs yesterday</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-syne text-5xl font-extrabold text-gray-900 mb-4">Loved by builders</h2>
            <p className="text-gray-500">From 2-person startups to Fortune 500 teams.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Synthara cut our operations team's workload by 70%. What used to take a full day now runs automatically before I finish my morning coffee.",
                name: 'Aria Chen',
                role: 'Head of Ops, Meridian Labs',
                avatar: '👩‍💼',
              },
              {
                quote: "I've tried every automation tool out there. Synthara is the first one that actually feels intelligent. The AI gets what you're trying to do, not just what you typed.",
                name: 'Marcus Webb',
                role: 'CTO, Cascade AI',
                avatar: '👨‍💻',
              },
              {
                quote: "We went from 3 weeks to deploy a new workflow to 3 minutes. Our devs can finally focus on product instead of glue code.",
                name: 'Priya Nair',
                role: 'VP Engineering, Orion Health',
                avatar: '👩‍🔬',
              },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 card-hover">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-pink-400 fill-pink-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-lg">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-syne text-5xl font-extrabold text-gray-900 mb-4">Simple pricing</h2>
            <p className="text-gray-500">Start free. Scale when you're ready.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Starter',
                price: 'Free',
                sub: 'Forever',
                features: ['5 active workflows', '1,000 runs/month', '10 integrations', 'Community support'],
                cta: 'Start free',
                highlighted: false,
              },
              {
                name: 'Growth',
                price: '$79',
                sub: 'per month',
                features: ['Unlimited workflows', '100K runs/month', '500+ integrations', 'AI agents (5 seats)', 'Priority support', 'Custom webhooks'],
                cta: 'Start trial',
                highlighted: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                sub: 'Contact us',
                features: ['Unlimited everything', 'Dedicated infrastructure', 'SLA guarantee', 'SSO + SCIM', 'Custom integrations', 'White-glove onboarding'],
                cta: 'Talk to sales',
                highlighted: false,
              },
            ].map((plan, i) => (
              <div key={i} className={`rounded-2xl p-8 border card-hover relative ${plan.highlighted ? 'gradient-bg text-white border-transparent glow-pink' : 'bg-white border-gray-100'}`}>
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
                  </div>
                )}
                <div className={`text-sm font-semibold mb-1 ${plan.highlighted ? 'text-pink-100' : 'text-gray-400'}`}>{plan.name}</div>
                <div className={`font-syne text-4xl font-extrabold mb-1 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>{plan.price}</div>
                <div className={`text-sm mb-8 ${plan.highlighted ? 'text-pink-100' : 'text-gray-400'}`}>{plan.sub}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlighted ? 'bg-white/20' : 'bg-pink-50'}`}>
                        <Check className={`w-3 h-3 ${plan.highlighted ? 'text-white' : 'text-pink-500'}`} />
                      </div>
                      <span className={`text-sm ${plan.highlighted ? 'text-pink-50' : 'text-gray-600'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className={`block text-center font-semibold py-3 rounded-full transition-all ${plan.highlighted ? 'bg-white text-pink-500 hover:bg-pink-50' : 'gradient-bg text-white hover:opacity-90'}`}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="gradient-bg rounded-3xl p-16 text-center text-white relative overflow-hidden glow-pink">
            <div className="absolute inset-0 opacity-10">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="absolute w-2 h-2 bg-white rounded-full" style={{ left: `${(i * 17) % 100}%`, top: `${(i * 23) % 100}%` }} />
              ))}
            </div>
            <div className="relative">
              <h2 className="font-syne text-5xl font-extrabold mb-6 leading-tight">Ready to automate<br />everything?</h2>
              <p className="text-pink-100 text-lg mb-10 max-w-lg mx-auto">Join 12,000+ teams who've replaced repetitive work with intelligent automation. Setup takes minutes.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#" className="bg-white text-pink-500 font-semibold px-8 py-4 rounded-full hover:bg-pink-50 transition-colors">
                  Get started free →
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors font-medium">
                  Book a demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="font-syne font-extrabold text-xl text-gray-900">Synthara</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">The AI automation platform for teams that move fast.</p>
            </div>
            {[
              { title: 'Product', links: ['Features', 'Integrations', 'Pricing', 'Changelog', 'Roadmap'] },
              { title: 'Company', links: ['About', 'Blog', 'Careers', 'Press', 'Contact'] },
              { title: 'Resources', links: ['Docs', 'API Reference', 'Status', 'Community', 'Templates'] },
            ].map((col) => (
              <div key={col.title}>
                <div className="font-semibold text-sm text-gray-900 mb-4">{col.title}</div>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}><a href="#" className="text-gray-400 text-sm hover:text-gray-700 transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-xs">© 2026 Synthara, Inc. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 text-xs hover:text-gray-700">Privacy</a>
              <a href="#" className="text-gray-400 text-xs hover:text-gray-700">Terms</a>
              <a href="#" className="text-gray-400 text-xs hover:text-gray-700">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
