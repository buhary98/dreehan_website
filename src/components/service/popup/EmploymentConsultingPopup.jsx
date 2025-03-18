import React, { useEffect, useRef } from "react";

import ServiceImg3 from "../../../assets/images/service_03.jpg";

import "./PopUp.css";

const EmploymentConsultingPopup = ({ popupHeight }) => {
  const workflowRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!workflowRef.current) return;

      const workflowItems = workflowRef.current.querySelectorAll("li");
      const activationOffset = popupHeight * 0.55;

      workflowItems.forEach((elem) => {
        const elemTop = elem.getBoundingClientRect().top;

        if (elemTop <= popupHeight - activationOffset) {
          elem.classList.add("active");
        } else {
          elem.classList.remove("active");
        }
      });
    };

    document
      .querySelector(".popup-content")
      ?.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      document
        .querySelector(".popup-content")
        ?.removeEventListener("scroll", handleScroll);
    };
  }, [popupHeight]);

  return (
    <div className="container py-5">
      <div className="col-12 text-center">
        <img className="pb-5 service-img" src={ServiceImg3} alt="service" />
        <h2 className="py-5">Employment Consulting Services</h2>
        <p className="px-4">
          Employment consulting services in Hong&nbsp;Kong help businesses, job
          seekers, and professionals navigate recruitment, workforce management,
          and labor regulations. With a dynamic economy and diverse industries,
          Hong&nbsp;Kong offers vast opportunities for employers and employees.
          Consultants assist with talent acquisition, HR strategies, compliance,
          and outsourcing solutions to streamline operations. Their expertise
          ensures businesses find the right talent while professionals secure
          rewarding career opportunities. These services enhance efficiency,
          compliance, and workforce stability in a competitive job market.
          <br />
          <br />
          Below is a detailed overview of the services offered by employment
          consulting firms in Hong&nbsp;Kong:
        </p>
      </div>
      <div className="workflow-container">
        <ul className="vertical-scrollable-workflow" ref={workflowRef}>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-business-time"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">Recruitment and Talent Acquisition</h4>
              <p>
                <b>Executive Search and Headhunting:</b>
                <br />
                Identifying and recruiting top-tier executives and senior-level
                professionals for key leadership roles.
              </p>
              <p>
                <b>Permanent Recruitment:</b>
                <br />
                Assisting companies in hiring full-time employees for various
                positions across industries.
              </p>
              <p>
                <b>Contract and Temporary Staffing:</b>
                <br />
                Providing short-term or project-based staffing solutions to meet
                immediate business needs.
              </p>
              <p>
                <b>Graduate Recruitment:</b>
                <br />
                Helping companies attract and hire fresh graduates for
                entry-level positions and management trainee programs.
              </p>
              <p>
                <b>Industry-Specific Recruitment:</b>
                <br />
                Specializing in recruitment for specific sectors such as
                finance, technology, legal, healthcare, retail, and hospitality.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-regular fa-file-lines"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">Workforce Planning and Strategy</h4>
              <p>
                <b>Talent Mapping:</b>
                <br />
                Analyzing the labor market to identify talent trends, skill
                gaps, and potential candidates.
              </p>
              <p>
                <b>Succession Planning:</b>
                <br />
                Assisting organizations in developing strategies to identify and
                prepare future leaders.
              </p>
              <p>
                <b>Organizational Design:</b>
                <br />
                Advising on workforce structure, roles, and responsibilities to
                optimize efficiency and productivity.
              </p>
              <p>
                <b>Diversity and Inclusion Strategies:</b>
                <br />
                Helping companies build diverse and inclusive workplaces.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-ranking-star"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">Employer Branding and Talent Attraction</h4>
              <p>
                <b>Employer Branding:</b>
                <br />
                Developing and promoting a company's employer brand to attract
                top talent.
              </p>
              <p>
                <b>Candidate Experience Enhancement:</b>
                <br />
                Improving the recruitment process to create a positive
                experience for job applicants.
              </p>
              <p>
                <b>Job Advertisement and Marketing:</b>
                <br />
                Crafting compelling job descriptions and advertising vacancies
                on relevant platforms.
              </p>
              <p>
                <b>Social Media Recruitment:</b>
                <br />
                Leveraging social media channels to reach a broader audience and
                engage with potential candidates.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-hand-holding-usd"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">Compensation and Benefits Consulting</h4>
              <p>
                <b>Salary Benchmarking:</b>
                <br />
                Conducting market research to provide insights on competitive
                salary ranges and benefits packages.
              </p>
              <p>
                <b>Incentive Programs:</b>
                <br />
                Designing performance-based incentive schemes to motivate
                employees.
              </p>
              <p>
                <b>Benefits Optimization:</b>
                <br />
                Advising on employee benefits such as health insurance,
                retirement plans, and wellness programs.
              </p>
              <p>
                <b>Payroll and Tax Compliance:</b>
                <br />
                Ensuring compliance with Hong&nbsp;Kong's payroll and tax
                regulations.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-regular fa-handshake"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">Employee Retention and Engagement</h4>
              <p>
                <b>Employee Engagement Surveys:</b>
                <br />
                Conducting surveys to measure employee satisfaction and identify
                areas for improvement.
              </p>
              <p>
                <b>Retention Strategies:</b>
                <br />
                Developing programs to reduce turnover and retain top talent.
              </p>
              <p>
                <b>Career Development Programs:</b>
                <br />
                Assisting companies in creating training and development
                opportunities for employees.
              </p>
              <p>
                <b>Performance Management Systems:</b>
                <br />
                Implementing systems to evaluate and improve employee
                performance.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-users"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">
                Outplacement and Career Transition Services
              </h4>
              <p>
                <b>Outplacement Support:</b>
                <br />
                Assisting companies in providing career transition services for
                employees affected by layoffs or restructuring.
              </p>
              <p>
                <b>Career Coaching:</b>
                <br />
                Offering one-on-one coaching to help individuals identify career
                goals and develop job search strategies.
              </p>
              <p>
                <b>Resume and Interview Preparation:</b>
                <br />
                Helping job seekers create professional resumes and prepare for
                interviews.
              </p>
              <p>
                <b>Job Search Assistance:</b>
                <br />
                Providing access to job boards, networking opportunities, and
                recruitment events.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-clipboard-list"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">HR Compliance and Advisory Services</h4>
              <p>
                <b>Employment Law Compliance:</b>
                <br />
                Ensuring that companies adhere to Hong&nbsp;Kong's labor laws
                and regulations.
              </p>
              <p>
                <b>Contract Drafting and Review:</b>
                <br />
                Assisting in the preparation and review of employment contracts,
                non-disclosure agreements, and other HR-related documents.
              </p>
              <p>
                <b>Workplace Investigations:</b>
                <br />
                Conducting investigations into workplace disputes, harassment
                claims, or misconduct.
              </p>
              <p>
                <b>Policy Development:</b>
                <br />
                Helping companies create and implement HR policies and
                procedures.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-university"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">Training and Development</h4>
              <p>
                <b>Leadership Development Programs:</b>
                <br />
                Offering training programs to develop leadership skills among
                managers and executives.
              </p>
              <p>
                <b>Technical Skills Training:</b>
                <br />
                Providing industry-specific training to enhance employees'
                technical competencies.
              </p>
              <p>
                <b>Soft Skills Training:</b>
                <br />
                Conducting workshops on communication, teamwork, and
                problem-solving skills.
              </p>
              <p>
                <b>Compliance Training:</b>
                <br />
                Educating employees on workplace safety, anti-discrimination,
                and other regulatory requirements.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-chalkboard-user"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">HR Technology Solutions</h4>
              <p>
                <b>HR Software Implementation:</b>
                <br />
                Assisting companies in selecting and implementing HR management
                systems (HRMS) and applicant tracking systems (ATS).
              </p>
              <p>
                <b>Data Analytics and Reporting:</b>
                <br />
                Providing tools and insights to analyze workforce data and make
                informed decisions.
              </p>
              <p>
                <b>Automation of HR Processes</b>
                <br />
                Streamlining recruitment, payroll, and performance management
                through technology.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-user-tie"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">Specialized Services for Job Seekers</h4>
              <p>
                <b>Career Counseling:</b>
                <br />
                Helping individuals assess their skills, interests, and career
                options.
              </p>
              <p>
                <b>Job Matching:</b>
                <br />
                Connecting job seekers with suitable employment opportunities
                based on their qualifications and preferences.
              </p>
              <p>
                <b>Networking Support:</b>
                <br />
                Assisting candidates in building professional networks and
                leveraging connections.
              </p>
              <p>
                <b>Relocation Assistance:</b>
                <br />
                Providing support for individuals moving to Hong&nbsp;Kong for
                work, including visa processing and orientation.
              </p>
            </div>
          </li>
          <li>
            <div className="cont-bottom">
              <h4 className="mb-3">
                Benefits of Using Employment Consulting Services
              </h4>
              <p>
                <b>Access to Top Talent:</b>
                <br />
                Consultants have extensive networks and databases to identify
                qualified candidates.
              </p>
              <p>
                <b>Time and Cost Efficiency:</b>
                <br />
                Outsourcing recruitment and HR functions saves time and reduces
                hiring costs.
              </p>
              <p>
                <b>Expertise and Insights:</b>
                <br />
                Consultants provide market intelligence and best practices to
                optimize workforce management.
              </p>
              <p>
                <b>Customized Solutions:</b>
                <br />
                Services are tailored to meet the unique needs of each client,
                whether an employer or job seeker.
              </p>
              <p>
                <b>Compliance Assurance:</b>
                <br />
                Consultants ensure that all employment practices comply with
                local laws and regulations.
              </p>
            </div>
          </li>
          <li>
            <div className="cont-bottom">
              <h4 className="mb-3">Key Industries Served</h4>
              <p>
                <b>Finance and Banking:</b>
                <br />
                Recruitment for roles in investment banking, asset management,
                and fintech.
              </p>
              <p>
                <b>Technology:</b>
                <br />
                Talent acquisition for IT, software development, and
                cybersecurity roles.
              </p>
              <p>
                <b>Legal and Professional Services:</b>
                <br />
                Hiring for law firms, accounting firms, and consulting agencies.
              </p>
              <p>
                <b>Healthcare and Life Sciences:</b>
                <br />
                Recruitment for medical professionals, researchers, and
                pharmaceutical experts.
              </p>
              <p>
                <b>Retail and Hospitality:</b>
                <br />
                Staffing for retail chains, hotels, and restaurants.
              </p>
            </div>
          </li>
          <li>
            <div className="cont-bottom">
              <h4 className="mb-3">
                Trends in Hong&nbsp;Kong's Employment Market
              </h4>
              <p>
                <b>Remote Work:</b>
                <br />
                Increasing demand for flexible work arrangements and remote job
                opportunities.
              </p>
              <p>
                <b>Skill Shortages:</b>
                <br />
                High demand for professionals in technology, finance, and
                healthcare.
              </p>
              <p>
                <b>Focus on Diversity:</b>
                <br />
                Growing emphasis on building diverse and inclusive workplaces.
              </p>
              <p>
                <b>Gig Economy:</b>
                <br />
                Rise in contract and freelance work arrangements.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-12 text-center pt-5">
        <p className="px-4">
          <br />
          By leveraging employment consulting services, businesses in
          Hong&nbsp;Kong can attract, retain, and develop top talent, while job
          seekers can access valuable resources and opportunities to advance
          their careers. These services play a crucial role in ensuring a
          competitive and thriving job market in one of the world's most dynamic
          cities.
        </p>
      </div>
    </div>
  );
};

export default EmploymentConsultingPopup;
