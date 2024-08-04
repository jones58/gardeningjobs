import { motion, AnimatePresence } from "framer-motion";
import ReactConfetti from "react-confetti";

const jobsites = [
  { name: "LinkedIn", website: "https://www.linkedin.com/jobs/" },
  {
    name: "Four Day Week",
    website: "https://fourdayweek.co.uk/find-a-job/",
  },
  { name: "NHS Jobs", website: "https://beta.jobs.nhs.uk/candidate" },
  { name: "Grad Jobs", website: "https://giveagradago.com/" },
  {
    name: "The Dots",
    website: "https://the-dots.com/jobs/search?",
  },
  {
    name: "Adzuna",
    website:
      "https://www.adzuna.co.uk/jobs/",
  },
  {
    name: "Arts Jobs",
    website: "https://www.artsjobs.org.uk/jobs",
  },
  { name: "Career Jet", website: "https://www.careerjet.co.uk/" },
  {
    name: "University Jobs",
    website:
      "https://www.jobs.ac.uk/search/",
  },
  { name: "Reed", website: "https://www.reed.co.uk/" },
  { name: "Monster", website: "https://www.monster.co.uk/" },
  {
    name: "Museums",
    website:
      "https://www.nationalmuseums.org.uk/jobs/?region=&organisation=&category=30&salary=",
  },
  {
    name: "Glassdoor",
    website: "https://www.glassdoor.co.uk/Job/index.htm",
  },
  {
    name: "Apprenticeships",
    website:
      "https://www.findapprenticeship.service.gov.uk/apprenticeshipsearch",
  },
  {
    name: "CV Library",
    website: "https://www.cv-library.co.uk/candidate/my-dashboard",
  },
  {
    name: "Charity Job",
    website: "https://www.charityjob.co.uk/jobs-in-london",
  },
  { name: "TFL", website: "https://tfl.gov.uk/corporate/careers/" },
  {
    name: "Escape The City",
    website:
      "https://www.escapethecity.org/search/jobs?
  },
  {
    name: "Landing Jobs",
    website:
      "https://landing.jobs/jobs?location=London%2C+United+Kingdom+of+Great+Britain+and+Northern+Ireland&city=London&lr=50&hd=false&t_co=false&t_st=false",
  },

  {
    name: "GetMyFirstJob",
    website: "https://www.getmyfirstjob.co.uk/",
  },
  {
    name: "Gradcracker",
    website: "https://www.gradcracker.com/",
  },
  {
    name: "NotGoingToUni",
    website: "https://notgoingtouni.co.uk/",
  },
  {
    name: "If You Could",
    website: "https://www.ifyoucouldjobs.com/",
  },
];

function Jobboards() {
  return (
    <AnimatePresence>
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-wrap justify-center">
          {jobsites.map((jobsite) => {
            if (localStorage.getItem(jobsite.name) === "visited") {
              return null;
            } else {
              return (
                <a
                  href={jobsite.website}
                  target="_blank"
                  rel="noreferrer"
                  key={jobsite.name}
                  className="m-2 inline-block"
                >
                  <button
                    onClick={() => {
                      localStorage.setItem(jobsite.name, "visited");
                      window.location.reload(false);
                    }}
                    className="rounded-lg bg-pink-800 p-7 text-xl font-semibold text-slate-100 shadow-md hover:scale-105 hover:bg-pink-900"
                  >
                    {jobsite.name}
                  </button>
                </a>
              );
            }
          })}
        </div>
        {Object.keys(localStorage).length - 1 <
        jobsites.length ? null : (
          <div>
            <p className="text-4xl font-bold text-center">
              Completed! Come back tomorrow 🌿
            </p>
            <ReactConfetti colors={["#7b238a"]}></ReactConfetti>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default Jobboards;
