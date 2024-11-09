import React from "react";

const Repo = () => {
  const [user, setUser] = useState({});
  const [userRepo, setUserRepo] = useState([]);
  const githubUsername = "3r4y";

  const fetchData = async () => {
    const userResponse = await fetch(
      `https://api.github.com/users/${githubUsername}`
    );
    const userData = await userResponse.json();
    setUser(userData);

    const repoResponse = await fetch(
      `https://api.github.com/users/${githubUsername}/repos`
    );
    const repoData = await repoResponse.json();
    const sortedRepos = repoData
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count);
    setUserRepo(sortedRepos);
  };
  return (
    <div>
      <h1 className="text-2xl text-white font-semibold mt-9">
        Featured Projects 🤗
      </h1>
      <p className="fp-paragraph">
        A collection of some side projects that have shipped recently.
      </p>
      <ul className="py-6 flex flex-col items-center justify-center">
        <div className="rounded-lg mt-2 max-h-md px-6 py-6 w-full backdrop-blur-md transition duration-300 bg-[#182b42]/30 hover:bg-[#182b42]/80">
          <a
            href={repo.html_url}
            className="relative block overflow-hidden rounded-lg p-4 sm:p-4 lg:py-px"
          >
            <div className="sm:flex sm:justify-between sm:gap-2 ">
              <div>
                <h3 className="text-lg font-bold text-white sm:text-xl">
                  Hello
                </h3>
                <p className="mt-1 text-xs font-medium text-gray-400">
                  By Devansh
                </p>
              </div>
              <div className="hidden sm:block sm:shrink-0">
                <img
                  src="./../Img/profilepic.jpg"
                  className="h-16 w-16 rounded-lg object-cover shadow-sm"
                />
              </div>
            </div>
            <div className="mt-1">
              <p className="max-w-[90ch] font-semibold text-sm text-gray-200">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
                error voluptate laborum?
              </p>
            </div>
            <dl className="mt-6 flex gap-4 sm:gap-6">
              <div className="flex flex-col">
                <dt className="text-sm font-semibold text-gray-400 flex items-center">
                  <FaStar className="mr-1 text-[#ffffff]" />
                  {repo.stargazers_count} Stars
                </dt>
                <dd className="text-sm mt-2 text-gray-400 font-semibold flex justify-center items-center">
                  <FaComments className="mr-1 text-[#ffffff]" />
                  {repo.open_issues_count} Issues
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-sm font-semibold text-gray-400 flex items-center">
                  <FaUserAlt className="mr-1 text-[#ffffff]" />
                  {repo.forks_count} Forks
                </dt>
              </div>
            </dl>
            {repo.language && (
              <div className="absolute bottom-0 right-0 text-sm mt-2 px-4 text-white font-semibold p-1 bg-[#05BFDB]/20 border border-[#05BFDB] rounded-xl flex justify-center items-center">
                {repo.language}
              </div>
            )}
          </a>
        </div>
        ))}
      </ul>
    </div>
  );
};

export default Repo;
