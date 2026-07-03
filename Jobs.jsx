import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobCard from "../components/JobCard";

export default function Jobs() {

  const jobs = [
    {
      id:1,
      title:"React Developer",
      company:"Google",
      location:"Bangalore",
      salary:"8 LPA",
      logo:"https://logo.clearbit.com/google.com"
    },

    {
      id:2,
      title:"Frontend Developer",
      company:"Microsoft",
      location:"Hyderabad",
      salary:"10 LPA",
      logo:"https://logo.clearbit.com/microsoft.com"
    },

    {
      id:3,
      title:"UI UX Designer",
      company:"Adobe",
      location:"Chennai",
      salary:"7 LPA",
      logo:"https://logo.clearbit.com/adobe.com"
    },

    {
      id:4,
      title:"Full Stack Developer",
      company:"Amazon",
      location:"Pune",
      salary:"12 LPA",
      logo:"https://logo.clearbit.com/amazon.com"
    },
    {
        id:5,
        title:"Backend Developer",
        company:"Facebook",
        location:"Mumbai",
        salary:"9 LPA",
        logo:"https://logo.clearbit.com/facebook.com"
    },
    {
        id:6,
        title:"DevOps Engineer",
        company:"Netflix",
        location:"Bangalore",
        salary:"11 LPA",
        logo:"https://logo.clearbit.com/netflix.com"    
    },
    {
        id:7,
        title:"Data Scientist",
        company:"IBM",
        location:"Chennai", 
         salary:"13 LPA",
        logo:"https://logo.clearbit.com/ibm.com"
    },
    {
        id:8,
        title:"Mobile App Developer",
        company:"Apple",
        location:"Pune",
        salary:"10 LPA",
        logo:"https://logo.clearbit.com/apple.com"      
    }
  ];

  return (
    <>
      <Navbar />

      <div className="page">

        <div className="jobs-header">

          <h1 className="gradient-text">
            Discover Dream Jobs
          </h1>

          <input
            type="text"
            placeholder="Search jobs..."
          />

        </div>

        <div className="jobs-grid">

          {jobs.map((job)=>(
            <JobCard
              key={job.id}
              job={job}
            />
          ))}

        </div>

      </div>

      <Footer />
    </>
  );
}