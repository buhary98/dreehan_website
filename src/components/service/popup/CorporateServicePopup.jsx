import React, { useEffect, useRef } from "react";

import ServiceImg1 from "../../../assets/images/service_01.jpg";

import "./PopUp.css";

const CorporateServicePopup = ({ popupHeight }) => {
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
        <img className="pb-5 service-img" src={ServiceImg1} alt="service" />
        <h2 className="py-5">Corporate Services</h2>
        <p className="px-4">
          Company registration services in Hong&nbsp;Kong help entrepreneurs,
          investors, and businesses legally establish their presence in a
          globally recognized financial hub. The process is efficient, with
          minimal bureaucracy, making it one of the most business-friendly
          jurisdictions. Hong&nbsp;Kong offers a competitive tax system, strong
          legal framework, and strategic access to international markets. With
          straightforward compliance requirements and a stable economic
          environment, setting up a company here is seamless. These services
          ensure businesses meet all legal obligations while maximizing
          operational efficiency.
          <br />
          <br />
          Below is a detailed overview of the services offered by professional
          firms specializing in Hong&nbsp;Kong company registration:
        </p>
      </div>
      <div className="workflow-container">
        <ul className="vertical-scrollable-workflow" ref={workflowRef}>
          <li>
            <div className="icon-holder">
              <i className="fa-regular fa-address-card"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">Pre-Registration Consultation</h4>
              <p>
                <b>Business Structure Advice:</b>
                <br />
                Professionals help clients choose the most suitable business
                structure (e.g., private limited company, sole proprietorship,
                partnership, or branch office).
              </p>
              <p>
                <b>Name Check and Reservation:</b>
                <br />
                They assist in checking the availability of the proposed company
                name with the Companies Registry and reserve it if available.
              </p>
              <p>
                <b>Regulatory Guidance:</b>
                <br />
                Provide advice on compliance with local laws, licensing
                requirements, and industry-specific regulations.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-regular fa-file-lines"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">Company Incorporation Services</h4>
              <p>
                <b>Preparation of Documents:</b>
                <br />
                Drafting and filing the necessary incorporation documents,
                including:
                <br />
                <span>
                  <b>&gt;</b>&nbsp;Form NNC1 (for private companies) or Form
                  NNC1G (for non-private companies).
                </span>
                <br />
                <span>
                  <b>&gt;</b>&nbsp;Articles of Association (the company's
                  internal rules and regulations).
                </span>
                <br />
                <span>
                  <b>&gt;</b>&nbsp;Notice to Business Registration Office (for
                  business registration).
                </span>
              </p>
              <p>
                <b>Submission to Companies Registry:</b>
                <br />
                Filing the incorporation documents with the Hong&nbsp;Kong
                Companies Registry and paying the required fees.
              </p>
              <p>
                <b>Business Registration:</b>
                <br />
                Applying for a Business Registration Certificate from the Inland
                Revenue Department, which is mandatory for all businesses
                operating in Hong&nbsp;Kong.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-money-check"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">Post-Incorporation Services</h4>
              <p>
                <b>Company Seal and Chop:</b>
                <br />
                Arranging for the creation of the company seal (common seal) and
                chops (signature stamps) used for official documents.
              </p>
              <p>
                <b>Bank Account Opening Assistance:</b>
                <br />
                Helping clients open corporate bank accounts in Hong&nbsp;Kong
                by preparing the necessary documents and liaising with banks.
              </p>
              <p>
                <b>Registered Office Address:</b>
                <br />
                Providing a registered office address in Hong&nbsp;Kong, which
                is a legal requirement for all companies incorporated in the
                city.
              </p>
              <p>
                <b>Company Secretary Services:</b>
                <br />
                Appointing a qualified company secretary (a mandatory
                requirement for Hong&nbsp;Kong companies) to handle compliance
                and administrative tasks.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-receipt"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">Taxation and Accounting Services</h4>
              <p>
                <b>Tax Registration:</b>
                <br />
                Registering the company with the Inland Revenue Department for
                Profits Tax.
              </p>
              <p>
                <b>Tax Planning:</b>
                <br />
                Advising on Hong&nbsp;Kong's territorial tax system and
                strategies to minimize tax liabilities.
              </p>
              <p>
                <b>Bookkeeping and Accounting:</b>
                <br />
                Setting up accounting systems and maintaining financial records
                in compliance with Hong&nbsp;Kong's accounting standards.
              </p>
              <p>
                <b>Audit and Financial Reporting:</b>
                <br />
                Preparing annual financial statements and arranging for audits
                (if required).
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-id-card"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">Licensing and Permits</h4>
              <p>
                <b>Industry-Specific Licenses:</b>
                <br />
                Assisting with the application for licenses or permits required
                for specific industries, such as finance, food and beverage,
                education, or trading.
              </p>
              <p>
                <b>Import/Export Licenses:</b>
                <br />
                Helping businesses obtain the necessary licenses for importing
                or exporting goods.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-file-invoice"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">Compliance and Annual Maintenance</h4>
              <p>
                <b>Annual Return Filing:</b>
                <br />
                Preparing and filing annual returns with the Companies Registry
                to keep the company in good standing.
              </p>
              <p>
                <b>Business Registration Renewal:</b>
                <br />
                Renewing the Business Registration Certificate annually.
              </p>
              <p>
                <b>Statutory Record Maintenance:</b>
                <br />
                Ensuring that statutory records, such as registers of members,
                directors, and charges, are properly maintained.
              </p>
              <p>
                <b>Compliance Updates:</b>
                <br />
                Keeping clients informed about changes in Hong&nbsp;Kong's
                corporate laws and regulations.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-list-check"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">Additional Services</h4>
              <p>
                <b>Nominee Services:</b>
                <br />
                Providing nominee director or shareholder services for clients
                who wish to maintain privacy.
              </p>
              <p>
                <b>Visa and Work Permit Assistance:</b>
                <br />
                Helping foreign entrepreneurs and employees obtain the necessary
                visas and work permits to operate in Hong&nbsp;Kong.
              </p>
              <p>
                <b>Trademark Registration:</b>
                <br />
                Assisting with the registration of trademarks to protect
                intellectual property rights.
              </p>
              <p>
                <b>Virtual Office Services:</b>
                <br />
                Offering virtual office solutions, including mail handling and
                call forwarding, for businesses that do not require a physical
                office.
              </p>
            </div>
          </li>
          <li>
            <div className="cont-bottom">
              <h4 className="mb-3">
                Benefits of Using Professional Company Registration Services
              </h4>
              <p>
                <b>Time-Saving:</b>
                <br />
                Professionals handle the entire registration process, allowing
                clients to focus on their core business activities.
              </p>
              <p>
                <b>Expertise:</b>
                <br />
                They ensure compliance with all legal and regulatory
                requirements, reducing the risk of errors or penalties.
              </p>
              <p>
                <b>Convenience:</b>
                <br />
                Many firms offer end-to-end solutions, from incorporation to
                ongoing compliance and support.
              </p>
              <p>
                <b>Cost-Effectiveness:</b>
                <br />
                By avoiding mistakes and delays, clients can save money in the
                long run.
              </p>
            </div>
          </li>
          <li>
            <div className="cont-bottom">
              <h4 className="mb-3">
                Key Requirements for Hong&nbsp;Kong Company Registration
              </h4>
              <p>
                <b>Company Name:</b>
                <br />
                Must be unique and not infringe on existing trademarks.
              </p>
              <p>
                <b>Shareholders:</b>
                <br />
                Minimum of one shareholder (individual or corporate, local or
                foreign).
              </p>
              <p>
                <b>Directors:</b>
                <br />
                Minimum of one director (individual, no residency requirement).
              </p>
              <p>
                <b>Company Secretary:</b>
                <br />
                Must be a Hong&nbsp;Kong resident or a Hong&nbsp;Kong-registered
                corporate entity.
              </p>
              <p>
                <b>Registered Address:</b>
                <br />A physical address in Hong&nbsp;Kong (PO Boxes are not
                allowed).
              </p>
              <p>
                <b>Share Capital:</b>
                <br />
                No minimum capital requirement (standard is HKD 1,000).
              </p>
            </div>
          </li>
          <li>
            <div className="cont-bottom">
              <h4 className="mb-3">Timeline for Company Registration</h4>
              <p>
                The entire process typically takes 7-10 working days, provided
                all documents are in order and there are no complications.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-12 text-center pt-5">
        <p className="px-4">
          <br />
          By engaging professional company registration services, businesses can
          ensure a smooth and hassle-free setup process in Hong&nbsp;Kong,
          allowing them to take full advantage of the city's dynamic business
          environment.
        </p>
      </div>
    </div>
  );
};

export default CorporateServicePopup;
