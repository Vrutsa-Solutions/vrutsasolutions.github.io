import { useState } from "react";
import "./website.css";
import emailjs from "@emailjs/browser";


export default function Website() {
  return (
    <>
      <Hero />
      <FocusAreas />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

/* ================= HERO ================= */

function Hero() {
  const handleGetInTouch = () => {
    const section = document.getElementById("get-in-touch");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/hero_bg.png)` }}
    >
      <header className="hero-header">
        <div className="logo-area">
          <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Vrutsa Solutions" />
          <span>VRUTSA</span>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="cta-btn" onClick={handleGetInTouch}>
          GET IN TOUCH
        </button>
      </header>

      <div className="hero-content">
        <p className="tagline">SaaS - Solutions as a Service</p>

        <h1>
          The Next Generation solutions for <br />
          complex challenges
        </h1>

        <p className="description">
          From enterprises to individuals, Vrutsa Solutions advises,
          designs, builds, and delivers outcomes.
        </p>
      </div>
    </section>
  );
}

/* ================= FOCUS AREAS ================= */
function FocusAreas() {
  const [active, setActive] = useState("individual");

  const individualData = [
    {
      img: `${process.env.PUBLIC_URL}/assets/Career_guidance_growth.png`,
      title: "Career Guidance",
      desc: "Helping you build skills, confidence, and clear goals for a better future.",
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/Business_Growth.jpg`,
      title: "Business Growth",
      desc: "Strategic guidance to scale operations, improve performance, and increase profitability.",
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/Personal_brand_online_presence.png`,
      title: "Personal brand & online presence",
      desc: "Build a strong identity and grow your visibility across digital platforms.",
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/Education_abroad_guidance.jpg`,
      title: "Education & abroad guidance",
      desc: "Clear support for choosing the right courses, universities, and study destinations abroad.",
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/Investment_opportunities.png`,
      title: "Investment opportunities",
      desc: "Identify smart investment options to grow and secure your financial future.",
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/Tech_guidance.png`,
      title: "Tech guidance (tools & automation)",
      desc: "Helping you choose the right tools and automate processes for better efficiency.",
    },
  ];

  const enterpriseData = [
    {
      img: `${process.env.PUBLIC_URL}/assets/Business_growth_challenges.png`,
      title: "Business growth challenges",
      desc: "Practical solutions to overcome obstacles and sustain long-term business growth.",
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/Operational_issues.avif`,
      title: "Operational issues",
      desc: "Identifying and resolving process gaps to improve efficiency and daily operations.",
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/Technology_digital_gaps.avif`,
      title: "Technology & digital gaps",
      desc: "Bridging skill and system gaps to improve digital adoption and performance.",
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/Funding_investor_readiness.png`,
      title: "Funding & investor readiness",
      desc: "Preparing your business to attract funding and confidently engage with investors.",
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/Market_entry_expansion.png`,
      title: "Market entry & expansion",
      desc: "Strategic support to launch into new markets and scale your business confidently.",
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/Process_automation_
      improvement.png`,
      title: "Process automation & improvement",
      desc: "Streamlining workflows through automation to boost efficiency and reduce costs.",
    },
  ];

  const data = active === "individual" ? individualData : enterpriseData;

  return (
    <section id="focus" className="focus-section">
      {/* TOGGLE */}
      <div className="focus-toggle">
        <div className={`slider ${active}`}></div>

        <button
          className={active === "individual" ? "active" : ""}
          onClick={() => setActive("individual")}
        >
          Individual
        </button>

        <button
          className={active === "enterprise" ? "active" : ""}
          onClick={() => setActive("enterprise")}
        >
          Enterprise
        </button>
      </div>

      {/* GRID */}
      <div className="focus-grid">
        {data.map((item, index) => (
          <div className="focus-card" key={index}>
            <img src={item.img} alt={item.title} />

            <div className="focus-content">
              <h4>{item.title}</h4>

              <div className="hover-content">
                <span className="line"></span>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


/* ================= SERVICES ================= */
function Services() {
  const services = [
    {
      no: "01",
      title: "Business Solutions",
      desc: "Enhancing operational efficiency and enterprise performance.",
    },
    {
      no: "02",
      title: "Technology & SaaS Solutions",
      desc: "Scalable software platforms for modern businesses.",
    },
    {
      no: "03",
      title: "AI & Automation",
      desc: "Intelligent systems that streamline workflows and decisions.",
    },
    {
      no: "04",
      title: "Digital Transformation",
      desc: "Modernizing enterprises through digital innovation.",
    },
  ];

  return (
    <section id="services" className="servicesSection">
      <div className="servicesHeader">
        <h2 className="servicesTitle">OUR SERVICES</h2>
      </div>

      <div className="servicesGrid">
        {services.map((item, index) => (
          <div key={index} className="serviceCard">
            <span className="serviceNo">{item.no}</span>
            <h3 className="cardTitle">{item.title}</h3>
            <p className="cardDesc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= ABOUT ================= */
function About() {
  return (
    <section id="about">
      <section className="about-why">
        {/* WHO WE ARE */}
        <div className="who-we-are">
          <h2>Who we are</h2>
          <p>
            Vrutsa Solutions is a next-generation, multidisciplinary solutions
            firm built to solve real problems for individuals and businesses.
            <br />
            <br />
            We operate on a Solutions-as-a-Service (SaaS) model, where every
            engagement starts with understanding the problem deeply and ends
            with a practical, outcome-driven solution.
          </p>
        </div>

        {/* WHO WE WORK WITH */}
        <div className="who-we-work-with">
          <h2>Who We Work With</h2>
          <p>
            Individuals navigating career, business, finance, technology, or
            life decisions
            <br />
            <br />
            Startups & Businesses seeking clarity, growth, or restructuring
            <br />
            <br />
            Enterprises solving complex operational, strategic, or
            transformation challenges
          </p>
        </div>

        {/* WHY SECTION */}
        <h2 className="why-title">Why VRUTSA SOLUTIONS!</h2>

        {/* CARD 1 */}
        <div className="why-card">
          <img src={`${process.env.PUBLIC_URL}/assets/outcome.png`} alt="Outcome" />
          <div>
            <h4>Outcome-driven approach</h4>
            <p>
              By continuously upgrading the quality of our processes, we
              customize technology to deliver measurable business outcomes for
              our clients.
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="why-card highlight">
          <div>
            <h4>SaaS-based delivery model</h4>
            <p>
              We implement scalable SaaS-based solutions that reduce cost,
              increase speed, and improve reliability.
            </p>
          </div>
          <img src={`${process.env.PUBLIC_URL}/assets/saas.png`} alt="SaaS model" />
        </div>

        {/* CARD 3 */}
        <div className="why-card">
          <img src={`${process.env.PUBLIC_URL}/assets/industry.png`} alt="Industry agnostic" />
          <div>
            <h4>Industry-agnostic expertise</h4>
            <p>
              Our solutions span across multiple industries with flexible and
              adaptable frameworks.
            </p>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="why-card highlight">
          <div>
            <h4>Confidential & structured process</h4>
            <p>
              We follow strict confidentiality, security standards, and
              structured workflows to protect client data.
            </p>
          </div>
          <img src={`${process.env.PUBLIC_URL}/assets/confidential.png`} alt="Confidential" />
        </div>
      </section>
    </section>
  );
}


/* ================= FOOTER ================= */
function Footer() {
  return (
    <footer id="contact">
      <footer className="footer">
        <div className="footer-container">
          {/* LEFT */}
          <div className="footer-left">
            <h2>VRUTSA SOLUTIONS</h2>
            <p>
              We Solve Real Business & Individual Problems <br />
              with Scalable Solutions
            </p>

            <div className="social">
              <span>Social Links</span>
              <div className="icons">
                <a href="https://www.linkedin.com/company/vrutsa-solutions/posts/?feedView=all" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
                
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="footer-right">
            <div className="contact-block">
              <h4>Contact</h4>
              <p><a href="callto:+91-9994586462">+91-9994586462</a></p>
              <p ><a href="mailto:contact@vrutsasolutions.com" target="_blank">contact@vrutsasolutions.com</a></p>
            </div>

            <div className="contact-block">
              <h4>Address</h4>
              <p>Company Address: I-406,</p>
                <p> Amarprakash Temple Waves, PKV Mahanagar Road Extn, </p><p>Tiruneermalai Road, Kundrathur, Chennai-69.</p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms of Service</a>
        </div>
      </footer>
    </footer>
  );
}

/* ================= CONTACT ================= */
function Contact() {
  const [active, setActive] = useState("individual");

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    country: "",
    category: "",
    timeline: "",
    message: "",
    companyName: "",
    industry: "",
    budget: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      country: "",
      category: "",
      timeline: "",
      message: "",
      companyName: "",
      industry: "",
      budget: "",
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  setLoading(true);
  setSuccessMsg("");
  setErrorMsg("");

  const emailData = {
    name: formData.fullName,
    email: formData.email,
    phone: formData.phone,
    message: formData.message,
    type: active,
    country: formData.country,
    category: formData.category,
    timeline: formData.timeline,
    companyName: formData.companyName,
    industry: formData.industry,
    budget: formData.budget,
  };

  /* 1️⃣ ADMIN EMAIL */
  emailjs
    .send(
      "service_q1bkbzl",
      "template_kw6891c",
      emailData,
      "Nckh0HWWd-Qv1dPoi"
    )
    .then(() => {
      /* 2️⃣ USER AUTO-REPLY EMAIL */
      return emailjs.send(
        "service_q1bkbzl",
        "template_b5lmrsm",
        emailData,
        "Nckh0HWWd-Qv1dPoi"
      );
    })
    .then(() => {
      setSuccessMsg(
        "✅ Your request has been submitted. We’ll get back to you soon!"
      );
      resetForm();
      setLoading(false);
    })
    .catch((error) => {
      console.error(error);
      setErrorMsg("❌ Something went wrong. Please try again.");
      setLoading(false);
    });
  };

  return (
    <div id="get-in-touch" className="contact-wrapper">
      <h2>CONTACT</h2>
      <p>Have a question or a problem to solve?</p>

      {/* TOGGLE */}
      <div className="toggle">
        <div className={`slider ${active}`}></div>

        <button
          className={active === "individual" ? "active" : ""}
          onClick={() => setActive("individual")}
        >
          Individual
        </button>

        <button
          className={active === "business" ? "active" : ""}
          onClick={() => setActive("business")}
        >
          Enterprise / Business
        </button>
      </div>

      {/* ================= INDIVIDUAL FORM ================= */}
      {active === "individual" ? (
        <form className="form-box" onSubmit={handleSubmit}>
          <h3>Personal Details</h3>

          <div className="row">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <input
              type="email"
              name="email"
              placeholder="E-mail Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Category</option>
              <option>Career-growth</option>
              <option>Education-abroad</option>
              <option>Finance-wealth</option>
              <option>Technology & Automation</option>
              <option>Personal-branding / digital marketing</option>
              <option>Real-estate</option>
              <option>Relocation-lifestyle</option>
              <option>Other</option>
            </select>

            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
            >
              <option value="">⏳ Project Timeline</option>
              <option value="Mini (≤30 days)">🟢 Mini — Up to 30 days</option>
              <option value="Moderate (≤90 days)">🟡 Moderate — Up to 90 days</option>
              <option value="Large (>90 days)">🔴 Large — More than 90 days</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Tell us about your requirements"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <label className="checkbox">
            <input type="checkbox" required /> I agree to the terms and privacy
            policy
          </label>

          {successMsg && <p className="success">{successMsg}</p>}
          {errorMsg && <p className="error">{errorMsg}</p>}

          <div className="buttons">
            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "SUBMIT REQUEST"}
            </button>
            <button type="button" className="outline" onClick={resetForm}>
              RESET FORM
            </button>
          </div>
        </form>
      ) : (
        /* ================= BUSINESS FORM ================= */
        <form className="form-box" onSubmit={handleSubmit}>
          <h3>Company Details</h3>

          <div className="row">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="row">
            <input
              type="email"
              name="email"
              placeholder="E-mail Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
            >
              <option value="">Industry</option>
              <option>Information-technology</option>
              <option>Finance</option>
              <option>Healthcare</option>
              <option>Education</option>
              <option>Retail-ecommerce</option>
              <option>Media-entertainment</option>
              <option>Startups</option>
              <option>Logistics-supply-chain</option>
              <option>Other</option>
            </select>

            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <input
              type="text"
              name="budget"
              placeholder="Budget (if any)"
              value={formData.budget}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            placeholder="Tell us about your requirements"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <label className="checkbox">
            <input type="checkbox" required /> I agree to the terms and privacy
            policy
          </label>

          {successMsg && <p className="success">{successMsg}</p>}
          {errorMsg && <p className="error">{errorMsg}</p>}

          <div className="buttons">
            <button type="submit">SUBMIT FORM</button>
            <button type="button" className="outline" onClick={resetForm}>
              RESET FORM
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

