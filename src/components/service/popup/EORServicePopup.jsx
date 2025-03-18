import React, { useEffect, useRef } from "react";

import ServiceImg4 from "../../../assets/images/service_04.jpg";

import "./PopUp.css";

const EORServicePopup = ({ popupHeight }) => {
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
        <img className="pb-5 service-img" src={ServiceImg4} alt="service" />
        <h2 className="py-5">Employer of Record (EOR) Services</h2>
        <p className="px-4">
          Employer of Record (EOR) services in Hong&nbsp;Kong enable businesses
          to hire employees without establishing a legal entity in the region.
          The EOR serves as the official employer, handling payroll, tax
          compliance, and legal responsibilities, while the client company
          manages daily operations. This solution is ideal for companies
          expanding into Hong&nbsp;Kong, hiring remote employees, or managing
          short-term projects. By eliminating administrative burdens, EOR
          services provide a cost-effective and compliant way to build a
          workforce. Businesses can focus on growth while ensuring smooth
          employee management.
          <br />
          <br />
          Below is a detailed overview of Employer of Record services in
          Hong&nbsp;Kong:
        </p>
      </div>
      <div className="workflow-container">
        <ul className="vertical-scrollable-workflow" ref={workflowRef}>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-file-contract"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">
                Overview of Employer of Record (EOR) Services
              </h4>
              <p>
                An EOR service provider in Hong Kong takes on the responsibility
                of employing staff on behalf of a client company. The EOR
                handles all legal, tax, and compliance obligations, allowing the
                client to focus on business operations.
                <br />
                Key responsibilities of an EOR include:
              </p>
              <p>
                <b>Payroll Processing:</b>
                <br />
                Managing salary payments, bonuses, and deductions.
              </p>
              <p>
                <b>Tax Withholding and Reporting:</b>
                <br />
                Ensuring compliance with Hong Kong's tax laws.
              </p>
              <p>
                <b>Employment Contracts:</b>
                <br />
                Drafting and managing legally compliant employment agreements.
              </p>
              <p>
                <b>Benefits Administration:</b>
                <br />
                Managing employee benefits such as health insurance, pensions,
                and leave entitlements.
              </p>
              <p>
                <b>Compliance with Labor Laws:</b>
                <br />
                Ensuring adherence to Hong Kong's employment regulations.
              </p>
            </div>
          </li>
          <li>
            <div className="cont">
              <h4 className="mb-3">Key Services Offered by EOR Providers</h4>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-clipboard-list"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">Employment and Onboarding</h4>
              <p>
                <b>Contract Preparation:</b>
                <br />
                Drafting employment contracts that comply with Hong Kong labor
                laws.
              </p>
              <p>
                <b>Work Visa Sponsorship:</b>
                <br />
                Assisting with visa applications for foreign employees.
              </p>
              <p>
                <b>Onboarding Support:</b>
                <br />
                Facilitating the onboarding process, including documentation and
                orientation.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-file-invoice-dollar"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">Payroll and Tax Management</h4>
              <p>
                <b>Payroll Processing:</b>
                <br />
                Calculating and disbursing salaries, overtime, and bonuses.
              </p>
              <p>
                <b>Tax Deductions:</b>
                <br />
                Withholding and remitting income tax to the Inland Revenue
                Department.
              </p>
              <p>
                <b>Mandatory Provident Fund (MPF) Contributions:</b>
                <br />
                Managing contributions to Hong Kong's mandatory retirement
                savings scheme.
              </p>
              <p>
                <b>Year-End Tax Reporting:</b>
                <br />
                Preparing and filing annual tax returns for employees.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-medkit"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">Benefits Administration</h4>
              <p>
                <b>Health Insurance:</b>
                <br />
                Arranging and managing health insurance plans for employees.
              </p>
              <p>
                <b>Leave Management:</b>
                <br />
                Administering statutory leave entitlements, such as annual
                leave, sick leave, and maternity/paternity leave.
              </p>
              <p>
                <b>Employee Benefits:</b>
                <br />
                Offering additional perks such as wellness programs, travel
                allowances, and bonuses.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-balance-scale"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">Compliance and Legal Support</h4>
              <p>
                <b>Labor Law Compliance:</b>
                <br />
                Ensuring adherence to Hong Kong's Employment Ordinance and other
                relevant regulations.
              </p>
              <p>
                <b>Workplace Safety:</b>
                <br />
                Implementing health and safety policies in compliance with local
                laws.
              </p>
              <p>
                <b>Dispute Resolution:</b>
                <br />
                Assisting with employee grievances or disputes.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-file-alt"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">Offboarding and Termination</h4>
              <p>
                <b>Exit Management:</b>
                <br />
                Handling the offboarding process, including final payments and
                documentation.
              </p>
              <p>
                <b>Termination Compliance:</b>
                <br />
                Ensuring that terminations are conducted in accordance with Hong
                Kong labor laws.
              </p>
            </div>
          </li>
          <li>
            <div className="cont">
              <h4 className="mb-3">
                Benefits of Using Employer of Record Services
              </h4>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">For Businesses</h4>
              {/* <h6>For Businesses</h6> */}
              <p>
                <b>No Legal Entity Required:</b>
                <br />
                Companies can hire employees in Hong Kong without setting up a
                local entity.
              </p>
              <p>
                <b>Faster Market Entry:</b>
                <br />
                EOR services enable businesses to start operations quickly,
                often within weeks.
              </p>
              <p>
                <b>Cost Savings:</b>
                <br />
                Eliminates the need for significant upfront investments in
                entity setup and ongoing administrative costs.
              </p>
              <p>
                <b>Compliance Assurance:</b>
                <br />
                EOR providers ensure full compliance with local labor laws, tax
                regulations, and employment standards.
              </p>
              <p>
                <b>Flexibility:</b>
                <br />
                Ideal for short-term projects, market testing, or hiring remote
                workers.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-user-tie"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">For Employees</h4>
              {/* <h6>For Employees</h6> */}
              <p>
                <b>Local Employment Contracts:</b>
                <br />
                Employees receive contracts that comply with Hong Kong labor
                laws, ensuring their rights are protected.
              </p>
              <p>
                <b>Access to Benefits:</b>
                <br />
                Employees enjoy statutory and additional benefits provided by
                the EOR.
              </p>
              <p>
                <b>Seamless Payroll:</b>
                <br />
                Timely and accurate salary payments with proper tax deductions.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">
                Industries That Benefit from EOR Services
              </h4>
              <p>
                <b>Technology:</b>
                <br />
                Hiring software developers, IT support, and other tech
                professionals.
              </p>
              <p>
                <b>Finance and Banking:</b>
                <br />
                Employing financial analysts, accountants, and compliance
                officers.
              </p>
              <p>
                <b>Consulting:</b>
                <br />
                Engaging consultants for short-term projects or market research.
              </p>
              <p>
                <b>Retail and E-commerce:</b>
                <br />
                Hiring sales representatives, marketing professionals, and
                logistics staff.
              </p>
              <p>
                <b>Healthcare:</b>
                <br />
                Employing medical professionals, researchers, and administrative
                staff.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-users-cog"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">
                Key Considerations When Choosing an EOR Provider
              </h4>
              <p>
                <b>Reputation and Experience:</b>
                <br />
                Choose a provider with a proven track record in Hong Kong.
              </p>
              <p>
                <b>Compliance Expertise:</b>
                <br />
                Ensure the provider is well-versed in Hong Kong's labor laws and
                tax regulations.
              </p>
              <p>
                <b>Technology and Reporting:</b>
                <br />
                Look for providers with robust payroll and HR management
                systems.
              </p>
              <p>
                <b>Customer Support:</b>
                <br />
                Opt for a provider that offers responsive and reliable support.
              </p>
              <p>
                <b>Scalability:</b>
                <br />
                Ensure the provider can accommodate your business's growth and
                changing needs.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-scroll"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">How EOR Services Work in Hong Kong?</h4>
              <p>
                <b>Client Engagement:</b>
                <br />
                The client company identifies the need to hire employees in Hong
                Kong.
              </p>
              <p>
                <b>Employee Hiring:</b>
                <br />
                The EOR provider hires the employee on behalf of the client,
                handling all legal and administrative tasks.
              </p>
              <p>
                <b>Day-to-Day Management:</b>
                <br />
                The client retains control over the employee's work activities
                and responsibilities.
              </p>
              <p>
                <b>Payroll and Compliance:</b>
                <br />
                The EOR manages payroll, taxes, benefits, and compliance.
              </p>
              <p>
                <b>Reporting and Support:</b>
                <br />
                The EOR provides regular reports and ongoing support to the
                client.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-gavel"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">
                Legal and Regulatory Framework in Hong Kong
              </h4>
              <p>
                <b>Employment Ordinance:</b>
                <br />
                Governs employment contracts, working hours, leave entitlements,
                and termination procedures.
              </p>
              <p>
                <b>Mandatory Provident Fund (MPF):</b>
                <br />
                Requires employers and employees to contribute to a retirement
                savings scheme.
              </p>
              <p>
                <b>Inland Revenue Department:</b>
                <br />
                Oversees income tax withholding and reporting.
              </p>
              <p>
                <b>Immigration Department:</b>
                <br />
                Manages work visa applications for foreign employees.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-file-invoice-dollar"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">Cost of EOR Services</h4>
              <p>The cost of EOR services in Hong Kong typically includes:</p>
              <p>
                <b>Service Fees:</b>
                <br />A monthly or per-employee fee charged by the EOR provider.
              </p>
              <p>
                <b>Payroll Costs:</b>
                <br />
                Salaries, bonuses, and other payments to employees.
              </p>
              <p>
                <b>Taxes and Contributions:</b>
                <br />
                MPF contributions, income tax, and other statutory payments.
              </p>
              <p>
                <b>Benefits Costs:</b>
                <br />
                Health insurance, leave entitlements, and other employee
                benefits.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-building"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">Why Hong Kong is Ideal for EOR Services?</h4>
              <p>
                <b>Business-Friendly Environment:</b>
                <br />
                Hong Kong offers a simple and efficient regulatory framework.
              </p>
              <p>
                <b>Strategic Location:</b>
                <br />A gateway to mainland China and the Asia-Pacific region.
              </p>
              <p>
                <b>Skilled Workforce:</b>
                <br />
                Access to a highly educated and multilingual talent pool.
              </p>
              <p>
                <b>Low Tax Rates:</b>
                <br />
                Competitive corporate and personal tax rates.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-12 text-center pt-5">
        <p className="px-4">
          <br />
          By leveraging Employer of Record services in Hong Kong, businesses can
          streamline their expansion efforts, reduce administrative burdens, and
          ensure compliance with local laws. This model is particularly
          advantageous for companies seeking flexibility and efficiency in their
          global operations.
        </p>
      </div>
    </div>
  );
};

export default EORServicePopup;
