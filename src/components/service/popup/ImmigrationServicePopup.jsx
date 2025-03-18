import React, { useEffect, useRef } from "react";

import ServiceImg2 from "../../../assets/images/service_02.jpg";

import "./PopUp.css";

const ImmigrationServicePopup = ({ popupHeight }) => {
  const workflowRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!workflowRef.current) return;

      const workflowItems = workflowRef.current.querySelectorAll("li");
      const activationOffset = popupHeight * 0.45;

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
        <img className="pb-5 service-img" src={ServiceImg2} alt="service" />
        <h2 className="py-5">Immigration Services</h2>
        <p className="px-4">
          Immigration consulting services in Hong&nbsp;Kong help individuals,
          families, and businesses navigate complex visa and residency
          processes. As a global hub for business, education, and culture,
          Hong&nbsp;Kong attracts professionals, investors, and expatriates from
          around the world. Expert consultants provide guidance on visa
          applications, compliance with immigration laws, and smooth relocation
          procedures. Whether for work, study, or business expansion, these
          services ensure a hassle-free transition. With personalized support,
          clients can secure the right permits and residency options
          efficiently.
          <br />
          <br />
          Below is a detailed overview of the services offered by immigration
          consulting firms in Hong&nbsp;Kong:
        </p>
      </div>
      <div className="workflow-container">
        <ul className="vertical-scrollable-workflow" ref={workflowRef}>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-passport"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">Visa and Work Permit Assistance</h4>
              <p>
                <b>Employment Visa (Work Visa):</b>
                <br />
                Assisting professionals in obtaining an employment visa for
                working in Hong&nbsp;Kong. This includes:
                <br />
                <span>
                  <b>&gt;</b>&nbsp;Preparing and submitting the application to
                  the Hong&nbsp;Kong Immigration Department.
                </span>
                <br />
                <span>
                  <b>&gt;</b>&nbsp;Advising on required documents, such as
                  employment contracts, proof of qualifications, and employer
                  sponsorship letters.
                </span>
                <br />
                <span>
                  <b>&gt;</b>&nbsp;Liaising with the Immigration Department on
                  behalf of the applicant.
                </span>
              </p>
              <p>
                <b>Investment Visa:</b>
                <br />
                Helping entrepreneurs and investors secure visas for
                establishing or joining a business in Hong&nbsp;Kong.
              </p>
              <p>
                <b>Training Visa:</b>
                <br />
                Assisting individuals in obtaining visas for practical training
                or internships in Hong&nbsp;Kong.
              </p>
              <p>
                <b>Dependent Visa:</b>
                <br />
                Supporting family members of visa holders (e.g., spouses and
                children) in applying for dependent visas to join them in
                Hong&nbsp;Kong.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-regular fa-file-lines"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">Talent and Specialist Visa Programs</h4>
              <p>
                <b>Quality Migrant Admission Scheme (QMAS):</b>
                <br />
                Guiding highly skilled professionals through the points-based
                QMAS application process, which allows individuals to reside in
                Hong&nbsp;Kong without a prior job offer.
              </p>
              <p>
                <b>
                  Admission Scheme for Mainland Talents and Professionals
                  (ASMTP):
                </b>
                <br />
                Assisting mainland Chinese professionals in obtaining visas to
                work in Hong&nbsp;Kong.
              </p>
              <p>
                <b>Technology Talent Admission Scheme (TechTAS):</b>
                <br />
                Supporting tech professionals in securing fast-track visas to
                work in Hong&nbsp;Kong's innovation and technology sectors.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-house-chimney"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">Residency and Citizenship Services</h4>
              <p>
                <b>Right of Abode:</b>
                <br />
                Advising individuals who have resided in Hong&nbsp;Kong for
                seven continuous years on applying for the Right of Abode
                (permanent residency).
              </p>
              <p>
                <b>Naturalization as a Chinese Citizen:</b>
                <br />
                Assisting eligible foreign nationals in applying for Chinese
                citizenship through naturalization.
              </p>
              <p>
                <b>Returning Hong&nbsp;Kong Residents:</b>
                <br />
                Helping former Hong&nbsp;Kong residents who have lost their
                Right of Abode to regain their residency status.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-user-graduate"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">
                Student Visa and Education-Related Services
              </h4>
              <p>
                <b>Student Visa:</b>
                <br />
                Assisting international students in obtaining visas to study at
                Hong&nbsp;Kong's universities, colleges, or schools.
              </p>
              <p>
                <b>Guardian Visa:</b>
                <br />
                Supporting parents or guardians of minor students in securing
                visas to accompany them in Hong&nbsp;Kong.
              </p>
              <p>
                <b>Education Consultancy:</b>
                <br />
                Providing advice on educational institutions, admission
                requirements, and scholarship opportunities.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-regular fa-handshake"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">Business Immigration Services</h4>
              <p>
                <b>Entrepreneur Visa:</b>
                <br />
                Assisting entrepreneurs in obtaining visas to establish or join
                a business in Hong&nbsp;Kong.
              </p>
              <p>
                <b>Corporate Immigration Solutions:</b>
                <br />
                Providing tailored immigration services for businesses,
                including bulk visa applications for employees and compliance
                with immigration laws.
              </p>
              <p>
                <b>Secondment and Intra-Company Transfers:</b>
                <br />
                Facilitating visa applications for employees being transferred
                to Hong&nbsp;Kong from overseas branches of a company.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-people-roof"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">Family and Personal Immigration Services</h4>
              <p>
                <b>Marriage Visa:</b>
                <br />
                Assisting foreign spouses of Hong&nbsp;Kong residents in
                obtaining visas to join their partners in Hong&nbsp;Kong.
              </p>
              <p>
                <b>Permanent Residency for Family Members:</b>
                <br />
                Supporting family members of permanent residents in applying for
                residency.
              </p>
              <p>
                <b>Adoption-Related Immigration:</b>
                <br />
                Guiding families through the immigration process for adopting
                children from overseas.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-list-ul"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">
                Immigration Compliance and Advisory Services
              </h4>
              <p>
                <b>Visa Renewals and Extensions:</b>
                <br />
                Assisting clients in renewing or extending their visas before
                they expire.
              </p>
              <p>
                <b>Change of Employment or Sponsorship:</b>
                <br />
                Helping individuals transition to a new employer or sponsor
                without violating visa conditions.
              </p>
              <p>
                <b>Compliance Audits:</b>
                <br />
                Conducting audits to ensure businesses comply with
                Hong&nbsp;Kong's immigration laws and regulations.
              </p>
              <p>
                <b>Appeals and Reapplications:</b>
                <br />
                Representing clients in cases of visa rejections or appeals.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-magnifying-glass-location"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">Relocation and Settlement Services</h4>
              <p>
                <b>Pre-Arrival Planning:</b>
                <br />
                Providing information on housing, schools, healthcare, and other
                essential services in Hong&nbsp;Kong.
              </p>
              <p>
                <b>Orientation Programs:</b>
                <br />
                Offering orientation sessions to help newcomers adjust to life
                in Hong&nbsp;Kong.
              </p>
              <p>
                <b>Document Translation and Notarization:</b>
                <br />
                Assisting with the translation and notarization of documents
                required for immigration applications.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-mountain-city"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">Specialized Immigration Services</h4>
              <p>
                <b>Domestic Helper Visa:</b>
                <br />
                Assisting employers in obtaining visas for hiring foreign
                domestic helpers.
              </p>
              <p>
                <b>Visitors and Tourist Visas:</b>
                <br />
                Advising on short-term visa requirements for visitors and
                tourists.
              </p>
              <p>
                <b>Retirement Visa:</b>
                <br />
                Assisting retirees in exploring visa options for residing in
                Hong&nbsp;Kong.
              </p>
            </div>
          </li>
          <li>
            <div className="icon-holder">
              <i className="fa-solid fa-gavel"></i>
            </div>
            <div className="cont">
              <h4 className="mb-3">Appeals and Legal Representation</h4>
              <p>
                <b>Visa Refusal Appeals:</b>
                <br />
                Representing clients in appealing visa refusals or
                cancellations.
              </p>
              <p>
                <b>Legal Advice:</b>
                <br />
                Providing expert legal advice on complex immigration matters,
                including changes in immigration policies and regulations.
              </p>
            </div>
          </li>
          <li>
            <div className="cont-bottom">
              <h4 className="mb-3">
                Benefits of Using Immigration Consulting Services
              </h4>
              <p>
                <b>Expert Guidance:</b>
                <br />
                Immigration consultants are well-versed in Hong&nbsp;Kong's
                immigration laws and policies, ensuring accurate and up-to-date
                advice.
              </p>
              <p>
                <b>Time-Saving:</b>
                <br />
                Professionals handle the entire application process, reducing
                delays and administrative burdens.
              </p>
              <p>
                <b>Increased Success Rates:</b>
                <br />
                Consultants improve the chances of visa approval by ensuring
                applications are complete and compliant with requirements.
              </p>
              <p>
                <b>Personalized Solutions:</b>
                <br />
                Services are tailored to meet the unique needs of individuals,
                families, and businesses.
              </p>
              <p>
                <b>Ongoing Support:</b>
                <br />
                Consultants provide continuous support, from initial
                applications to visa renewals and compliance.
              </p>
            </div>
          </li>
          <li>
            <div className="cont-bottom">
              <h4 className="mb-3">
                Key Requirements for Hong&nbsp;Kong Immigration Applications
              </h4>
              <p>
                <b>Valid Passport:</b>
                <br />
                Applicants must have a valid passport with sufficient remaining
                validity.
              </p>
              <p>
                <b>Proof of Financial Means:</b>
                <br />
                Evidence of sufficient funds to support oneself and dependents
                (if applicable).
              </p>
              <p>
                <b>Supporting Documents:</b>
                <br />
                Depending on the visa type, documents such as employment
                contracts, educational certificates, and sponsorship letters may
                be required.
              </p>
              <p>
                <b>Clean Criminal Record:</b>
                <br />
                Applicants must provide a police clearance certificate or
                similar document to prove a clean criminal record.
              </p>
            </div>
          </li>
          <li>
            <div className="cont-bottom">
              <h4 className="mb-3">Timeline for Visa Processing</h4>
              <p>
                Processing times vary depending on the visa type and complexity
                of the application. Typically:
                <br />
                <span>
                  <b>&gt;&nbsp;Employment Visa:</b>&nbsp;4-6 weeks
                </span>
                <br />
                <span>
                  <b>&gt;&nbsp;Dependent Visa:</b>&nbsp;4-6 weeks
                </span>
                <br />
                <span>
                  <b>&gt;&nbsp;Investment Visa:</b>&nbsp;6-8 weeks
                </span>
                <br />
                <span>
                  <b>&gt;&nbsp;Student Visa:</b>&nbsp;4-6 weeks
                </span>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-12 text-center pt-5">
        <p className="px-4">
          <br />
          By engaging professional immigration consulting services, individuals
          and businesses can navigate Hong&nbsp;Kong's immigration system with
          confidence, ensuring a smooth and successful application process.
          These services are particularly valuable for those unfamiliar with
          local laws or facing complex immigration scenarios.
        </p>
      </div>
    </div>
  );
};

export default ImmigrationServicePopup;
