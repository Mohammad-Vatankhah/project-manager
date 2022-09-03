import "./CompanyDetails.css";
export const CompanyDetails = ({ company }) => {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  
  return (
    <div className="CompanyDetails">
      <div className="companyImages">
        <img src={company?.coverPicture
              ? serverPublic + company?.coverPicture
              : serverPublic + "defaultCover.jpg"} alt="" />
        <img src={company?.profilePicture
              ? serverPublic + company?.profilePicture
              : serverPublic + "defaultCompanyProfile.png"} alt="" />
      </div>

      <div className="companyName">
        <span>{company?.name}</span>
      </div>
      <div className="companyStatus">
        <hr />
        <div>
          <div className="status">
            <span>{company?.employees.length}</span>
            <span>Employees</span>
          </div>
          <div className="status">
            <span>{company?.projects.length}</span>
            <span>Projects</span>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};
