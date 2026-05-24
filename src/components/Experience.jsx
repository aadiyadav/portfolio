export default function Experience() {
  return (
    <div className="bg-back h-full text-white flex justify-center">
      <div className="lg:w-8/12 sm:px-16 px-4 py-10">
        <div className="md:text-4xl text-3xl font-bold my-4 mx-2 font-heading">Work Experience</div>
        <div className="flex items-center justify-center m-4 font-body">
          <div className="relative border rounded-md w-full h-auto my-4 group overflow-hidden bg-neutral-900 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
            <div className="opacity-100 group-hover:opacity-0 transition-opacity duration-500 flex md:flex-row flex-col items-center justify-center gap-14 absolute w-full h-full">
              <img
                src={"/assets/experience-logos/abould.png"}
                alt="Abould Logo"
                className="md:w-60 object-contain flex-shrink-0"
              />
              <div className="text-center md:text-left font-heading">
                <div className="text-lg sm:text-xl font-bold mb-1">
                  Full Stack Developer Intern
                </div>
                <div className="text-base sm:text-lg">
                  Abould
                </div>
              </div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 text-justify">
              <div className="text-lg sm:text-xl font-bold">
                Full Stack Developer Intern
              </div>
              <div className="flex md:flex-row flex-col md:items-center justify-between mb-2 gap-x-4 gap-y-1">
                <div className="text-base sm:text-lg">
                  Abould
                </div>
                <div className="text-xs sm:text-sm">
                  February 2026 – Present
                </div>
              </div>
              <div className="font-body text-sm sm:text-base">
                • Spearheaded the end-to-end development of a multi-role enterprise platform from scratch using the MERN stack, delivering a scalable MVC architecture that sustained 100% uptime across a 1-month development phase and 2-month maintenance lifecycle.
              </div>
              <div className="font-body text-sm sm:text-base mt-1">
                • Provisioned cloud infrastructure via Hostinger VPS, load balancers, and SSL certifications, reducing security risks by 95%; cut database latency by 40% and minimized server-side overhead by implementing ACID-compliant transactions, backend pagination, and optimized query indexing.
              </div>
              <div className="font-body text-sm sm:text-base mt-1">
                • Rescued a business-critical legacy project under tight deadlines, independently building a React/Firebase Admin Portal that restored 100% functionality; integrated Twilio SendGrid RESTful APIs for asynchronous alerts and engineered a backend module reducing PDF invoice generation time by 50%.
              </div>
              <div className="font-body text-sm sm:text-base mt-1">
                • Orchestrated the technical recruitment pipeline by screening 300+ resumes via Indeed, conducting 75+ technical and code-review interviews; simultaneously managed end-to-end manual testing to achieve 100% bug-free production.
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center m-4 font-body">
          <div className="relative border rounded-md w-full h-auto my-4 group overflow-hidden bg-neutral-900 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
            <div className="opacity-100 group-hover:opacity-0 transition-opacity duration-500 flex md:flex-row flex-col items-center justify-center gap-10 absolute w-full h-full">
              <img
                src={"/assets/experience-logos/DRDO.png"}
                alt="DRDO Logo"
                className="rounded-[90px] md:w-36 w-28 object-contain flex-shrink-0"
              />
              <div className="text-center md:text-left font-heading">
                <div className="text-lg sm:text-xl font-bold mb-1">
                  Research Intern
                </div>
                <div className="text-base sm:text-lg">
                  Defence Research and Development Organisation (DRDO)
                </div>
              </div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 text-justify">
              <div className="text-lg sm:text-xl font-bold mb-1">
                Research Intern
              </div>
              <div className="flex md:flex-row flex-col md:items-center justify-between mb-2 gap-x-4 gap-y-1">
                <div className="text-base sm:text-lg">
                  Defence Research and Development Organisation (DRDO)
                </div>
                <div className="text-xs sm:text-sm">
                  May 2024 – August 2024
                </div>
              </div>
              <div className="font-body text-sm sm:text-base">
                • Applied advanced computer science principles to evaluate 100+ research papers on AI Problem Solvability Assessment, culminating in a novel algorithmic framework for problem classification.
              </div>
              <div className="font-body text-sm sm:text-base mt-1">
                • Authored and submitted comprehensive research paper to 2nd IC2SDT 2025 conference (NIT Delhi).
              </div>
            </div>
          </div>
        </div>
        <div className="md:text-4xl text-3xl font-bold mt-12 mx-2 flex font-heading">
          Position of Responsibilities
        </div>
        <div className="flex items-center justify-center gap-16 my-10 flex-wrap font-body">
          <div className="relative border rounded-md p-4 sm:w-96 w-72 sm:h-96 sm:min-h-max min-h-80 group overflow-hidden bg-neutral-900 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
            <img
              src="/assets/experience-logos/IGTS.png"
              alt="IGTS Logo"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-500 z-0"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10">
              <div className="text-lg sm:text-xl font-bold mb-1">President</div>
              <div className="text-base sm:text-lg mb-1">
                Indian Game Theory Society
              </div>
              <div className="text-xs sm:text-sm mb-3">May 2023 - August 2025</div>
              <div className="font-body text-sm sm:text-base text-justify">
                I contributed across 4 departments to design games for
                inter-college events and co-hosted flagship events at IIT Delhi,
                NSUTTHON, Moksha, and Avinya, reaching 200+ participants. <br />
                I conducted multiple SIG sessions and academic workshops,
                effectively transferring game theory knowledge to 100+ peers
                while developing strong leadership and mentorship skills.
              </div>
            </div>
          </div>
          <div className="relative border rounded-md p-4 sm:w-96 w-72 sm:h-96 sm:min-h-max min-h-[60vh] group overflow-hidden bg-neutral-900 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
            <img
              src="/assets/experience-logos/Venatus.png"
              alt="Venatus Logo"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-500 z-0"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10">
              <div className="text-lg sm:text-xl font-bold mb-1">
                Director - Tech and EM Department
              </div>
              <div className="text-base sm:text-lg mb-1">
                Venatus - The Gaming Society of NSUT
              </div>
              <div className="text-xs sm:text-sm mb-3">June 2023 - August 2025</div>
              <div className="font-body text-sm sm:text-base text-justify">
                I moderated online scrims and tournaments across flagship events
                (NSUTTHON, Moksha, Avinya, InterSoc Sports, GCL), ensuring fair
                play for participants. I trained and mentored junior members in
                tournament moderation techniques and contributed to society
                website development, improving overall event management
                efficiency and boosting user engagement as well as developing
                strong organizational and management skills.
              </div>
            </div>
          </div>
          <div className="relative border rounded-md p-4 sm:w-96 w-72 sm:h-96 sm:min-h-max min-h-96 group overflow-hidden bg-neutral-900 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
            <img
              src="/assets/experience-logos/Devcomm.jpeg"
              alt="Devcomm Logo"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-500 z-0"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10">
              <div className="text-lg sm:text-xl font-bold mb-1">
                Junior Council Member
              </div>
              <div className="text-base sm:text-lg mb-1">
                Devcomm - Tech Society
              </div>
              <div className="text-xs sm:text-sm mb-3">June 2023 - August 2025</div>
              <div className="font-body text-sm sm:text-base text-justify">
                I actively collaborated on 5+ group projects across diverse
                fields, contributing to the development of notable platforms
                including AVINYA website (NSUT&apos;s Tech Fest) and DSAx (a
                coding platform currently under development). These
                collaborative experiences enhanced my teamwork abilities and
                exposed me to various development environments while working
                with cross-functional teams on impactful projects.
              </div>
            </div>
          </div>
          <div className="relative border rounded-md p-6 sm:w-96 w-72 sm:h-96 sm:min-h-max min-h-96 group overflow-hidden bg-neutral-900 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
            <img
              src="/assets/experience-logos/Junoon East.png"
              alt="Junoon East Logo"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-500 z-0"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10">
              <div className="text-lg sm:text-xl font-bold mb-1">President</div>
              <div className="text-base sm:text-lg mb-1">
                Junoon East - Photography Society
              </div>
              <div className="text-xs sm:text-sm mb-3">June 2023 - November 2025</div>
              <div className="font-body text-sm sm:text-base text-justify">
                As the sole photographer and videographer for NSUT East Campus,
                I documented all campus events including major celebrations like
                Farewell 2023, Freshers 2023, and Diwali Celebration 2023, along
                with numerous smaller events and competitions. This role
                required independent management of end-to-end visual coverage,
                developing strong time management and creative skills while
                ensuring high-quality documentation of campus activities.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
